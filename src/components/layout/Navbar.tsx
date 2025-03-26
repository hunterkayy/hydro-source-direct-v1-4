
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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
            <div className="relative group">
              <button 
                className="flex items-center font-medium text-hsd-grey-dark hover:text-hsd-blue transition-custom"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link 
                    to="/solutions/water-softeners" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Water Softeners
                  </Link>
                  <Link 
                    to="/solutions/iron-filters" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Iron Filters
                  </Link>
                  <Link 
                    to="/solutions/reverse-osmosis" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Reverse Osmosis
                  </Link>
                  <Link 
                    to="/solutions/uv-systems" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    UV Systems
                  </Link>
                </div>
              </div>
            </div>
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
              <div>
                <button 
                  className="flex items-center font-medium text-hsd-grey-dark w-full text-left"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  Solutions <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/solutions/water-softeners" 
                      className="block text-sm text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Water Softeners
                    </Link>
                    <Link 
                      to="/solutions/iron-filters" 
                      className="block text-sm text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Iron Filters
                    </Link>
                    <Link 
                      to="/solutions/reverse-osmosis" 
                      className="block text-sm text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Reverse Osmosis
                    </Link>
                    <Link 
                      to="/solutions/uv-systems" 
                      className="block text-sm text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      UV Systems
                    </Link>
                  </div>
                )}
              </div>
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
