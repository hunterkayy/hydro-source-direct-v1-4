
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import CtaSection from '../components/home/CtaSection';
import { useInView } from 'react-intersection-observer';
import { Droplet, Shield, Home, Beaker, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const WaterQuality = () => {
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  
  const { ref: issuesRef, inView: issuesInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  const benefits = [
    {
      icon: Droplet,
      title: "Health Benefits",
      description: "Pure water is essential for good health. Removing contaminants reduces health risks and improves overall wellbeing for your family."
    },
    {
      icon: Home,
      title: "Home Protection",
      description: "Water treatment protects your plumbing, appliances, and fixtures from damage, extending their lifespan and saving money on repairs."
    },
    {
      icon: Shield,
      title: "Environmental Impact",
      description: "Quality water systems reduce the need for bottled water, decreasing plastic waste and your carbon footprint."
    }
  ];

  const faqItems = [
    {
      question: "How often should I test my water?",
      answer: "For municipal water supplies, we recommend testing once a year. For private wells, testing should be done 2-3 times per year. If you notice changes in taste, odor, or appearance, test immediately regardless of schedule."
    },
    {
      question: "Does hard water affect my health?",
      answer: "Hard water isn't typically a health concern, but it can cause dry skin and hair. The minerals in hard water can also reduce the effectiveness of soaps and detergents, requiring you to use more cleaning products."
    },
    {
      question: "What's the difference between water filtration and softening?",
      answer: "Water filtration removes contaminants like chlorine, sediment, and chemicals. Water softening specifically addresses hard water by removing calcium and magnesium minerals that cause scale buildup."
    },
    {
      question: "How long do water treatment systems last?",
      answer: "With proper maintenance, most water treatment systems last 10-15 years. Individual components like filters and membranes need regular replacement according to manufacturer guidelines, typically every 6-12 months."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Why Water Quality Matters | HydroSource Direct</title>
        <meta name="description" content="Learn why water quality is important for your health, home, and appliances, and how HydroSource Direct can help improve your water quality." />
      </Helmet>
      
      {/* Hero section with gradient background */}
      <div className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hsd-blue-light/10 to-hsd-blue/30 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-hsd-blue-light/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-hsd-grey-dark">Why Water Quality Matters</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Understanding the importance of water quality and how it affects your health, home, and daily life.
            </p>
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-hsd-blue-light/20 rounded-full filter blur-md"></div>
              <Link to="/find-solution" className="relative btn-primary inline-flex items-center group">
                Find Your Solution
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-hsd-grey-dark mb-6">The Importance of Clean Water</h2>
            <p className="text-gray-700">
              Water is essential for life, and the quality of the water you consume and use in your home has a profound impact on your health and well-being. At HydroSource Direct, we believe everyone deserves access to clean, pure water.
            </p>
            
            {/* Benefits cards section */}
            <div 
              ref={benefitsRef} 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
            >
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className={`border border-gray-200 hover:shadow-lg transition-all duration-500 transform ${
                    benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-hsd-blue rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-hsd-grey-dark">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold text-hsd-grey-dark mt-16 mb-6">Common Water Quality Issues</h2>
            <p className="text-gray-700 mb-8">
              Water quality can vary significantly depending on your location and source. Understanding the common issues that affect water quality can help you make informed decisions about your water treatment needs.
            </p>
            
            {/* Water issues section */}
            <div 
              ref={issuesRef}
              className={`bg-gray-50 rounded-xl p-6 md:p-8 mb-12 transition-all duration-700 ${
                issuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-hsd-grey-dark mb-4 flex items-center">
                    <Beaker className="mr-2 h-5 w-5 text-hsd-blue" />
                    Water Contaminants
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Hard Water:</strong> Causes scale buildup, reduces soap efficiency, and damages appliances.</li>
                    <li><strong>Iron and Manganese:</strong> Causes staining on fixtures and clothing, and imparts a metallic taste.</li>
                    <li><strong>Chlorine:</strong> Added as a disinfectant but can cause unpleasant taste and odor.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hsd-grey-dark mb-4 flex items-center">
                    <Beaker className="mr-2 h-5 w-5 text-hsd-blue" />
                    Health Concerns
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Sediment:</strong> Visible particles that can clog plumbing and reduce water pressure.</li>
                    <li><strong>Bacteria and Viruses:</strong> Microorganisms that can cause illness.</li>
                    <li><strong>Chemical Contaminants:</strong> Including pesticides, pharmaceuticals, and industrial chemicals.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700">
                  At HydroSource Direct, we offer comprehensive water testing to identify the specific issues affecting your water supply, followed by personalized solutions to address those concerns.
                </p>
              </div>
            </div>
            
            {/* FAQ Accordion */}
            <h2 className="text-3xl font-bold text-hsd-grey-dark mt-16 mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="mb-16">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-lg font-medium text-hsd-grey-dark">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      
      <CtaSection />
    </Layout>
  );
};

export default WaterQuality;
