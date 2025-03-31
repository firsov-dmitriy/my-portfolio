import { SkillsBlock } from '@/widgets/SkillsBlock';
import { IProjectsInfoProps } from './types';
import { Achievements } from '@/widgets/Achievements';
import { getTranslations } from 'next-intl/server';
import { translateText } from '@/shared/api';

export const ProjectsInfo = async (props: IProjectsInfoProps) => {
  const { name, description, skills, teams, results } = props.project;
  const t = await getTranslations('Projects');
  return (
    <div className="container">
      <div className="flex flex-col gap-y-4 bg-zinc-50 p-10 dark:bg-zinc-400">
        <div className="default-card">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">{await translateText(name)}</h2>
          <h3 className="mt-2 text-base font-bold md:text-xl">{t('info.description')}</h3>
          <p className="text-base text-gray-700 md:text-xl">{await translateText(description)}</p>
        </div>

        <div className="default-card">
          <h3 className="text-base font-bold md:text-xl">{t('info.team')}</h3>
          <ul className="ml-4 list-disc text-base text-gray-700 md:text-xl">
            {teams.map(({ name, count }) => (
              <li key={name}>
                {name} - {count}
              </li>
            ))}
          </ul>
        </div>
        {results && (
          <div className="default-card">
            <h3 className="text-base font-bold md:text-xl">{t('info.results')}</h3>
            <Achievements achievements={results} />
          </div>
        )}

        <div className="default-card">
          <h3 className="text-xl font-bold">{t('experienceTitle')}</h3>
          <SkillsBlock
            skills={skills}
            isInfo
            className="mt-2 flex flex-row flex-wrap gap-4 md:flex-nowrap"
          />
        </div>
      </div>
    </div>
  );
};
