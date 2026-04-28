import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <nav className="pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 font-sans shadow-lg rounded-full px-6 py-3 flex items-center justify-center">
        <NavLink to="/" className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          </motion.div>
          <span className="font-semibold text-base text-slate-900 dark:text-white tracking-wide">𝙱𝙹𝙴 ~ Clan</span>
        </NavLink>
      </nav>
    </div>
  );
};
