import heroImg from '../images/21fbbe77-184a-4cce-8c3c-fd483dc76e0a 1.png'
import logoImg from '../images/graphics.png'

function Header() {
  return (
    <header className="hero" role="banner">
      <nav className="hero-nav" aria-label="Site logo">
        <img src={logoImg} alt="Site logo" className="logo-icon" />
      </nav>

      <div className="hero-body">
        <div className="hero-content">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down
            the solar system in a clear, data-driven way.
          </p>
          <div className="hero-buttons">
            <a href="#planets" className="btn-primary">Explore the Data</a>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>

        <img
          className="hero-image"
          src={heroImg}
          alt="Glowing blue Earth planet"
        />
      </div>
    </header>
  )
}

export default Header
 