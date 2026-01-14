import './Current.css';

const Current = () => {
  const currentActivities = [
    {
      title: "HCI Research",
      bullets: [
        "Exploring computational media and educational interfaces",
        "Investigating personalized learning systems and human-computer interaction",
        "Developing innovative approaches to tutorial design and user experience"
      ]
    },
    {
      title: "User Interface and Graphics Lab",
      bullets: [
        "Exploring the intersection of gaussian splatting and AI",
        "Working with tools like unity and Blender for VR/AR applications",
      ]
    },
    {
      title: "Columbia CORE",
      bullets: [
        "Organizing and leading CORE's Product Management fellowship",
        "Working with digital strategy to reach thousands of impressions on the CORE audience",
        "Building connections with like-minded ambitious people",
        { text: "Learn more", url: "https://www.instagram.com/coreatcu/" }
      ],
    }
  ];

  return (
    <section id="creative" className="section">
      <div className="container">
        <div className="section-header">
          <h2>What I'm <span className="accent-terracotta">Up To</span></h2>
          <p className="section-subtitle">
            Current projects, interests, and sidequests
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
                        {bullet.prefix}
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
