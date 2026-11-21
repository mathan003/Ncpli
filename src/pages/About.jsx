import { Link } from "react-router-dom";
import "./About.css";
import about1 from "../assets/image/about/about1.jpg";
import about2 from "../assets/image/about/about2.jpg";
import about3 from "../assets/image/about/about3.jpg";
import aboutHeader from "../assets/image/about/meeting.png";
import missionIcon from "../assets/image/about/mission.png";
import visionIcon from "../assets/image/about/vision.png";
import arvrImage from "../assets/image/product/AR & VR/ARVR.png";

const About = () => (
  <main className="about-page">
    <section
      className="about-hero"
      style={{ "--about-header-image": `url("${aboutHeader}")` }}
    >
      <div className="about-hero-content">
        <h1>About Us</h1>
        <Link to="/contact">Know Who We Are</Link>
      </div>
    </section>

    {/* ================= BREADCRUMB CAPSULE ================= */}
    <div className="cs-breadcrumb-wrapper">
      <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span className="cs-breadcrumb-separator">›</span>
        <span className="cs-breadcrumb-current">About Us</span>
      </nav>
    </div>

    <section className="about-content">
      <h2 className="about-title">Welcome to Netcom Computers</h2>

      <div className="about-welcome">
        <div className="about-photo-stack">
          <img className="about-photo1" src={about1} alt="Learning with technology" />
          <img className="about-photo2" src={about2} alt="Students learning in a classroom" />
          <div className="about-stat"><strong>20+</strong><span>Years</span></div>
        </div>
        <div className="about-copy">
          <div className="about-intro">
          <p><strong>Netcom Computers Pvt Ltd</strong>, an information technology based company 
          since 2004, in Education and Training, is offering a wide range of services that include
          creating educational and training content of global relevance, designing and
          executing large learning initiatives, and setting up the requisite infrastructure.</p>
          <p>Netcom aims to build a quality and comprehensive technology infrastructure, establish and maintain an effective operational environment, and deliver quality, prompt, cost-effective, and reliable technology. Netcom provides innovative, quality, and sustainable ICT solutions and services that meet the aspirations of educational sector institutions like school boards and universities in learning, teaching, research, and management.</p>
          <p>Over these years, the company has earned a reputation that has a unique combination of value, trust, and reliability. We have a formidable track record and are illustrious for the expertise of our team.</p>
          <p>Netcom provides multiple software services to clients. Our mission is to help customers achieve their business objectives by providing innovative, best-in-class consulting, IT solutions, and services. We function as an IT partner to business, offering a consulting – plan – implementation approach with an integrated portfolio of technology IT solutions that encompass the entire Enterprise value chain.</p>
        </div>
        </div>
      </div>

      <div className="about-story">
        <p>Driven by a team of innovative software professionals, we are a premier software development company specializing in outsourcing services, product-engineering services including custom application and software development, maintenance, and mobile applications. Netcom&apos;s domestic and international business network delivers highly flexible, adaptive solutions and a best-of-both-worlds scenario for modern enterprise needs. Our offshore development team maintains continuous communication with clients to ensure customer-driven development and keep every project strictly on track.</p>
        <img src={about3} alt="Digital technology illustration" />
      </div>

      {/* ================= AR & VR INNOVATION SECTION ================= */}
      <section className="about-arvr-section" aria-label="AR and VR Educational Solutions">
        <div className="about-arvr-card">
          <div className="about-arvr-info">
            <span className="about-arvr-badge">IMMERSIVE LEARNING</span>
            <h2 className="about-arvr-title">Pioneering AR &amp; VR in Education</h2>
            <p className="about-arvr-text">
              Netcom Computers leads the next frontier of experiential education by integrating cutting-edge 
              Augmented Reality (AR) and Virtual Reality (VR) into classrooms, colleges, and training institutions. 
              Our immersive solutions transform complex theoretical concepts into interactive 3D simulations, 
              enabling students to visualize, explore, and retain knowledge like never before.
            </p>

            <div className="about-arvr-features">
              <div className="about-arvr-feat">
                <span className="about-arvr-feat-icon" aria-hidden="true">✔</span>
                <div>
                  <strong>Interactive 3D Environments:</strong> STEM concepts, human anatomy, space science, and complex machinery visualized in real time.
                </div>
              </div>
              <div className="about-arvr-feat">
                <span className="about-arvr-feat-icon" aria-hidden="true">✔</span>
                <div>
                  <strong>Turnkey Lab Deployments:</strong> Complete end-to-end hardware setups, VR headsets, teacher consoles, and classroom management systems.
                </div>
              </div>
              <div className="about-arvr-feat">
                <span className="about-arvr-feat-icon" aria-hidden="true">✔</span>
                <div>
                  <strong>Curriculum-Aligned Content:</strong> Modules mapped to CBSE, State Board, and vocational standards for seamless classroom adoption.
                </div>
              </div>
            </div>

            <div className="about-arvr-actions">
              <Link to="/products/ar-vr" className="about-arvr-btn about-arvr-btn--primary">
                Explore AR &amp; VR Solutions <span>&rarr;</span>
              </Link>
              <Link to="/portfolio/ar&vr" className="about-arvr-btn about-arvr-btn--outline">
                View AR/VR Projects
              </Link>
            </div>
          </div>

          <div className="about-arvr-media">
            <div className="about-arvr-img-wrapper">
              <img
                src={arvrImage}
                alt="Students experiencing immersive AR and VR technology"
                className="about-arvr-img"
                loading="lazy"
              />
              <div className="about-arvr-tag-card">
                <strong>Next-Gen</strong>
                <span>Learning Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-purpose">
        <h2 className="about-title">What We Do</h2>
        <p>Netcom Computers has a team working across many fields of the IT industry. We have a strong foothold in a variety of fields like computer education, 
           computer-aided education, soft skills training, software solutions, web solutions, 3D and 2D animations, cartoon animations, and more.</p>
        <div className="purpose-grid">
          <article className="purpose-card">
            <img src={missionIcon} alt="" />
            <h3>Mission</h3>
            <p>To provide best-of-breed software products to enable organizations to run their 
                businesses and operations better. To deliver effective IT solutions and quality services. 
                To enhance the competitive advantages of our clients. To maintain a sustainable 
                social environment and be a socially responsible corporate citizen.</p>
          </article>
          <article className="purpose-card">
            <img src={visionIcon} alt="" />
            <h3>Vision</h3>
            <p>Netcom provides ubiquitous, secure, and seamless access to information 
                resources in all forms through reliable and robust infrastructure. To build better 
                solutions for the education industry through AI and machine learning capabilities, 
                empowering students and educators with advanced educational applications.</p>
          </article>
        </div>
      </section>
    </section>
  </main>
);

export default About;
