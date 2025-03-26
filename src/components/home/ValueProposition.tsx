
import { Shield, Droplets, Heart } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ValueProposition = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      ref: ref1,
      inView: inView1,
      icon: Heart,
      title: "Healthier Living",
      description: "Our water treatment solutions remove contaminants and impurities, providing your family with clean, safe drinking water essential for optimal health."
    },
    {
      ref: ref2,
      inView: inView2,
      icon: Shield,
      title: "Home Protection",
      description: "Prevent damage to your appliances and plumbing system from hard water, extending their lifespan and saving you money on repairs and replacements."
    },
    {
      ref: ref3,
      inView: inView3,
      icon: Droplets,
      title: "Peace of Mind",
      description: "With HydroSource Direct, you can trust that your water is pure and safe, giving you confidence and tranquility in your everyday water usage."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-hsd-grey-dark">Why Choose HydroSource Direct?</h2>
          <p className="text-gray-600 text-lg">
            We provide premium water treatment solutions tailored to your unique needs, ensuring your family enjoys the purest water possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              ref={value.ref}
              className={`glass-card p-8 transition-all duration-700 transform ${
                value.inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="rounded-full bg-hsd-blue/10 w-16 h-16 flex items-center justify-center mb-6">
                <value.icon className="h-8 w-8 text-hsd-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-hsd-grey-dark">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
