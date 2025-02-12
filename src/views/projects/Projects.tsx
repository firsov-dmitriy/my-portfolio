import { ProjectCard, projectInfo } from '@/entities/ProjectCard';

export const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 bg-zinc-50 p-4 dark:bg-zinc-400 sm:p-6 lg:grid-cols-2 lg:grid-rows-2 lg:p-10">
        {projectInfo.map((item, index) => (
          <ProjectCard key={index} {...item} idx={index} />
        ))}
      </div>
    </div>
  );
};
