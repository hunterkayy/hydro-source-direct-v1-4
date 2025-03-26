
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import DealerLocator from '../components/home/DealerLocator';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>HydroSource Direct | Premium Water Treatment Solutions</title>
        <meta name="description" content="HydroSource Direct provides premium water treatment solutions for homes and businesses, ensuring clean, pure water for healthier living." />
      </Helmet>
      
      <Hero />
      <ValueProposition />
      <FeaturedProducts />
      <ServicesSection />
      <TestimonialsSection />
      <DealerLocator />
      <CtaSection />
    </Layout>
  );
};

export default Home;
