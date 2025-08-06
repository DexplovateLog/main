import './About.css';
import './Home.css'; 
import { Header, Footer } from './Home';

// About page specific components
const AboutHero = () => (
  <section className="about-hero">
    <div className="container">
      <h1>We are Dexplovate</h1>
      <p>
        Dexplovate is a MedTech company using AI and Hardware innovation to build purpose-driven solutions for the management and care of chronic diseases. 
      </p>
    </div>
  </section>
);

const MissionAndStory = () => (
  <section className="mission-story-section">
    <div className="container mission-story-container">
      <div className="mission-story-image">
        <img src="https://media.istockphoto.com/id/1924137653/photo/successful-deal-between-administrator-and-a-doctor.jpg?s=612x612&w=0&k=20&c=3D2l1zbuanzIMCpVnamj8EO9h2bP2CHg_XzHzUyKrcU=" alt="Our Mission" />
      </div>
      <div className="mission-story-content">
        <h2>Our Mission</h2>
        <p>
          To build a suite of AI and hardware solutions that transform a patient's lived experience into actionable data, empowering medical professionals to deliver timely and precise care. 
        </p>
      </div>
    </div>
    <div className="container mission-story-container">
      <div className="mission-story-image">
        <img src="https://images.squarespace-cdn.com/content/v1/60db8ea66b2e435f3622af5a/de3c3299-9348-482a-aa76-5de777a00dfb/qualities.png" alt="Our Story" />
      </div>
      <div className="mission-story-content">
        <h2>Our Story</h2>
        <p>
          Born from a personal experience with the helplessness of respiratory diseases the pandemic, our mission is driven by the desire to ensure no one faces the fear of an asthma attack alone, transforming silent suffering into actionable data.
        </p>
      </div>
    </div>
  </section>
);

const OurTeam = () => {
  const teamMembers = [
    { name: 'Suchandrahas Medamalli', role: 'CEO & Founder', image: 'https://via.placeholder.com/150' },
    { name: 'Vishnu Narasimha Raju Bhupathiraju', role: 'Co-Founder', image: 'https://via.placeholder.com/150' },
    { name: 'Hari Gowtham Sai Potunuru', role: 'Co-Founder', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main About page component
const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <MissionAndStory />
        <OurTeam />
      </main>
      <Footer />
    </>
  );
};

export default About;