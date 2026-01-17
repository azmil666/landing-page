import React from 'react';
import { motion } from 'framer-motion';
import BookIcon from "@/components/icons/BookIcon";
import UsersGroupIcon from "@/components/icons/users-group-icon";
import RocketIcon from "@/components/icons/rocket-icon";
import MessageIcon from "@/components/icons/message-circle-icon";

const features = [
  {
    title: 'Workshops',
    description: 'Hands-on coding sessions on Android, Web, Cloud, and AI technologies.',
    icon: 'book',  
  },
  {
    title: 'Networking',
    description: 'Connect with industry experts, mentors, and fellow student developers.',
    icon: 'users',
  },
  {
    title: 'Hackathons',
    description: 'Build innovative solutions to real-world problems in competitive environments.',
    icon: 'rocket',
  },
  {
    title: 'Tech Talks',
    description: 'Insightful sessions from Google Developer Experts and alumni.',
    icon: 'message',
  },
];

export const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-google-black font-semibold tracking-wide uppercase text-sm"
          >
            What We Do
          </motion.h3>
          
          {/* FIX: Added 'inline-block' so the gradient fits the text width, 
            not the screen width. 
          */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-2 text-transparent bg-clip-text inline-block"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div
               className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
              {feature.icon === "book" ? (
                <BookIcon size={28} className="text-[#4285F4]" />
              ) : feature.icon === "users" ? (
                <UsersGroupIcon size={28} className="text-[#34A853]" />
              ) : feature.icon === "rocket" ? (
              <RocketIcon size={28} className="text-[#EA4335]" />
              ) : feature.icon === "message" ? (
              <MessageIcon size={28} className="text-[#FBBC05]" />
              ) : null}
              </div> 

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};