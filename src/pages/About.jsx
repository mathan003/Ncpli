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
          <p><strong>Ncpli</strong>, an information technology company founded in 2004, is dedicated to education and training. We offer a comprehensive suite of services, from developing globally relevant educational content to designing large-scale learning initiatives and implementing modern IT infrastructure.</p>
          <p>Our mission is to build robust technology infrastructure, maintain effective operational environments, and deliver prompt, cost-effective, and dependable solutions that empower learners and institutions.</p>
          <p>Over the past two decades, Netcom has built an enduring reputation based on value, trust, and reliability, backed by a proven track record and an expert team.</p>
          <p>We work as a strategic technology partner, helping our clients achieve their organizational goals with innovative, best-in-class solutions.</p>
        </div>
      </div>

      <div className="about-story">
        <p>Driven by a team of innovative software professionals, Netcom is a premier software development provider specializing in custom application engineering, system maintenance, and mobile app development. Our network delivers adaptive, high-impact technology solutions tailored to evolving institutional and business needs.</p>
        <img src={about3} alt="Digital technology illustration" />
      </div>

      <section className="about-purpose">
        <h2 className="about-title">What We Do</h2>
        <p>Netcom Computers works across multiple domains in the IT industry. We have established a strong presence in computer education, digital smart classrooms, soft skills development, custom software solutions, and rich 2D &amp; 3D animation.</p>
        <div className="purpose-grid">
          <article className="purpose-card">
            <img src={missionIcon} alt="" />
            <h3>Mission</h3>
            <p>To provide best-of-breed software products and IT solutions that empower organizations to optimize operations, enhance learning, and deliver measurable outcomes.</p>
          </article>
          <article className="purpose-card">
            <img src={visionIcon} alt="" />
            <h3>Vision</h3>
            <p>To deliver ubiquitous, secure, and seamless access to modern educational and digital resources through reliable and robust technological infrastructure.</p>
          </article>
        </div>
      </section>
    </section>
  </main>
);

export default About;
