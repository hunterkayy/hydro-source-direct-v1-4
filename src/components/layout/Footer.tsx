
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/2855fce6-7761-4921-bb50-12299acd7217.png" 
                alt="HydroSource Direct Logo" 
                className="h-12 brightness-0 invert" 
              />
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              HydroSource Direct provides premium water treatment solutions for homes and businesses, ensuring clean, pure water for healthier living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-custom">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-custom">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-custom">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-custom">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-custom">Home</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-white transition-custom">Solutions</Link>
              </li>
              <li>
                <Link to="/why-water-quality" className="text-gray-300 hover:text-white transition-custom">Why Water Quality?</Link>
              </li>
              <li>
                <Link to="/find-solution" className="text-gray-300 hover:text-white transition-custom">Find Your Solution</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-custom">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/water-softeners" className="text-gray-300 hover:text-white transition-custom">Water Softeners</Link>
              </li>
              <li>
                <Link to="/solutions/iron-filters" className="text-gray-300 hover:text-white transition-custom">Iron Filters</Link>
              </li>
              <li>
                <Link to="/solutions/reverse-osmosis" className="text-gray-300 hover:text-white transition-custom">Reverse Osmosis</Link>
              </li>
              <li>
                <Link to="/solutions/uv-systems" className="text-gray-300 hover:text-white transition-custom">UV Systems</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-white transition-custom">All Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-hsd-blue-light" />
                <a href="tel:+18001234567" className="text-gray-300 hover:text-white transition-custom">1-800-123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-hsd-blue-light" />
                <a href="mailto:info@hydrosourcedirect.com" className="text-gray-300 hover:text-white transition-custom">info@hydrosourcedirect.com</a>
              </li>
            </ul>
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
