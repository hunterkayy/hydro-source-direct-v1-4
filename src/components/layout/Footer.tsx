
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom mx-auto">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="text-center mb-12">
            {/* Large Logo */}
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/2855fce6-7761-4921-bb50-12299acd7217.png" 
                alt="HydroSource Direct Logo" 
                className="h-20 md:h-24 brightness-0 invert mx-auto hover:scale-105 transition-transform duration-300" 
              />
            </Link>
            
            {/* Company Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              HydroSource Direct provides premium water treatment solutions for homes and businesses, ensuring clean, pure water for healthier living.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
              <a href="tel:+18001234567" className="flex items-center text-gray-300 hover:text-white transition-custom group">
                <div className="w-12 h-12 bg-hsd-blue-light rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-medium">1-800-123-4567</span>
              </a>
              
              <a href="mailto:info@hydrosourcedirect.com" className="flex items-center text-gray-300 hover:text-white transition-custom group">
                <div className="w-12 h-12 bg-hsd-blue-light rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-medium">info@hydrosourcedirect.com</span>
              </a>
            </div>
            
            {/* Social Media */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-hsd-blue-light transition-all duration-300 group">
                <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-hsd-blue-light transition-all duration-300 group">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-hsd-blue-light transition-all duration-300 group">
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-hsd-blue-light transition-all duration-300 group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} HydroSource Direct. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-custom">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-sm text-gray-400 hover:text-white transition-custom">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-400 hover:text-white transition-custom">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
