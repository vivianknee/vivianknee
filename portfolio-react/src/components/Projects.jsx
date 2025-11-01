import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Sorting Algorithm Museum",
      description: "Interactive learning platform that visualizes complex sorting algorithms through custom animations. Built with Java SpringBoot backend and SQLite database for storing user progress and algorithm analytics.",
      tech: ["Java", "SpringBoot", "SQLite", "JavaScript", "CSS"],
      links: {
        github: "https://github.com/vivianknee/sorting-algorithm-museum",
        demo: "https://sorting-algorithm-museum.onrender.com"
      },
      color: "coral"
    },
    {
      title: "Code Maxxers",
      description: "Educational indie game developed with a team of 10 using SCRUM/AGILE methodologies. Teaches programming concepts through engaging gameplay mechanics and interactive challenges.",
      tech: ["Unity", "C#", "SCRUM", "AGILE", "Game Dev"],
      links: {
        github: "https://github.com/shanemcandrewai/codeMaxxers"
      },
      color: "teal"
    },
    {
      title: "Perfect Car Finder",
      description: "Advanced filtering system for car shopping with Python Flask backend. Features intelligent search algorithms, real-time data processing, and responsive UI. AP CSP capstone project.",
      tech: ["Python", "Flask", "SQL", "JavaScript", "API"],
      links: {
        github: "https://github.com/vivianknee/PerfectCarFinder"
      },
      color: "coral"
    },
    {
      title: "NPO Connect",
      description: "Built at Columbia DivHacks 2024. Platform connecting volunteers with 150+ NPOs through AI-powered recommendations. Features advanced search, filtering, and personalized matching system.",
      tech: ["React", "AI/ML", "Database", "UX Design"],
      links: {
        demo: "https://www.youtube.com/watch?v=VQf_RM2Nqj4"
      },
      color: "teal"
    }
  ];

  return (
    <section id="projects" className="section gradient-bg-2">
      <div className="container">
        <div className="section-header">
          <h2>Featured <span className="accent-rust">Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.color}`}>
              <div className="project-number">0{index + 1}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
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
