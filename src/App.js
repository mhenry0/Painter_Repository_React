import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // You can add custom styles here
import Portfolio from './Portfolio'; // Import the Portfolio component
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet';
import FloatingWhatsAppButton from './floatwhatsapp';



function App() {
  return (
    <div>
 <Helmet>
        <title>Painter's Portfolio</title>
        <meta name="description" content="Explore the stunning artwork and commissions by Painter's Portfolio." />
      </Helmet>
{/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
  <div className="container">
    <a 
      className="navbar-brand" 
      href="#" 
      style={{ cursor: 'default' }} // Ensures default cursor for the brand
    >
      Painter's Portfolio
    </a>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
      style={{ zIndex: 1050, cursor: 'default' }} // Default cursor for hamburger
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link 
            className="nav-link" 
            to="about" 
            smooth={true} 
            duration={500}
            style={{ cursor: 'default' }} // Default cursor for nav links
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            className="nav-link" 
            to="portfolio" 
            smooth={true} 
            duration={500}
            style={{ cursor: 'default' }} // Default cursor for nav links
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            className="nav-link" 
            to="services" 
            smooth={true} 
            duration={500}
            style={{ cursor: 'default' }} // Default cursor for nav links
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            className="nav-link" 
            to="contact" 
            smooth={true} 
            duration={500}
            style={{ cursor: 'default' }} // Default cursor for nav links
          >
            Contact
          </Link>
        </li>
      </ul>
{/* Botón de Google Translate con ícono de globo */}
<div className="ms-3" style={{ position: 'relative', zIndex: 1040 }}>
  <button 
    className="btn btn-link text-white" 
    style={{ 
      border: 'none', 
      background: 'transparent', 
      zIndex: 1040, 
      cursor: 'default', 
      boxShadow: 'none', // Sin sombra para el botón
      padding: '0' // Para reducir espacio adicional
    }} 
    onClick={() => document.getElementById('google_translate_element').classList.toggle('d-none')}
  >
    <i 
      className="fas fa-globe" 
      style={{ 
        textShadow: 'none', // Sin sombra para el texto
        boxShadow: 'none', // Sin sombra exterior
        border: 'none', // Sin bordes
        padding: '0', // Sin relleno
        margin: '0' // Sin márgenes
      }} 
    ></i>
  </button>
  {/* Dropdown de Google Translate */}
  <div 
    id="google_translate_element" 
    className="d-none" 
    style={{
      position: 'absolute',
      top: '40px',
      right: '0',
      background: '#fff',
      padding: '10px',
      borderRadius: '4px',
      zIndex: 1040,
      boxShadow: 'none' // Sin sombra para el dropdown
    }}
  >
  </div>
</div>
      
       
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1>Transforming Canvas into Masterpieces</h1>
          <a href="#portfolio" className="btn btn-primary portfolio-btn me-3">
  <i className="fas fa-briefcase"></i> View Portfolio
</a>
<a href="#contact" className="btn btn-light contact-btn">
  <i className="fas fa-envelope"></i> Contact Me
</a>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About the Artist</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="artist.jpg" alt="Artist" className="img-fluid rounded"/>
            </div>
            <div className="col-md-6">
              <p>Welcome to my world of creativity and colors. I am a passionate painter with a journey of exploring emotions, landscapes, and abstract ideas through art. My work aims to evoke feelings and connect with the viewer's soul.</p>
              <p>Join me in this journey and explore the story behind every brushstroke.</p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio /> {/* Use the Portfolio component */}

     
{/* Services Section */}
<section id="services" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5 text-dark">Our Services</h2>
    <div className="row text-center">
      {/* Custom Commissions */}
      <div className="col-md-4">
        <div className="service-card">
          <div className="service-icon mb-3">
            <i className="fas fa-paint-brush fa-3x text-primary"></i>
          </div>
          <h4 className="mb-3 font-weight-bold">Custom Commissions</h4>
          <p className="text-muted">Bring your ideas to life with a personalized painting, crafted exclusively for you. Whether you have a specific theme in mind or want to surprise someone special, we make it happen.</p>
        </div>
      </div>

      {/* Live Painting Sessions */}
      <div className="col-md-4">
        <div className="service-card">
          <div className="service-icon mb-3">
            <i className="fas fa-palette fa-3x text-primary"></i>
          </div>
          <h4 className="mb-3 font-weight-bold">Live Painting Sessions</h4>
          <p className="text-muted">Experience the magic of art being created in real-time. Watch the brushstrokes flow as we bring your concept to life in a dynamic, live setting.</p>
        </div>
      </div>

      {/* Art Workshops */}
      <div className="col-md-4">
        <div className="service-card">
          <div className="service-icon mb-3">
            <i className="fas fa-chalkboard-teacher fa-3x text-primary"></i>
          </div>
          <h4 className="mb-3 font-weight-bold">Art Workshops</h4>
          <p className="text-muted">Join our hands-on workshops and learn the techniques and secrets of painting from experienced artists. Perfect for all skill levels.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<FloatingWhatsAppButton />

{/* Contact Section */}
<section id="contact" className="py-5 bg-light" style={{ color: 'black' }}>
  <div className="container">
    <h2 className="text-center mb-4">Contact</h2>
    <div className="text-center mb-4">
      <p>If you would like to discuss custom commissions or have any questions about my artwork, feel free to reach out. I look forward to hearing from you!</p>
    </div>
    <div className="text-center">
      <p>
        <strong>Email:</strong> <a href="mailto:artist@example.com" style={{ color: 'black' }}>artist@example.com</a>
      </p>
      <p>
        <strong>Phone:</strong> (123) 456-7890
      </p>
    </div>
  </div>
</section>


<footer className="footer">
  <div className="container text-center">



    <p>Follow me on social media for updates on new works:</p>
    <div className="social-icons">
      <a href="https://facebook.com" className="text-white mx-2">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://instagram.com" className="text-white mx-2">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://pinterest.com" className="text-white mx-2">
        <i className="fab fa-pinterest"></i>
      </a>
      
    </div>
    
  </div>
  <a href="https://www.nativainnovations.com/" target="_blank">
  Website developed by Nativa Innovations Web Development Agency
</a>


</footer>



    </div>
  );
}

export default App;
