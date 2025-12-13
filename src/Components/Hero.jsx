import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const heroImages = [
        'https://img.freepik.com/free-photo/view-woman-working-agricultural-sector-celebrate-labour-day-women_23-2151252093.jpg?t=st=1765531495~exp=1765535095~hmac=555caebd3940152ba8915f9ac0d49c8085b78131696c8718d1949fff89e5707e&w=1480',
        'https://img.freepik.com/free-photo/truck-working-field-sunny-day_23-2151976946.jpg?t=st=1765531505~exp=1765535105~hmac=1a762aa4464a55f10fd78f6a78ce85835052f4d3a68293f8da3f69bce3d15a42&w=1480',
        'https://img.freepik.com/free-photo/harvesting-coffee-farmers-gathering-beans_23-2151983623.jpg?t=st=1765531670~exp=1765535270~hmac=42bff96715a225731f7a1f8d2b5888d4dde93b47778dfcf6b7c13025a243965c&w=1480',
        'https://img.freepik.com/premium-photo/rear-view-woman-standing-against-trees_1048944-7396775.jpg?w=1480',
        'https://img.freepik.com/free-photo/african-man-harvesting-vegetables_23-2151441190.jpg?t=st=1765532399~exp=1765535999~hmac=7922d0c49d78605c29b010f54af3b5256e177598f7c8f3eec717422dc4d4e515&w=1480'
    ];

    useEffect(() => {
        if (isPaused || isTransitioning) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);
            const nextIndex = (currentImageIndex + 1) % heroImages.length;
            setNextImageIndex(nextIndex);

            setTimeout(() => {
                setCurrentImageIndex(nextIndex);
                setIsTransitioning(false);
            }, 100);
        }, 4000);

        return () => clearInterval(interval);
    }, [heroImages.length, isPaused, currentImageIndex, isTransitioning]);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 8000);
    };

    return (
        <div className="hero-section position-relative overflow-hidden">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`hero-image-wrapper position-absolute top-0 start-0 w-100 h-100 ${index === currentImageIndex ? 'active' : ''
                        } ${index === nextImageIndex && isTransitioning ? 'next' : ''}`}
                    style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
                >
                    <img
                        src={image}
                        alt={`Farming - Sustainable Agriculture ${index + 1}`}
                        className="hero-image w-100 h-100"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div className="hero-image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                </div>
            ))}

            <div
                className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', zIndex: 2 }}
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
                            <div className="d-flex flex-column justify-content-center align-items-center gap-3" data-aos="fade-up" data-aos-delay="600">
                                <div className="ai-powered-badge">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="gemini-logo">
                                        <defs>
                                            <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" className="stop1">
                                                    <animate attributeName="stop-color" values="#4285f4;#9b72cb;#d96570;#f4b400;#0f9d58;#4285f4" dur="4s" repeatCount="indefinite" />
                                                </stop>
                                                <stop offset="50%" className="stop2">
                                                    <animate attributeName="stop-color" values="#9b72cb;#d96570;#f4b400;#0f9d58;#4285f4;#9b72cb" dur="4s" repeatCount="indefinite" />
                                                </stop>
                                                <stop offset="100%" className="stop3">
                                                    <animate attributeName="stop-color" values="#d96570;#f4b400;#0f9d58;#4285f4;#9b72cb;#d96570" dur="4s" repeatCount="indefinite" />
                                                </stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#gemini-gradient)" />
                                    </svg>
                                    <span>AI Powered</span>
                                </div>
                                <div className="launching-soon-badge" style={{ marginBottom: '1rem' }}>
                                    <span>🚀 Launching Soon - Get in Touch</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-dots-container" style={{ zIndex: 4 }}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <span
                        key={index}
                        className={index === currentImageIndex ? 'hero-dot-active' : 'hero-dot-inactive'}
                        onClick={() => handleDotClick(index)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => e.key === 'Enter' && handleDotClick(index)}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;