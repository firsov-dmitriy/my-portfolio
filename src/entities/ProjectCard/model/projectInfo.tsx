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
import { Project } from './Project';

export const projectInfo: Project[] = [
  {
    name: 'Разработка веб приложения для налогоплательщиков',
    description: `Онлайн-сервис для управления налоговой информацией, взаимодействия с уполномоченными органами, получения уведомлений и совершения платежей. Предоставляет доступ к персонализированным данным и электронным услугам.`,
    knowledge: [
      { name: 'React', icon: <FaReact size={36} className="fill-cyan-700" /> },
      { name: 'Tailwind', icon: <RiTailwindCssFill size={36} className="fill-cyan-700" /> },
      { name: 'Vite', icon: <SiVitess size={36} className="fill-violet-700" /> },
      { name: 'TypeScript', icon: <SiTypescript size={36} className="fill-blue-700" /> },
      { name: 'React Query', icon: <SiReactquery size={36} className="fill-red-800" /> },
    ],
  },
  {
    name: 'Разработка для крупнейшей аграрной площадки в РФ',
    description: `Маркетплейс, где собраны все ключевые товары, сервисы и услуги для развития агробизнеса`,
    knowledge: [
      { name: 'React', icon: <FaReact size={36} className="fill-cyan-700" /> },
      { name: 'Webpack', icon: <SiWebpack size={36} className="fill-cyan-500" /> },
      { name: 'TypeScript', icon: <SiTypescript size={36} className="fill-blue-700" /> },
      { name: 'StoryBook', icon: <SiStoryblok size={36} className="fill-cyan-700" /> },
      { name: 'Redux', icon: <SiRedux size={36} className="fill-violet-600" /> },
      { name: 'MobX', icon: <SiMobx size={36} className="fill-orange-600" /> },
    ],
  },

  {
    name: 'Разработка для немецкой фриланс биржи',
    description: `Создание цифрового решения для платформы удаленного сотрудничества, ориентированной на рынок с высокими стандартами качества и строгими регуляторными требованиями. Включает в себя интеграцию платежных систем, механизмы защиты данных и удобный пользовательский интерфейс для взаимодействия исполнителей и заказчиков.`,
    knowledge: [
      { name: 'NextJs', icon: <RiNextjsFill size={36} className="fill-gray-800" /> },
      { name: 'TypeScript', icon: <SiTypescript size={36} className="fill-blue-700" /> },
      { name: 'StoryBook', icon: <SiStoryblok size={36} className="fill-cyan-700" /> },
      { name: 'Websocket', icon: <span className="my-auto block h-[36px]">Websocket</span> },
    ],
  },

  {
    name: 'Разработка миниапа',
    description: `Приложение связывает тех, кто готов оказать помощь, с теми, кто в ней нуждается, включая пенсионеров, маломобильных граждан и социально уязвимые группы.`,
    knowledge: [
      { name: 'React', icon: <FaReact size={36} className="fill-cyan-700" /> },
      { name: 'TypeScript', icon: <SiTypescript size={36} className="fill-blue-700" /> },
      { name: 'Vite', icon: <SiVitess size={36} className="fill-violet-700" /> },
      { name: 'VKUI', icon: <span className="my-auto block h-[36px]">VKUI</span> },
    ],
  },
];

export const FNS = {
  name: 'Разработка веб приложения для налогоплательщиков',
  team: [
    { name: 'Frontend', count: 3 },
    { name: 'Backend', count: 4 },
    { name: 'Analysts', count: 3 },
  ],
  description: `Онлайн-сервис для управления налоговой информацией, взаимодействия с уполномоченными органами, получения уведомлений и совершения платежей. Предоставляет доступ к персонализированным данным и электронным услугам.`,
  fullStack: [
    { name: 'React', icon: <FaReact size={36} className="fill-cyan-700" /> },
    { name: 'Tailwind', icon: <RiTailwindCssFill size={36} className="fill-cyan-700" /> },
    { name: 'Vite', icon: <SiVitess size={36} className="fill-violet-700" /> },
    { name: 'TypeScript', icon: <SiTypescript size={36} className="fill-blue-700" /> },
    { name: 'React Query', icon: <SiReactquery size={36} className="fill-red-800" /> },
  ],
  results: [
    {
      name: 'Принятие единого code style',
      items: [
        'Определил и внедрил единые правила оформления кода, чтобы улучшить читаемость и согласованность.',
        'Настроил инструменты для автоматической проверки и форматирования кода.',
        'Частично привел существующий код в соответствие с новым стилем.',
      ],
    },
    {
      name: 'Принятие ключевых архитектурных решений',
      items: [
        'Разработал подход к структурированию проекта для повышения его масштабируемости и упрощения поддержки.',
        'Задокументировал принятые архитектурные решения.',
      ],
    },
    {
      name: 'Оптимизация части проекта',
      items: [
        'Ускорил работу приложения за счет оптимизации компонентов и их рендеринга.',
        'Улучшил производительность путем внедрения мемоизации и асинхронной загрузки данных.',
        'Минимизировал объем передаваемых данных и уменьшил размер бандла.',
      ],
    },
    {
      name: 'Изменения процессов, связанных с работой над задачами',
      items: [
        'Оптимизировал процесс разработки, внедрив инструменты для управления задачами и автоматизации.',
        'Улучшил взаимодействие в команде за счет внедрения четких критериев для задач.',
      ],
    },
  ],
};
