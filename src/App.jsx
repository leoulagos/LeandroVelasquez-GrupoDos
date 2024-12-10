import './App.css'
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />  
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </Router>
  );
}

export default App;
