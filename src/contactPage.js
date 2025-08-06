
import { Header, Footer } from "./Home";
import "./contactPage.css";

// This is the Contact page component
const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="contact-section">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <form id="contact-form"  className="contact-form">
              <label htmlFor="email">Contact Email:</label>
              <h1>admin@dexplovate.com</h1>

              <label htmlFor="number">Contact Number:</label>
              <h1>+919494402255</h1>

              {/*<button type="submit">Submit</button>*/}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;