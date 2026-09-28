import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OnlineCabBooking.css";

import contactUsImg from "../../../assets/image/product/contact us.png";
import cabHeroImg from "../../../assets/image/product/Online Cab Booking/image1.png";
import cabIconBook from "../../../assets/image/product/Online Cab Booking/book cab.png";
import cabIconVehicles from "../../../assets/image/product/Online Cab Booking/vehicles Gallary.png";
import cabIconPrice from "../../../assets/image/product/Online Cab Booking/Pricing.png";
import cabIconMap from "../../../assets/image/product/Online Cab Booking/Google Map.png";
import cabIconMobile from "../../../assets/image/product/Online Cab Booking/mobile friendly.png";
import cabIconEase from "../../../assets/image/product/Online Cab Booking/ease of use.png";
import cabScreenHome from "../../../assets/image/product/Online Cab Booking/cab book interface.png";
import cabScreenFrame from "../../../assets/image/product/Online Cab Booking/cab book interface2.png";
import cabLaptopSystem from "../../../assets/image/product/Online Cab Booking/image2.png";

function OnlineCabBooking() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "Online Cab Booking Application",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Demo Request: Online Cab Booking Application`);
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nCompany: ${demoFormData.institution}\nProduct: Online Cab Booking Application\n\nMessage:\n${demoFormData.message}`
      );
      window.location.href = `mailto:support@ncpli.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <div className="prod-page-wrapper">
      {/* Product Hero Banner */}
      <section className="prod-hero">
        <div className="prod-hero-container">
          <h1 className="prod-hero-title">PRODUCT</h1>
          <p className="prod-hero-subtitle">Designed for the way you work.</p>
        </div>
      </section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/products">Product</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Online Cab Booking</span>
        </nav>
      </div>

      <main className="prod-container">
        {/* Top Intro Section Box */}
        <div className="cab-intro-card">
          <div className="cab-intro-text">
            <h2>Online Cab Booking Application</h2>
            <p>
              Online Cab Booking Application deals with an online system intended for booking cabs as per the requirements of the customers at their convenience. The current system is manual and it is time-consuming. It is also error-prone, and the average return is low and diminishing. We give customer satisfaction the utmost priority and so give ample options to book cab by entering details like their Journey Date and Time, Origin, Pick-Up Point, Destination and The Drop-Off Point They Need To Reach.
            </p>
          </div>

          <div className="cab-intro-media">
            <img src={cabHeroImg} alt="Online Cab Booking Mobile Interface with 3D Cabs on Map" />
          </div>
        </div>

        {/* Features & Media Split */}
        <section className="cab-features-section">
          <div className="cab-features-split">
            {/* Left Column: Features + Tech Used */}
            <div className="cab-left-content">
              <h2 className="cab-section-heading">Features</h2>
              <div className="cab-feature-grid">
                <div className="cab-feature-card">
                  <span className="cab-feature-icon-badge">
                    <img src={cabIconBook} alt="Book Cabs Instantly" />
                  </span>
                  <h3>Book Cabs Instantly</h3>
                </div>

                <div className="cab-feature-card">
                  <span className="cab-feature-icon-badge">
                    <img src={cabIconVehicles} alt="Vehicles Gallery" />
                  </span>
                  <h3>Vehicles Gallery</h3>
                </div>

                <div className="cab-feature-card">
                  <span className="cab-feature-icon-badge">
                    <img src={cabIconPrice} alt="Pricing List for various places" />
                  </span>
                  <h3>Pricing List for various places</h3>
                </div>

                <div className="cab-feature-card">
                  <span className="cab-feature-icon-badge">
                    <img src={cabIconMap} alt="Google Places Integration" />
                  </span>
                  <h3>Google Places Integration</h3>
                </div>

                <div className="cab-feature-card">
                  <span className="cab-feature-icon-badge">
                    <img src={cabIconMobile} alt="Mobile-Friendly & Responsive Website" />
                  </span>
                  <h3>Mobile-Friendly & Responsive Website</h3>
                </div>

                <div className="cab-feature-card">
                  <span className="cab-feature-icon-badge">
                    <img src={cabIconEase} alt="Ease Of Use" />
                  </span>
                  <h3>Ease Of Use</h3>
                </div>
              </div>

              {/* Technology Used Section */}
              <div className="cab-tech-section">
                <h2 className="cab-section-heading">Technology used</h2>
                <div className="cab-tech-grid">
                  <div className="cab-tech-card">
                    <h3>Web Application</h3>
                    <ul className="cab-tech-list">
                      <li><span className="cab-tech-bullet">⚛</span> React Js</li>
                      <li><span className="cab-tech-bullet">🚂</span> ExpressJS</li>
                      <li><span className="cab-tech-bullet">🟢</span> Node JS</li>
                      <li><span className="cab-tech-bullet">🍃</span> MongoDB</li>
                    </ul>
                  </div>

                  <div className="cab-tech-card">
                    <h3>Mobile Application</h3>
                    <ul className="cab-tech-list">
                      <li><span className="cab-tech-bullet">🤖</span> Android</li>
                      <li><span className="cab-tech-bullet">🚂</span> ExpressJS</li>
                      <li><span className="cab-tech-bullet">🟢</span> Node JS</li>
                      <li><span className="cab-tech-bullet">🍃</span> MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Media Stack */}
            <div className="cab-media-stack">

              <div className="cab-screen-preview">
                <img src={cabScreenHome} alt="Cab Booking Web Home View" />
              </div>

              <div className="cab-screen-preview">
                <img src={cabScreenFrame} alt="Cab Vehicle Selection Preview" />
              </div>
            </div>
          </div>
        </section>

        {/* Big Laptop Showcase */}
        <div className="cab-laptop-showcase">
          <img src={cabLaptopSystem} alt="Online Cab Booking Web Application Running on Laptop" />
        </div>

        {/* Bottom CTA Card */}
        <section className="prod-cta-card">
          <div className="prod-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us. Also we can add/update new features and design changes in this product. If you want To discuss about this product and our other services, please mail us on <strong>support@ncpli.com</strong> or call <strong>+91 73977 30945</strong>.
            </p>
            <button
              type="button"
              className="btn-request-demo"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request a Demo
            </button>
          </div>
          <div className="prod-cta-image">
            <img src={contactUsImg} alt="Netcom Support Representative" />
          </div>
        </section>
      </main>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="prod-modal-backdrop" onClick={() => setIsDemoModalOpen(false)}>
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>Request a Demo</h3>
              <button
                type="button"
                className="prod-modal-close"
                onClick={() => setIsDemoModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            {demoSuccess ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "3rem", color: "#1b8754", marginBottom: "12px" }}>✓</div>
                <h4 style={{ color: "#0e4a34", fontSize: "1.3rem", margin: "0 0 10px" }}>Thank You!</h4>
                <p style={{ color: "#4f5d54" }}>Your demo request for Online Cab Booking Application has been received.</p>
                <button
                  type="button"
                  className="prod-modal-submit"
                  onClick={() => setIsDemoModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="prod-modal-form" onSubmit={handleDemoSubmit}>
                <div className="prod-form-group">
                  <label htmlFor="cab-demo-name">Your Full Name *</label>
                  <input
                    id="cab-demo-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={demoFormData.name}
                    onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="cab-demo-comp">Company / Business Name *</label>
                  <input
                    id="cab-demo-comp"
                    type="text"
                    required
                    placeholder="e.g. City Fleet Taxi"
                    value={demoFormData.institution}
                    onChange={(e) => setDemoFormData({ ...demoFormData, institution: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="cab-demo-email">Email Address *</label>
                  <input
                    id="cab-demo-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={demoFormData.email}
                    onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="cab-demo-phone">Phone Number *</label>
                  <input
                    id="cab-demo-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoFormData.phone}
                    onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="cab-demo-msg">Specific Requirements</label>
                  <textarea
                    id="cab-demo-msg"
                    rows="3"
                    placeholder="Tell us about your fleet size, features required..."
                    value={demoFormData.message}
                    onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="prod-modal-submit">
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

export default OnlineCabBooking;
