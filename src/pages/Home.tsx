import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Crown, Star, ArrowRight, Send } from 'lucide-react';
import { useAppContext } from '../store/AppContext';

export default function Home() {
  const { members } = useAppContext();
  const [waName, setWaName] = useState('');
  const [intro, setIntro] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isScrolling = true;

    const interval = setInterval(() => {
      if (!isScrolling || !container) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = container;
      // Use a tolerance for floating point scroll values
      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll by an amount that will trigger the next snap point
        // On mobile it's 85vw (~300px), desktop 350-400px.
        container.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }, 2500);

    const pause = () => { isScrolling = false; };
    const resume = () => { isScrolling = true; };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause, { passive: true });
    container.addEventListener('touchend', resume);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
    };
  }, []);

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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end pt-8"
          >
            <p className="max-w-md text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 md:mb-0">
              We are not merely a gathering of enthusiasts. We are an alliance — a brotherhood and sisterhood united under the banner of 𝙱𝙹𝙴 ~ Clan
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

        {/* --- Scrollable Tiers --- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-[1400px] w-full mx-auto"
        >
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {/* Leadership Block */}
            <motion.div variants={item} className="snap-center sm:snap-start shrink-0 w-[85vw] md:w-[400px] p-8 rounded-[32px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black text-white min-h-[300px] flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-blue-900/20 ring-1 ring-white/10 hover:-translate-y-1 hover:shadow-blue-900/40 transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 text-slate-800/50 group-hover:text-slate-700/80 transition-colors pointer-events-none blur-[2px] group-hover:blur-none duration-500">
                <Shield className="w-48 h-48 -rotate-12 translate-x-10 -translate-y-10" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-400/80 mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Leadership
                </h3>
                <div className="space-y-8">
                  <div className="group/leader cursor-default">
                    <div className="flex items-center gap-2 text-slate-400 mb-2 group-hover/leader:text-blue-400 transition-colors">
                      <Crown className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider font-semibold">Founder</span>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 group-hover/leader:to-white transition-colors">{founders.find(m => m.grade === 'Founder')?.name || 'Tuijbialnajah'}</div>
                  </div>
                  <div className="group/leader cursor-default">
                    <div className="flex items-center gap-2 text-slate-400 mb-2 group-hover/leader:text-blue-400 transition-colors">
                      <Star className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider font-semibold">Co-Founder</span>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 group-hover/leader:to-white transition-colors">{founders.find(m => m.grade === 'Co.Founder')?.name || '𝙱𝙹𝙴 ~ Vegeta'}</div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-xs text-slate-500 font-mono tracking-widest relative z-10 flex justify-between items-center">
                <span>EST. 2026 // BJE</span>
                <div className="w-8 h-px bg-slate-700"></div>
              </div>
            </motion.div>

            {/* Grade Tiers */}
            {gridData.map((tier) => (
              <motion.div variants={item} key={tier.grade} className="snap-center sm:snap-start shrink-0 w-[85vw] md:w-[350px] p-8 rounded-[32px] bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950 flex flex-col min-h-[300px] border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 ring-1 ring-black/[0.02] dark:ring-white/[0.02]">
                <div className="absolute -right-6 -bottom-10 text-[180px] font-black pointer-events-none font-serif select-none leading-none group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 text-transparent [-webkit-text-stroke:2px_rgba(0,0,0,0.03)] dark:[-webkit-text-stroke:2px_rgba(255,255,255,0.03)] opacity-100">
                  {tier.grade}
                </div>
                
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 dark:text-slate-500 flex items-center justify-between mb-8 relative z-10">
                  <span className="group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Grade {tier.grade}</span>
                  <span className="w-8 h-px bg-slate-200 dark:bg-slate-800 group-hover:w-16 transition-all duration-500"></span>
                </h3>
                
                <div className="flex-grow flex flex-col gap-3 relative z-10">
                  {tier.members.length > 0 ? (
                    tier.members.map((member) => (
                      <div key={member.id} className="text-slate-800 dark:text-slate-200 font-bold tracking-tight text-lg uppercase flex items-center gap-4 group/member p-2 -mx-2 rounded-2xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm dark:hover:shadow-none hover:ring-1 hover:ring-slate-100 dark:hover:ring-slate-700 transition-all cursor-default">
                         <div className="w-10 h-10 shrink-0 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-sm text-blue-500 shadow-inner group-hover/member:scale-110 group-hover/member:bg-blue-50 dark:group-hover/member:bg-blue-900/20 transition-all duration-300">
                            {member.name.charAt(0)}
                         </div>
                         <span className="group-hover/member:text-blue-600 dark:group-hover/member:text-blue-400 transition-colors w-full overflow-hidden text-ellipsis whitespace-nowrap">{member.name}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-slate-400 dark:text-slate-500 italic text-sm mt-2 flex items-center gap-3 p-2 -mx-2 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                      <span>No members yet</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Request Block */}
          <motion.div variants={item} className="mt-8 p-8 md:p-12 rounded-[32px] bg-white dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800 relative xl:overflow-hidden group flex flex-col lg:flex-row gap-12 items-center">
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

        </motion.div>
      </main>

      {/* Premium Footer */}
      <footer className="w-full bg-black text-white py-16 px-6 md:px-12 border-t border-slate-900 mt-auto">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start tracking-tighter">
            <span className="text-2xl font-black uppercase tracking-widest text-white">BJE</span>
            <span className="text-xs text-slate-500 font-mono mt-2 tracking-widest">EST. 2026 // CLAN</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a 
              href="https://chat.whatsapp.com/DVbCiXwoWFIAG8tae8JmyE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              WhatsApp Community
            </a>
            <Link 
              to="/terms" 
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

