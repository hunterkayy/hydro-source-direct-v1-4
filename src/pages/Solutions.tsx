
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { useInView } from 'react-intersection-observer';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Droplets, Shield, Zap, Settings, Award } from 'lucide-react';

const Solutions = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedModels, setSelectedModels] = useState<Set<string>>(new Set());

  const toggleModelSpecs = (modelId: string) => {
    const newSelectedModels = new Set(selectedModels);
    if (newSelectedModels.has(modelId)) {
      newSelectedModels.delete(modelId);
    } else {
      newSelectedModels.add(modelId);
    }
    setSelectedModels(newSelectedModels);
  };

  // HSD Pro Series Data
  const proSeriesData = {
    series: "HSD Pro",
    models: [
      {
        id: "pro32",
        name: "HSD Pro32",
        capacity_grains: 32000,
        max_hardness_gpg: 50,
        max_iron_ppm: 1,
        valve_flow_gpm: 22,
        service_flow_gpm: 10,
        intermittent_flow_gpm: 14,
        resin_cuft: 1,
        gravel_lbs: 10,
        salt_capacity_lbs: 250,
        pressure_psi: "20–125",
        plumbing: "1\" NPT",
        electrical: "120V 50/60Hz line, 12VDC adapter",
        warranty: "Lifetime tanks & ceramic discs; 10-year parts (resin included)",
        description: "Perfect for smaller households with moderate hardness levels.",
        recommended: "1-3 people"
      },
      {
        id: "pro40",
        name: "HSD Pro40",
        capacity_grains: 40000,
        max_hardness_gpg: 65,
        max_iron_ppm: 3,
        valve_flow_gpm: 22,
        service_flow_gpm: 12.5,
        intermittent_flow_gpm: 17.5,
        resin_cuft: 1.25,
        gravel_lbs: 10,
        salt_capacity_lbs: 250,
        pressure_psi: "20–125",
        plumbing: "1\" NPT",
        electrical: "120V 50/60Hz line, 12VDC adapter",
        warranty: "Lifetime tanks & ceramic discs; 10-year parts (resin included)",
        description: "Ideal for medium-sized homes with moderate to high hardness.",
        recommended: "3-5 people"
      },
      {
        id: "pro48",
        name: "HSD Pro48",
        capacity_grains: 48000,
        max_hardness_gpg: 75,
        max_iron_ppm: 5,
        valve_flow_gpm: 22,
        service_flow_gpm: 15,
        intermittent_flow_gpm: 21,
        resin_cuft: 1.5,
        gravel_lbs: 10,
        salt_capacity_lbs: 250,
        pressure_psi: "20–125",
        plumbing: "1\" NPT",
        electrical: "120V 50/60Hz line, 12VDC adapter",
        warranty: "Lifetime tanks & ceramic discs; 10-year parts (resin included)",
        description: "Maximum capacity for large homes with challenging water conditions.",
        recommended: "5+ people"
      }
    ],
    shared_features: [
      {
        title: "Advanced Ceramic Flow Discs",
        description: "Aerospace-grade, lifetime-warranty wear parts",
        icon: Award
      },
      {
        title: "High-Flow Performance", 
        description: "1.25\" Pro Flow internal riser for consistent pressure",
        icon: Zap
      },
      {
        title: "Solvent-Free, NSF-rated Premium Media",
        description: "USA-made, removes hardness minerals",
        icon: Shield
      },
      {
        title: "Smart Water Conservation",
        description: "Digital metered regeneration reduces salt & water",
        icon: Droplets
      },
      {
        title: "Corrosion-Proof Tank",
        description: "Structural fiberglass-reinforced, lifetime warranty",
        icon: CheckCircle
      },
      {
        title: "Integrated Smart Controls",
        description: "Advanced I/O for tough applications",
        icon: Settings
      }
    ]
  };

  const scrollToComparison = () => {
    document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "HSD Pro Series Water Softeners",
    "brand": {
      "@type": "Brand",
      "name": "HydroSource Direct"
    },
    "itemListElement": proSeriesData.models.map((model, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": model.name,
        "brand": {
          "@type": "Brand", 
          "name": "HydroSource Direct"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Hardness Capacity",
            "value": `${model.capacity_grains} grains`
          },
          {
            "@type": "PropertyValue", 
            "name": "Maximum Hardness",
            "value": `${model.max_hardness_gpg} gpg`
          },
          {
            "@type": "PropertyValue",
            "name": "Service Flow Rate", 
            "value": `${model.service_flow_gpm} gpm`
          },
          {
            "@type": "PropertyValue",
            "name": "Resin Volume",
            "value": `${model.resin_cuft} cu ft`
          }
        ]
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Solutions | HSD Pro Series Water Softeners | HydroSource Direct</title>
        <meta name="description" content="Compare HSD Pro32, Pro40, Pro48 water softeners—advanced ceramic discs, high-flow performance, smart metered regeneration, lifetime tank warranty." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Pro Series Water Softener
              </h1>
              <p className="text-xl text-slate-600 mb-4">
                High-Efficiency Water Softening for Your Home
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Experience the benefits of whole-home soft water with advanced ceramic valve technology and smart regeneration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get a Quote
                </Link>
                <button onClick={scrollToComparison} className="btn-secondary">
                  Compare Models
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/c0046fe2-4a63-4a89-8b7e-91e63df91c4e.png"
                alt="HSD Pro Series Water Softener"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Product Lineup
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the perfect system for your home's water needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {proSeriesData.models.map((model, index) => (
              <Card key={model.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <img 
                      src="/lovable-uploads/c0046fe2-4a63-4a89-8b7e-91e63df91c4e.png"
                      alt={model.name}
                      className="w-full max-w-xs mx-auto rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary">
                      {model.recommended}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    {model.name}
                  </CardTitle>
                  <p className="text-slate-600 mt-2">{model.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Key Specs:</h4>
                    <ul className="text-sm space-y-1 text-slate-600">
                      <li>• {model.capacity_grains.toLocaleString()} grains capacity</li>
                      <li>• Up to {model.max_hardness_gpg} gpg hardness</li>
                      <li>• {model.service_flow_gpm} gpm service flow</li>
                      <li>• {model.resin_cuft} cu ft resin volume</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                    <p className="text-xs text-green-800 font-medium">
                      🛡️ {model.warranty}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <button 
                      onClick={() => toggleModelSpecs(model.id)}
                      className="w-full btn-secondary text-sm"
                    >
                      {selectedModels.has(model.id) ? 'Hide' : 'View'} Full Specs
                    </button>
                    <Link to="/contact" className="w-full btn-primary block text-center">
                      Get this System
                    </Link>
                  </div>

                  {selectedModels.has(model.id) && (
                    <div className="mt-4 p-4 bg-white border rounded-lg animate-fade-in">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div><strong>Max Iron:</strong> {model.max_iron_ppm} ppm</div>
                        <div><strong>Valve Flow:</strong> {model.valve_flow_gpm} gpm</div>
                        <div><strong>Intermittent Flow:</strong> {model.intermittent_flow_gpm} gpm</div>
                        <div><strong>Salt Storage:</strong> {model.salt_capacity_lbs} lbs</div>
                        <div><strong>Pressure Range:</strong> {model.pressure_psi} psi</div>
                        <div><strong>Connection:</strong> {model.plumbing}</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Block */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Industry-Leading Warranty
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Lifetime Coverage</h3>
                      <p className="text-slate-600">Tanks & Ceramic Valve Wear Discs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">10-Year Coverage</h3>
                      <p className="text-slate-600">All other parts, including premium resin</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Resin must not be exposed to chlorine/oxidizers</li>
                    <li>• Yearly maintenance + HSD Resin Cleanser required</li>
                    <li>• Hardness/iron must be within specified limits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Pro Series */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose the Pro Series
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Advanced technology and superior engineering for reliable, efficient water softening
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proSeriesData.shared_features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Comparison Table */}
      <section id="comparison" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Model Comparison
            </h2>
            <p className="text-lg text-slate-600">
              Compare technical specifications side by side
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-semibold sticky left-0 bg-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold">HSD Pro32</th>
                  <th className="text-center p-4 font-semibold">HSD Pro40</th>
                  <th className="text-center p-4 font-semibold">HSD Pro48</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hardness Capacity (grains @ max salt dose)', ...proSeriesData.models.map(m => m.capacity_grains.toLocaleString())],
                  ['Maximum Hardness (gpg)', ...proSeriesData.models.map(m => m.max_hardness_gpg)],
                  ['Maximum Clear Water Iron (ppm)', ...proSeriesData.models.map(m => m.max_iron_ppm)],
                  ['Valve Flow Rate (gpm)', ...proSeriesData.models.map(m => m.valve_flow_gpm)],
                  ['Service Flow Rate (gpm)', ...proSeriesData.models.map(m => m.service_flow_gpm)],
                  ['Intermittent Flow Rate (gpm)', ...proSeriesData.models.map(m => m.intermittent_flow_gpm)],
                  ['Resin Volume (cu ft)', ...proSeriesData.models.map(m => m.resin_cuft)],
                  ['Quartz Gravel Base (lbs)', ...proSeriesData.models.map(m => m.gravel_lbs)],
                  ['Salt Storage Capacity (lbs)', ...proSeriesData.models.map(m => m.salt_capacity_lbs)],
                  ['Water Pressure Operating Range (psi)', ...proSeriesData.models.map(m => m.pressure_psi)],
                  ['Supplied Plumbing Connection', ...proSeriesData.models.map(m => m.plumbing)],
                  ['Electrical', ...proSeriesData.models.map(m => m.electrical)]
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-slate-900 sticky left-0 bg-inherit border-r border-slate-200">
                      {row[0]}
                    </td>
                    <td className="p-4 text-center text-slate-700">{row[1]}</td>
                    <td className="p-4 text-center text-slate-700">{row[2]}</td>
                    <td className="p-4 text-center text-slate-700">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technology Strip */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-12">
            Advanced Technology and Applied Science for Superior Water Treatment
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "Ceramic Disc Technology" },
              { icon: Zap, label: "High-Flow Riser" },
              { icon: Droplets, label: "Smart Metering" },
              { icon: Shield, label: "NSF Media" }
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-medium">{tech.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Panel */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience Better Water Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Reduce scale buildup, eliminate stains, and improve your appliance efficiency with our advanced water softening technology.
          </p>
           <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
            Request Free Consultation
          </Link>
        </div>
      </section>

    </Layout>
  );
};

export default Solutions;
