
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';

const ProductFinder = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    waterSource: '',
    waterHardness: '',
    waterTaste: '',
    waterStaining: '',
    householdSize: ''
  });
  const [showResults, setShowResults] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleAnswer = (question: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
    
    if (step < 5) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  // This is a simplified recommendation logic - in a real app, this would be more complex
  const getRecommendedProducts = () => {
    // Based on answers, return recommended products
    const recommendations = [];
    
    if (answers.waterHardness === 'high' || answers.waterHardness === 'medium') {
      recommendations.push({
        name: "HSD S1 Water Softener",
        description: "Our premium water softener to eliminate hard water problems.",
        link: "/solutions/water-softeners"
      });
    }
    
    if (answers.waterStaining === 'yes') {
      recommendations.push({
        name: "HSD Iron Filter",
        description: "Effective at removing iron, manganese, and sulfur from your water.",
        link: "/solutions/iron-filters"
      });
    }
    
    if (answers.waterTaste === 'poor') {
      recommendations.push({
        name: "HSD RO 600 Reverse Osmosis System",
        description: "Delivers crystal-clear, great-tasting drinking water.",
        link: "/solutions/reverse-osmosis"
      });
    }
    
    if (answers.waterSource === 'well') {
      recommendations.push({
        name: "HSD UV System",
        description: "Protection against bacteria and viruses in well water.",
        link: "/solutions/uv-systems"
      });
    }
    
    // If no specific recommendations matched, recommend a basic system
    if (recommendations.length === 0) {
      recommendations.push({
        name: "HSD Basic Water Filter",
        description: "A basic whole-house filtration system for general water quality improvement.",
        link: "/solutions/whole-house-filters"
      });
    }
    
    return recommendations;
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <div className="question-container">
            <h3 className="text-xl font-bold mb-4">What is your water source?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => handleAnswer('waterSource', 'municipal')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                Municipal (City Water)
              </button>
              <button 
                onClick={() => handleAnswer('waterSource', 'well')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                Well Water
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="question-container">
            <h3 className="text-xl font-bold mb-4">How would you describe your water hardness?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => handleAnswer('waterHardness', 'high')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                High (Lots of scale buildup)
              </button>
              <button 
                onClick={() => handleAnswer('waterHardness', 'medium')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                Medium (Some scale visible)
              </button>
              <button 
                onClick={() => handleAnswer('waterHardness', 'low')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                Low (Little to no scale)
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="question-container">
            <h3 className="text-xl font-bold mb-4">How would you rate the taste of your water?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => handleAnswer('waterTaste', 'good')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                Good (Tastes clean and fresh)
              </button>
              <button 
                onClick={() => handleAnswer('waterTaste', 'neutral')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                Neutral (No strong taste)
              </button>
              <button 
                onClick={() => handleAnswer('waterTaste', 'poor')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                Poor (Unpleasant taste or odor)
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="question-container">
            <h3 className="text-xl font-bold mb-4">Do you notice staining on fixtures or clothing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => handleAnswer('waterStaining', 'yes')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                Yes (Orange, brown, or black stains)
              </button>
              <button 
                onClick={() => handleAnswer('waterStaining', 'no')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                No (No noticeable staining)
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="question-container">
            <h3 className="text-xl font-bold mb-4">How many people live in your household?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => handleAnswer('householdSize', 'small')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                1-2 People
              </button>
              <button 
                onClick={() => handleAnswer('householdSize', 'medium')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                3-4 People
              </button>
              <button 
                onClick={() => handleAnswer('householdSize', 'large')}
                className="p-4 border border-gray-300 rounded-lg hover:border-hsd-blue hover:bg-hsd-blue/5 transition-custom"
              >
                5+ People
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const recommendedProducts = getRecommendedProducts();

  return (
    <Layout>
      <Helmet>
        <title>Find Your Solution | HydroSource Direct</title>
        <meta name="description" content="Use our interactive product finder to discover the perfect water treatment solution for your home's specific needs." />
      </Helmet>
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Find Your Perfect Solution</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-8">
              Answer a few simple questions about your water quality needs, and we'll recommend the best products for your home.
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
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {!showResults ? (
              <>
                <div className="mb-8">
                  <div className="relative">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div style={{ width: `${(step / 5) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-hsd-blue transition-all duration-500"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Start</span>
                      <span>Question {step} of 5</span>
                    </div>
                  </div>
                </div>
                
                {renderQuestion()}
              </>
            ) : (
              <div className="results-container animate-fade-up">
                <div className="text-center mb-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold">Your Recommended Solutions</h2>
                  <p className="text-gray-600">Based on your answers, we recommend the following products:</p>
                </div>
                
                <div className="space-y-6">
                  {recommendedProducts.map((product, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-hsd-blue transition-custom">
                      <h3 className="text-xl font-bold text-hsd-grey-dark mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Link 
                        to={product.link} 
                        className="inline-flex items-center text-hsd-blue font-medium hover:text-hsd-blue-light transition-custom group"
                      >
                        View Product Details
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <p className="text-gray-600 mb-4">Need more personalized assistance? Contact our water experts for a free consultation.</p>
                  <Link 
                    to="/contact" 
                    className="btn-primary"
                  >
                    Request Consultation
                  </Link>
                </div>
                
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => {
                      setStep(1);
                      setAnswers({
                        waterSource: '',
                        waterHardness: '',
                        waterTaste: '',
                        waterStaining: '',
                        householdSize: ''
                      });
                      setShowResults(false);
                    }}
                    className="text-hsd-blue hover:text-hsd-blue-light transition-custom"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductFinder;
