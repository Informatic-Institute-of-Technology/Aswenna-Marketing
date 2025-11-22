import { useTranslation } from 'react-i18next';
import heroImage from '../assets/Hero/main.png';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="hero-section position-relative overflow-hidden">
            <img
                src={heroImage}
                alt="Farming - Sustainable Agriculture"
                className="hero-image position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 1 }}
            />

            <div
                className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 2 }}
            ></div>

            <div className="hero-text-container" style={{ zIndex: 3 }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8 text-center hero-content px-3">
                            <h1 className="hero-title mb-4" data-aos="fade-up" data-aos-delay="200">
                                {t('hero.title')}
                            </h1>
                            <p className="hero-subtitle mb-4" data-aos="fade-up" data-aos-delay="400">
                                {t('hero.subtitle')}
                            </p>
                            <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="600">
                                <div className="ai-powered-badge">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                        <rect x="9" y="9" width="6" height="6" rx="1"></rect>
                                        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"></path>
                                    </svg>
                                    <span>AI Powered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;