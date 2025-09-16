import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const currentPage = window.location.pathname;
    let message = "Hi Aflowyinks Prints! I'm interested in your printing services.";
    
    if (currentPage.includes('services')) {
      message = "Hi! I'd like to know more about your printing services and get a quote.";
    } else if (currentPage.includes('portfolio')) {
      message = "Hello! I saw your portfolio and would like to discuss a similar project.";
    } else if (currentPage.includes('about')) {
      message = "Hi! I read about your company and would like to work with you on a printing project.";
    }
    
    window.open(`https://wa.me/2348132580308?text=${encodeURIComponent(message)}`, '_blank');
    setIsExpanded(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl mb-4 p-6 max-w-sm animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="font-bold text-slate-900">Need help with printing?</h4>
              <p className="text-slate-600 text-sm">Chat with us on WhatsApp!</p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2 text-sm text-slate-600 mb-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-mint-500 rounded-full mr-2"></div>
              <span>Get instant quotes</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-coral-500 rounded-full mr-2"></div>
              <span>Upload files easily</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Fast response time</span>
            </div>
          </div>
          
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center px-4 py-3 bg-mint-500 text-white rounded-xl hover:bg-mint-600 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Start Chat
          </button>
        </div>
      )}
      
      <div className="flex items-end space-x-3">
        <button
          onClick={handleClose}
          className={`w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-all duration-300 ${
            isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <X className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => isExpanded ? handleWhatsApp() : setIsExpanded(true)}
          className="relative w-14 h-14 bg-mint-500 text-white rounded-full flex items-center justify-center hover:bg-mint-600 transition-all duration-300 transform hover:scale-110 shadow-lg animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-coral-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">!</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;