export type TProject = {
  id: number;
  name: string;
  description: string;
  skills: Skill[];
  teams: Team[];
};
export interface IProjectInfo extends TProject {
  results: { name: string; items: string[] }[];
}
export type TProjects = TProject[];

interface Skill {
  name: string;
  icon: string;
  id: number;
}

interface Team {
  name: string;
  count: number;
}
