
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      id: 1,
      content: "Installing HydroSource Direct's water softener was the best decision we made for our home. No more limescale buildup, and our appliances are lasting longer. The installation was professional and quick!",
      author: "Sarah Johnson",
      location: "Tampa, FL",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 2,
      content: "The difference in our water quality after installing the HSD RO 600 system is remarkable. No more bottled water needed! My family loves the clean, fresh taste, and I appreciate the peace of mind knowing our drinking water is pure.",
      author: "Michael Thompson",
      location: "Atlanta, GA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 3,
      content: "The HSD LD1 leak detection system already saved us from a potential disaster when our washing machine hose started leaking. The system shut off the water immediately and alerted us. Worth every penny!",
      author: "Jennifer Davis",
      location: "Orlando, FL",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={ref}
      className={`section-padding bg-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-hsd-grey-dark">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Thousands of families trust HydroSource Direct for their water treatment needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-hsd-blue-light to-hsd-blue rounded-t-lg"></div>

            {/* Quote marks */}
            <div className="absolute top-6 left-8 text-6xl leading-none text-hsd-blue-light/20 font-serif">"</div>
            <div className="absolute bottom-6 right-8 text-6xl leading-none text-hsd-blue-light/20 font-serif">"</div>

            <div className="flex flex-col items-center text-center relative z-10">
              <div className="flex mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg md:text-xl italic mb-8">
                {currentTestimonial.content}
              </p>

              <div className="flex items-center flex-col">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="font-bold text-hsd-grey-dark">{currentTestimonial.author}</p>
                <p className="text-gray-500">{currentTestimonial.location}</p>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 transition-all ${
                    index === currentIndex ? 'bg-hsd-blue scale-110' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
