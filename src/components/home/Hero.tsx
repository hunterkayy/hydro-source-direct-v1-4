
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80" 
          alt="Pure flowing water" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10 pt-16">
        <div className="max-w-3xl">
          <span 
            className={`inline-block py-1 px-3 bg-hsd-blue-light/20 backdrop-blur-sm text-hsd-blue-light rounded-full font-medium text-sm mb-6 transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Premium Water Treatment Solutions
          </span>
          
          <h1 
            className={`text-white font-bold mb-6 leading-tight transform transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Pure Water, Healthy Living—
            <span className="text-gradient">HydroSource Direct</span> Delivers.
          </h1>
          
          <p 
            className={`text-gray-200 text-lg mb-8 max-w-2xl transform transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Experience the difference of professionally treated water in your home. Protect your family's health, extend the life of your appliances, and enjoy the peace of mind that comes with HydroSource Direct's premium water treatment solutions.
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link to="/find-solution" className="btn-primary">
              Find Your Solution
            </Link>
            <Link to="/contact" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
