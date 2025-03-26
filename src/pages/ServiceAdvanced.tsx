
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import { Settings, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CtaSection from '../components/home/CtaSection';

const ServiceAdvanced = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const maintenanceServices = [
    {
      title: "Regular Maintenance Plans",
      description: "Scheduled service visits to keep your system in peak condition, preventing issues before they occur.",
      link: "/contact"
    },
    {
      title: "System Inspection",
      description: "Comprehensive inspection of all components to identify potential issues and ensure optimal performance.",
      link: "/contact"
    },
    {
      title: "Filter Replacement",
      description: "Timely replacement of filters to maintain water quality and system efficiency.",
      link: "/contact"
    },
    {
      title: "System Sanitization",
      description: "Professional cleaning and sanitization to prevent bacterial growth and contamination.",
      link: "/contact"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Advanced Service & Maintenance | HydroSource Direct</title>
        <meta name="description" content="Professional maintenance and repair services for water treatment systems. Keep your system performing at its best with HydroSource Direct." />
      </Helmet>
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Advanced Service & Maintenance</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-8">
              Keep your water treatment system performing at its best with our professional maintenance and repair services
            </p>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-hsd-grey-dark">Expert Care for Your System</h2>
              <p className="text-gray-600 mb-6">
                Water treatment systems require regular maintenance to ensure optimal performance and longevity. Our experienced technicians provide comprehensive service to keep your system running smoothly for years to come.
              </p>
              <p className="text-gray-600 mb-6">
                Regular maintenance helps prevent costly repairs, ensures consistent water quality, and extends the life of your system. With HydroSource Direct's service plans, you can enjoy peace of mind knowing your water treatment system is in expert hands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">Schedule Service</Link>
                <Link to="/contact" className="btn-secondary">Maintenance Plans</Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80" 
                alt="Water treatment system maintenance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section ref={ref} className={`section-padding bg-gray-50 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-hsd-grey-dark">Our Maintenance Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenanceServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-3 text-hsd-grey-dark">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-hsd-blue font-medium hover:text-hsd-blue-light transition-all inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="rounded-full bg-hsd-blue/10 p-6">
                <Calendar className="h-16 w-16 text-hsd-blue" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-hsd-grey-dark">Annual Maintenance Plans</h3>
                <p className="text-gray-600 mb-4">
                  Our annual maintenance plans include regular service visits, priority scheduling, and discounts on repairs and parts. Ensure your system's optimal performance year-round.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/contact" className="btn-primary whitespace-nowrap">Get a Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-hsd-grey-dark">Professional Repair Services</h2>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-hsd-grey-dark">Expert Diagnosis & Repair</h3>
                <p className="text-gray-600 mb-4">
                  If your water treatment system isn't performing as expected, our expert technicians can quickly diagnose and resolve the issue. We service all major brands and models.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-hsd-blue rounded-full mr-2"></div>
                    <span>System troubleshooting and diagnostics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-hsd-blue rounded-full mr-2"></div>
                    <span>Component replacement and repair</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-hsd-blue rounded-full mr-2"></div>
                    <span>System upgrades and optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-hsd-blue rounded-full mr-2"></div>
                    <span>Emergency service available</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-primary">Request Repair Service</Link>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80" 
                    alt="Water treatment system repair" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </Layout>
  );
};

export default ServiceAdvanced;
