import React from 'react';
import { MapPin, Phone, Facebook, Instagram, CreditCard, Banknote, CheckCircle } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, MAP_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 border-t-4 border-capri-gold">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="font-serif text-3xl font-bold tracking-tight mb-6">
              <span className="text-capri-red">Pizza</span> <span className="text-white">Capri</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              La première pizzeria de Versailles, ouverte en 1970. Venez découvrir notre cuisine fait maison dans notre grotte médiévale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-capri-red transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-capri-red transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-capri-gold">Nous Contacter</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-capri-red mt-1 flex-shrink-0" size={20} />
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {ADDRESS}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-capri-red flex-shrink-0" size={20} />
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours - Visually Highlighted */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-sm rounded-lg"></div>
            <div className="relative border border-white/10 bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-lg font-bold font-serif mb-4 text-capri-gold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Horaires d'ouverture
              </h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Lun - Sam</span>
                  <div className="text-right">
                    <span className="block font-bold">12h - 14h30</span>
                    <span className="block font-bold">19h - 22h30</span>
                  </div>
                </li>
                <li className="flex justify-between pt-2 opacity-75">
                  <span>Dimanche</span>
                  <span className="text-capri-red font-medium">Fermé</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-48 rounded-lg overflow-hidden bg-gray-800 border border-gray-700 shadow-lg">
             <iframe 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               style={{border:0}}
               src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.356778465403!2d2.1234!3d48.8034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQ4JzEyLjIiTiAywrAwNycxMi4yIkU!5e0!3m2!1sen!2sfr!4v1600000000000!5m2!1sen!2sfr`} 
               allowFullScreen 
               aria-hidden="false" 
               tabIndex={0}
               title="Map Pizza Capri"
             ></iframe>
          </div>

        </div>

        {/* Payment Methods - Discreet Section */}
        <div className="mb-8 flex flex-col items-center justify-center space-y-3">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Moyens de paiement acceptés</span>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded border border-gray-700 text-gray-300 text-xs">
              <CreditCard size={14} /> <span>CB / Visa / Mastercard / Amex</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded border border-gray-700 text-gray-300 text-xs">
              <Banknote size={14} /> <span>Espèces</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded border border-gray-700 text-gray-300 text-xs">
              <CheckCircle size={14} /> <span>Sans contact</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded border border-gray-700 text-gray-300 text-xs">
              <span className="font-serif font-bold italic">TR</span> <span>Tickets Restaurant</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded border border-gray-700 text-gray-300 text-xs">
              <span className="font-serif">Chèque</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pizza Capri Versailles. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;