export interface Member {
  id: string;
  name: string;
  age: number;
  qualifications: string[];
  achievements: string[];
  bio: string;
  profileImage: string;
  joinedDate: string;
  grade: 'Founder' | 'Co.Founder' | 'A' | 'B' | 'C' | 'D' | 'E' | 'Unranked';
}

export type UserRole = 'admin' | 'public';
