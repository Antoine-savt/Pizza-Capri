import React from 'react';

const CaveSection: React.FC = () => {
  return (
    <section id="grotte" className="bg-capri-stone py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Grid */}
          <div className="w-full md:w-1/2 relative group">
            <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl border-4 border-capri-gold/20">
               {/* Placeholder for Cave Image - using a stone wall/cellar like image */}
              <img 
                src="https://picsum.photos/600/800?random=30" 
                alt="Intérieur de la grotte médiévale" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative Offset Border */}
            <div className="absolute top-6 -left-6 w-full h-full border-2 border-capri-gold/30 rounded-lg -z-0 hidden md:block"></div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-white">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-1 w-12 bg-capri-gold"></span>
              <span className="text-capri-gold uppercase tracking-widest font-bold text-sm">Une atmosphère unique</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Pizza CAPRI <span className="text-capri-gold italic">et sa grotte</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <span className="text-white font-bold">Ouvert ses portes en 1970</span>, Pizza Capri est la première pizzeria de Versailles. Au 17 rue Ducis, l'histoire rencontre la gastronomie dans un lieu chargé de souvenirs.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Notre salle principale est nichée au cœur d'une grotte médiévale authentique. Murs en pierres apparentes, éclairage tamisé à la bougie... C'est le cadre idéal pour un dîner romantique ou une soirée mémorable.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded border border-white/10 text-center hover:bg-white/10 transition-colors">
                <span className="block text-3xl mb-2">🍕</span>
                <span className="font-serif text-lg">1ère Pizzeria (1970)</span>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10 text-center hover:bg-white/10 transition-colors">
                 <span className="block text-3xl mb-2">🏛️</span>
                <span className="font-serif text-lg">Grotte Médiévale</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaveSection;