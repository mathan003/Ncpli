import React from "react";
import { Link } from "react-router-dom";
import "./OnlineCabBooking.css";

import cabHeroImg from "../../../assets/image/product/Online Cab Booking/image1.png";
import cabHomeImg from "../../../assets/image/product/Online Cab Booking/cab book interface.png";
import cabSelectImg from "../../../assets/image/product/Online Cab Booking/cab book interface2.png";

function OnlineCabBooking() {
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
          <span className="project-breadcrumb-current">Online Cab Booking</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Online Cab Booking Platform</h1>

        {/* Top Intro Section */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              The <strong>Online Cab Booking Application</strong> is an enterprise transportation platform designed for seamless booking, fleet management, and driver dispatching.
            </p>
            <p>
              Conventional manual booking procedures are slow, error-prone, and lack real-time visibility. Netcom's digital platform provides customers with an effortless booking journey: specifying journey dates, origin, pickup checkpoints, vehicle type, and exact drop-off destinations.
            </p>
            <p>
              Fleet operators gain complete centralized oversight over vehicle availability, transparent distance-based fare calculations, driver assignments, and live ride status tracking.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={cabHeroImg} alt="Online Cab Booking Application 3D Map Graphic" />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <h2 className="project-section-title">Core System Modules</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Instant Online Booking</h3>
            <p>Responsive web and mobile interface allowing passengers to book rides in three simple steps with immediate SMS and email confirmations.</p>
          </div>
          <div className="project-card">
            <h3>Vehicles Gallery &amp; Tiers</h3>
            <p>Comprehensive vehicle catalog displaying sedans, SUVs, hatchbacks, and tempo travelers with transparent seating capacities and amenities.</p>
          </div>
          <div className="project-card">
            <h3>Transparent Fare Calculator</h3>
            <p>Automated rate calculation based on kilometers, toll estimates, peak time multipliers, and fixed outstation packages.</p>
          </div>
          <div className="project-card">
            <h3>Google Maps &amp; Places API</h3>
            <p>Real-time location autocomplete, optimal route calculations, and live vehicle tracking on interactive map overlays.</p>
          </div>
          <div className="project-card">
            <h3>Driver Dispatch Console</h3>
            <p>Automated ride assignment algorithm matching nearby drivers, tracking driver duty logs, and managing trip settlements.</p>
          </div>
          <div className="project-card">
            <h3>Payment Gateway Integration</h3>
            <p>Multi-channel digital payment support including UPI, credit/debit cards, net banking, and driver cash collection reconciliation.</p>
          </div>
        </div>

        {/* Web Interface Previews */}
        <h2 className="project-section-title">Application Interface Showcase</h2>
        <div className="cab-proj-screens-grid">
          <div>
            <img src={cabHomeImg} alt="Online Cab Booking Web Home Screen" />
            <div style={{ textAlign: "center", color: "#0e4a34", fontWeight: 700, marginTop: "10px" }}>Passenger Booking Homepage</div>
          </div>
          <div>
            <img src={cabSelectImg} alt="Cab Vehicle Selection Preview" />
            <div style={{ textAlign: "center", color: "#0e4a34", fontWeight: 700, marginTop: "10px" }}>Fleet Vehicle Selection &amp; Fare Preview</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OnlineCabBooking;

