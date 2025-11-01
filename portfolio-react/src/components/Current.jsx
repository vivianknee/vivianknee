import './Current.css';

const Current = () => {
  const currentActivities = [
    {
      title: "Building Startups",
      bullets: [
        "Working on Perpetua at Columbia Build Lab - a digital will service revolutionizing asset discovery",
        { text: "Building Ludus", url: "https://web.ludusapp.com/", suffix: " - a language study webapp that transforms how students learn and teachers teach" }
      ]
    },
    {
      title: "Columbia CORE",
      bullets: [
        "Meeting like-minded ambitious people",
        "Building connections and growing together",
        "Part of an incredible community pushing boundaries and creating impact",
        { text: "Learn more", url: "https://www.instagram.com/coreatcu/" }
      ],
    },
    {
      title: "More Coming Soon",
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
                  <li key={i}>
                    {typeof bullet === 'string' ? (
                      bullet
                    ) : (
                      <>
                        <a href={bullet.url} target="_blank" rel="noopener noreferrer" className="activity-link">
                          {bullet.text}
                        </a>
                        {bullet.suffix}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Current;
