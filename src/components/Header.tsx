import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/2348132580308?text=Hi%20Aflowyinks%20Prints!%20I%27m%20interested%20in%20your%20printing%20services.', '_blank');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-800">
              <span className="text-coral-500">Aflow</span>yinks
              <span className="text-mint-500 ml-1">Prints</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors">
              Contact
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+2348132580308" className="flex items-center px-4 py-2 text-slate-600 hover:text-coral-500 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <button 
              onClick={handleWhatsApp}
              className="flex items-center px-6 py-2 bg-mint-500 text-white rounded-lg hover:bg-mint-600 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </button>
            <button 
              onClick={() => scrollToSection('quote')}
              className="px-6 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-coral-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors text-left">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-coral-500 font-medium transition-colors text-left">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;