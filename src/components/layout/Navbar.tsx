
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/2855fce6-7761-4921-bb50-12299acd7217.png" 
              alt="HydroSource Direct Logo" 
              className="h-12 md:h-16" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-medium text-hsd-grey-dark hover:text-hsd-blue transition-custom"
            >
              Home
            </Link>
            <Link 
              to="/solutions" 
              className="font-medium text-hsd-grey-dark hover:text-hsd-blue transition-custom"
            >
              Solutions
            </Link>
            <Link 
              to="/why-water-quality" 
              className="font-medium text-hsd-grey-dark hover:text-hsd-blue transition-custom"
            >
              Why Water Quality?
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-hsd-grey-dark hover:text-hsd-blue transition-custom"
            >
              Contact
            </Link>
            <Link 
              to="/find-solution" 
              className="btn-primary"
            >
              Find Your Solution
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-hsd-grey-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-hsd-grey-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/solutions" 
                className="font-medium text-hsd-grey-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/why-water-quality" 
                className="font-medium text-hsd-grey-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Water Quality?
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-hsd-grey-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/find-solution" 
                className="btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Your Solution
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
