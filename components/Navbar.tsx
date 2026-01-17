import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- UPGRADED: Seamless Jelly 3D Button ---
const Jelly3DButton = ({ onClick, className }: { onClick?: () => void, className?: string }) => {
  return (
    <motion.button
      onClick={onClick}
      // "Spring" animation makes the scale feels physical and weighty, not linear/wonky
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`relative group h-11 px-8 rounded-full font-bold text-white text-sm tracking-widest overflow-hidden ${className}`}
      style={{
        // 1. The Google Color Segmented Background
        background: `linear-gradient(90deg, 
          #EA4335 0%, #EA4335 25%, 
          #4285F4 25%, #4285F4 50%, 
          #34A853 50%, #34A853 75%, 
          #FBBC05 75%, #FBBC05 100%)`,
        // 2. The 3D Bevels (Inset Shadows) + Drop Shadow
        boxShadow: `
          0 10px 20px -5px rgba(0, 0, 0, 0.2),       /* Soft Drop Shadow */
          inset 0 -4px 6px rgba(0,0,0,0.3),          /* Deep Bottom Shade */
          inset 0 4px 6px rgba(255,255,255,0.5)      /* Bright Top Highlight */
        `
      }}
    >
      {/* A. The "Glass" Top Reflection (Static) */}
      <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/60 to-transparent opacity-80 pointer-events-none" />

      {/* B. The Hover Shine (Moves across the button) */}
      <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out z-10" />

      {/* C. The Text (Expands slightly on hover) */}
      <span className="relative z-20 drop-shadow-md transition-all duration-300 group-hover:tracking-[0.15em]">
        JOIN US
      </span>
      
      {/* D. Subtle Internal Glow on Hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
    </motion.button>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', color: 'hover:text-[#4285F4]' },
    { name: 'About', href: '#about', color: 'hover:text-[#EA4335]' },
    { name: 'Events', href: '#events', color: 'hover:text-[#FBBC05]' },
    { name: 'Team', href: '#team', color: 'hover:text-[#34A853]' },
    { name: 'Contact', href: '#contact', color: 'hover:text-[#4285F4]' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* === Logo Section === */}
        <div className="flex items-center gap-3 cursor-pointer z-50">
           <img 
             src="/gdg svg.svg" 
             alt="GDG Logo" 
             className="h-8 w-auto object-contain"
           />
           <div className="flex flex-col leading-tight">
             <span className="font-normal text-lg tracking-tight text-gray-900">
               GDG on Campus
             </span>
             <span className="text-xs text-gray-500 font-normal">Government Model Engineering College</span>
           </div>
        </div>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold text-gray-600 transition-colors duration-300 text-sm ${link.color}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* THE NEW SEAMLESS BUTTON */}
          <Jelly3DButton />
        </div>

        {/* === Mobile Hamburger === */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* === Mobile Menu Overlay === */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-medium text-gray-800 transition-colors ${link.color}`}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile 3D Button */}
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.5 }}
              >
                <Jelly3DButton onClick={() => setIsOpen(false)} className="px-10 py-3 text-lg h-14" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};