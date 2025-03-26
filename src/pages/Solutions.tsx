
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import CtaSection from '../components/home/CtaSection';
import { useInView } from 'react-intersection-observer';

const Solutions = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    {
      title: "Water Softeners",
      description: "Eliminate hard water problems with our premium water softeners featuring advanced ceramic valve technology for reliability and longevity.",
      image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&q=80",
      link: "/solutions/water-softeners"
    },
    {
      title: "Iron Filters",
      description: "Remove iron, sulfur, and manganese from your water supply, eliminating stains, odors, and metallic taste.",
      image: "https://images.unsplash.com/photo-1583795631352-83a648b1ea53?auto=format&fit=crop&q=80",
      link: "/solutions/iron-filters"
    },
    {
      title: "Reverse Osmosis",
      description: "Enjoy crystal-clear drinking water with our advanced reverse osmosis systems, removing up to 99% of contaminants.",
      image: "https://images.unsplash.com/photo-1562319926-4dbdecda5535?auto=format&fit=crop&q=80",
      link: "/solutions/reverse-osmosis"
    },
    {
      title: "UV Systems",
      description: "Protect your family from harmful bacteria and viruses with our ultraviolet water purification systems.",
      image: "https://images.unsplash.com/photo-1541519920349-237d9c325cac?auto=format&fit=crop&q=80",
      link: "/solutions/uv-systems"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Water Treatment Solutions | HydroSource Direct</title>
        <meta name="description" content="Explore our premium water treatment solutions including water softeners, iron filters, reverse osmosis systems, and UV water purification." />
      </Helmet>
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Water Treatment Solutions</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-8">
              Discover our comprehensive range of premium water treatment products designed to deliver pure, clean water for your home.
            </p>
          </div>
        </div>
      </div>
      
      <div 
        ref={ref}
        className={`section-padding transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="group rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link 
                    to={category.link} 
                    className="btn-primary inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Not Sure Which Solution Is Right For You?</h2>
            <p className="text-gray-600 mb-8">
              Our water experts can help you find the perfect solution for your home's unique water quality needs. Start with our interactive product finder or schedule a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/find-solution" 
                className="btn-primary"
              >
                Product Finder Tool
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <CtaSection />
    </Layout>
  );
};

export default Solutions;
