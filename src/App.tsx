import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import QuoteSection from './components/QuoteSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <QuoteSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppWidget />
    </div>
  );
}

export default App;