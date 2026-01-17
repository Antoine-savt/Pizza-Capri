import React from 'react';
import { Download, FileText, Globe } from 'lucide-react';
import Button from './Button';

const DownloadSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#44403C 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
          <Globe className="text-capri-gold" size={24} />
        </div>
        
        <h2 className="text-capri-gold font-sans font-bold uppercase tracking-widest text-sm mb-3">International</h2>
        <h3 className="text-3xl md:text-5xl font-serif mb-8">Téléchargez notre Carte</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Préparez votre commande ou votre visite. Notre menu complet est disponible en téléchargement PDF dans plusieurs langues.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* French */}
          <a href="#" className="group">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-capri-red transition-all duration-300 flex flex-col items-center">
              <FileText size={40} className="text-white mb-4 group-hover:text-capri-red transition-colors" />
              <span className="font-serif font-bold text-xl mb-1">Français</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-4">La Carte Originale</span>
              <Button variant="outline" className="text-sm py-2 px-4 w-full border-white/30 group-hover:bg-capri-red group-hover:border-capri-red">
                Télécharger
              </Button>
            </div>
          </a>

          {/* English */}
          <a href="#" className="group">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-capri-red transition-all duration-300 flex flex-col items-center">
              <FileText size={40} className="text-white mb-4 group-hover:text-capri-red transition-colors" />
              <span className="font-serif font-bold text-xl mb-1">English</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-4">English Menu</span>
              <Button variant="outline" className="text-sm py-2 px-4 w-full border-white/30 group-hover:bg-capri-red group-hover:border-capri-red">
                Download
              </Button>
            </div>
          </a>

          {/* Italian */}
          <a href="#" className="group">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-capri-red transition-all duration-300 flex flex-col items-center">
              <FileText size={40} className="text-white mb-4 group-hover:text-capri-red transition-colors" />
              <span className="font-serif font-bold text-xl mb-1">Italiano</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-4">Menu Italiano</span>
              <Button variant="outline" className="text-sm py-2 px-4 w-full border-white/30 group-hover:bg-capri-red group-hover:border-capri-red">
                Scaricare
              </Button>
            </div>
          </a>

          {/* Spanish */}
          <a href="#" className="group">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-capri-red transition-all duration-300 flex flex-col items-center">
              <FileText size={40} className="text-white mb-4 group-hover:text-capri-red transition-colors" />
              <span className="font-serif font-bold text-xl mb-1">Español</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-4">Menú Español</span>
              <Button variant="outline" className="text-sm py-2 px-4 w-full border-white/30 group-hover:bg-capri-red group-hover:border-capri-red">
                Descargar
              </Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
