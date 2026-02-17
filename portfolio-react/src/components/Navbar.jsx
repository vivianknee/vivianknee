import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#creative">Overview</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </div>
    </nav>
  );
};

export default Navbar;
