import React from 'react';
import { Clock, ChefHat, MapPin } from 'lucide-react';

const QuickInfo: React.FC = () => {
  return (
    <section className="bg-capri-red text-white py-8 relative z-20 -mt-2 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-red-800">
          
          {/* Highlighted Hours */}
          <div className="p-4 flex flex-col items-center animate-fade-in-up">
            <Clock className="w-8 h-8 mb-3 text-capri-gold" />
            <h3 className="font-serif text-xl font-bold mb-1">Ouvert Lun - Sam</h3>
            <p className="text-sm opacity-90 font-sans font-medium">
              12h00 - 14h30 & 19h00 - 22h30
            </p>
          </div>

          <div className="p-4 flex flex-col items-center animate-fade-in-up delay-100">
            <MapPin className="w-8 h-8 mb-3 text-capri-gold" />
            <h3 className="font-serif text-xl font-bold mb-1">Cadre Unique</h3>
            <p className="text-sm opacity-90 font-sans">Salle en grotte médiévale & Terrasse</p>
          </div>

          <div className="p-4 flex flex-col items-center animate-fade-in-up delay-200">
            <ChefHat className="w-8 h-8 mb-3 text-capri-gold" />
            <h3 className="font-serif text-xl font-bold mb-1">Fait Maison</h3>
            <p className="text-sm opacity-90 font-sans">Produits frais & Pâte artisanale</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuickInfo;