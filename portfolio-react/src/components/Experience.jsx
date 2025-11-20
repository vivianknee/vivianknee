import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Perpetua Venture (Columbia Build Lab)",
      period: "Sep 2025 - Present",
      location: "New York, NY",
      description: "Building Perpetua: a digital will service that helps grieving families by saving executors and estate lawyers hundreds of hours in asset discovery (bank accounts, insurance policies, digital subscriptions).",
      highlights: [
        "Co-leading AI workflow development in fast-paced startup environment",
        "Taking end-to-end ownership of ML and LLM system design",
        "Implementing AI-powered asset discovery features"
      ],
      color: "teal"
    },
    {
      role: "Software Engineering Intern",
      company: "Northrop Grumman Mission Systems",
      period: "Jun 2025 - Aug 2025",
      location: "San Diego, CA",
      description: "Designed enterprise software for mission-critical defense systems using state machine architecture and JREAP-C communication protocol.",
      highlights: [
        "Created Java-based frontend integrated into core C2 software",
        "Delivered critical bug fixes using C++ and Java under tight deadlines",
        "Implemented CI/CD workflow with Jenkins, drastically reducing build time and human error"
      ],
      color: "coral"
    },
    {
      role: "Software/Systems Engineering Intern",
      company: "Northrop Grumman Mission Systems",
      period: "Jun 2024 - Aug 2024",
      location: "San Diego, CA",
      description: "Contributed to major system upgrades and legacy code optimization. Developed automation solutions saving 1000+ hours of work.",
      highlights: [
        "Automated data integrity verification using Python Pandas",
        "Refactored legacy code in 20-year-old program with 20,000+ files",
        "Delivered 50%+ of major system upgrade complying with MIL-STD requirements"
      ],
      color: "teal"
    },
    {
      role: "CS and Computational Media Researcher",
      company: "Science Internship Program at UCSC",
      period: "Jun 2023 - Aug 2023",
      location: "Santa Cruz, CA",
      description: "Collaborated with UCSC faculty on computational media research focused on educational interfaces and personalized learning.",
      highlights: [
        "Developed personalized learning tutorial add-on for Blender using Python",
        "Presented research findings at symposium",
        "Designed user studies comparing traditional vs. custom tutorial learning methods"
      ],
      paper: "/Examining-Efficacy-Tutorial-Characteristics.pdf",
      color: "coral"
    },
    {
      role: "Participant",
      company: "Capital One Tech Summit",
      period: "2026",
      location: "Hybrid",
      description: "Selected to attend Capital One's exclusive tech summit featuring technical workshops, networking sessions, and industry insights.",
      highlights: [
        "Participating in technical workshops on software engineering and cloud technologies",
        "Networking with Capital One engineers and tech leaders",
        "Gaining insights into enterprise-scale software development practices"
      ],
      color: "teal"
    }
  ];

  return (
    <section id="experience" className="section gradient-bg-1">
      <div className="container">
        <div className="section-header">
          <h2>Professional <span className="accent-olive">Experience</span></h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.color}`}>
              <div className="timeline-marker"></div>
              <div className="experience-card">
                <div className="experience-content">
                  <div className="experience-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <div className="experience-meta">
                      <span className="period">{exp.period}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <ul className="highlights-list">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  {exp.paper && (
                    <a href={exp.paper} target="_blank" rel="noopener noreferrer" className="paper-link">
                      Read Research Paper
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
