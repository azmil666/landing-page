import React from "react";
import { motion } from "framer-motion";

export const MascotSection: React.FC = () => {
  return (
    <section
        className="
          relative bg-white
          pt-16 pb-32          
          sm:pt-24 sm:pb-32   
          md:pt-28 md:pb-44  
          overflow-hidden
        "
      >



      <div className="max-w-7xl mx-auto px-6">
      <div className="
            grid grid-cols-1 md:grid-cols-2
            gap-12 md:gap-16
            items-center
            text-center md:text-left
            translate-y-0 md:-translate-y-6
          ">

          
          {/* === Mascot Illustration === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
           <motion.img
            src="/mascot.webp"
            alt="GDG MEC Mascot"
            className="w-72 md:w-[22rem] lg:w-[24rem] select-none"
            animate={{
                y: [0, -3, 0],
                rotate: [0, 0.8, 0, -0.8, 0],
            }}
            whileHover={{
                rotate: 2,
                scale: 1.04,
            }}
            transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />


          </motion.div>

          {/* === Text Content === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Meet Our Mascot
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            <span
                className="text-transparent bg-clip-text inline-flex items-center gap-3"
                style={{
                backgroundImage: `linear-gradient(
                    90deg,
                    #4285F4 0%,
                    #4285F4 25%,
                    #34A853 25%,
                    #34A853 50%,
                    #FBBC05 50%,
                    #FBBC05 75%,
                    #EA4335 75%,
                    #EA4335 100%
                )`,
                }}
            >
                Say hello to Ping

                {/* Inline mascot replacing emoji */}
                {/* <img
                src="/ping.webp"
                alt="Ping mascot"
                className="
                    w-9 h-9 md:w-10 md:h-10
                    translate-y-[2px]
                    select-none
                "
                /> */}
            </span>
            </h2>



            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Ping represents the spirit of the GDG on Campus community at
              Government Model Engineering College — curious, collaborative, and
              always learning.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              From workshops to hackathons, Ping reminds us that building
              together, sharing ideas, and growing as developers is what makes
              this community special.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MascotSection;
