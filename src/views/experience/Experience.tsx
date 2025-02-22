'use server';
import { ISkillsProps } from './types';
import { SkillCard } from '@/entities/SkillCard';
import { getTranslations } from 'next-intl/server';

export const Experience = async (props: ISkillsProps) => {
  const { skills } = props;
  const t = await getTranslations('Experience');

  return (
    <div className="list-wrapper">
      <h1 className="mb-6 text-center text-3xl font-bold">{t('title')}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
