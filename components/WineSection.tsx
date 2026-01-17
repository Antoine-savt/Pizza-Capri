import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Wine } from 'lucide-react';

const WineSection: React.FC = () => {
  const wines = MENU_ITEMS.filter(item => item.category === 'vins');

  return (
    <section id="vins" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <div className="relative">
                <div className="absolute -top-10 -left-10 text-[10rem] text-capri-cream font-serif z-0 select-none">VINO</div>
                <div className="relative z-10">
                  <h2 className="text-capri-red font-sans font-bold uppercase tracking-widest text-sm mb-3">La Cave</h2>
                  <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Vins Italiens Sélectionnés</h3>
                  
                  <div className="space-y-8">
                    {wines.map((wine) => (
                      <div key={wine.id} className="flex gap-4 group cursor-default">
                        <div className="bg-red-50 p-3 rounded-full h-fit group-hover:bg-red-100 transition-colors">
                          <Wine className="text-capri-red" size={24} />
                        </div>
                        <div className="flex-grow border-b border-gray-100 pb-6">
                          <div className="flex justify-between items-baseline mb-1">
                            <h4 className="font-serif text-xl font-bold text-gray-800">{wine.name}</h4>
                            <span className="font-sans font-bold text-capri-red">{wine.price}</span>
                          </div>
                          <p className="text-gray-500 italic text-sm">{wine.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-sm text-gray-400 font-serif italic">
                    L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
                  </p>
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto relative h-[500px]">
               <img 
                src="https://www.oullieres.fr/wp-content/uploads/2021/08/DomainedesOulieres-18-02-2021SebastienCABANES-0174-scaled-4-683x1024.jpg" 
                alt="Bouteille de vin rouge domaine des Oullières" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WineSection;