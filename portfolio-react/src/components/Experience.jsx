import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Ludus",
      period: "Nov 2025 - Jan 2026",
      location: "New York, NY",
      description: "Developing the teacher-facing platform for an edtech startup serving 100+ users.",
      highlights: [
        "Designing UI/UX in Figma and implementing responsive frontend with React",
        "Collaborating cross-functionally based on feedback from Columbia Professors"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Perpetua Venture (Columbia Build Lab)",
      period: "Sep 2025 - Dec 2025",
      location: "New York, NY",
      description: "Building Perpetua: a digital will service helping grieving families with asset discovery.",
      highlights: [
        "Co-leading AI workflow development in fast-paced startup",
        "End-to-end ownership of ML and LLM system design"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Northrop Grumman Mission Systems",
      period: "Jun 2025 - Aug 2025",
      location: "San Diego, CA",
      logo: "/images/ng.jpg",
      description: "Designed enterprise software for mission-critical defense systems.",
      highlights: [
        "Created Java-based frontend integrated into core C2 software",
        "Implemented CI/CD workflow with Jenkins"
      ]
    },
    {
      role: "Software/Systems Engineering Intern",
      company: "Northrop Grumman Mission Systems",
      period: "Jun 2024 - Aug 2024",
      location: "San Diego, CA",
      logo: "/images/ng.jpg",
      description: "Contributed to major system upgrades and legacy code optimization.",
      highlights: [
        "Automated data integrity verification using Python Pandas",
        "Delivered 50%+ of major system upgrade complying with MIL-STD requirements"
      ]
    },
    {
      role: "CS and Computational Media Researcher",
      company: "Science Internship Program at UCSC",
      period: "Jun 2023 - Aug 2023",
      location: "Santa Cruz, CA",
      logo: "/images/sip.jpg",
      description: "Collaborated with UCSC faculty on computational media research.",
      highlights: [
        "Developed personalized learning tutorial add-on for Blender using Python",
        "Presented research findings at symposium"
      ],
      paper: "/Examining-Efficacy-Tutorial-Characteristics.pdf"
    }
  ];

  return (
    <section id="experience" className="section gradient-bg-1">
      <div className="container">
        <div className="section-header">
          <h2>Professional <span className="accent-olive">Experience</span></h2>
        </div>

        <div className="exp-card-stack">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-card"
              style={{ '--card-index': index }}
              tabIndex="0"
            >
              <div className="exp-card__header">
                <div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="exp-card__meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>
              <p className="exp-card__description">{exp.description}</p>
              <ul className="exp-card__highlights">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              {exp.paper && (
                <a href={exp.paper} target="_blank" rel="noopener noreferrer" className="exp-card__paper">
                  Read Paper
                </a>
              )}
              {exp.logo && (
                <img src={exp.logo} alt={exp.company} className="exp-card__logo" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
