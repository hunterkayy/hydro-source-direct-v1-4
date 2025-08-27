
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom mx-auto">
        <div className="py-4">
          {/* Main Footer Content */}
          <div className="flex items-center gap-8">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Link to="/" className="inline-block">
                <img 
                  src="/lovable-uploads/2855fce6-7761-4921-bb50-12299acd7217.png" 
                  alt="HydroSource Direct Logo" 
                  className="h-16 brightness-0 invert hover:scale-105 transition-transform duration-300" 
                />
              </Link>
            </div>
            
            {/* Content on the right */}
            <div className="flex-1 text-center">
              {/* Company Description */}
              <p className="text-base text-gray-300 mb-3 max-w-xl mx-auto">
                HydroSource Direct provides premium water treatment solutions for homes and businesses, ensuring clean, pure water for healthier living.
              </p>
              
              {/* Contact Information */}
              <div className="flex justify-center items-center gap-6">
                <a href="tel:+18001234567" className="flex items-center text-gray-300 hover:text-white transition-custom group">
                  <Phone className="h-5 w-5 mr-2 text-hsd-blue-light" />
                  <span className="font-medium">1-800-123-4567</span>
                </a>
                
                <a href="mailto:info@hydrosourcedirect.com" className="flex items-center text-gray-300 hover:text-white transition-custom group">
                  <Mail className="h-5 w-5 mr-2 text-hsd-blue-light" />
                  <span className="font-medium">info@hydrosourcedirect.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-3">
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
