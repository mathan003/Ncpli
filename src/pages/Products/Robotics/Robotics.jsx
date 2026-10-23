import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Robotics.css";

// Icons & Graphics
import actualRobotsIcon from "../../../assets/image/product/Robotics/actual robots.png";
import learnFromIcon from "../../../assets/image/product/Robotics/Learn from.png";
import buildPresentIcon from "../../../assets/image/product/Robotics/Build and present.png";

// School Project Photos
import rsPuramPhoto from "../../../assets/image/product/Robotics/R.S Puram West Corp Girls Hr Sec School.png";
import srpPhoto from "../../../assets/image/product/Robotics/SRP AMAMANIAMMAL GIRL'S SCHOOL R.S.PURAM.png";
import ramanathapuramPhoto from "../../../assets/image/product/Robotics/Ramathanapuram school.png";
import selaiyurPhoto from "../../../assets/image/product/Robotics/Corporation high sec.school Selaiyur.png";
import thiruneermalaiPhoto from "../../../assets/image/product/Robotics/PUMS school, Thiruneermalai.png";

// What You'll Gain Icons & Illustration
import codingSkillsIcon from "../../../assets/image/product/Robotics/Coding Skills.png";
import problemSolvingIcon from "../../../assets/image/product/Robotics/Problem Solving.png";
import creativityIcon from "../../../assets/image/product/Robotics/Creativity.png";
import teamworkIcon from "../../../assets/image/product/Robotics/Teamwork.png";
import futureReadyIcon from "../../../assets/image/product/Robotics/Future Ready.png";
import gainIllustration from "../../../assets/image/product/Robotics/Kids Building a Colorful Robot Workshop (1) 1.png";

// Intro and Contact Graphic
import roboticsIntro from "../../../assets/image/product/Robotics/RoboticsIntro.png";
import contactUsImg from "../../../assets/image/product/contact us.png";

function Robotics() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "Robotics",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent("Demo Request: Robotics");
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProduct: Robotics\n\nMessage:\n${demoFormData.message}`
      );
      window.location.href = `mailto:support@ncpli.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <div className="robotics-page prod-page-wrapper">
      {/* Product Hero Banner */}
      <section className="robotics-hero prod-hero">
        <div className="robotics-hero-container">
          <h1 className="robotics-hero-title">PRODUCT</h1>
          <p className="robotics-hero-subtitle">Designed for the way you work.</p>
        </div>
      </section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/products">Product</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Robotics</span>
        </nav>
      </div>

      <main className="robotics-container">
        {/* Top Intro Section Card */}
        <section className="robotics-intro-card">
          <div className="robotics-intro-content">
            <h2 className="robotics-intro-tag">ROBOTICS</h2>
            <h3 className="robotics-intro-subtitle">
              Hands-on robotics training for brighter future innovators
            </h3>
            <p className="robotics-intro-desc">
                We make robotics simple, fun and future-ready. With expert trainers, hands-on kits and practical learning,students gain the skills to build, 
                code and innovative
            </p>
          </div>
          <div className="robotics-intro-image-wrapper">
            <img
              src={roboticsIntro}
              alt="Students learning Robotics with robot kit"
              className="robotics-intro-image"
            />
          </div>
        </section>

        {/* Why Choose Netcom Robotics Section */}
        <section className="robotics-why-choose">
          <div className="robotics-section-header">
            <h2 className="robotics-section-title">Why Choose Netcom Robotics?</h2>
            <p className="robotics-section-subtitle">
              We make robotics simple, fun and future-ready. With expert trainers, hands-on kits,
              and practical learning, students gain the skills to build, code and innovate.
            </p>
          </div>

          <div className="robotics-features-grid">
            <div className="robotics-feature-card">
              <div className="robotics-feature-icon-wrapper">
                <img src={actualRobotsIcon} alt="Robotics kit" />
              </div>
              <p>Work with real kits and build actual robots.</p>
            </div>

            <div className="robotics-feature-card">
              <div className="robotics-feature-icon-wrapper">
                <img src={learnFromIcon} alt="Trainer icon" />
              </div>
              <p>Learn from experienced professionals in the field of robotics</p>
            </div>

            <div className="robotics-feature-card">
              <div className="robotics-feature-icon-wrapper">
                <img src={buildPresentIcon} alt="Team presentation icon" />
              </div>
              <p>Build and present real-world projects and models.</p>
            </div>
          </div>
        </section>

        {/* Our Netcom Projects Section */}
        <section className="robotics-projects-section">
          <div className="robotics-section-header">
            <h2 className="robotics-section-title">Our Netcom Projects</h2>
          </div>

          <div className="robotics-projects-grid">
            <div className="robotics-project-card">
              <div className="robotics-project-image-wrap">
                <img src={rsPuramPhoto} alt="R.S Puram West Corp Girls Hr Sec School" />
              </div>
              <h4 className="robotics-project-title">R.S Puram West Corp Girls Hr Sec School</h4>
            </div>

            <div className="robotics-project-card">
              <div className="robotics-project-image-wrap">
                <img src={srpPhoto} alt="SRP Amamaniammal GHR School R.S.Puram" />
              </div>
              <h4 className="robotics-project-title">SRP Amamaniammal GHR School R.S.Puram</h4>
            </div>

            <div className="robotics-project-card">
              <div className="robotics-project-image-wrap">
                <img src={ramanathapuramPhoto} alt="Ramathanapuram school" />
              </div>
              <h4 className="robotics-project-title">Ramathanapuram school</h4>
            </div>

            <div className="robotics-project-card">
              <div className="robotics-project-image-wrap">
                <img src={selaiyurPhoto} alt="Corporation high sec school Selaiyur" />
              </div>
              <h4 className="robotics-project-title">Corporation high sec school Selaiyur</h4>
            </div>

            <div className="robotics-project-card">
              <div className="robotics-project-image-wrap">
                <img src={thiruneermalaiPhoto} alt="PUMS school, Thiruneermalai" />
              </div>
              <h4 className="robotics-project-title">PUMS school, Thiruneermalai</h4>
            </div>
          </div>
        </section>

        {/* What You'll Gain Section */}
        <section className="robotics-gain-card">
          <div className="robotics-gain-header">
            <h2 className="robotics-gain-title">What You'll Gain</h2>
            <p className="robotics-gain-subtitle">Build skills. Solve problems. Create the future.</p>
          </div>

          <div className="robotics-gain-body">
            <div className="robotics-gain-pills">
              <div className="robotics-gain-pill">
                <div className="robotics-gain-pill-icon">
                  <img src={codingSkillsIcon} alt="Coding skills" />
                </div>
                <div className="robotics-gain-pill-text">
                  <h4>Coding Skills</h4>
                  <p>Learn to program robotics and device</p>
                </div>
              </div>

              <div className="robotics-gain-pill">
                <div className="robotics-gain-pill-icon">
                  <img src={problemSolvingIcon} alt="Problem solving" />
                </div>
                <div className="robotics-gain-pill-text">
                  <h4>Problem Solving</h4>
                  <p>Think logically and build solution</p>
                </div>
              </div>

              <div className="robotics-gain-pill">
                <div className="robotics-gain-pill-icon">
                  <img src={creativityIcon} alt="Creativity" />
                </div>
                <div className="robotics-gain-pill-text">
                  <h4>Creativity</h4>
                  <p>Turn your ideas into real projects.</p>
                </div>
              </div>

              <div className="robotics-gain-pill">
                <div className="robotics-gain-pill-icon">
                  <img src={teamworkIcon} alt="Teamwork" />
                </div>
                <div className="robotics-gain-pill-text">
                  <h4>Teamwork</h4>
                  <p>Collaborate and work on group projects</p>
                </div>
              </div>

              <div className="robotics-gain-pill">
                <div className="robotics-gain-pill-icon">
                  <img src={futureReadyIcon} alt="Future ready" />
                </div>
                <div className="robotics-gain-pill-text">
                  <h4>Future Ready</h4>
                  <p>Gain skills for STEM and beyond.</p>
                </div>
              </div>
            </div>

            <div className="robotics-gain-illustration-wrap">
              <img
                src={gainIllustration}
                alt="Students building robot with laptop"
                className="robotics-gain-illustration"
              />
            </div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="robotics-cta-card">
          <div className="robotics-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us.
              Also we can add/update new features and design changes in this product if you want.
              To discuss about this product and our other services, please mail us on{" "}
              <strong>support@ncpli.com</strong> or call <strong>+91 73050 24014</strong>.
            </p>
            <button
              type="button"
              className="robotics-btn-demo"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request a Demo
            </button>
          </div>
          <div className="robotics-cta-image">
            <img src={contactUsImg} alt="Netcom Support Representative" />
          </div>
        </section>
      </main>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="robotics-modal-backdrop" onClick={() => setIsDemoModalOpen(false)}>
          <div className="robotics-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="robotics-modal-header">
              <h3>Request a Demo</h3>
              <button
                type="button"
                className="robotics-modal-close"
                onClick={() => setIsDemoModalOpen(false)}
              >
                ✕
              </button>
            </div>
            {demoSuccess ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "3rem", color: "#1b8754", marginBottom: "12px" }}>✓</div>
                <h4 style={{ color: "#0e4a34", fontSize: "1.3rem", margin: "0 0 10px" }}>
                  Thank You!
                </h4>
                <p style={{ color: "#4f5d54" }}>Your demo request for Robotics has been received.</p>
                <button
                  type="button"
                  className="robotics-modal-submit"
                  onClick={() => setIsDemoModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="robotics-modal-form" onSubmit={handleDemoSubmit}>
                <div className="form-group">
                  <label htmlFor="demo-name">Your Full Name *</label>
                  <input
                    id="demo-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={demoFormData.name}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="demo-inst">Institution / Business Name *</label>
                  <input
                    id="demo-inst"
                    type="text"
                    required
                    placeholder="e.g. Cambridge School"
                    value={demoFormData.institution}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, institution: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="demo-email">Email Address *</label>
                  <input
                    id="demo-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={demoFormData.email}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="demo-phone">Phone Number *</label>
                  <input
                    id="demo-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoFormData.phone}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="demo-msg">Specific Requirements</label>
                  <textarea
                    id="demo-msg"
                    rows="3"
                    placeholder="Tell us about your requirements..."
                    value={demoFormData.message}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, message: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="robotics-modal-submit">
                  Submit Demo Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Robotics;

