import { TSkills } from '@/shared/model';
import { sql } from './neon';

export async function getSkills() {
  return sql`
    SELECT skills.*, 
           CASE 
             WHEN COUNT(projects.id) > 0 THEN array_agg(projects.id)
             ELSE NULL
           END AS project_ids
    FROM skills
    LEFT JOIN project_skills ON skills.id = project_skills.skill_id
    LEFT JOIN projects ON project_skills.project_id = projects.id
    GROUP BY skills.id;
  ` as unknown as Promise<TSkills>;
}
