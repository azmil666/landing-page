import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookIcon from "@/components/icons/BookIcon";
import UsersGroupIcon from "@/components/icons/users-group-icon";
import RocketIcon from "@/components/icons/rocket-icon";
import MessageIcon from "@/components/icons/message-circle-icon";

/* ---------------- DATA ---------------- */

const features = [
  {
    title: "Workshops",
    description:
      "Hands-on coding sessions on Android, Web, Cloud, and AI technologies.",
    icon: "book",
    color: "#4285F4",
  },
  {
    title: "Networking",
    description:
      "Connect with industry experts, mentors, and fellow student developers.",
    icon: "users",
    color: "#34A853",
  },
  {
    title: "Hackathons",
    description:
      "Build innovative solutions to real-world problems in competitive environments.",
    icon: "rocket",
    color: "#FBBC05",
  },
  {
    title: "Tech Talks",
    description:
      "Insightful sessions from Google Developer Experts and alumni.",
    icon: "message",
    color: "#EA4335",
  },
];

/* ---------------- NO SIGNAL OVERLAY ---------------- */

const TVStatic = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className="absolute inset-0 z-20 rounded-xl overflow-hidden pointer-events-none"
  >
    {/* Scanlines */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)",
        opacity: 0.35,
      }}
    />

    {/* Soft noise pulse */}
    <motion.div
      className="absolute inset-0 bg-gray-300/10"
      animate={{ opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Label */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-mono text-[10px] tracking-widest text-gray-700/60">
        NO SIGNAL
      </span>
    </div>
  </motion.div>
);

/* ---------------- SECTION ---------------- */

export const InfoSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
        id="about"
        className="pt-24 pb-16 sm:py-24 bg-white relative z-20 overflow-hidden"
      >

      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADER (UNCHANGED) ---------- */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 font-semibold tracking-wide uppercase text-sm"
          >
            What We Do
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
            className="mt-2 text-3xl md:text-5xl font-bold text-transparent bg-clip-text inline-block"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  #4285F4 0%,
                  #4285F4 25%,
                  #34A853 25%,
                  #34A853 50%,
                  #FBBC05 50%,
                  #FBBC05 75%,
                  #EA4335 75%,
                  #EA4335 100%
                )
              `,
            }}
          >
            Learn. Connect. Grow.
          </motion.h2>
        </div>

        {/* ---------- TV GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;
            const isDimmed = activeIndex !== null && !isActive;

            return (
              <motion.div
                key={feature.title}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                animate={{
                  scale: 1,
                  y: 0,
                }}

                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
                className="relative cursor-pointer"
              >
                {/* TV SHELL */}
                <div
                    className="relative p-3 rounded-3xl border-4 bg-white
                              aspect-auto sm:[aspect-ratio:4/5]"
                    style={{
                      borderColor: isActive ? feature.color : "#E5E7EB",
                    }}
                  >

                  <div className="flex gap-3 h-full justify-center">


                    {/* SCREEN */}
                  <div
                className="relative flex-1 max-w-[280px] sm:max-w-none
                          rounded-xl border overflow-hidden
                          p-4 sm:p-6
                          flex flex-col items-center text-center"

                        style={{
                          borderColor: feature.color + "22", // ultra subtle
                          backgroundColor: "#ffffff",
                        }}
                      >


                      <AnimatePresence>
                        {isDimmed && <TVStatic />}
                      </AnimatePresence>

                      <motion.div
                          animate={{
                            opacity: isDimmed ? 0.25 : 1,
                            filter: isDimmed ? "blur(2px)" : "blur(0px)",
                          }}
                          transition={{ duration: 0.25 }}
                          className="
                        relative z-10 h-full
                        flex flex-col items-center text-center
                        justify-start
                      "

                        >

                        <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                        style={{ color: feature.color }}
                      >
                        {feature.icon === "book" && <BookIcon size={28} />}
                        {feature.icon === "users" && <UsersGroupIcon size={28} />}
                        {feature.icon === "rocket" && <RocketIcon size={28} />}
                        {feature.icon === "message" && <MessageIcon size={28} />}
                      </div>

                        <h3
                          className="text-xl font-bold mb-3 max-w-[220px] sm:max-w-none mx-auto"
                          style={{ color: feature.color }}
                        >

                          {feature.title}
                        </h3>


                        <p
                          className="leading-relaxed text-sm max-w-[240px] sm:max-w-none mx-auto"
                          style={{ color: feature.color, opacity: 0.75 }}
                        >

                        {feature.description}
                      </p>

                      </motion.div>
                    </div>

                    {/* SIDE PANEL */}
                   <div className="w-6 sm:w-8 flex flex-col items-center gap-3 pt-4">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-200 bg-white">
                        <div className="w-full h-0.5 bg-gray-200 mt-2.5" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-gray-200 bg-white">
                        <div className="w-full h-0.5 bg-gray-200 mt-2.5" />
                      </div>

                      <div className="mt-auto flex flex-col gap-1 pb-4 opacity-30">
                        <div className="w-4 h-1 bg-black rounded-full" />
                        <div className="w-4 h-1 bg-black rounded-full" />
                        <div className="w-4 h-1 bg-black rounded-full" />
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
