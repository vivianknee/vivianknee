import './Current.css';

const Current = () => {
  const columns = [
    {
      heading: "Work I'm Doing",
      items: [
        { bold: "Conduit Commerce", rest: " — leading product design and UX research to rethink the website experience, making the product more intuitive and compelling for new customers" },
        { bold: "Columbia Graphics and User Interfaces Lab", rest: " — exploring gaussian splatting reconstruction at the intersection of virtual reality and artificial intelligence" },
        { bold: "CORE (Columbia Organization of Rising Entrepreneurs)", rest: " — leading the PM fellowship, organizing guest speakers and facilitating a cohort of 40 students learning product management. Member of digital strategy, creating content that connects students and entrepreneurs across NYC" },
      ]
    },
    {
      heading: "Work I've Done",
      items: [
        { bold: "Northrop Grumman", rest: " — designed enterprise software for mission-critical defense systems, automated data verification with Python, and delivered major system upgrades complying with MIL-STD requirements" },
        { bold: "Perpetua Venture (Columbia Build Lab)", rest: " — co-led AI workflow development for a digital will service, taking end-to-end ownership of ML and LLM system design for asset discovery" },
        { bold: "Ludus", rest: " — developed the teacher-facing platform for an edtech startup, designing UI/UX in Figma and implementing responsive frontend features in React" },
        { bold: "computational media research at UCSC", rest: " — developed a personalized learning tutorial add-on for Blender and designed user studies comparing traditional vs. custom tutorial methods" },
      ]
    },
    {
      heading: "Work I'm Exploring",
      items: [
        { bold: "natural language processing", rest: " — understanding how machines interpret and generate human language, from text classification to sentiment analysis" },
        { bold: "machine learning and neural networks for social impact", rest: " — applying ML models to social justice projects, education, and civic technology to drive meaningful change" },
        { bold: "personalized learning systems", rest: " — investigating human-computer interaction patterns that adapt to individual learner needs" },
      ]
    }
  ];

  return (
    <section id="creative" className="section">
      <div className="container">
        <div className="section-header">
          <h2><span className="accent-terracotta">Overview</span></h2>
        </div>

        <div className="current-columns">
          {columns.map((col, index) => (
            <div key={index} className="current-column">
              <h3 className="current-heading">{col.heading}</h3>
              <ol className="current-list">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <strong>{item.bold}</strong>{item.rest}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Current;
