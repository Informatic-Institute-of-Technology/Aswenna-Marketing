import { useEffect, useState } from 'react';
import logoImage from '../assets/Company/AswennaLogo.png';
import backgroundImage from '../assets/Splash/SplashBackground.jpg';
import './SplashScreen.css';

const SplashScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
        const duration = 7000;
        const intervalTime = 50;
        const increment = (100 / duration) * intervalTime;

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + increment;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        if (onLoadingComplete) {
                            onLoadingComplete();
                        }
                    }, 200);
                    return 100;
                }
                return newProgress;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div className={`splash-container ${isVisible ? 'visible' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay"></div>
            <div className="splash-content">
                <div className="logo-container">
                    <img
                        src={logoImage}
                        alt="Aswenna Logo"
                        className="splash-image"
                    />
                    <h2 className="app-type">Marketing Platform</h2>
                </div>
            </div>

            <div className="bottom-curve">
                <svg className="curve-shape" viewBox="0 0 1440 600" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="splashGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#0a2f18', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#0c351b', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#0d3a1d', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path fill="url(#splashGreenGradient)" d="M0,600 Q720,0 1440,600 L1440,600 L0,600 Z"></path>
                </svg>

                <div className="bottom-content">
                    <h1 className="splash-title">අස්වැන්න</h1>
                    <p className="splash-subtitle">අස්වැන්න - තිරසර ගොවිතැනට</p>

                    <div className="loading-bar-container">
                        <div
                            className="loading-bar"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <p className="powered-by">Powered By Aswenna</p>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;