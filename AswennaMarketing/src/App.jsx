import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/about';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';

function AppContent() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
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