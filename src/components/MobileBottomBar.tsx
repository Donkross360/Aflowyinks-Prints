import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

const MobileBottomBar = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/2348132580308?text=Hi%20Aflowyinks%20Prints!%20I%27d%20like%20to%20discuss%20a%20printing%20project.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+2348132580308';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-40 md:hidden">
      <div className="grid grid-cols-3 gap-1">
        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center py-3 px-4 text-slate-600 hover:text-coral-500 hover:bg-coral-50 transition-all duration-200"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Call</span>
        </button>
        
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-3 px-4 text-white bg-mint-500 hover:bg-mint-600 transition-all duration-200"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </button>
        
        <button
          onClick={scrollToQuote}
          className="flex flex-col items-center justify-center py-3 px-4 text-slate-600 hover:text-coral-500 hover:bg-coral-50 transition-all duration-200"
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Quote</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomBar;