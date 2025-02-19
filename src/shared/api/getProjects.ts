import { sql } from '@/shared/api/neon';
import { TProjects } from '@/shared/model/projects/TProjects';

export const getProjects = async (projectIds?: number | number[] | null) => {
  const normalizedIds =
    projectIds == null ? [] : Array.isArray(projectIds) ? projectIds : [projectIds];

  const hasValidIds = normalizedIds.length > 0;

  const query = `
    SELECT 
      p.id AS id, 
      p.name AS name, 
      p.description AS description,
      JSONB_AGG(
          DISTINCT JSONB_BUILD_OBJECT(
              'name', s.name,
              'id', s.id,
              'icon', s.icon
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
    ${hasValidIds ? 'WHERE p.id = ANY($1)' : ''}
    GROUP BY p.id;
  `;

  return hasValidIds
    ? (sql(query, [normalizedIds]) as unknown as Promise<TProjects>)
    : (sql(query) as unknown as Promise<TProjects>);
};
