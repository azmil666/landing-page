import React from 'react';
import { Twitter, Instagram, Linkedin, MessageCircle, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Main Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* Optional: You can put a small logo img here if you have one */}
              <h4 className="font-bold text-xl text-gray-900 tracking-tight">
                GDG on Campus
              </h4>
            </div>
            <p className="font-medium text-gray-700 mb-4">
              Government Model Engineering College
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering students with Google technologies through workshops, events, and collaborative learning. A community for developers to learn, connect, and grow.
            </p>
            {/* Social Icons Row */}
            <div className="flex gap-4">
              <SocialIcon icon={Instagram} href="#" />
              <SocialIcon icon={Linkedin} href="#" />
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Github} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              <FooterLink text="Home" href="#" />
              <FooterLink text="About Us" href="#about" />
              <FooterLink text="Team" href="#" />
              <FooterLink text="Events" href="#" />
              <FooterLink text="Contact" href="#" />
            </ul>
          </div>

          {/* Column 3: Programs (Taken from your InfoSection) */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Programs</h5>
            <ul className="space-y-3 text-sm">
              <FooterLink text="Study Jams" href="#" />
              <FooterLink text="Tech Workshops" href="#" />
              <FooterLink text="Hackathons" href="#" />
              <FooterLink text="DevFest Student" href="#" />
              <FooterLink text="Solution Challenge" href="#" />
            </ul>
          </div>

          {/* Column 4: Connect / Contact */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Connect With Us</h5>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-500">
                Join our community to stay updated with the latest news and events.
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <a href="mailto:contact@gdgmec.com" className="hover:text-blue-600 transition-colors">
                  contact@gdgmec.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MessageCircle size={16} />
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Join Discord Server
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Copyright Section --- */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm mb-3">
            &copy; {new Date().getFullYear()} GDG on Campus Government Model Engineering College. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 max-w-3xl mx-auto leading-normal">
            Google Developer Groups is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation. To learn more about the GDG program, visit <a href="https://developers.google.com/community/gdg" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">developers.google.com/community/gdg</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Helper Components for clean code ---

const FooterLink = ({ text, href }: { text: string; href: string }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-500 hover:text-[#4285F4] hover:pl-1 transition-all duration-300"
    >
      {text}
    </a>
  </li>
);

const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a 
    href={href} 
    className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] transition-all duration-300 shadow-sm"
  >
    <Icon size={16} />
  </a>
);