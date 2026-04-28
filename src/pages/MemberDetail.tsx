import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, MapPin, Search } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import { BackButton } from '../components/ui/BackButton';

const AnimatedBanner = ({ grade }: { grade?: string }) => {
  const normalizedGrade = grade?.replace('Grade ', '')?.trim() || '';

  switch (normalizedGrade) {
    case 'Founder':
    case 'Co.Founder':
      return (
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-orange-600 via-amber-500 to-red-600">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 right-10 w-48 h-48 bg-orange-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 pointer-events-none"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none" />
        </div>
      );
    case 'A':
      return (
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-700 to-indigo-900">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-indigo-500/0 via-purple-400/30 to-indigo-500/0 pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-400/20 via-transparent to-transparent pointer-events-none"
          />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay pointer-events-none" />
        </div>
      );
    case 'B':
      return (
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-sky-600 to-blue-700">
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] pointer-events-none"
          />
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear', delay: 1 }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent skew-x-[-30deg] pointer-events-none"
          />
        </div>
      );
    case 'C':
      return (
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700">
           <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-[40%] bg-white/10 mix-blend-overlay pointer-events-none"
          />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        </div>
      );
    case 'D':
      return (
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-700 dark:to-slate-900">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
          <div className="absolute inset-0 flex justify-between px-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-full w-[1px] bg-white/5 relative overflow-hidden">
                <motion.div
                  animate={{ y: ['-100%', '1000%'] }}
                  transition={{ 
                    duration: 3 + Math.random() * 3, 
                    repeat: Infinity, 
                    ease: 'linear',
                    delay: Math.random() * 2 
                  }}
                  className="absolute top-0 w-full h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      );
    case 'E':
      return (
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-rose-500 to-orange-500">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-yellow-300/40 rounded-full filter blur-3xl mix-blend-overlay pointer-events-none"
          />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] pointer-events-none" />
        </div>
      );
    default:
      return (
        <div className="absolute inset-0 overflow-hidden bg-slate-300 dark:bg-slate-800">
           <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-tr from-slate-400 to-transparent dark:from-slate-700 pointer-events-none"
          />
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] pointer-events-none" />
        </div>
      );
  }
};

export default function MemberDetail() {
  const { id } = useParams<{ id: string }>();
  const { members } = useAppContext();
  
  const member = members.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 bg-[#050505] font-mono">
        <Search className="w-16 h-16 text-slate-800 mb-4" />
        <h2 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-4">Personnel File Not Found</h2>
        <BackButton label="Return to Roster" to="/members" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans px-4 sm:px-6 pb-12 pt-28 text-slate-900 dark:text-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <BackButton label="Back to Members List" fallback="/members" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          style={{ willChange: "transform, opacity" }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm relative"
        >
          {/* Header Banner - Distinct styling */}
          <div className="h-32 sm:h-48 relative z-20">
            <div className="absolute inset-0 rounded-t-2xl overflow-hidden">
              <AnimatedBanner grade={member.grade} />
            </div>
            
            <div className="absolute -bottom-16 left-6 sm:left-10 z-[100]">
              <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 shadow-xl overflow-hidden">
                <img 
                  src={member.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f1f5f9&color=0f172a`} 
                  alt={member.name}
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f1f5f9&color=0f172a`;
                  }}
                />
              </div>
            </div>
          </div>

          <div className="pt-20 pb-12 px-6 sm:px-10 relative z-10 bg-white dark:bg-slate-900">
            <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">{member.name}</h1>
                <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold uppercase border ${
                    member.grade === 'Founder' || member.grade === 'Co.Founder' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20' :
                    member.grade === 'A' ? 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20' :
                    member.grade === 'B' ? 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20' :
                    member.grade === 'C' ? 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20' :
                    member.grade === 'D' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' :
                    'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                  }`}>
                    Grade {member.grade || 'Unranked'}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <Calendar className="w-4 h-4" /> Enlisted: {member.joinedDate}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs font-medium">Age: {member.age}</span>
                </div>
              </div>
            </div>

            <div className="mb-12 max-w-3xl">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                 About
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {member.bio || "No summary available on file."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 relative">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-slate-400" />
                  Credentials
                </h3>
                {member.qualifications.length > 0 ? (
                  <ul className="space-y-4">
                    {member.qualifications.map((q, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-slate-700 dark:text-slate-300">
                        <span className="text-slate-400 shrink-0 font-medium">{i+1}.</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 text-sm italic">No data</p>
                )}
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 relative">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  Accomplishments
                </h3>
                {member.achievements.length > 0 ? (
                  <ul className="space-y-4">
                    {member.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 text-sm italic">No data</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

