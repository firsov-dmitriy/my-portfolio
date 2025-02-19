import { ReactNode } from 'react';

export interface ISkillsBlockProps {
  skills: { name: string; icon: ReactNode }[];
  className?: string;
}
