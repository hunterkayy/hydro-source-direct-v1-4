
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const DealerLocator = () => {
  const [zipCode, setZipCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  return (
    <section 
      ref={ref}
      className={`section-padding bg-gray-50 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="max-w-lg">
              <h2 className="mb-4 text-hsd-grey-dark">Find a HydroSource Direct Dealer Near You</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our network of certified dealers provides professional installation and service for all HydroSource Direct products. Enter your zip code to find a dealer in your area.
              </p>

              <form onSubmit={handleSubmit} className="flex max-w-md">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your zip code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="border border-gray-300 rounded-l-md pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-hsd-blue focus:border-transparent"
                    pattern="[0-9]{5}"
                    title="Five digit zip code"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching || zipCode.length !== 5}
                  className={`btn-primary rounded-l-none ${isSearching || zipCode.length !== 5 ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSearching ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Search className="mr-2 h-4 w-4" />
                      Find Dealers
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
            {/* This would be replaced with an actual map component in production */}
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?auto=format&fit=crop&q=80" 
                alt="Map placeholder" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="bg-white p-6 rounded-lg max-w-xs text-center">
                  <p className="text-gray-500 text-sm">Interactive dealer locator map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerLocator;
