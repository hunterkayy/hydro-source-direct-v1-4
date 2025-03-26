
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import { Wrench, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CtaSection from '../components/home/CtaSection';

const ServiceInstallation = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout>
      <Helmet>
        <title>Professional Installation Services | HydroSource Direct</title>
        <meta name="description" content="Expert installation services for water treatment systems from HydroSource Direct. Proper installation ensures optimal performance and longevity." />
      </Helmet>
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Professional Installation Services</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-8">
              Expert installation by certified technicians ensures your water treatment system performs at its best
            </p>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
                alt="Professional installation technician" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-hsd-grey-dark">Installation Done Right</h2>
              <p className="text-gray-600 mb-6">
                Proper installation is crucial for the performance and longevity of your water treatment system. Our certified technicians have the expertise and experience to ensure your system is installed correctly.
              </p>
              <p className="text-gray-600 mb-6">
                When you choose HydroSource Direct for installation, you can expect:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-hsd-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Expert Technicians</h4>
                    <p className="text-gray-600">Factory-trained professionals with extensive experience installing water treatment systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-hsd-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Efficient Service</h4>
                    <p className="text-gray-600">Most installations are completed in a single day, minimizing disruption to your daily routine.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-hsd-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Satisfaction Guaranteed</h4>
                    <p className="text-gray-600">Our work is backed by a satisfaction guarantee and comprehensive warranty.</p>
                  </div>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary">Schedule Installation</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section ref={ref} className={`section-padding bg-gray-50 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-hsd-grey-dark">Our Installation Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-hsd-blue-light z-0"></div>
              
              {/* Timeline items */}
              <div className="relative z-10 space-y-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-hsd-blue h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-hsd-grey-dark">Site Evaluation</h3>
                    <p className="text-gray-600">
                      Our technician evaluates your home's plumbing layout to determine the optimal installation location and configuration for your water treatment system.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-hsd-blue h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-hsd-grey-dark">Installation</h3>
                    <p className="text-gray-600">
                      The technician installs your system according to manufacturer specifications and best practices, ensuring proper connections and functionality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-hsd-blue h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-hsd-grey-dark">System Testing</h3>
                    <p className="text-gray-600">
                      After installation, your system is thoroughly tested to ensure it's functioning correctly and delivering the expected water quality improvements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-hsd-blue h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-hsd-grey-dark">Education</h3>
                    <p className="text-gray-600">
                      Your technician explains how to operate and maintain your new system, answering any questions you have about its features and benefits.
                    </p>
                  </div>
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

export default ServiceInstallation;
