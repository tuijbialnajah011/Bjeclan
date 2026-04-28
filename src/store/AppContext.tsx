import React, { createContext, useContext, useState, useEffect } from 'react';
import { Member } from '../types';

interface AppContextType {
  members: Member[];
  addMember: (member: Omit<Member, 'id'>) => void;
  updateMember: (id: string, member: Partial<Member>) => void;
  deleteMember: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_MEMBERS: Member[] = [

  {
    id: 'founder-1',
    name: 'Tuijbialnajah',
    age: 0,
    qualifications: ['BJE System Architect'],
    achievements: ['Founded BJE Clan'],
    bio: 'We accept failures, but stagnation cannot be tolerated.',
    profileImage: '',
    joinedDate: new Date().toISOString().split('T')[0],
    grade: 'Founder'
  },
  {
    id: 'cofounder-1',
    name: '𝙱𝙹𝙴 ~ Vegeta',
    age: 0,
    qualifications: ['Second in Command'],
    achievements: [],
    bio: 'Co-Founder of the BJE Clan.',
    profileImage: '',
    joinedDate: new Date().toISOString().split('T')[0],
    grade: 'Co.Founder'
  },
  {
    id: 'rudy-1',
    name: '𝙱𝙹𝙴 ~ Rudy',
    age: 20,
    qualifications: [],
    achievements: [],
    bio: 'Grade D member.',
    profileImage: '/api/proxy-image?url=https://files.catbox.moe/w6ws8n.jpg',
    joinedDate: new Date().toISOString().split('T')[0],
    grade: 'D'
  },
  {
    id: 'thorfinn-1',
    name: '𝙱𝙹𝙴 ~ Thorfinn 𝕮𝖍𝖆𝖔𝖘',
    age: 0,
    qualifications: [],
    achievements: [],
    bio: 'Grade E member.',
    profileImage: '',
    joinedDate: new Date().toISOString().split('T')[0],
    grade: 'E'
  },
  {
    id: 'itachi-1',
    name: '𝙱𝙹𝙴 ~メ𝕴𝖙𝖆𝖈𝖍𝖎',
    age: 0,
    qualifications: [],
    achievements: [],
    bio: 'Grade E member.',
    profileImage: '',
    joinedDate: new Date().toISOString().split('T')[0],
    grade: 'E'
  },
  {
    id: 'raven-1',
    name: 'Raven',
    age: 0,
    qualifications: [],
    achievements: [],
    bio: 'Grade E member.',
    profileImage: '',
    joinedDate: new Date().toISOString().split('T')[0],
    grade: 'E'
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [members, setMembers] = useState<Member[]>(() => {
    const saved = localStorage.getItem('bje_members_v8');
    return saved ? JSON.parse(saved) : INITIAL_MEMBERS;
  });

  useEffect(() => {
    localStorage.setItem('bje_members_v8', JSON.stringify(members));
  }, [members]);

  const addMember = (memberData: Omit<Member, 'id'>) => {
    const newMember: Member = {
      ...memberData,
      id: Math.random().toString(36).substr(2, 9)
    };
    setMembers([...members, newMember]);
  };

  const updateMember = (id: string, updates: Partial<Member>) => {
    setMembers(members.map(m => m.id === id ? { ...m, ...updates } : m));
  };

  const deleteMember = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <AppContext.Provider value={{ members, addMember, updateMember, deleteMember }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
