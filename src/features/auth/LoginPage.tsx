import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { useAuthStore } from '../../stores/authStore';
import { LanguageSwitcher } from '../../components/common/LanguageSwitcher';

const loginSchema = z.object({
  email: z.string().email('validation.emailInvalid'),
  password: z.string().min(8, 'validation.passwordMin'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock login - replace with actual authentication
      login(
        {
          id: '1',
          email: data.email,
          name: 'User Name',
          role: 'farmer', // This should come from the API
        },
        'mock-token'
      );
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
              A
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {t('auth.signIn')}
            </h1>
            <p className="text-gray-600">{t('common.welcome')}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green border-gray-300 rounded focus:ring-green"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {t('auth.rememberMe')}
                </span>
              </label>
              <Link
                to="/auth/forgot-password"
                className="text-sm text-green hover:text-green-dark"
              >
                {t('auth.forgotPassword')}
              </Link>
            </div>

            <Button type="submit" className="w-full" isLoading={isLoading}>
              {t('auth.signIn')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {t('auth.noAccount')}{' '}
              <Link to="/auth/register" className="text-green hover:text-green-dark font-medium">
                {t('auth.signUp')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
