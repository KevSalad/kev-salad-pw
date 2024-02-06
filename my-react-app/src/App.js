import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {
    return (
        <div>
            <Header />
            {/* Other components or content */}
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
            </main>
        </div>
    );
}

export default App;
