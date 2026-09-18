import React from "react";
import { Link } from "react-router-dom";
import "./RFID.css";

import rfidHeroImg from "../../../assets/image/project/RFID/RFID.png";
import taggingStationImg from "../../../assets/image/project/RFID/Tagging Station.png";
import circularStationImg from "../../../assets/image/project/RFID/Circular Station.png";
import opacKioskImg from "../../../assets/image/project/RFID/OPAC (Kiosk Machine).png";
import antiTheftGateImg from "../../../assets/image/project/RFID/Anti-Theft Gate.png";
import handHeldReaderImg from "../../../assets/image/project/RFID/Hand Held Reader.png";
import booksManagementImg from "../../../assets/image/project/RFID/Books Management.png";
import multisocketServerImg from "../../../assets/image/project/RFID/Multisocket Server.png";
import trackLibServerImg from "../../../assets/image/project/RFID/Track Lib Server.png";
import projectMethodologiesImg from "../../../assets/image/project/RFID/Project Methodologies.png";
import qualityImg from "../../../assets/image/project/RFID/Quality.png";
import transparencyImg from "../../../assets/image/project/RFID/Transparency.png";
import communicationImg from "../../../assets/image/project/RFID/Communication.png";

const rfidHardware = [
  { id: 1, image: taggingStationImg, title: "Tagging Station", desc: "High-speed encoding and tagging for books and institutional assets." },
  { id: 2, image: circularStationImg, title: "Circulation Station", desc: "Automated multi-item issue and return desk station." },
  { id: 3, image: opacKioskImg, title: "OPAC Kiosk Machine", desc: "Interactive touch kiosk for catalog search and student self-service." },
  { id: 4, image: antiTheftGateImg, title: "Anti-Theft Security Gate", desc: "Dual-pedestal detection gate preventing unauthorized book removal." },
  { id: 5, image: handHeldReaderImg, title: "Handheld RFID Reader", desc: "Portable long-range scanner for rapid inventory audits and shelf reading." },
  { id: 6, image: booksManagementImg, title: "Books Management System", desc: "Complete digital cataloging, accessioning, and shelf tracking." },
  { id: 7, image: multisocketServerImg, title: "Multisocket Server", desc: "Centralized socket connection server orchestrating hardware nodes." },
  { id: 8, image: trackLibServerImg, title: "Track Lib Server", desc: "Robust database server maintaining real-time audit trails." },
];

const rfidCoreValues = [
  { id: 1, image: qualityImg, title: "Quality", desc: "Engineered with highest standards for industrial reliability." },
  { id: 2, image: transparencyImg, title: "Transparency", desc: "Clear reporting and auditable transaction records." },
  { id: 3, image: communicationImg, title: "Communication", desc: "Instant parent alerts and cross-department synchronization." },
  { id: 4, image: projectMethodologiesImg, title: "Proven Methodology", desc: "Structured deployment, hardware setup, and user training." },
];

function RFID() {
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
          <span className="project-breadcrumb-current">RFID Solutions</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Radio-Frequency Identification (RFID) Solutions</h1>

        {/* Top Intro Section */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              <strong>RFID (Radio-Frequency Identification)</strong> solutions leverage wireless electromagnetic fields to automatically identify and track tagged objects, documents, and individuals without requiring line-of-sight scanning.
            </p>
            <p>
              Netcom delivers turnkey RFID systems for schools, universities, libraries, and enterprises—integrating smart RFID identity cards, UHF long-range readers, automated entry barrier turnstiles, and instant parent SMS notification servers.
            </p>
            <p>
              By automating attendance, tracking physical library books, and managing institutional asset inventories, Netcom RFID solutions eliminate manual roll calls, prevent asset loss, and enhance campus safety.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={rfidHeroImg} alt="Netcom Smart RFID Solutions Hub" />
          </div>
        </div>

        {/* RFID Hardware Components Showcase */}
        <h2 className="project-section-title">RFID Hardware Components &amp; Stations</h2>
        <div className="rfid-equipment-grid">
          {rfidHardware.map((item) => (
            <div className="rfid-equipment-card" key={item.id}>
              <img src={item.image} alt={item.title} className="rfid-equipment-img" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <h2 className="project-section-title">Key RFID Capabilities</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Automated Student Attendance</h3>
            <p>Students tap their smart RFID ID card at entrance gates or walk through UHF sensor portals for instant, non-intrusive attendance logging.</p>
          </div>
          <div className="project-card">
            <h3>Instant SMS to Parents</h3>
            <p>Automated SMS gateway immediately alerts parents the moment their child enters or exits the school campus with exact timestamps.</p>
          </div>
          <div className="project-card">
            <h3>Library Book Management</h3>
            <p>RFID tags on library books enable instant multi-item checkout, automated book returns, and rapid inventory stock-taking in minutes.</p>
          </div>
          <div className="project-card">
            <h3>Institutional Asset Tracking</h3>
            <p>Tag laptops, projectors, lab apparatus, and furniture to monitor physical locations, prevent unauthorized removal, and streamline audits.</p>
          </div>
          <div className="project-card">
            <h3>Turnstile &amp; Barrier Integration</h3>
            <p>Direct hardware control over optical turnstiles, flap barriers, and motorized swing gates for secure campus perimeter security.</p>
          </div>
          <div className="project-card">
            <h3>Real-Time Cloud Reporting</h3>
            <p>Administrative portal with real-time headcounts, latecomer reports, monthly attendance summaries, and anomaly alerts.</p>
          </div>
        </div>

        {/* Methodologies & Standards */}
        <h2 className="project-section-title">Methodology &amp; Standards</h2>
        <div className="rfid-values-grid">
          {rfidCoreValues.map((item) => (
            <div className="rfid-value-card" key={item.id}>
              <img src={item.image} alt={item.title} className="rfid-value-img" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default RFID;
