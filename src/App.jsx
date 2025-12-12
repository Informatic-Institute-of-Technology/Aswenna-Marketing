import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/about';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import InfoPage from './Pages/InfoPage';
import Services from './Pages/Services';
import SplashScreen from './Pages/Splash';

function AppContent() {
  const { i18n } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('dark');

  const checkFirstVisit = () => {
    const visitData = localStorage.getItem('hasCompletedFirstVisit');
    if (!visitData) return false;

    try {
      const { value, timestamp } = JSON.parse(visitData);
      const now = new Date().getTime();
      const tenMinutes = 10 * 60 * 1000;

      if (now - timestamp > tenMinutes) {
        localStorage.removeItem('hasCompletedFirstVisit');
        return false;
      }
      return value === 'true';
    } catch {
      return visitData === 'true';
    }
  };

  const hasCompletedFirstVisit = checkFirstVisit();
  const [showSplash, setShowSplash] = useState(!hasCompletedFirstVisit);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 100
    });
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(currentTheme);
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cursorGradient = theme === 'dark'
    ? `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(92, 237, 18, 0.15), rgba(45, 62, 45, 0.18), rgba(0, 0, 0, 1))`
    : `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(92, 237, 18, 0.18), rgba(213, 237, 208, 0.25), rgba(248, 253, 245, 1))`;

  const handleLoadingComplete = () => {
    setShowSplash(false);
    setShowInfo(true);
  };

  const handleInfoComplete = () => {
    const visitData = {
      value: 'true',
      timestamp: new Date().getTime()
    };
    localStorage.setItem('hasCompletedFirstVisit', JSON.stringify(visitData));
    setShowInfo(false);
  };

  if (showSplash) {
    return <SplashScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (showInfo) {
    return <InfoPage onContinue={handleInfoComplete} />;
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Motion.div
        className="animated-background"
        animate={{
          background: cursorGradient
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Motion.div
        className="custom-cursor-label"
        animate={{
          x: mousePosition.x + 12,
          y: mousePosition.y - 64
        }}
        transition={{
          duration: 0.05,
          ease: "linear"
        }}
        style={{
          position: 'fixed',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
      >
        <div style={{
          background: '#228B22',
          color: '#ffffff',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '11px',
          fontWeight: '600',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(34, 139, 34, 0.4)'
        }}>
          Guest
        </div>
      </Motion.div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;