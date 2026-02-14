import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/images/me_optimized.jpg" alt="Vivian Ni" />
          </div>
          <div className="hero-text">
            <p className="hero-greeting">Hey, I'm</p>
            <h1 className="hero-name">
              Vivian Ni
            </h1>
            <p className="hero-description">
              CS @ Columbia Engineering! Design-focused developer who loves
              creating experiences that feel good and look even better. Currently
              exploring the messy, beautiful intersection of code and creativity.
            </p>
            <p className="hero-email">vivian.ni@columbia.edu</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">See My Work</a>
              <a href="#creative" className="btn btn-secondary">
                Overview →
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ni-vivian" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>LinkedIn</span>
              </a>
              <span className="divider">/</span>
              <a href="https://github.com/vivianknee" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>GitHub</span>
              </a>
              <span className="divider">/</span>
              <a href="/Vivian-Ni.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
