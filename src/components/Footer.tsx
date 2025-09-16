import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-coral-400">Aflow</span>yinks
                <span className="text-mint-400 ml-1">Prints</span>
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Premium printing solutions for Lagos businesses and organizations. 
                Quality prints, fast turnaround, exceptional service.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-coral-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-coral-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-coral-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-slate-300 hover:text-coral-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-slate-300 hover:text-coral-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="text-slate-300 hover:text-coral-400 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-slate-300 hover:text-coral-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-slate-300 hover:text-coral-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li>Business Cards</li>
              <li>Flyers & Brochures</li>
              <li>Banners & Roll-ups</li>
              <li>Brand Merchandise</li>
              <li>Stickers & Labels</li>
              <li>Corporate Stationery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-coral-400 mt-1 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>16 Adetoun Close, College Road,</p>
                  <p>Ogba, Lagos, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mint-400 flex-shrink-0" />
                <a href="tel:+2348132580308" className="text-slate-300 hover:text-mint-400 transition-colors">
                  0813 258 0308
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@aflowyinksprints.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                  info@aflowyinksprints.com
                </a>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a 
                href="https://wa.me/2348132580308?text=Hi%20Aflowyinks%20Prints!%20I%27m%20interested%20in%20your%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 bg-mint-500 text-white rounded-lg hover:bg-mint-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Aflowyinks Prints. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-slate-400">Trusted by</span>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-slate-800 text-mint-400 rounded-full text-xs font-semibold">
                  LASG Approved
                </span>
                <span className="px-3 py-1 bg-slate-800 text-coral-400 rounded-full text-xs font-semibold">
                  Lagos Based
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;