import { Link } from "react-router-dom";
import "./About.css";
import about1 from "../assets/image/about/about1.jpg";
import about2 from "../assets/image/about/about2.jpg";
import about3 from "../assets/image/about/about3.jpg";
import aboutHeader from "../assets/image/about/meeting.png";
import missionIcon from "../assets/image/about/mission.png";
import visionIcon from "../assets/image/about/vision.png";

const About = () => (
  <main className="about-page">
    <section
      className="about-hero"
      style={{ "--about-header-image": `url("${aboutHeader}")` }}
    >
      <div className="about-hero-content">
        <h1>About Us</h1>
        <span>Home › About Us</span>
        <Link to="/contact">Get in Touch</Link>
      </div>
    </section>

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
          since 2004, in Education and Training, is offering wide range of that include
          creating educational and training content of global relevance,designing and
          executing large learning initiatives and setting up the requisite infrastructure.</p>
          <p>Netcom is to build a quality and comprehensive technology infrastructure, establish and maintain an effective operational environment ,deliver Quality, prompt cost effective and reliable technology.Netcom to provide innovative, Quality and sustainable ICT solutions and services that meet the aspiration of the educational sector institutions like School boards and universities in the learning, teaching,research and management..</p>
          <p>Over these years, the company has earned a reputation that has a unique combination of value,trust and reliability.We have a formidable track record and are illustrious for the expertise of our team.</p>
          <p>Netcom providing multiple software services to clients. Our mission is to help customers achieve their business objectives by providing innovative, best-in-class consulting, IT solutions, and services. We function as an IT partner to business, offering a consulting – plan – implementation approach with an integrated portfolio of technology IT solutions that encompass the entire Enterprise value chain.</p>
        </div>
        </div>
      </div>

      <div className="about-story">
        <p>Our company by a team of innovative software professionals, we are a premier software development company, specializing in outsourcing services, product-engineering-services that includes custom Application / software application development, maintenance and mobile application development. Netcom domestic and international business network delivers highly flexible, adaptive solutions and 
           a best-of-both worlds scenario for business needs. Our Company offshore development team will be always in contact with clients for customer-driven continuous development and to ensure that the project is always on track..</p>
        <img src={about3} alt="Digital technology illustration" />
      </div>

      <section className="about-purpose">
        <h2 className="about-title">What We Do</h2>
        <p>Netcom Computers has a team of working with many fields of IT industry. We have strong foothold in a variety of fields like computer education, 
           computer aided education, soft skill training, software solutions, web solutions, 3D and 2D animations, cartoon animations, etc.,.</p>
        <div className="purpose-grid">
          <article className="purpose-card">
            <img src={missionIcon} alt="" />
            <h3>Mission</h3>
            <p>To provide best of breed software products to enable organization to run their 
                businesss and operations better.To deliver effective IT solution and quality services.
                To enchance the competitive advantages of our clients.To maintain a sustainable 
                social environment and be a socially responsible corporate citizen..</p>
          </article>
          <article className="purpose-card">
            <img src={visionIcon} alt="" />
            <h3>Vision</h3>
            <p>Netcom is to provide ubiquitous, secure and seamless access to information 
                resources in all forms through reliable and robust infrastructure.To build better 
                solution for education industry through AI and machine learning capabilities in 
                many areas of space operations to enable people to empower the knowledge of the 
                application of education..</p>
          </article>
        </div>
      </section>
    </section>
  </main>
);

export default About;
