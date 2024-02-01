import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => {
    return (
        <div>
            <Header />
            {/* Other components or content */}
            <main className="main">
                <Home />
            </main>
        </div>
    );
}

export default App;
