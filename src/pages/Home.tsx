import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Trophy, ChevronRight, Shield, Swords, Activity, Crown, Star } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import { Member } from '../types';

export default function Home() {
  const { members } = useAppContext();

  const founders = members.filter(m => m.grade === 'Founder' || m.grade === 'Co.Founder');
  const gradeA = members.filter(m => m.grade === 'A');
  const gradeB = members.filter(m => m.grade === 'B');
  const gradeC = members.filter(m => m.grade === 'C');
  const gradeD = members.filter(m => m.grade === 'D');
  const gradeE = members.filter(m => m.grade === 'E');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden bg-white dark:bg-slate-950 font-sans">
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent" />
      </div>
      
      <main className="flex-grow flex flex-col px-4 sm:px-6 relative z-10 pt-32 pb-32">
        
        {/* --- Hero Section --- */}
        <div className="flex flex-col items-center justify-center pt-10 pb-16 max-w-5xl mx-auto text-center transform-gpu">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-black/50 text-slate-600 dark:text-slate-400 mb-8 backdrop-blur-md shadow-sm"
          >
            <Shield className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-medium tracking-wide">BJE Power System</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight max-w-3xl"
          >
            We accept failures, <br/>
            <span className="text-blue-500">but stagnation cannot be tolerated.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mx-auto mb-12 font-medium"
          >
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-slate-400" />
              <span>Founder: {founders.find(m => m.grade === 'Founder')?.name || 'Tuijbialnajah'}</span>
            </div>
            <span className="hidden md:block text-slate-300 dark:text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-slate-400" />
              <span>Co-Founder: {founders.find(m => m.grade === 'Co.Founder')?.name || '𝙱𝙹𝙴 ~ Vegeta'}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              to="/members"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <Users className="w-5 h-5" />
              Members List
            </Link>
          </motion.div>
        </div>

        {/* --- Grade Tiers --- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="mb-12">
            <h2 className="text-center text-xl font-medium text-slate-900 dark:text-white flex items-center justify-center gap-3">
              Grade Tiers
            </h2>
            <p className="text-center text-sm text-slate-500 mt-2">Classifications based on skill and contribution</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Template for a Grade Block */}
            {[
              { title: 'Grade A', color: 'text-blue-600 dark:text-blue-400', border: 'border-blue-100 dark:border-blue-900/30', bg: 'bg-white dark:bg-slate-900/50', list: gradeA },
              { title: 'Grade B', color: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-100 dark:border-indigo-900/30', bg: 'bg-white dark:bg-slate-900/50', list: gradeB },
              { title: 'Grade C', color: 'text-violet-600 dark:text-violet-400', border: 'border-violet-100 dark:border-violet-900/30', bg: 'bg-white dark:bg-slate-900/50', list: gradeC },
              { title: 'Grade D', color: 'text-fuchsia-600 dark:text-fuchsia-400', border: 'border-fuchsia-100 dark:border-fuchsia-900/30', bg: 'bg-white dark:bg-slate-900/50', list: gradeD },
              { title: 'Grade E', color: 'text-slate-600 dark:text-slate-400', border: 'border-slate-200 dark:border-slate-800', bg: 'bg-white dark:bg-slate-900/20', list: gradeE },
            ].map((grade, idx) => (
              <motion.div variants={item} key={idx} className={`p-6 rounded-2xl border ${grade.border} ${grade.bg} shadow-sm`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-base font-semibold ${grade.color}`}>
                    {grade.title}
                  </div>
                  <div className="h-px flex-grow bg-slate-100 dark:bg-slate-800"></div>
                </div>
                <div className="flex flex-col gap-2">
                  {grade.list.length > 0 ? (
                    grade.list.map(member => (
                      <div key={member.id} className="text-slate-600 dark:text-slate-300 flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                        <span className="font-medium hover:text-blue-500 transition-colors uppercase">{member.name}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-slate-400 dark:text-slate-500 flex items-center gap-3 text-sm italic">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></span>
                      None
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={item} className="mt-20 text-center">
            <div className="inline-block p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 max-w-xl mx-auto leading-relaxed">
                This clan is built for learning, evolution, and disciplined thinking.
                <br/><br/>
                <strong className="text-slate-900 dark:text-slate-200 block mb-2 font-semibold">Strict Policy:</strong>
                • Zero tolerance for malicious activity or harm<br/>
                • No misuse of skills under any circumstance
              </p>
              <p className="text-base font-semibold text-slate-900 dark:text-white mt-6">
                We build minds — not threats.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

