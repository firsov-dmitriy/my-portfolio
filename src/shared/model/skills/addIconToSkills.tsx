import { TSkill } from '@/shared/model';
import { JSX, ReactNode } from 'react';

import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import {
  SiMobx,
  SiVitess,
  SiTypescript,
  SiReactquery,
  SiStoryblok,
  SiWebpack,
  SiRedux,
} from 'react-icons/si';

export const addIconToSkills = (skills: Omit<TSkill, 'project_ids'>[]) => {
  const iconMapping: { [key: string]: JSX.Element } = {
    React: <FaReact size={36} className="fill-cyan-700" />,
    Tailwind: <RiTailwindCssFill size={36} className="fill-cyan-700" />,
    Vite: <SiVitess size={36} className="fill-violet-700" />,
    TypeScript: <SiTypescript size={36} className="fill-blue-700" />,
    'React Query': <SiReactquery size={36} className="fill-red-800" />,
    StoryBook: <SiStoryblok size={36} className="fill-cyan-700" />,
    Redux: <SiRedux size={36} className="fill-violet-600" />,
    MobX: <SiMobx size={36} className="fill-orange-600" />,
    Websocket: <span className="my-auto block h-[36px]">Websocket</span>,
    Webpack: <SiWebpack size={36} className="fill-cyan-500" />,
    VKUI: <span className="my-auto block h-[36px]">VKUI</span>,
    NextJS: <RiNextjsFill size={36} className="fill-gray-800" />,
  };

  return skills.map((skill) => ({
    ...skill,
    icon: iconMapping[skill.name] || null,
  }));
};
