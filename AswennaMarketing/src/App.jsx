import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/about';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;