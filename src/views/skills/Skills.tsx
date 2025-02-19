'use server';
import { ISkillsProps } from './types';
import { SkillCard } from '@/entities/SkillCard';

export const Skills = async (props: ISkillsProps) => {
  const { skills } = props;
  return (
    <div className="list-wrapper">
      <h1 className="mb-6 text-center text-3xl font-bold">Хард скилы</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
