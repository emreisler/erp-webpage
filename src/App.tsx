import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Capabilities from './components/Capabilities';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import "./App.css"

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Capabilities />
            <Pricing />
            <Contact />
        </div>
    );
};

export default App;