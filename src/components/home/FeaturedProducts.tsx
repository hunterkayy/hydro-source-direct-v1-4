
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FeaturedProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const products = [
    {
      id: 1,
      name: "HSD S1",
      category: "Water Softener",
      description: "Premium water softener that eliminates hard water problems, featuring advanced ceramic technology for superior performance and longer lifespan.",
      image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&q=80",
      link: "/solutions/water-softeners"
    },
    {
      id: 2,
      name: "HSD RO 600",
      category: "Reverse Osmosis System",
      description: "High-capacity reverse osmosis system delivering crystal-clear drinking water, removing up to 99% of contaminants for the purest taste.",
      image: "https://images.unsplash.com/photo-1562319926-4dbdecda5535?auto=format&fit=crop&q=80",
      link: "/solutions/reverse-osmosis"
    },
    {
      id: 3,
      name: "HSD LD1",
      category: "Leak Detection System",
      description: "Advanced leak detection sensor that provides 24/7 monitoring and automatic water shutoff to prevent water damage in your home.",
      image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?auto=format&fit=crop&q=80",
      link: "/solutions/leak-detection"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-hsd-grey-dark">Featured Products</h2>
          <p className="text-gray-600 text-lg">
            Discover our premium water treatment solutions designed for superior performance and reliability.
          </p>
        </div>

        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block py-1 px-2 bg-hsd-blue/90 text-white text-xs rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  to={product.link} 
                  className="inline-flex items-center text-hsd-blue font-medium hover:text-hsd-blue-light transition-custom group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/solutions" 
            className="btn-primary inline-flex items-center"
          >
            View All Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
