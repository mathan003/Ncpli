import React from "react";
import { Link } from "react-router-dom";
import "./Kiosk.css";

import kioskImg1 from "../../../assets/image/project/Kiosk/image1.png";
import kioskImg2 from "../../../assets/image/project/Kiosk/image2.png";
import kioskImg3 from "../../../assets/image/project/Kiosk/image3.png";
import kioskImg4 from "../../../assets/image/project/Kiosk/image4.png";
import kioskImg5 from "../../../assets/image/project/Kiosk/image5.png";
import kioskImg6 from "../../../assets/image/project/Kiosk/image6.png";

const kioskInstallations = [
  { id: 1, image: kioskImg1, title: "Interactive School Information Kiosk" },
  { id: 2, image: kioskImg2, title: "Self-Service Digital Directory Kiosk" },
  { id: 3, image: kioskImg3, title: "Student Guidance & Touch Terminal" },
  { id: 4, image: kioskImg4, title: "Multi-Touch Educational Kiosk Unit" },
  { id: 5, image: kioskImg5, title: "Government School Campus Kiosk Setup" },
  { id: 6, image: kioskImg6, title: "Digital Notice Board & Public Console" },
];

function Kiosk() {
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
          <span className="project-breadcrumb-current">Kiosk Project</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Kiosk Projects</h1>

        {/* Top Intro Section */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              A <strong>Kiosk</strong> is an interactive digital system designed for institutional and public environments that delivers information, services, and educational media through a simple, accessible touchscreen interface.
            </p>
            <p>
              Netcom has designed, manufactured, and installed hundreds of heavy-duty interactive kiosk systems across government schools, university campuses, and public offices throughout Tamil Nadu.
            </p>
            <p>
              Built with tamper-resistant steel enclosures, ultra-bright commercial touch displays, and customized software suites, Netcom kiosks provide students and visitors with instantaneous access to academic schedules, digital directories, and campus notices.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={kioskImg1} alt="Netcom Interactive Kiosk System" />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <h2 className="project-section-title">Key Kiosk Features</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Interactive Touch Interface</h3>
            <p>High-sensitivity multi-touch capacitive glass displays that deliver responsive, intuitive navigation for users of all ages.</p>
          </div>
          <div className="project-card">
            <h3>Rugged Industrial Enclosure</h3>
            <p>Heavy-gauge powder-coated steel chassis engineered for vandal resistance, thermal management, and 24/7 continuous operation.</p>
          </div>
          <div className="project-card">
            <h3>Self-Service Workflows</h3>
            <p>Enables students to check exam timetables, view fee structures, review attendance, and print receipts independently without queuing.</p>
          </div>
          <div className="project-card">
            <h3>Central Content Management</h3>
            <p>Cloud-connected administrative console allows instant push updates of campus announcements, videos, and notice bulletins.</p>
          </div>
          <div className="project-card">
            <h3>Integrated Peripherals</h3>
            <p>Supports optional thermal receipt printers, QR/barcode scanners, RFID card readers, and high-definition webcams.</p>
          </div>
          <div className="project-card">
            <h3>Power Backup &amp; Low Maintenance</h3>
            <p>Built-in UPS integration and low-power industrial processors ensure reliable performance even in erratic power conditions.</p>
          </div>
        </div>

        {/* Installation Gallery */}
        <h2 className="project-section-title">On-Site Installations &amp; Showcase</h2>
        <div className="kiosk-gallery-grid">
          {kioskInstallations.map((item) => (
            <div key={item.id} className="kiosk-gallery-card">
              <img src={item.image} alt={item.title} />
              <div className="kiosk-gallery-caption">{item.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Kiosk;

