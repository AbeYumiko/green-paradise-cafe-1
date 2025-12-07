import React from 'react';
import { MapPin, Phone, Mail, Clock, CreditCard, Car } from 'lucide-react';
import { IMAGES } from '../constants';

export const StorePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col">
       {/* Small Header */}
       <div className="h-64 md:h-80 relative bg-primary flex items-center justify-center">
          <div 
             className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
             style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
          ></div>
          <div className="relative z-10 text-center text-white px-4 mt-10">
             <h1 className="text-4xl md:text-5xl font-bold mb-2">Store Information</h1>
             <p className="opacity-90">Plan your visit to paradise</p>
          </div>
       </div>

       <div className="flex-grow max-w-7xl mx-auto w-full px-6 lg:px-8 py-16 -mt-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12">
            
            <div className="grid lg:grid-cols-5 gap-12">
               {/* Left Column: Map & Address */}
               <div className="lg:col-span-3 flex flex-col gap-8">
                  <h2 className="text-2xl font-bold text-primary">Our Location</h2>
                  <div className="w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-inner relative group">
                     <img src={IMAGES.map} alt="Location Map" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  
                  <div className="bg-secondary p-6 rounded-2xl border border-gray-100">
                     <div className="flex items-start gap-4 mb-4">
                        <MapPin className="text-primary w-6 h-6 shrink-0 mt-1" />
                        <div>
                           <p className="font-semibold text-gray-900">123 Leafy Lane</p>
                           <p className="text-gray-600">Green Valley, GV 12345</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 mb-4">
                        <Phone className="text-primary w-6 h-6 shrink-0" />
                        <p className="text-gray-600">(555) 123-4567</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <Mail className="text-primary w-6 h-6 shrink-0" />
                        <p className="text-gray-600">hello@greenparadise.com</p>
                     </div>
                  </div>
               </div>

               {/* Right Column: Details */}
               <div className="lg:col-span-2 space-y-10">
                  
                  {/* Hours */}
                  <div>
                     <h3 className="flex items-center text-xl font-bold text-primary mb-6">
                        <Clock className="w-6 h-6 mr-3" /> Business Hours
                     </h3>
                     <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                           <span className="text-gray-600 font-medium">Monday - Friday</span>
                           <span className="font-bold text-primary">10:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                           <span className="text-gray-600 font-medium">Saturday</span>
                           <span className="font-bold text-primary">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary rounded-xl">
                           <span className="text-gray-600 font-medium">Sunday</span>
                           <span className="font-bold text-primary">11:00 AM - 5:00 PM</span>
                        </div>
                     </div>
                  </div>

                  {/* Payments */}
                  <div>
                     <h3 className="flex items-center text-xl font-bold text-primary mb-6">
                        <CreditCard className="w-6 h-6 mr-3" /> Payment Methods
                     </h3>
                     <div className="flex flex-wrap gap-3">
                        {['Visa', 'MasterCard', 'Amex', 'Apple Pay', 'Google Pay', 'Cash'].map(method => (
                           <span key={method} className="px-4 py-2 bg-secondary text-gray-700 text-sm font-semibold rounded-full border border-gray-200">
                              {method}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* Parking */}
                  <div>
                     <h3 className="flex items-center text-xl font-bold text-primary mb-6">
                        <Car className="w-6 h-6 mr-3" /> Parking
                     </h3>
                     <p className="text-gray-600 leading-relaxed bg-secondary p-4 rounded-2xl text-sm">
                        カフェ裏の専用駐車場を無料でご利用いただけます。山手沿いにも路上駐車スペースがございます。
                     </p>
                  </div>

               </div>
            </div>
          </div>
       </div>
    </div>
  );
};