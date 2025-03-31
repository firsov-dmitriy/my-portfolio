import { ProjectCard } from '@/entities/ProjectCard';
import { IProjectProps } from '@/views/projects/types';
import { getTranslations } from 'next-intl/server';

export const Projects = async (props: IProjectProps) => {
  const { projects } = props;
  const t = await getTranslations('Projects');
  return (
    <div className="list-wrapper">
      <h2 className="mx-auto block text-center text-4xl font-bold dark:text-gray-50">
        {t('title')}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-2">
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} idx={index} />
        ))}
      </div>
    </div>
  );
};
