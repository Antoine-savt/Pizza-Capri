import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, CheckCircle } from 'lucide-react';
import Button from './Button';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-white text-white hover:text-capri-red p-2 rounded-full transition-all duration-300 backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Header Image */}
        <div className="h-40 bg-capri-red relative overflow-hidden group">
          <img 
            src="https://www.hervecuisine.com/wp-content/uploads/pizzaweb.jpg" 
            alt="Ambiance restaurant" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6">
             <h2 className="text-3xl md:text-4xl font-serif text-white text-shadow-lg tracking-wide">
               {!submitted ? 'Votre Table' : 'Confirmé'}
             </h2>
          </div>
        </div>

        <div className="p-8">
          {!submitted ? (
            <>
              <p className="text-gray-500 text-center mb-8 font-serif italic text-lg">
                Réservez un moment de gourmandise dans notre grotte historique.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <User className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-capri-red transition-colors" size={18} />
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-capri-red/20 focus:border-capri-red transition-all outline-none"
                      placeholder="Votre Nom"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-capri-red transition-colors" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-capri-red/20 focus:border-capri-red transition-all outline-none"
                      placeholder="Téléphone"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-capri-red transition-colors" size={18} />
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-capri-red/20 focus:border-capri-red transition-all outline-none text-gray-600"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative group">
                     <Clock className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-capri-red transition-colors" size={18} />
                    <select
                      name="time"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-capri-red/20 focus:border-capri-red transition-all outline-none appearance-none text-gray-600"
                      onChange={handleChange}
                    >
                      <option value="">Heure</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div className="relative group">
                  <Users className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-capri-red transition-colors" size={18} />
                  <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-capri-red/20 focus-within:border-capri-red transition-all">
                     <input
                      type="number"
                      name="guests"
                      min="1"
                      max="20"
                      required
                      value={formData.guests}
                      className="w-full pl-10 pr-4 py-3 bg-transparent outline-none"
                      onChange={handleChange}
                    />
                    <span className="pr-4 text-gray-400 text-sm font-medium">Personnes</span>
                  </div>
                </div>

                <Button type="submit" fullWidth variant="primary" className="mt-4 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  Confirmer la réservation
                </Button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                  Aucun paiement requis en ligne.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8 animate-fade-in-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-inner">
                <CheckCircle size={40} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-3">Merci {formData.name} !</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Votre demande de réservation pour <br/>
                <strong className="text-capri-red">{formData.guests} personnes</strong> le <strong>{formData.date} à {formData.time}</strong> <br/>
                a bien été prise en compte.
              </p>
              <p className="text-sm text-gray-500 mb-8 italic">
                Nous vous confirmerons votre table par SMS ou appel très rapidement.
              </p>
              <Button onClick={onClose} variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-capri-red w-full">
                Retourner sur le site
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;