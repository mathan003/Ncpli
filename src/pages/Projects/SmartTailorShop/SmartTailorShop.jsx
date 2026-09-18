import React from "react";
import { Link } from "react-router-dom";
import "./SmartTailorShop.css";

import tailorImg1 from "../../../assets/image/product/Smart Tailor Shop/image1.png";
import tailorImg2 from "../../../assets/image/product/Smart Tailor Shop/image2.png";
import tailorImg3 from "../../../assets/image/product/Smart Tailor Shop/image3.png";

function SmartTailorShop() {
  return (
    <div className="project-page-wrapper">
      {/* Project Hero Banner */}
      <section className="project-hero" aria-label="Project Hero Banner"></section>

      {/* Floating Mint-Green Breadcrumb Capsule */}
      <div className="project-breadcrumb-wrapper">
        <nav className="project-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="project-breadcrumb-separator">›</span>
          <Link to="/projects">Project</Link>
          <span className="project-breadcrumb-separator">›</span>
          <span className="project-breadcrumb-current">Smart Tailor Shop</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Smart Tailor Shop Management System</h1>

        {/* Top Intro Section */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              <strong>Smart Tailor Application</strong> is a responsive, cloud-connected shop management software designed specifically for tailoring boutiques, bespoke garment makers, and apparel stitching enterprises.
            </p>
            <p>
              Traditional tailoring shops face persistent errors with paper job slips, lost customer body measurement cards, delayed delivery schedules, and disorganized payment records.
            </p>
            <p>
              Smart Tailor streamlines every aspect of boutique operations: logging precise body measurements, generating automated SMS notifications on order progress, tracking tailoring staff assignments, and handling POS billing seamlessly.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={tailorImg1} alt="Smart Tailor Shop Dashboard" />
          </div>
        </div>

        {/* Split Layout: Features + Screens */}
        <div className="tailor-proj-split">
          <div className="tailor-proj-card">
            <h2 className="tailor-proj-heading">Core System Features</h2>
            <ul className="project-check-list" style={{ gap: "14px" }}>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Customer Directory: Store unlimited customer profiles with complete contact details and measurement history.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Garment Measurement Charts: Standardized and customizable measurement templates for shirts, trousers, suits, blouses, and lehengas.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Order Tracking &amp; Delivery Management: Real-time status stages (Cutting, Stitching, Trial, Ready for Delivery).</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Automated SMS Notifications: Send automated alerts when orders are accepted, trials are ready, or garments are stitched.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Worker Job Ticket Allocation: Assign individual garments to master cutters and tailors with automated wage calculations.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Integrated Billing &amp; Invoicing: POS receipt generation, advance payment tracking, pending balance collection, and GST reports.</span>
              </li>
            </ul>
          </div>

          <div className="tailor-proj-screen-stack">
            <img src={tailorImg2} alt="Smart Tailor Order Management Grid" />
            <img src={tailorImg3} alt="Smart Tailor Customer Measurement Console" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SmartTailorShop;

