import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Data: Curated Ecosystem (Hero Section) ---
const TECH_ITEMS = [
  { text: "Study Jams",     color: "bg-blue-600",   shadow: "shadow-blue-600/50",   top: "15%", left: "20%", delay: 0.1 },
  { text: "Hackathons",     color: "bg-red-500",    shadow: "shadow-red-500/50",    top: "12%", left: "70%", delay: 1.2 },
  { text: "Flutter",        color: "bg-cyan-500",   shadow: "shadow-cyan-500/50",   top: "22%", left: "85%", delay: 0.5 },
  { text: "Google Cloud",   color: "bg-indigo-500", shadow: "shadow-indigo-500/50", top: "35%", left: "10%", delay: 1.5 },
  { text: "Tech Talks",     color: "bg-amber-500",  shadow: "shadow-amber-500/50",  top: "45%", left: "88%", delay: 0.8 },
  { text: "Gemini",         color: "bg-violet-500", shadow: "shadow-violet-500/50", top: "50%", left: "15%", delay: 0.3 },
  { text: "Open Source",    color: "bg-emerald-500",shadow: "shadow-emerald-500/50",top: "65%", left: "8%",  delay: 1.0 },
  { text: "Project Sprints",color: "bg-orange-500", shadow: "shadow-orange-500/50", top: "75%", left: "25%", delay: 0.6 },
  { text: "Career Growth",  color: "bg-green-600",  shadow: "shadow-green-600/50",  top: "70%", left: "80%", delay: 1.8 },
  { text: "Android",        color: "bg-lime-500",   shadow: "shadow-lime-500/50",   top: "85%", left: "65%", delay: 1.4 },
  { text: "Workshops",      color: "bg-sky-500",    shadow: "shadow-sky-500/50",    top: "10%", left: "45%", delay: 2.0 },
  { text: "Firebase",       color: "bg-yellow-500", shadow: "shadow-yellow-500/50", top: "82%", left: "45%", delay: 0.9 },
];

// --- Data: New Logo Pills for Welcome Section (FIXED POSITIONING) ---
const WELCOME_PILLS = [
  // Moved down to 12% so it is clearly visible
  { top: "12%", left: "5%", rotate: -15, delay: 0 },
  { top: "18%", left: "88%", rotate: 20, delay: 1.5 },
  { top: "65%", left: "3%", rotate: 45, delay: 0.5 },
  { top: "80%", left: "88%", rotate: -30, delay: 1.0 },
];

// --- Component: 3D Google Logo Pill (Seamless Animation) ---
const GooglePill3D = ({ top, left, rotate, delay }: { top: string, left: string, rotate: number, delay: number }) => {
  return (
    <motion.div
      className="absolute z-20 cursor-pointer hidden md:block"
      style={{ top, left }}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      // Continuous Float Animation
      animate={{ 
        y: [0, -15, 0], 
        rotate: [rotate, rotate + 5, rotate] 
      }}
      // Aesthetic Hover: Matches the "Tech Stack" pill feel
      whileHover={{ 
        scale: 1.15, 
        y: -8,         // Lifts up slightly
        zIndex: 50,
        filter: "brightness(1.02)", // Subtle highlight
      }}
      transition={{ 
        // Separate spring transition for interaction makes it feel "seamless"
        scale: { type: "spring", stiffness: 300, damping: 20 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }, // Keep the float slow
        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 1, delay },
      }}
    >
      {/* The Capsule Body */}
      <div className="relative w-28 h-12 rounded-full bg-slate-50 flex items-center justify-center overflow-hidden border border-white/60"
        style={{
          boxShadow: `
            inset 0px -4px 6px rgba(0,0,0,0.1),    
            inset 0px 4px 6px rgba(255,255,255,1), 
            0px 10px 30px -10px rgba(0,0,0,0.2)    
          `
        }}
      >
        {/* SVG Logo Brackets */}
        <img
          src="/gdg-svg.svg"
          alt="GDG Logo"
          className="w-10 h-10 object-contain"
        />


        {/* Glossy Reflection Overlay */}
        <div className="absolute top-1 left-3 right-3 h-4 bg-gradient-to-b from-white/90 to-transparent rounded-full opacity-70 blur-[0.5px] pointer-events-none" />
      </div>
    </motion.div>
  );
};

// --- Component: Floating Badge ---
const FloatingBadge = ({ item }: { item: typeof TECH_ITEMS[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
      transition={{
        opacity: { duration: 0.8, delay: item.delay },
        scale: { duration: 0.8, delay: item.delay },
        y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
      }}
      whileHover={{ 
        scale: 1.25, 
        backgroundColor: "rgba(255, 255, 255, 0.95)", 
        y: -5, 
        zIndex: 50,
        boxShadow: `0px 10px 40px -10px ${item.shadow.replace('shadow-', '').replace('/50', '')}`, 
      }}
      style={{ top: item.top, left: item.left }}
      className={`absolute z-0 hidden md:flex items-center gap-2 px-5 py-2.5 
        bg-white/60 backdrop-blur-[6px] border border-white/50 shadow-sm rounded-full 
        cursor-pointer group transition-all duration-300`}
    >
      <div className={`w-2 h-2 rounded-full ${item.color} group-hover:scale-125 transition-transform duration-300`} />
      <span className="text-xs font-semibold text-slate-600 tracking-wide group-hover:text-slate-900 transition-colors duration-300 whitespace-nowrap">
        {item.text}
      </span>
    </motion.div>
  );
};

// --- Component: 3D Jelly Button ---
const HeroJellyButton = ({ text }: { text: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative group px-10 py-4 rounded-full font-bold text-white text-base tracking-widest overflow-hidden"
      style={{
        background: `linear-gradient(90deg, #EA4335 0%, #EA4335 25%, #4285F4 25%, #4285F4 50%, #34A853 50%, #34A853 75%, #FBBC05 75%, #FBBC05 100%)`,
        boxShadow: `0 10px 20px -5px rgba(0, 0, 0, 0.3), inset 0 -4px 6px rgba(0,0,0,0.3), inset 0 4px 6px rgba(255,255,255,0.5)`
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/60 to-transparent opacity-80 pointer-events-none" />
      <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out z-10" />
      <span className="relative z-20 drop-shadow-md">{text}</span>
    </motion.button>
  );
};

// --- Component: Holographic Button ---
const HolographicButton = ({ text }: { text: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="relative px-12 py-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-xl border border-white/40 group"
      style={{
        boxShadow: `
          inset 0px 2px 4px 0px rgba(255,255,255, 0.9),  
          inset 6px 6px 14px 0px rgba(234, 67, 53, 0.2), 
          inset -6px 6px 14px 0px rgba(66, 133, 244, 0.2), 
          inset 0px -6px 14px 0px rgba(52, 168, 83, 0.2), 
          0px 10px 25px -5px rgba(0,0,0,0.15) 
        `
      }}
    >
      <div className="absolute top-0 left-4 right-4 h-2/5 bg-gradient-to-b from-white/80 to-transparent rounded-full opacity-70 blur-[1px] pointer-events-none" />
      <span className="relative z-10 text-gray-600 text-xl md:text-2xl font-normal tracking-wide group-hover:text-gray-800 transition-colors">
        {text}
      </span>
      <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
    </motion.button>
  );
};

export const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const logoY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-25%"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.35]);

  return (
    <div className="relative w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[100svh] overflow-hidden bg-slate-50">
        <div className="sticky top-0 h-[100svh] flex items-center justify-center">
          <motion.div style={{ scale: logoScale, y: logoY, opacity: logoOpacity }} className="relative flex items-center justify-center w-full h-full">
            
            {/* Ecosystem Pills */}
            <div className="absolute w-full h-full max-w-[95vw] mx-auto pointer-events-none">
               <div className="relative w-full h-full pointer-events-auto">
                 {TECH_ITEMS.map((item, index) => (
                   <FloatingBadge key={index} item={item} />
                 ))}
               </div>
            </div>

            {/* Central 3D Logo */}
            <motion.div animate={{ y: [-12, 12, -12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="z-10 relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="/gdglogo.webp"
                alt="GDG 3D Logo"
                className="w-[75vw] h-[75vw] md:w-[34vw] md:h-[34vw] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="relative z-10">
        <div className="bg-white/90 backdrop-blur-xl border-t border-white/40 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] rounded-t-[3rem] px-6 pb-24 pt-24 md:pt-32 min-h-[80vh] overflow-hidden">
          
          {/* --- NEW: Floating 3D Logo Pills for Welcome Section --- */}
          <div className="absolute inset-0 w-full h-full pointer-events-none max-w-7xl mx-auto">
             <div className="relative w-full h-full pointer-events-auto"> 
                 {/* Pointer events auto so we can hover the pills */}
                 {WELCOME_PILLS.map((pill, index) => (
                    <GooglePill3D key={index} {...pill} />
                 ))}
             </div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="h-2 w-14 md:w-16 bg-[#4285F4] rounded-full" />
                <div className="h-2 w-14 md:w-16 bg-[#34A853] rounded-full" />
                <div className="h-2 w-14 md:w-16 bg-[#FBBC05] rounded-full" />
                <div className="h-2 w-14 md:w-16 bg-[#EA4335] rounded-full" />
              </div>

              <h1 className="text-4xl md:text-8xl font-normal tracking-tight text-gray-900 mb-6 md:mb-8">
                Welcome to <br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, #4285F4 0%, #4285F4 25%, #34A853 25%, #34A853 50%, #FBBC05 50%, #FBBC05 75%, #EA4335 75%, #EA4335 100%)` }}>
                GDG on Campus
              </span>
              </h1>

              <h2 className="text-xl md:text-4xl text-gray-700 font-medium mb-8 md:mb-10">
                Government Model Engineering College
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-xl leading-relaxed mb-10 md:mb-14 px-2">
                A community-led initiative for students to learn Google developer
                technologies, connect with industry experts, and grow their
                skills through hands-on workshops and events.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <HeroJellyButton text="Explore Community" />
                <HolographicButton text="Upcoming Events" />
              </div>

            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};