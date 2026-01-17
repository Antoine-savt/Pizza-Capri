import React from 'react';
import { Accessibility, Fan, Umbrella, Wine, ShoppingBag, Wifi, Dog } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    { icon: <Accessibility strokeWidth={1.5} size={28} />, label: "Accès PMR" },
    { icon: <Fan strokeWidth={1.5} size={28} />, label: "Climatisation" },
    { icon: <Umbrella strokeWidth={1.5} size={28} />, label: "Terrasse" },
    { icon: <Wine strokeWidth={1.5} size={28} />, label: "Événements privés" },
    { icon: <ShoppingBag strokeWidth={1.5} size={28} />, label: "À emporter" },
    { icon: <Wifi strokeWidth={1.5} size={28} />, label: "Wi-Fi gratuit" },
    { icon: <Dog strokeWidth={1.5} size={28} />, label: "Animaux admis" },
  ];

  return (
    <section className="py-10 bg-[#F9F7F2] border-t border-stone-200">
      <div className="container mx-auto px-4">
        {/* Layout: Grid on mobile, Flex row centered on desktop for a clean look */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row lg:justify-center lg:gap-12 gap-y-8 gap-x-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center gap-3 group cursor-default">
              <div className="text-gray-400 group-hover:text-capri-gold transition-colors duration-300">
                {service.icon}
              </div>
              <span className="text-xs md:text-sm font-serif text-gray-500 text-center tracking-wide group-hover:text-gray-800 transition-colors">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
