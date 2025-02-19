import { sql } from '@/shared/api/neon';
import { IProjectInfo, TProjects } from '@/shared/model/projects/TProjects';

export const getProjectById = async (projectId: number) => {
  const query = `
    SELECT 
      p.id AS id, 
      p.name AS name, 
      p.description AS description,
      p.results AS results,
      JSONB_AGG(
          DISTINCT JSONB_BUILD_OBJECT(
              'name', s.name,
              'id', s.id
          )
      ) AS skills,
      JSONB_AGG(
          DISTINCT JSONB_BUILD_OBJECT(
              'name', t.name,
              'count', t.count
          )
      ) AS teams
    FROM projects p
    LEFT JOIN project_skills ps ON p.id = ps.project_id
    LEFT JOIN skills s ON ps.skill_id = s.id
    LEFT JOIN project_team pt ON p.id = pt.project_id
    LEFT JOIN team t ON pt.team_id = t.id
    WHERE p.id = $1
    GROUP BY p.id;
  `;

  const result = (await sql(query, [projectId])) as unknown as TProjects[];

  return result[0] as unknown as IProjectInfo;
};
