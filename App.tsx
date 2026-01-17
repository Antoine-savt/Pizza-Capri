import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import FormulesSection from './components/FormulesSection';
import MenuSection from './components/MenuSection';
import ServicesSection from './components/ServicesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openReservation = () => setIsModalOpen(true);
  const closeReservation = () => setIsModalOpen(false);

  return (
    <div className="font-sans antialiased text-gray-900 bg-capri-cream min-h-screen flex flex-col">
      <Header onReserve={openReservation} />
      
      <main className="flex-grow">
        <Hero onReserve={openReservation} />
        {/* Quick Info Bar */}
        <QuickInfo />
        
        {/* Highlighted Set Menus (Formules) */}
        <FormulesSection />

        {/* Regular A La Carte Menu */}
        <MenuSection />
        
        {/* Services Icons - Discreet Section */}
        <ServicesSection />
        
        {/* Download Menu Section (replacing Wines) */}
        <DownloadSection />
      </main>

      <Footer />
      
      <ReservationModal isOpen={isModalOpen} onClose={closeReservation} />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button 
          onClick={openReservation}
          className="bg-capri-red text-white p-4 rounded-full shadow-2xl hover:bg-red-800 transition-colors border-2 border-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default App;
