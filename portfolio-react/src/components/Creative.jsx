import './Creative.css';

const Creative = () => {
  const currentActivities = [
    {
      title: "Building Startups",
      icon: "🚀",
      bullets: [
        "Working on Perpetua at Columbia Build Lab - a digital will service revolutionizing asset discovery",
        "Building Ludus - a language study webapp that transforms how students learn and teachers teach"
      ]
    },
    {
      title: "Columbia CORE",
      icon: "🌟",
      bullets: [
        "Meeting like-minded ambitious people",
        "Building connections and growing together",
        "Part of an incredible community pushing boundaries and creating impact"
      ],
      link: { text: "Learn more", url: "https://www.instagram.com/coreatcu/" }
    },
    {
      title: "More Coming Soon",
      icon: "✨",
      bullets: [
        "Always working on something new",
        "Stay tuned for updates on current projects, interests, and adventures"
      ]
    }
  ];

  return (
    <section id="creative" className="section">
      <div className="container">
        <div className="section-header">
          <h2>What I'm <span className="accent-terracotta">Up To</span></h2>
          <p className="section-subtitle">
            Current projects, interests, and adventures
          </p>
        </div>

        <div className="activities-grid">
          {currentActivities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <ul className="activity-bullets">
                {activity.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              {activity.link && (
                <a href={activity.link.url} target="_blank" rel="noopener noreferrer" className="activity-link">
                  {activity.link.text} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creative;
