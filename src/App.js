import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import "./styles/index.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<News />}/>
                <Route path="/about" element={<About />}/>
                <Route path="*" element='erreur 404'/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;