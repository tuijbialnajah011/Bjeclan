import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0a0a0a] font-sans selection:bg-blue-200 pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-12 group"
        >
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span>Back to Home</span>
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose dark:prose-invert prose-slate prose-lg max-w-none"
        >
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-12">
            Strict Policy & Terms
          </h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide flex items-center gap-4">
                <span className="text-red-500 font-mono text-sm">01.</span> Zero Tolerance
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                We have a zero tolerance policy for malicious activity, harm, or destructive behavior. 
                Any misuse of skills under any circumstance will result in immediate removal. Our aim 
                is to build and protect, not to destroy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide flex items-center gap-4">
                <span className="text-red-500 font-mono text-sm">02.</span> Core Mission
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                This clan is built for learning, evolution, and disciplined thinking. Stagnation cannot be tolerated. 
                While we accept failures as part of the learning process, giving up or refusing to adapt is against our values.
                We build minds—not threats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide flex items-center gap-4">
                <span className="text-red-500 font-mono text-sm">03.</span> Leadership Structure
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                The hierarchical structure of the organization must be respected. Ranks (A through E) and roles 
                (Founder, Co-Founder) dictate organizational structure for efficiency and mentorship. Disrespecting 
                higher grades or refusing guidance defeats the purpose of the group.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide flex items-center gap-4">
                <span className="text-red-500 font-mono text-sm">04.</span> Enlistment Rules
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Requests to join must be honest and correctly specify skills, qualifications, and the real reason 
                you want to join BJE. Disguising intentions or providing false identities is prohibited. 
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
