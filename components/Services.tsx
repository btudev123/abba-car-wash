import React from 'react';
import { SERVICES } from '../constants';
import { Clock, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect package for your vehicle's needs. We use only high-quality, eco-friendly products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 font-bold px-3 py-1 rounded-full text-sm shadow-sm">
                  ${service.price}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.name}</h3>
                </div>
                
                <p className="text-slate-600 mb-4 text-sm flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Approx. {service.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`#book`}
                  className="w-full block text-center py-2.5 px-4 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Select Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
