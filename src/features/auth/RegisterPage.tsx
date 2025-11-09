import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import type { UserRole } from '../../stores/authStore';
import { LanguageSwitcher } from '../../components/common/LanguageSwitcher';

const registerSchema = z.object({
  name: z.string().min(2, 'validation.required'),
  email: z.string().email('validation.emailInvalid'),
  password: z.string().min(8, 'validation.passwordMin'),
  confirmPassword: z.string(),
  role: z.enum(['farmer', 'landowner', 'sponsor']),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'validation.passwordMatch',
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const roles: { value: UserRole; label: string; icon: string }[] = [
    { value: 'farmer', label: t('auth.farmer'), icon: '🌾' },
    { value: 'landowner', label: t('auth.landowner'), icon: '🏞️' },
    { value: 'sponsor', label: t('auth.sponsor'), icon: '💰' },
  ];

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Register:', data);
      navigate('/auth/login');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
              A
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {t('auth.signUp')}
            </h1>
            <p className="text-gray-600">{t('auth.selectRole')}</p>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {roles.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => {
                  setSelectedRole(role.value);
                  setValue('role', role.value);
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedRole === role.value
                    ? 'border-green bg-green-50'
                    : 'border-gray-200 hover:border-green'
                }`}
              >
                <div className="text-3xl mb-2">{role.icon}</div>
                <div className="text-sm font-medium">{role.label}</div>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label={t('common.name') || 'Name'}
              {...register('name')}
              error={errors.name && t(errors.name.message as string)}
              placeholder="John Doe"
            />

            <Input
              label={t('common.email')}
              type="email"
              {...register('email')}
              error={errors.email && t(errors.email.message as string)}
              placeholder="user@example.com"
            />

            <Input
              label={t('common.password')}
              type="password"
              {...register('password')}
              error={errors.password && t(errors.password.message as string)}
              placeholder="••••••••"
            />

            <Input
              label={t('common.confirmPassword')}
              type="password"
              {...register('confirmPassword')}
              error={errors.confirmPassword && t(errors.confirmPassword.message as string)}
              placeholder="••••••••"
            />

            <input type="hidden" {...register('role')} />

            <Button
              type="submit"
              className="w-full"
              isLoading={isLoading}
              disabled={!selectedRole}
            >
              {t('auth.signUp')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {t('auth.hasAccount')}{' '}
              <Link to="/auth/login" className="text-green hover:text-green-dark font-medium">
                {t('auth.signIn')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
