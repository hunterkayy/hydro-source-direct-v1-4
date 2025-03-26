
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import CtaSection from '../components/home/CtaSection';

const WaterQuality = () => {
  return (
    <Layout>
      <Helmet>
        <title>Why Water Quality Matters | HydroSource Direct</title>
        <meta name="description" content="Learn why water quality is important for your health, home, and appliances, and how HydroSource Direct can help improve your water quality." />
      </Helmet>
      
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Why Water Quality Matters</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-8">
              Understanding the importance of water quality and how it affects your health, home, and daily life.
            </p>
          </div>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h2>The Importance of Clean Water</h2>
            <p>
              Water is essential for life, and the quality of the water you consume and use in your home has a profound impact on your health and well-being. At HydroSource Direct, we believe everyone deserves access to clean, pure water.
            </p>
            
            <h3>Health Benefits of Pure Water</h3>
            <p>
              Clean water is fundamental to good health. Contaminants in your water supply can cause immediate health effects like gastrointestinal illness, or long-term problems from exposure to chemicals and minerals. By ensuring your water is properly treated, you're making a significant investment in your family's health.
            </p>
            
            <h3>Protecting Your Home</h3>
            <p>
              Hard water contains high levels of minerals that can damage your plumbing system and appliances over time. Scale buildup reduces efficiency, increases energy costs, and shortens the lifespan of water heaters, dishwashers, washing machines, and more. Our water treatment solutions prevent these issues, saving you money and hassle.
            </p>
            
            <h3>Environmental Impact</h3>
            <p>
              Quality water treatment systems reduce the need for bottled water, decreasing plastic waste and your carbon footprint. Additionally, efficient water use through properly treated systems helps conserve this precious resource for future generations.
            </p>
            
            <h2>Common Water Quality Issues</h2>
            <p>
              Water quality can vary significantly depending on your location and source. Here are some common issues that our solutions address:
            </p>
            
            <ul>
              <li><strong>Hard Water:</strong> Causes scale buildup, reduces soap efficiency, and damages appliances.</li>
              <li><strong>Iron and Manganese:</strong> Causes staining on fixtures and clothing, and imparts a metallic taste.</li>
              <li><strong>Chlorine:</strong> Added as a disinfectant but can cause unpleasant taste and odor.</li>
              <li><strong>Sediment:</strong> Visible particles that can clog plumbing and reduce water pressure.</li>
              <li><strong>Bacteria and Viruses:</strong> Microorganisms that can cause illness.</li>
              <li><strong>Chemical Contaminants:</strong> Including pesticides, pharmaceuticals, and industrial chemicals.</li>
            </ul>
            
            <p>
              At HydroSource Direct, we offer comprehensive water testing to identify the specific issues affecting your water supply, followed by personalized solutions to address those concerns.
            </p>
          </div>
        </div>
      </div>
      
      <CtaSection />
    </Layout>
  );
};

export default WaterQuality;
