import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';



import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Membership from './Pages/Membership';
import SuccessStory from './Pages/SuccessStory';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/success-stories" element={<SuccessStory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
