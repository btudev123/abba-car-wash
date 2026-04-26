import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { ShieldCheck, Users, Clock } from 'lucide-react';
import { TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features/Trust Section */}
        <section id="about" className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">100% Satisfaction</h3>
                <p className="text-slate-600 text-sm">We guarantee our work. If you're not happy, we'll make it right.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Team</h3>
                <p className="text-slate-600 text-sm">Our detailers are trained, certified, and passionate about cars.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Efficient Service</h3>
                <p className="text-slate-600 text-sm">We respect your time. Online booking and fast turnaround.</p>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* Testimonials */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/10 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                  <p className="font-bold text-white">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BookingForm />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
