import React from 'react';
import Button from './Button';

interface HeroProps {
  onReserve: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReserve }) => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.pizzanapoletana.org/struttura/pagine_bicolor/mobile/disciplinare_avpn_2.jpg" 
          alt="Pizza italienne artisanale" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        <div className="inline-block border border-capri-gold/50 rounded-full px-4 py-1 mb-4 bg-black/30 backdrop-blur-sm animate-fade-in-up">
           <span className="text-capri-gold font-sans text-xs md:text-sm font-bold tracking-widest uppercase">
             Versailles • Place du Marché
           </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-none drop-shadow-xl animate-fade-in-up delay-100">
          Pizza CAPRI
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif text-white italic mb-8 font-light animate-fade-in-up delay-100">
          Cuisine Maison & Grotte Médiévale
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <Button onClick={onReserve} variant="primary" className="text-lg px-8 py-4 shadow-xl w-full sm:w-auto">
            Réserver une table
          </Button>
          <a href="#menu" className="w-full sm:w-auto">
             <Button variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto backdrop-blur-sm bg-black/10">
              Voir la Carte
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;