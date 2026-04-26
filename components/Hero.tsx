import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Car Wash Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:w-2/3 lg:w-1/2">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1 mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-blue-100 text-sm font-medium">Rated #1 Detailing Service</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Ultimate Shine</span> for Your Vehicle
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Professional car wash and detailing services delivered with precision. 
            From express washes to ceramic coatings, we bring out the best in your car.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#book" 
              className="inline-flex justify-center items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-blue-600/30"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#services" 
              className="inline-flex justify-center items-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 font-semibold rounded-lg transition-all"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-slate-400">
            <div>
              <p className="text-3xl font-bold text-white">5k+</p>
              <p className="text-sm">Cars Washed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">1200+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9</p>
              <p className="text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
