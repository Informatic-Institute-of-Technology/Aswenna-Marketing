import { useTranslation } from 'react-i18next';
import { Bell, Menu, User } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { useUIStore } from '../../stores/uiStore';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  const { user } = useAuthStore();
  const { toggleSidebar } = useUIStore();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
              {t('common.appName')}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />
          
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
            aria-label={t('nav.notifications')}
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role || 'Guest'}</p>
            </div>
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={t('nav.profile')}
            >
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
