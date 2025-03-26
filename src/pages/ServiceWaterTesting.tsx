
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import { Beaker, Droplets, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CtaSection from '../components/home/CtaSection';

const ServiceWaterTesting = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout>
      <Helmet>
        <title>Water Testing Services | HydroSource Direct</title>
        <meta name="description" content="Professional water testing services from HydroSource Direct. Identify contaminants and water quality issues in your home." />
      </Helmet>
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Water Testing Services</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-8">
              Get a clear picture of your water quality with our comprehensive testing services
            </p>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-hsd-grey-dark">Know What's In Your Water</h2>
              <p className="text-gray-600 mb-6">
                Our professional water testing services provide an in-depth analysis of your home's water, identifying contaminants and quality issues that may affect your health and home.
              </p>
              <p className="text-gray-600 mb-6">
                Using advanced testing equipment and laboratory analysis, we can detect a wide range of water quality issues, including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-hsd-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hard water minerals (calcium, magnesium)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-hsd-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Iron, manganese, and sulfur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-hsd-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>pH level imbalances</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-hsd-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Chlorine and chloramines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-hsd-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bacteria and microorganisms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-hsd-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Heavy metals (lead, copper, etc.)</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary">Schedule Your Water Test</Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1580656460692-e0851c174313?auto=format&fit=crop&q=80" 
                alt="Water Testing Process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section ref={ref} className={`section-padding bg-gray-50 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-hsd-grey-dark">Our Testing Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-hsd-blue/10 flex items-center justify-center mb-6">
                <Beaker className="h-7 w-7 text-hsd-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-hsd-grey-dark">Sample Collection</h3>
              <p className="text-gray-600">
                Our technicians collect water samples from key locations in your home, ensuring accurate representation of your water quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-hsd-blue/10 flex items-center justify-center mb-6">
                <Droplets className="h-7 w-7 text-hsd-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-hsd-grey-dark">Laboratory Analysis</h3>
              <p className="text-gray-600">
                Samples are analyzed using advanced equipment to identify contaminants and measure water quality parameters.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-hsd-blue/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-hsd-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-hsd-grey-dark">Personalized Report</h3>
              <p className="text-gray-600">
                You receive a detailed report explaining your water quality issues and recommended treatment options.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </Layout>
  );
};

export default ServiceWaterTesting;
