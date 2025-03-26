
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Flask, Tools, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Flask,
      title: "Water Testing",
      description: "Our comprehensive water testing services identify contaminants and water quality issues in your home, providing a clear picture of your water treatment needs.",
      link: "/services/water-testing"
    },
    {
      icon: Tools,
      title: "Professional Installation",
      description: "Our certified technicians ensure your water treatment system is installed correctly, optimizing performance and minimizing the risk of issues.",
      link: "/services/installation"
    },
    {
      icon: Wrench,
      title: "Advanced Service",
      description: "Keep your water treatment system performing at its best with our regular maintenance and prompt repair services by experienced professionals.",
      link: "/services/service"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background design element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-hsd-blue-light/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-hsd-blue/10 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-hsd-grey-dark">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive water treatment services to ensure your system delivers the purest water possible.
          </p>
        </div>

        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-hsd-blue flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-hsd-grey-dark">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-hsd-blue font-medium hover:text-hsd-blue-light transition-custom"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
