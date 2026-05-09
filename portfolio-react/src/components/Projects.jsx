import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Stencil",
      tagline: "1st Place, EEG / CORE Hackathon — Consumer Entertainment Track",
      tech: ["Next.js 14", "FastAPI", "GPT-4o", "Stable Diffusion", "Apify", "Redis", "Supabase", "Stripe Connect"],
      type: "hackathon",
      award: "1st Place",
      links: {
        youtube: "https://www.youtube.com/watch?v=Vn4V_VhvMRA&list=LL&index=1"
      }
    },
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
      imagePosition: "center 60%",
      links: {
        github: "https://github.com/Codemaxxers/codemaxxerFrontend"
      }
    },
    {
      title: "Pocket Therapist",
      tagline: "Emotion-detecting wellness app with AI chatbot",
      tech: ["Java", "SpringBoot", "SQLite", "face-api.js", "Jekyll"],
      type: "project",
      image: "/images/pockettherapist.png",
      imagePosition: "center 45%",
      links: {
        github: "https://github.com/vivianknee/PocketTherapist",
        demo: "https://vivianknee.github.io/PocketTherapist/"
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
          <p className="section-subheader">2x hackathon winner</p>
        </div>

        <div className="proj-grid">
          {projects.map((project, index) => (
            <div key={index} className="proj-card" tabIndex="0">
              <div className="proj-card__image">
                {project.image
                  ? <img src={project.image} alt={project.title} style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
                  : <span className="proj-card__image-placeholder">preview coming soon</span>
                }
              </div>

              <div className="proj-card__header">
                <div>
                  <h3>{project.title}</h3>
                  <p className="proj-tagline">{project.tagline}</p>
                </div>
                <div className={`proj-badge ${project.type}${project.award ? ' winner' : ''}`}>
                  {project.award ? '🥇 1st Place' : project.type}
                </div>
              </div>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="proj-card__links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="proj-link">GitHub</a>
                )}
                {project.links.devpost && (
                  <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="proj-link">Devpost</a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="proj-link">Live Demo</a>
                )}
                {project.links.youtube && (
                  <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="proj-link">Demo Video</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
