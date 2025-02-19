export type TSkill = {
  id: number;
  name: string;
  project_ids: string[] | null;
  description?: string;
  icon: string;
};
export type TSkills = Array<TSkill>;
