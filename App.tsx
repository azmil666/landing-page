import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { MascotSection} from './components/MascotSection'


const App: React.FC = () => {
  return (
    <main className="bg-white min-h-screen selection:bg-google-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <InfoSection />
       
      {/* Additional placeholder spacer to allow content to scroll nicely over the fixed hero if needed */}
      <div className="bg-white h-24"></div> 
      <MascotSection /> 
     
      <Footer />
    </main>
  );
};

export default App;