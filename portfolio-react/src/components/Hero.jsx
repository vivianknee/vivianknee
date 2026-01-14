import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hey, I'm</p>
            <h1 className="hero-name">
              Vivian Ni
            </h1>
            <p className="hero-description">
              CS @ Columbia Engineering! I make things on the internet. Design-focused developer who loves
              creating experiences that feel good and look even better. Currently
              exploring the messy, beautiful intersection of code and creativity.
            </p>
            <p className="hero-email">vivian.ni@columbia.edu</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">See My Work</a>
              <a href="#creative" className="btn btn-secondary">
                What I'm Up To →
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/vivian-ni-5ab166253/" target="_blank" rel="noopener noreferrer" className="social-link">
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
          <div className="hero-image">
            <div className="image-frame">
              <div className="frame-corner tl"></div>
              <div className="frame-corner tr"></div>
              <div className="frame-corner bl"></div>
              <div className="frame-corner br"></div>
              <img src="/images/me.jpeg" alt="Vivian Ni" />
            </div>
            <div className="image-scribble"></div>
          </div>
        </div>
      </div>
      <div className="hero-decoration">
        <svg viewBox="0 0 200 200" className="decoration-blob">
          <path d="M 50,100 Q 25,25 100,50 T 150,100 Q 175,175 100,150 T 50,100" fill="var(--terracotta)" opacity="0.1"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
