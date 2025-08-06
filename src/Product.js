import './Product.css';
import './Home.css'; 
import {Header, Footer} from './Home.js';

// Product page specific components
const PromiseSection = () => (
  <section className="promise-section">
    <div className="container">
      <div className="promise-card">
        <h2 className="promise-title">Our Promise to You</h2>
        <p className="promise-text">
          With AIR, every unhindered breath is a metric of our success. We are building a secure experience that promises patients they won’t be alone in their distress, creating a future where breathing easy is a right, not a privilege.
        </p>
      </div>
    </div>
  </section>
);
// Product details section
const ProductDetails = () => (
  <section className="product-details">
    <div className="container">
      <div className="product-media">
        {}
        <div className="product-image-container">
          <img
            src="https://allergyasthmanetwork.org/wp-content/uploads/2024/10/Various-Asthma-medications-photo-1080x567.jpg"
            alt="Product visual representation"
            className="product-image"
          />
        </div>
        {}
        <div className="product-info-box">
          <h2>AIR – Asthmatics In Rescue</h2>
          <p>
            It is a purpose-driven MedTech solution designed to empower patients, caregivers, and medical professionals with the clarity and confidence needed to manage asthma effectively. Our mission, 
            born from a personal journey, is to transform the daily struggle with asthma into a story of 
            control and freedom. 

            Our compact, user-friendly device is simply placed on the patient's chest or spine when they feel symptomatic. It requires no complex technique or expertise, making it ideal for children and 
            caregivers. 
          </p>
          <p>
            Key Features:
            <ul>
              <li><b>Objective Symptom Tracking:</b> AIR’s hardware also captures vital signs likeheart rate, SpO₂, respiratory rate, and body temperature.</li>
              <li><b>Intelligent Lung Sound Analysis:</b> The software module uses advanced signal processing to accurately extract abnormal lung sounds, transforming this data into objective clinical insights.</li>
              <li><b>Real-time Health Data:</b> All data is securely synchronized to a cloud-based platform, providing a Symptom Control Assessment Sheet based on GINA guidelines. </li>
              
            </ul>
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Video section (optional, can be uncommented if needed)
/*const VideoSection = () => (
  <section className="video-section">
    <div className="container">
      <h2 className="section-title">See Our Product in Action</h2>
      <div className="video-container">
        <iframe
          title="Product Promotional Video"
          className="promotional-video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);*/

// The main Product page component
const Product = () => {
  return (
    <>
      <Header />
      <main>
        <PromiseSection />
        <ProductDetails />
        {/*<VideoSection />*/}
      </main>
      <Footer />
    </>
  );
};

export default Product;