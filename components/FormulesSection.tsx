import React from 'react';

const FormulesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-capri-cream rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-capri-cream rounded-full -ml-48 -mb-48 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-capri-red font-sans font-bold uppercase tracking-widest text-sm mb-3">Pour le déjeuner</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">Nos Formules</h3>
          <p className="text-gray-500 max-w-2xl mx-auto italic font-serif">
            Servies tous les jours sauf vendredi soir, samedi, dimanche et jours fériés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Formule Express */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-capri-gold text-white px-6 py-3 rounded-bl-2xl font-serif font-bold text-2xl shadow-sm z-10">
              14,50 €
            </div>
            
            <div className="mb-6 border-b border-gray-100 pb-6">
              <h4 className="font-serif text-3xl font-bold text-gray-800 mb-2 group-hover:text-capri-red transition-colors">Formule Express</h4>
              <div className="flex items-center gap-3 text-lg font-medium text-gray-600">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Midi</span>
                <span>Entrée + Plat</span>
                <span className="text-gray-400 italic">ou</span>
                <span>Plat + Dessert</span>
              </div>
            </div>

            <div className="flex-grow">
               <p className="text-gray-600 mb-4 italic">Au choix parmi la sélection de la carte :</p>
               <ul className="space-y-2 text-sm text-gray-700">
                 <li className="flex items-start gap-2">
                   <span className="text-capri-gold mt-1">✓</span>
                   <span><strong>Entrées :</strong> Oeuf dur mayonnaise, Thon, Salami, Mortadelle, Crudités, Salade verte.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-capri-gold mt-1">✓</span>
                   <span><strong>Plats :</strong> Pizzas (Nona, Regina, Margherita, Paysanne), Pâtes (Bolognaise, Carbonara, Rigatoni 4 fromages), Viandes (Escalope de dinde, Steak grillé), Salades.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-capri-gold mt-1">✓</span>
                   <span><strong>Desserts :</strong> Fromages (Taleggio, Chèvre), Crème caramel, Tarte du jour, Mousse au chocolat.</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Formule Gourmande */}
          <div className="bg-capri-cream border-2 border-capri-red/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow flex flex-col relative overflow-hidden scale-100 lg:scale-105 z-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-capri-red"></div>
            <div className="absolute top-0 right-0 bg-capri-red text-white px-6 py-3 rounded-bl-2xl font-serif font-bold text-2xl shadow-sm z-10">
              17,50 €
            </div>
            
            <div className="mb-6 border-b border-dashed border-gray-300 pb-6">
              <h4 className="font-serif text-3xl font-bold text-capri-red mb-2">Formule Gourmande</h4>
              <div className="flex items-center gap-3 text-lg font-bold text-gray-700">
                <span className="bg-red-100 text-capri-red px-3 py-1 rounded-full text-sm">Complet</span>
                <span>Entrée + Plat + Dessert</span>
              </div>
            </div>

            <div className="space-y-6 flex-grow">
              {/* Entrées */}
              <div>
                <h5 className="font-serif font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-capri-red"></span> Entrées
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed pl-4">
                  Oeuf dur mayonnaise, Thon, Salami, Mortadelle, Crudités ou Salade verte.
                </p>
              </div>

              {/* Plats */}
              <div>
                <h5 className="font-serif font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-capri-red"></span> Plats
                </h5>
                <div className="text-gray-600 text-sm leading-relaxed pl-4 space-y-1">
                  <p><strong>Pizzas :</strong> Nona, Regina, Margherita ou Pizza Paysanne</p>
                  <p><strong>Pâtes :</strong> Spaghetti bolognaise, Spaghetti Carbonara, Rigatoni 4 fromages</p>
                  <p><strong>Viandes :</strong> Escalope de dinde (Normande, Gorgonzola ou Milanaise), Steak grillé</p>
                  <p><strong>Salades :</strong> Salade de poulet, Salade Mozzarella</p>
                  <p className="text-xs text-gray-400 italic mt-1">Garniture : Frites, haricots verts, spaghetti ou salade verte.</p>
                </div>
              </div>

              {/* Desserts */}
              <div>
                <h5 className="font-serif font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-capri-red"></span> Fromages ou Desserts
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed pl-4">
                  Taleggio, Chèvre, Crème caramel, Tarte du jour, Mousse au chocolat.
                </p>
              </div>
            </div>

             <div className="mt-6 pt-4 border-t border-gray-200 text-center">
               <p className="text-xs text-gray-500 italic">Boissons non comprises. Supplément garniture ou sauce 1€.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormulesSection;
