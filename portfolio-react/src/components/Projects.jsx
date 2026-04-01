import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Second Self",
      tagline: "1st Place, YHack @ Yale — AI digital twin agent",
      tech: ["Claude Agents SDK", "Swift", "SwiftUI", "ElevenLabs", "VNC", "Browser-Use"],
      type: "hackathon",
      award: "1st Place",
      image: "/images/secondself.png",
      links: {
        devpost: "https://devpost.com/software/second-self-giwmxh?ref_content=user-portfolio&ref_feature=in_progress"
      }
    },
    {
      title: "Code Maxxers",
      tagline: "Educational indie game built with a 10-person team",
      tech: ["Unity", "C#", "SCRUM", "AGILE", "Game Dev"],
      type: "project",
      image: "/images/codemaxxers.png",
      imagePosition: "center center",
      links: {
        github: "https://github.com/Codemaxxers/codemaxxerFrontend"
      }
    },
    {
      title: "Sorting Algorithm Museum",
      tagline: "Interactive sorting algorithm visualizer",
      tech: ["Java", "SpringBoot", "SQLite", "JavaScript", "CSS"],
      type: "project",
      image: "/images/sortingmuseum.png",
      links: {
        github: "https://github.com/vivianknee/Sorting-Algoritm-Museum",
        youtube: "https://youtu.be/QB-JMiuv4sI"
      }
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Hackathons & <span className="accent-matcha">Projects</span></h2>
        </div>

        <div className="card-stack">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-stack__card"
              style={{ '--card-index': index }}
              tabIndex="0"
            >
              <div className={`card-badge ${project.type}${project.award ? ' winner' : ''}`}>
                {project.type}{project.award ? ' \uD83E\uDD47' : ''}
              </div>

              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
                ) : (
                  <span className="project-image-placeholder">preview coming soon</span>
                )}
                <div className="project-image-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="image-link" title="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.links.devpost && (
                    <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="image-link" title="Devpost">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
                      </svg>
                    </a>
                  )}
                  {project.links.youtube && (
                    <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="image-link" title="Demo Video">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="image-link" title="Live Demo">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="card-front">
                <h3>{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              <div className="card-details">
                <div className="card-details__inner">
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
