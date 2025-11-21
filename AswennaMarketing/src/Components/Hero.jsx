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
                            <h1 className="hero-title mb-4">
                                {t('hero.title')}
                            </h1>
                            <p className="hero-subtitle">
                                {t('hero.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;