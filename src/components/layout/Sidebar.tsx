import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  FolderKanban, 
  Settings, 
  LogOut,
  Network,
  Sprout,
  MapPin,
  DollarSign
} from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { useUIStore } from '../../stores/uiStore';
import clsx from 'clsx';

export function Sidebar() {
  const { t } = useTranslation();
  const { user, logout } = useAuthStore();
  const { sidebarOpen, setSidebarOpen } = useUIStore();

  const getNavItems = () => {
    const common = [
      { icon: Home, label: t('nav.dashboard'), path: '/dashboard' },
      { icon: FolderKanban, label: t('nav.projects'), path: '/projects' },
      { icon: Network, label: t('nav.elink'), path: '/elink' },
    ];

    const roleSpecific = {
      farmer: [
        { icon: Sprout, label: t('farmer.myCrops'), path: '/crops' },
        { icon: MapPin, label: t('farmer.myLand'), path: '/land' },
      ],
      landowner: [
        { icon: MapPin, label: t('landowner.myPlots'), path: '/plots' },
      ],
      sponsor: [
        { icon: DollarSign, label: t('sponsor.myPledges'), path: '/pledges' },
      ],
    };

    return [
      ...common,
      ...(user?.role ? roleSpecific[user.role] : []),
    ];
  };

  const navItems = getNavItems();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transition-transform duration-300 w-64',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">{t('common.appName')}</h2>
              <p className="text-xs text-gray-500 capitalize">{user?.role || 'Guest'}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors',
                    isActive
                      ? 'bg-green text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-3 py-4 border-t border-gray-200">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors',
                  isActive
                    ? 'bg-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )
              }
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">{t('nav.settings')}</span>
            </NavLink>
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">{t('common.logout')}</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
