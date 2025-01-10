import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Capabilities from './components/Capabilities';
import Pricing from './components/Pricing';
import DemoVideo from './components/DemoVideo';
import Footer from './components/Footer';
import "./App.css"

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Capabilities />
            <Pricing />
            <DemoVideo />
            <Footer />
        </div>
    );
};

export default App;