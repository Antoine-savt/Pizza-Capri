import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category, MenuItem } from '../types';
import { Utensils, Pizza, Wheat, Beef, Coffee, ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('pizzas');
  const [isExpanded, setIsExpanded] = useState(false);

  // Define how many items to show initially
  const INITIAL_DISPLAY_COUNT = 6;

  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'pizzas', label: 'Pizzas', icon: <Pizza size={20} /> },
    { id: 'pates', label: 'Pâtes Fraîches', icon: <Wheat size={20} /> },
    { id: 'viandes', label: 'Viandes', icon: <Beef size={20} /> },
    { id: 'entrees', label: 'Entrées', icon: <Utensils size={20} /> },
    { id: 'boissons', label: 'Boissons', icon: <Coffee size={20} /> },
  ];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);
  
  // Decide which items to display based on expansion state
  const displayedItems = isExpanded ? filteredItems : filteredItems.slice(0, INITIAL_DISPLAY_COUNT);
  
  const hasHiddenItems = filteredItems.length > INITIAL_DISPLAY_COUNT;

  const handleCategoryChange = (catId: Category) => {
    setActiveCategory(catId);
    setIsExpanded(false); // Reset expansion when switching tabs
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-capri-cream">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-capri-red font-sans font-bold uppercase tracking-widest text-sm mb-3">Notre Carte</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">Le Goût de l'Italie</h3>
          <p className="text-gray-600 max-w-2xl mx-auto italic font-serif text-lg">
            Tous nos plats sont fait Maison avec ingrédients frais. Une cuisine authentique préparée avec passion.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-sans text-sm md:text-base font-bold uppercase tracking-wide
                ${activeCategory === cat.id 
                  ? 'bg-capri-red text-white shadow-lg transform -translate-y-1' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-capri-red hover:text-capri-red'}`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item: MenuItem) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col animate-fade-in-up"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-0 right-0 bg-capri-gold text-capri-stone font-bold px-4 py-1 rounded-bl-lg">
                  {item.price}
                </div>
                {item.highlight && (
                  <div className="absolute top-4 left-4 bg-capri-green text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md">
                    Incontournable
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif text-xl font-bold text-gray-800 group-hover:text-capri-red transition-colors">
                    {item.name}
                  </h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-dashed border-gray-200">
                  <span className="text-xs font-bold text-capri-red uppercase tracking-wide">
                    {item.category === 'pizzas' ? 'Pâte fraîche maison' : 
                     item.category === 'pates' ? 'Recette traditionnelle' : 
                     item.category === 'boissons' ? 'Rafraîchissant' : 'Qualité supérieure'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Only shown if there are more items to see or if expanded */}
        {hasHiddenItems && (
          <div className="mt-12 text-center">
            <Button 
              variant="outline-primary" 
              onClick={toggleExpansion}
              className="inline-flex items-center gap-2 px-8 py-3"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={20} />
                  Réduire la liste
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  Voir toute la sélection ({filteredItems.length - INITIAL_DISPLAY_COUNT} de plus)
                </>
              )}
            </Button>
          </div>
        )}

        {/* Bambino Note */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border-2 border-dashed border-gray-300 text-center max-w-3xl mx-auto">
          <h4 className="font-serif text-2xl text-gray-800 mb-2">👶 Menu Bambino (12,00€)</h4>
          <p className="text-gray-600">
            Pour nos petits gourmets jusqu'à 12 ans : Plat (Pizza margherita ou Spaghetti bolo ou Steak haché frites) + Dessert + Boisson.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;