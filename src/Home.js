import { useState } from 'react';
import './Home.css';

const companyAchievements = [
  { value: '3+', label: 'Fund grants from prestigious institutions' },
  { value: '₹10 Lakhs', label: 'Grant from the Department of Science and Technology (DST)' },
  { value: '99%', label: 'Product Satisfaction Rate' },
  { value: '5', label: 'Months of Industry Experience' },
];
//This is a header component that will be used in the Home and all related pages
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <a href='/' className="header-logo">Dexplovate</a>
        <div
          className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/main" onClick={toggleMenu}>Home</a></li>
            <li><a href="/main/products" onClick={toggleMenu}>Products</a></li>
            <li><a href="/main/about" onClick={toggleMenu}>About us</a></li>
            <li><a href="/main/contact" onClick={toggleMenu}>Contact us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


//This is a hero component that will be used in the Home page
const Hero = () => (
  <section className="hero">
    <div className="container">
      <h1 className="hero-tagline">Redefining Chronic Disease Management</h1>
      <p className="hero-subtitle">
        Building a foundation of trust with every patient by providing clinically reliable, user-friendly solutions that become their secure and constant companion.
      </p>
    </div>
  </section>
);

//This is an achievements component that will be used in the Home page
const Achievements = () => (
  <section id="achievements" className="achievements">
    <div className="container">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {companyAchievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

//This is a footer component that will be used in the Home and all related pages
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2025 Dexplovate. All rights reserved.</p>
    </div>
  </footer>
);

//This is the main Home component that will be used in the App.js
const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Achievements />
    </main>
    <Footer />
  </>
);

export { Header, Footer };
export default Home;