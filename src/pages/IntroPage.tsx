import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/common/Button';
import { useUIStore } from '../stores/uiStore';

export function IntroPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { introVideoPlayed, markIntroVideoPlayed } = useUIStore();

  useEffect(() => {
    if (introVideoPlayed) {
      navigate('/auth/login');
    }
  }, [introVideoPlayed, navigate]);

  const handleGetStarted = () => {
    markIntroVideoPlayed();
    navigate('/auth/login');
  };

  const handleSkip = () => {
    markIntroVideoPlayed();
    navigate('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block">
            <div className="w-24 h-24 bg-green rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 mx-auto">
              A
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('common.appName')}
          </h1>
          <p className="text-xl md:text-2xl text-green font-semibold mb-2">
            {t('intro.title')}
          </p>
          <p className="text-lg text-gray-600">
            {t('intro.subtitle')}
          </p>
        </div>

        {/* Video placeholder - in production, replace with actual video */}
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-8 aspect-video flex items-center justify-center">
          <div className="text-center text-white p-8">
            <svg
              className="w-24 h-24 mx-auto mb-4 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-lg">{t('intro.description')}</p>
            <p className="text-sm mt-2 opacity-75">
              (Video: Introduction to Aswenna Platform)
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={handleGetStarted} className="px-8">
            {t('intro.getStarted')}
          </Button>
          <Button size="lg" variant="outline" onClick={handleSkip} className="px-8">
            {t('intro.skipIntro')}
          </Button>
        </div>
      </div>
    </div>
  );
}
