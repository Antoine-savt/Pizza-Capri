import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';
import { PHONE_NUMBER } from '../constants';

interface HeaderProps {
  onReserve: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReserve }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Vins', href: '#vins' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-capri-cream shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50">
          <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-capri-red">Pizza</span> <span className={isScrolled ? "text-capri-stone" : "text-white"}>Capri</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-sans font-medium text-lg hover:text-capri-gold transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button onClick={onReserve} variant={isScrolled ? 'primary' : 'gold'}>
            Réserver
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className={`p-2 rounded-full ${isScrolled ? 'bg-capri-red text-white' : 'bg-white text-capri-red'}`}>
              <Phone size={20} />
           </a>
           <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 focus:outline-none ${isScrolled ? 'text-capri-stone' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-capri-stone bg-opacity-95 backdrop-blur-lg z-30 transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="text-white font-serif text-3xl mb-4">Pizza Capri</div>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-sans font-light hover:text-capri-gold"
          >
            {link.name}
          </a>
        ))}
        <Button onClick={() => { setIsMobileMenuOpen(false); onReserve(); }} variant="gold" className="mt-8">
          Réserver une table
        </Button>
      </div>
    </header>
  );
};

export default Header;
