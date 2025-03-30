'use server';
import { ISkillsProps } from './types';
import { SkillCard } from '@/entities/SkillCard';
import { getTranslations } from 'next-intl/server';

export const Experience = async (props: ISkillsProps) => {
  const { skills } = props;
  const t = await getTranslations('Experience');
  const sortedSkills = skills.sort((a, b) => {
    // Sort by project_ids first (if needed)
    const aHasProject = Boolean(a.project_ids);
    const bHasProject = Boolean(b.project_ids);

    if (aHasProject && !bHasProject) return -1;
    if (!aHasProject && bHasProject) return 1;

    // Then, sort by type
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    return 0;
  });

  return (
    <div className="list-wrapper">
      <h1 className="mb-6 text-center text-3xl font-bold">{t('title')}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
