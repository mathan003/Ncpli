import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ARVR.css";

// Icons
import curriculumIcon from "../../../assets/image/product/AR & VR/icon-park-solid_communication.png";
import handsOnIcon from "../../../assets/image/product/AR & VR/on Project.png";
import expertTrainersIcon from "../../../assets/image/product/AR & VR/Expert Trainers.png";
import flexibleLearningIcon from "../../../assets/image/product/AR & VR/Flexible Learning.png";

// School Project Photos
import hasthinapuramPhoto from "../../../assets/image/product/AR & VR/Corporation high sec.school  Hasthinapuram.png";
import siddhapudurPhoto from "../../../assets/image/product/AR & VR/Siddhapudur corporation girls high school.png";
import ganeshapuramPhoto from "../../../assets/image/product/AR & VR/Ganeshapuram middle school.png";
import sugunapuramPhoto from "../../../assets/image/product/AR & VR/Sugunapuram Corporation Elementary school.png";
import tatabadPhoto from "../../../assets/image/product/AR & VR/Corporation Middle School, Tatabad.png";
import westTambaramPhoto from "../../../assets/image/product/AR & VR/Corporation high. school, kalyan Nagar, West Tambaram.png";

// Intro and Contact Graphic
import arvrIntro from "../../../assets/image/product/AR & VR/ARVR.png";
import contactUsImg from "../../../assets/image/product/contact us.png";

function ProductARVR() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "AR/VR",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent("Demo Request: AR/VR");
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProduct: AR/VR\n\nMessage:\n${demoFormData.message}`
      );
      window.location.href = `mailto:support@ncpli.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <div className="product-arvr-page">
      {/* Product Hero Banner */}
      <section className="product-arvr-hero">
        <div className="product-arvr-hero-container">
          <h1 className="product-arvr-hero-title">PRODUCT</h1>
          <p className="product-arvr-hero-subtitle">Designed for the way you work.</p>
        </div>
      </section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/products">Product</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">AR/VR</span>
        </nav>
      </div>

      <main className="product-arvr-container">
        {/* Top Intro Section Card */}
        <section className="product-arvr-intro-card">
          <div className="product-arvr-intro-content">
            <h2 className="product-arvr-intro-tag">AR/VR</h2>
            <h3 className="product-arvr-intro-subtitle">Build the Next Reality</h3>
            <p className="product-arvr-intro-desc">
              Step into immersive worlds and learn how to create them.
              Our AR/VR courses help you master cutting-edge technologies and turn your ideas
              into interactive experiences.
            </p>
          </div>
          <div className="product-arvr-intro-image-wrapper">
            <img
              src={arvrIntro}
              alt="Student wearing VR headset in classroom"
              className="product-arvr-intro-image"
            />
          </div>
        </section>

        {/* Why Learn AR/VR Section */}
        <section className="product-arvr-why-choose">
          <div className="product-arvr-section-header">
            <h2 className="product-arvr-section-title">Why Learn AR/VR</h2>
            <p className="product-arvr-section-subtitle">
              Get future-ready with industry-focused training, modern tools and real-world experience
            </p>
          </div>

          <div className="product-arvr-features-grid">
            <div className="product-arvr-feature-card">
              <div className="product-arvr-feature-icon-wrapper">
                <img src={curriculumIcon} alt="Industry-relevant Curriculum" />
              </div>
              <h4>Industry-relevant Curriculum</h4>
              <p>Learn the latest tools and technologies used in the real world.</p>
            </div>

            <div className="product-arvr-feature-card">
              <div className="product-arvr-feature-icon-wrapper">
                <img src={handsOnIcon} alt="Hands-On projects" />
              </div>
              <h4>Hands-On projects</h4>
              <p>Build AR/VR applications and interactive experiences from scratch.</p>
            </div>

            <div className="product-arvr-feature-card">
              <div className="product-arvr-feature-icon-wrapper">
                <img src={expertTrainersIcon} alt="Expert Trainers" />
              </div>
              <h4>Expert Trainers</h4>
              <p>Learn from experienced professionals in the field of AR/VR.</p>
            </div>

            <div className="product-arvr-feature-card">
              <div className="product-arvr-feature-icon-wrapper">
                <img src={flexibleLearningIcon} alt="Flexible learning" />
              </div>
              <h4>Flexible learning</h4>
              <p>Choose from classroom or online learning options.</p>
            </div>
          </div>
        </section>

        {/* Our Netcom Projects Section */}
        <section className="product-arvr-projects-section">
          <div className="product-arvr-section-header">
            <h2 className="product-arvr-section-title">Our Netcom Projects</h2>
          </div>

          <div className="product-arvr-projects-grid">
            <div className="product-arvr-project-card">
              <div className="product-arvr-project-image-wrap">
                <img
                  src={hasthinapuramPhoto}
                  alt="Corporation high sec school Hasthinapuram"
                />
              </div>
              <h4 className="product-arvr-project-title">
                Corporation high sec school Hasthinapuram
              </h4>
            </div>

            <div className="product-arvr-project-card">
              <div className="product-arvr-project-image-wrap">
                <img
                  src={siddhapudurPhoto}
                  alt="Siddhapudur corporation girls high school"
                />
              </div>
              <h4 className="product-arvr-project-title">
                Siddhapudur corporation girls high school
              </h4>
            </div>

            <div className="product-arvr-project-card">
              <div className="product-arvr-project-image-wrap">
                <img src={ganeshapuramPhoto} alt="Ganeshapuram middle school" />
              </div>
              <h4 className="product-arvr-project-title">Ganeshapuram middle school</h4>
            </div>

            <div className="product-arvr-project-card">
              <div className="product-arvr-project-image-wrap">
                <img
                  src={sugunapuramPhoto}
                  alt="Sugunapuram Corporation Elementary school"
                />
              </div>
              <h4 className="product-arvr-project-title">
                Sugunapuram Corporation Elementary school
              </h4>
            </div>

            <div className="product-arvr-project-card">
              <div className="product-arvr-project-image-wrap">
                <img src={tatabadPhoto} alt="Corporation Middle School, Tatabad" />
              </div>
              <h4 className="product-arvr-project-title">
                Corporation Middle School, Tatabad
              </h4>
            </div>

            <div className="product-arvr-project-card">
              <div className="product-arvr-project-image-wrap">
                <img
                  src={westTambaramPhoto}
                  alt="Corporation high, school, kalyan Nagar, West Tambaram"
                />
              </div>
              <h4 className="product-arvr-project-title">
                Corporation high, school, kalyan Nagar, West Tambaram
              </h4>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="product-arvr-cta-card">
          <div className="product-arvr-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us.
              Also we can add/update new features and design changes in this product if you want.
              To discuss about this product and our other services, please mail us on{" "}
              <strong>support@ncpli.com</strong> or call <strong>+91 73977 30945</strong>.
            </p>
            <button
              type="button"
              className="product-arvr-btn-demo"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request a Demo
            </button>
          </div>
          <div className="product-arvr-cta-image">
            <img src={contactUsImg} alt="Netcom Support Representative" />
          </div>
        </section>
      </main>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div
          className="product-arvr-modal-backdrop"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div className="product-arvr-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="product-arvr-modal-header">
              <h3>Request a Demo</h3>
              <button
                type="button"
                className="product-arvr-modal-close"
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
                <p style={{ color: "#4f5d54" }}>Your demo request for AR/VR has been received.</p>
                <button
                  type="button"
                  className="product-arvr-modal-submit"
                  onClick={() => setIsDemoModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="product-arvr-modal-form" onSubmit={handleDemoSubmit}>
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
                <button type="submit" className="product-arvr-modal-submit">
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

export default ProductARVR;

