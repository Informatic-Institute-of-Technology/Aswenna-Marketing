import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'si', name: 'සිංහල', nativeName: 'Sinhala' },
    { code: 'ta', name: 'தமிழ்', nativeName: 'Tamil' },
    { code: 'en', name: 'English', nativeName: 'English' },
  ];

  return (
    <div className="relative inline-block text-left group">
      <button
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green transition-colors"
        aria-label={t('common.language')}
      >
        <Globe className="w-5 h-5" />
        <span className="hidden sm:inline">
          {languages.find((l) => l.code === i18n.language)?.name || 'English'}
        </span>
      </button>
      <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
        <div className="py-1" role="menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                i18n.language === lang.code ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700'
              }`}
              role="menuitem"
            >
              <span className="block font-medium">{lang.name}</span>
              <span className="block text-xs text-gray-500">{lang.nativeName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
