import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from "./Pages/about";
import Contact from "./Pages/Contact";
import Index from "./Pages/index";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
