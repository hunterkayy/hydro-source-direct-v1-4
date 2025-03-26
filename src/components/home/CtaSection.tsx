
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CtaSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className={`py-20 bg-hsd-blue relative overflow-hidden transition-all duration-700 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="water-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 C55 25, 45 25, 50 50 C55 75, 45 75, 50 100" stroke="white" fill="none" strokeWidth="2" />
              <path d="M0 50 C25 55, 25 45, 50 50 C75 55, 75 45, 100 50" stroke="white" fill="none" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">Ready for Pure, Clean Water?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Connect with our water treatment experts today for a free consultation and discover the perfect solution for your home's water needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-primary bg-white text-hsd-blue hover:bg-gray-100"
            >
              Request Consultation
            </Link>
            <a 
              href="tel:+18001234567" 
              className="btn-secondary border-white text-white hover:bg-white/10 inline-flex items-center justify-center"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Call 1-800-123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
