import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Terminal, Code, Crown, Users } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import { BackButton } from '../components/ui/BackButton';

export default function Members() {
  const { members } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMembers = useMemo(() => {
    const regularMembers = members.filter(m => m.grade !== 'Founder' && m.grade !== 'Co.Founder');
    
    if (!searchTerm) return regularMembers;
    
    const lower = searchTerm.toLowerCase();
    return regularMembers.filter(m => 
      m.name.toLowerCase().includes(lower) ||
      m.grade?.toLowerCase().includes(lower) ||
      m.qualifications.some(q => q.toLowerCase().includes(lower)) ||
      m.achievements.some(a => a.toLowerCase().includes(lower))
    );
  }, [members, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/10 dark:via-blue-900/5 dark:to-transparent rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 relative z-10">
        <div className="mb-8">
          <BackButton label="Back to Home" to="/" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">Members List</h1>
            </div>
            <p className="text-slate-500 max-w-xl text-sm">
              Directory of verified BJE Clan members. Search by name, grade, or skills.
            </p>
          </div>
          
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-all"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 24, mass: 0.8 }}
                style={{ willChange: "transform, opacity" }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md flex flex-col sm:flex-row transform-gpu hover:-translate-y-1"
              >
                <div className="sm:w-1/3 min-h-[160px] relative overflow-hidden bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center p-6 border-r border-slate-100 dark:border-slate-800">
                  {member.grade === 'Founder' || member.grade === 'Co.Founder' ? (
                    <Crown className="w-16 h-16 text-blue-500 absolute z-0 opacity-10" />
                  ) : null}
                  <img 
                    src={member.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f1f5f9&color=0f172a`} 
                    alt={member.name} 
                    className="relative z-20 w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 object-cover group-hover:scale-105 transition-transform duration-700 shadow-sm"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f1f5f9&color=0f172a`;
                    }}
                  />
                </div>

                <div className="p-6 sm:p-8 sm:w-2/3 flex flex-col justify-center relative z-20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase">{member.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wide uppercase border ${
                          member.grade === 'Founder' || member.grade === 'Co.Founder' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20' :
                          member.grade === 'A' ? 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20' :
                          member.grade === 'B' ? 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20' :
                          member.grade === 'C' ? 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20' :
                          member.grade === 'D' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' :
                          'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                        }`}>
                          {member.grade && member.grade !== 'Unranked' ? `${member.grade}` : 'UNRANKED'}
                        </span>
                        <p className="text-xs font-medium text-slate-500">Age: {member.age}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    {member.qualifications.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {member.qualifications.slice(0, 3).map((q, j) => (
                          <span key={j} className="inline-flex items-center px-2 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700">
                            {q}
                          </span>
                        ))}
                        {member.qualifications.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-slate-500">
                            +{member.qualifications.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link to={`/members/${member.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link">
                      View Profile
                      <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center text-slate-500">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50 text-slate-400" />
              <p className="text-sm font-medium">No records found matching query.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

