import { useEffect, useRef, useState } from 'react';
import logoImage from '../assets/Company/AswennaLogo.png';
import infoBackground from '../assets/Splash/InfoBackground.jpg';
import Testimonials from '../Components/Testimonials';
import './InfoPage.css';

const InfoPage = ({ onContinue }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [language, setLanguage] = useState('si'); // 'si' for Sinhala, 'en' for English
    const [userInteracted, setUserInteracted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const autoSlideTimer = useRef(null);

    const benefitsSi = [
        {
            title: "Aswenna ඔබට ලබාදෙන අවශ්‍ය සහය",
            description: "ගොවීන්, ඉඩම් හිමියන් සහ ආයෝජකයින් එකමුතුවකට සම්බන්ධ කරයි. Aswenna වේදිකාව ඔස්සේ ඔබට ඔබේ ව්‍යාපෘතිය සඳහා සුදුසුම හවුල්කරුවන් හමුවීමට, තොරතුරු හුවමාරු කර ගැනීමට සහ එක්ව සාර්ථකත්වය කරා යාමට අවස්ථාව ලැබේ.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "ඉඩම් / වගාවන් සඳහා විශ්වාස කළ හැකි තොරතුරු",
            description: "Aswenna ප්‍රවේශම් කළමනාකරණ දත්ත මත පදනම් වූ නිවැරදි තොරතුරු ලබාදෙයි. ඔබේ ඉඩමේ තත්ත්වය, පස් විශ්ලේෂණ, කාලගුණ තොරතුරු සහ වගා කළමනාකරණ දත්ත පිළිබඳ විශ්වාසනීය තොරතුරු සමඟ වඩාත් හොඳ තීරණ ගන්න.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="14 2 14 8 20 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="10 9 9 9 8 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "ආයෝජන අවස්ථා පහසුවෙන් සොයාගන්න",
            description: "අවශ්‍යයාට වගා යෝජනා, ඉඩම් පැතිකඩ, ආයෝජක සම්බන්ධතා කිහිප ක්ලික් මඟින්. ඔබේ අවශ්‍යතාවයට අනුකූල කෘෂිකාර්මික ව්‍යාපෘති හා ආයෝජන අවස්ථා සොයා ගැනීම සඳහා සරල හා ඵලදායී මෙවලම් භාවිතා කරන්න.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 6v6l4 2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.24 7.76a6 6 0 0 1-8.49 8.49" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                </svg>
            )
        },
        {
            title: "ඵලදායී වගාවට මඟ පෙන්වන්න",
            description: "ඔබගේ අස්වැන්න වැඩි කරගැනීමට උසස් තාක්ෂණික උපදෙස් සහ සැලසුම්. කෘෂි විශේෂඥයන්ගේ උපදෙස්, නවීන වගා ක්‍රම සහ තිරසර ගොවිතැන් ක්‍රමවේද ඔස්සේ ඔබේ ගොවිතැන වඩාත් ලාභදායී කරගන්න.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="2" fill="#4CAF50" />
                </svg>
            )
        }
    ];

    const benefitsEn = [
        {
            title: "Essential Support from Aswenna",
            description: "Connects farmers, landowners, and investors into a unified community. Through the Aswenna platform, you can meet the most suitable partners for your project, exchange information, and move towards success together.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Reliable Information for Lands & Crops",
            description: "Aswenna provides accurate information based on advanced management data. Make better decisions with reliable information about your land condition, soil analysis, weather data, and crop management information.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="14 2 14 8 20 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="10 9 9 9 8 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Find Investment Opportunities Easily",
            description: "Crop suggestions, land profiles, and investor connections with just a few clicks. Use simple and effective tools to find agricultural projects and investment opportunities tailored to your needs.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 6v6l4 2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.24 7.76a6 6 0 0 1-8.49 8.49" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                </svg>
            )
        },
        {
            title: "Guide to Productive Farming",
            description: "Advanced technical advice and planning to increase your harvest. Make your farming more profitable through expert agricultural guidance, modern farming methods, and sustainable farming practices.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="2" fill="#4CAF50" />
                </svg>
            )
        }
    ];

    const benefits = language === 'si' ? benefitsSi : benefitsEn;

    const toggleLanguage = () => {
        setLanguage(language === 'si' ? 'en' : 'si');
    };

    useEffect(() => {
        if (isPaused) {
            if (autoSlideTimer.current) {
                clearInterval(autoSlideTimer.current);
            }
            return;
        }

        const startAutoSlide = () => {
            if (autoSlideTimer.current) {
                clearInterval(autoSlideTimer.current);
            }

            autoSlideTimer.current = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    if (!userInteracted) {
                        return (prevIndex + 1) % benefits.length;
                    }
                    if (prevIndex >= benefits.length - 1) {
                        if (autoSlideTimer.current) {
                            clearInterval(autoSlideTimer.current);
                        }
                        return prevIndex;
                    }
                    return prevIndex + 1;
                });
            }, 5000);
        };

        startAutoSlide();

        return () => {
            if (autoSlideTimer.current) {
                clearInterval(autoSlideTimer.current);
            }
        };
    }, [benefits.length, userInteracted, isPaused]);

    const handleNext = () => {
        setUserInteracted(true);
        if (currentIndex < benefits.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            handleContinue();
        }
    };

    const handleSkip = () => {
        setUserInteracted(true);
        handleContinue();
    };

    const handleContinue = () => {
        if (onContinue) {
            onContinue();
        }
    };

    const handleSlideMouseEnter = () => {
        setIsPaused(true);
    };

    const handleSlideMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div className="info-page" style={{ backgroundImage: `url(${infoBackground})` }}>
            <div className="overlay"></div>

            <button
                className="info-language-toggle"
                onClick={toggleLanguage}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>{language === 'si' ? 'EN' : 'සිං'}</span>
            </button>

            <div className="info-header"></div>

            <div className="logo-wrapper">
                <img src={logoImage} alt="Aswenna Logo" className="info-logo" />
            </div>

            <div className="info-curved-section">
                <svg className="info-curve-shape" viewBox="0 0 1440 600" preserveAspectRatio="none">
                    <path fill="#0b3319" d="M0,600 Q720,0 1440,600 L1440,600 L0,600 Z"></path>
                </svg>
            </div>

            <div className="green-extension"></div>

            <div className="info-content-wrapper">
                <div className="info-content">
                    <div className="info-title-section">
                        <h1 className="info-main-title">
                            ඔබේ ගොවිතැන / ඉඩම් / ආයෝජන අවස්ථා
                        </h1>
                        <h2 className="info-sub-title">
                            (Aswenna සමඟ සාර්ථක ගමනක්)
                        </h2>
                        <p className="info-description">
                            - Aswenna ඔබට ලබාදෙන ප්‍රමුඛ ප්‍රයෝජන -
                        </p>
                    </div>

                    <div
                        className="benefits-slider"
                        onMouseEnter={handleSlideMouseEnter}
                        onMouseLeave={handleSlideMouseLeave}
                        onTouchStart={handleSlideMouseEnter}
                        onTouchEnd={handleSlideMouseLeave}
                    >
                        <div className="benefit-slide" key={currentIndex}>
                            <div className="benefit-item-single">
                                <div className="benefit-icon">
                                    {benefits[currentIndex].icon}
                                </div>
                                <div className="benefit-text">
                                    <h3 className="benefit-title-single">{benefits[currentIndex].title}</h3>
                                    <p className="benefit-description-single">{benefits[currentIndex].description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="progress-dots">
                            {benefits.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                ></span>
                            ))}
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="skip-button" onClick={handleSkip}>
                            {language === 'si' ? 'මුල් පිටුවට යන්න' : 'Skip to Home'}
                        </button>
                        <button className="next-button" onClick={handleNext}>
                            {currentIndex === benefits.length - 1 ? (language === 'si' ? 'ඉදිරියට යන්න' : 'Continue') : (language === 'si' ? 'ඊළඟ' : 'Next')}
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ position: 'absolute', top: '70%', left: 0, right: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'relative', pointerEvents: 'auto' }}>
                    <Testimonials />
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
