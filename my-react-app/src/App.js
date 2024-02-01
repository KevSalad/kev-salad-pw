import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

const App = () => {
    return (
        <div>
            <Header />
            {/* Other components or content */}
            <main className="main">
                <Home />
                <About />
            </main>
        </div>
    );
}

export default App;
