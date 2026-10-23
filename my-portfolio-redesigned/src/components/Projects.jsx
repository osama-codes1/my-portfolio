import useApi from '../useApi';
import { getProjects } from '../api';

function Projects() {
  const { data: projects, loading, error } = useApi(getProjects);

  if (loading) {
    return <p className="projects-loading"> Loading projects...</p>;
  }

  if (error) {
    return <p className="projects-error"> Could not load projects. Please try again later. {error}</p>;
  }

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-list">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
          {project.github_link && (
            <a
            
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link-btn"
            >
              View on GitHub →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;