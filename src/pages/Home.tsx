import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Crown, Star, ArrowRight, Send } from 'lucide-react';
import { useAppContext } from '../store/AppContext';

export default function Home() {
  const { members } = useAppContext();
  const [waName, setWaName] = useState('');
  const [intro, setIntro] = useState('');

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waName.trim() || !intro.trim()) return;
    
    const subject = encodeURIComponent('Request to Join BJE Clan');
    const body = encodeURIComponent(`WhatsApp Name: ${waName}\n\nIntroduction:\n${intro}`);
    
    window.location.href = `mailto:bjeclanofficial@gmail.com?subject=${subject}&body=${body}`;
  };

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

  const gridData = [
    { grade: 'A', members: gradeA },
    { grade: 'B', members: gradeB },
    { grade: 'C', members: gradeC },
    { grade: 'D', members: gradeD },
    { grade: 'E', members: gradeE },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5] dark:bg-[#0a0a0a] font-sans selection:bg-blue-200 overflow-x-hidden">
      <main className="flex-grow flex flex-col px-6 md:px-12 lg:px-24 pt-32 pb-32">
        {/* --- Hero Section --- */}
        <div className="max-w-[1400px] w-full mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[10vw] lg:text-[120px] font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85] uppercase"
          >
            Power <br/>
            <span className="text-blue-600 tracking-tighter">System</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-slate-300 dark:border-slate-800 pt-8"
          >
            <p className="max-w-md text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 md:mb-0">
              We accept failures, but stagnation cannot be tolerated. This clan is built for learning, evolution, and disciplined thinking.
            </p>

            <Link
              to="/members"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-xl"
            >
              <span>View Roster</span>
              <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* --- Bento Grid --- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Leadership Block */}
          <motion.div variants={item} className="p-8 rounded-[32px] bg-slate-900 text-white min-h-[300px] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-slate-800 group-hover:text-slate-700 transition-colors pointer-events-none">
              <Shield className="w-48 h-48 -rotate-12 translate-x-10 -translate-y-10" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 mb-8">Leadership</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Crown className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-semibold">Founder</span>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold tracking-tight">{founders.find(m => m.grade === 'Founder')?.name || 'Tuijbialnajah'}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Star className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-semibold">Co-Founder</span>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold tracking-tight">{founders.find(m => m.grade === 'Co.Founder')?.name || '𝙱𝙹𝙴 ~ Vegeta'}</div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-xs text-slate-600 font-mono tracking-widest relative z-10">
              EST. 2026 // BJE
            </div>
          </motion.div>

          {/* Grade Tiers */}
          {gridData.map((tier) => (
            <motion.div variants={item} key={tier.grade} className="p-8 rounded-[32px] bg-white dark:bg-slate-900 flex flex-col min-h-[300px] border border-slate-200/50 dark:border-slate-800 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-10 text-[180px] font-black opacity-[0.03] dark:opacity-[0.05] pointer-events-none font-serif select-none leading-none group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
                {tier.grade}
              </div>
              
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 dark:text-slate-500 flex items-center justify-between mb-8 relative z-10">
                <span>Grade {tier.grade}</span>
                <span className="w-8 h-px bg-slate-200 dark:bg-slate-800"></span>
              </h3>
              
              <div className="flex-grow flex flex-col gap-4 relative z-10">
                {tier.members.length > 0 ? (
                  tier.members.map((member) => (
                    <div key={member.id} className="text-slate-900 dark:text-slate-100 font-bold tracking-tight text-lg uppercase flex items-center gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                       <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-default transition-colors">{member.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-slate-400 dark:text-slate-500 italic text-sm mt-2 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                    <span>None</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Join Request Block */}
          <motion.div variants={item} className="lg:col-span-3 p-8 md:p-12 rounded-[32px] bg-white dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800 relative xl:overflow-hidden group flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 w-full">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-500 mb-6">Enlistment</h3>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white leading-none mb-6 text-balance">
                Request to <br/>
                <span className="text-slate-400 dark:text-slate-500">Join BJE</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-md">
                Think you have what it takes? Enter your WhatsApp name and a brief introduction about yourself, your skills, and why you want to join us.
              </p>
            </div>
            
            <form onSubmit={handleJoinSubmit} className="flex-1 w-full flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="waName" className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-4">WhatsApp Name</label>
                <input 
                  id="waName"
                  type="text" 
                  required
                  value={waName}
                  onChange={e => setWaName(e.target.value)}
                  placeholder="E.g., John Doe" 
                  className="px-6 py-4 rounded-full bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-shadow outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="intro" className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-4">Introduction</label>
                <textarea 
                  id="intro"
                  required
                  value={intro}
                  onChange={e => setIntro(e.target.value)}
                  placeholder="Tell us about yourself..." 
                  className="px-6 py-4 rounded-[24px] bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-shadow outline-none min-h-[120px] resize-y"
                />
              </div>
              <button 
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-blue-500/25"
              >
                <span>Send Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Policy Block */}
          <motion.div variants={item} className="lg:col-span-3 p-8 md:p-12 rounded-[32px] bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-slate-200 dark:text-slate-800 pointer-events-none flex gap-2 font-mono text-[10px] uppercase tracking-widest font-bold">
              <span>SYS/01</span>
              <span>•</span>
              <span>SECURE</span>
            </div>

            <div className="max-w-xl relative z-10">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-red-500 mb-6">Strict Policy</h3>
               <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                 We have a zero tolerance policy for malicious activity or harm. Any misuse of skills under any circumstance will result in immediate removal.
               </p>
            </div>
            
            <div className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-300 dark:text-slate-700 leading-none text-right relative z-10 text-balance">
              We build minds.<br/>
              <span className="text-slate-900 dark:text-white">Not threats.</span>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}

