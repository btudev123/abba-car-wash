import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Calendar, Clock, Car, User, Mail, Phone, CheckCircle } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    serviceId: SERVICES[0].id,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    vehicleModel: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend here
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="book" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Booking Request Received!</h3>
            <p className="text-slate-600 text-lg mb-8">
              Thank you, {formData.name}. We've received your request for the {SERVICES.find(s => s.id === formData.serviceId)?.name}.
              We will confirm your appointment via email shortly.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-blue-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Book Your Appointment
            </h2>
            <p className="text-blue-100 mt-2">Fill out the details below to secure your spot.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service Selection */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Service</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES.map(service => (
                  <label 
                    key={service.id} 
                    className={`relative flex flex-col p-4 border rounded-xl cursor-pointer transition-all ${formData.serviceId === service.id ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'}`}
                  >
                    <input 
                      type="radio" 
                      name="serviceId" 
                      value={service.id} 
                      checked={formData.serviceId === service.id}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-semibold text-slate-900">{service.name}</span>
                    <span className="text-sm text-slate-500">${service.price} • {service.duration}</span>
                    {formData.serviceId === service.id && (
                        <div className="absolute top-2 right-2 text-blue-600">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-slate-300 bg-slate-50 border focus:border-blue-500 focus:ring-blue-500 py-2.5 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-5 w-5 text-slate-400" />
                </div>
                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-slate-300 bg-slate-50 border focus:border-blue-500 focus:ring-blue-500 py-2.5 text-sm"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-slate-300 bg-slate-50 border focus:border-blue-500 focus:ring-blue-500 py-2.5 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-slate-300 bg-slate-50 border focus:border-blue-500 focus:ring-blue-500 py-2.5 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-slate-300 bg-slate-50 border focus:border-blue-500 focus:ring-blue-500 py-2.5 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Model</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Car className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="vehicleModel"
                  required
                  placeholder="Toyota Camry"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-slate-300 bg-slate-50 border focus:border-blue-500 focus:ring-blue-500 py-2.5 text-sm"
                />
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md transition-all transform hover:scale-[1.01]"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
