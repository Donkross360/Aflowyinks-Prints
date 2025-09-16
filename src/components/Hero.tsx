import { ArrowRight, Award, Clock, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/2348132580308?text=Hi%20Aflowyinks%20Prints!%20I%27d%20like%20to%20get%20a%20quote%20for%20printing%20services.', '_blank');
  };

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Premium Prints.
                <span className="text-coral-500 block">On Time.</span>
                <span className="text-mint-500">Every Time.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                From business cards to billboards—Aflowyinks delivers color-accurate prints with fast turnaround.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center text-slate-600">
                <Award className="w-4 h-4 text-mint-500 mr-2" />
                Color-managed
              </div>
              <div className="flex items-center text-slate-600">
                <Zap className="w-4 h-4 text-coral-500 mr-2" />
                Durable materials
              </div>
              <div className="flex items-center text-slate-600">
                <Clock className="w-4 h-4 text-mint-500 mr-2" />
                Transparent pricing
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('quote')}
                className="flex items-center justify-center px-8 py-4 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Instant Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={handleWhatsApp}
                className="flex items-center justify-center px-8 py-4 bg-white text-slate-700 rounded-xl border-2 border-slate-200 hover:border-mint-500 hover:text-mint-600 transition-all duration-300 transform hover:scale-105"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-coral-500">500+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mint-500">24h</div>
                <div className="text-sm text-slate-600">Average Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-700">99%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gradient-to-br from-coral-500 to-coral-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Business Cards</span>
                </div>
                <div className="h-32 bg-gradient-to-br from-mint-500 to-mint-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Flyers</span>
                </div>
                <div className="h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Banners</span>
                </div>
                <div className="h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Packaging</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-mint-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-coral-500 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;