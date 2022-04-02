import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Home />}/>
          <Route to="/contact" element={<Contact />}/>
          <Route to="/about" element={<About />}/>
          <Route to="/products" element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
