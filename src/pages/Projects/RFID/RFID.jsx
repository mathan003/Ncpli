import React from "react";
import "./RFID.css";

import booksManagementImg from "../../../assets/image/project/RFID/Books Management.png";
import rfidTaggingImg from "../../../assets/image/project/RFID/RFID.png";
import handHeldReaderImg from "../../../assets/image/project/RFID/Hand Held Reader.png";

import taggingStationImg from "../../../assets/image/project/RFID/Tagging Station.png";
import circularStationImg from "../../../assets/image/project/RFID/Circular Station.png";
import opacKioskImg from "../../../assets/image/project/RFID/OPAC (Kiosk Machine).png";

import trackLibServerImg from "../../../assets/image/project/RFID/Track Lib Server.png";
import multisocketServerImg from "../../../assets/image/project/RFID/Multisocket Server.png";
import antiTheftGateImg from "../../../assets/image/project/RFID/Anti-Theft Gate.png";

import projectMethodologiesImg from "../../../assets/image/project/RFID/Project Methodologies.png";
import communicationImg from "../../../assets/image/project/RFID/Communication.png";
import qualityImg from "../../../assets/image/project/RFID/Quality.png";
import transparencyImg from "../../../assets/image/project/RFID/Transparency.png";

const rfidFeatures = [
  {
    id: 1,
    image: booksManagementImg,
    title: "Books Management in Library",
    desc: "Complete RFID-based library management system for automated book tracking, cataloging, instant shelf audits, and effortless self-service borrowing and returns.",
  },
  {
    id: 2,
    image: rfidTaggingImg,
    title: "RFID Tagging",
    desc: "High-durability RFID tags and labels programmed with unique asset identifiers, enabling non-line-of-sight bulk scanning and tamper-evident institutional tracking.",
  },
  {
    id: 3,
    image: handHeldReaderImg,
    title: "Hand Held Reader",
    desc: "Ergonomic portable RFID scanners designed for rapid inventory stocktaking, missing item locating, shelf reading, and flexible on-the-go asset verification.",
  },
];

const developmentSoftwareStations = [
  {
    id: 1,
    image: taggingStationImg,
    title: "Tagging Station",
    desc: "Specialized workstation equipped with high-frequency RFID writer, barcode scanner, and printer interface for rapid encoding and linking of books and physical assets.",
  },
  {
    id: 2,
    image: circularStationImg,
    title: "Circular Station",
    desc: "Automated circulation desk terminal enabling simultaneous multi-book check-in and check-out with patron smart card authentication and instant receipt generation.",
  },
  {
    id: 3,
    image: opacKioskImg,
    title: "OPAC (Kiosk Machine)",
    desc: "Interactive touchscreen Online Public Access Catalog kiosk allowing students and visitors to search catalog databases, locate shelf positions, and reserve books.",
  },
];

const rfidServerComponents = [
  {
    id: 1,
    image: trackLibServerImg,
    title: "Track Lib Server",
    desc: "Core library database and tracking server orchestrating real-time transactions, patron accounts, inventory audits, and seamless synchronization across workstations.",
  },
  {
    id: 2,
    image: multisocketServerImg,
    title: "Multisocket Server",
    desc: "High-throughput socket communication server maintaining persistent, low-latency network connections with all RFID hardware nodes, gates, and client terminals.",
  },
  {
    id: 3,
    image: antiTheftGateImg,
    title: "Anti Theft Gate",
    desc: "Dual-pedestal detection gates positioned at library and campus exits, triggering immediate audiovisual alarms when unauthorized or unborrowed items pass through.",
  },
];

const rfidApplications = [
  {
    id: 1,
    title: "Animal Migration",
    desc: "RFID technology has revolutionized wildlife conservation and biological research by enabling non-invasive tracking of animal migration routes, population movements, and habitat behaviors. Miniature, lightweight RFID tags attached to migratory birds, aquatic species, and endangered fauna transmit crucial telemetry data whenever animals pass sensor checkpoints, providing scientists with invaluable environmental and ecological insights without disturbing natural habitats.",
  },
  {
    id: 2,
    title: "Shopping Malls",
    desc: "Modern retail centers and commercial shopping malls leverage advanced RFID infrastructure for end-to-end supply chain visibility, automated stock replenishment, smart fitting rooms, and frictionless checkout counters. By embedding high-frequency RFID tags into merchandise, retailers prevent shoplifting through electronic article surveillance (EAS), eliminate manual barcode scanning, and achieve near-perfect inventory accuracy across retail floors.",
  },
  {
    id: 3,
    title: "Software Development",
    desc: "Netcom engineers tailored enterprise RFID software architectures, bridging physical reader hardware with sophisticated cloud databases and analytics engines. Our custom middleware handles high-velocity data stream filtering, anti-collision signal processing, encrypted user authentication, and automated notification gateways to deliver robust, enterprise-grade digital automation for schools, universities, and corporate institutions.",
  },
  {
    id: 4,
    title: "Netcom Project",
    desc: "With decades of specialized experience in ICT infrastructure deployment, Netcom has successfully implemented comprehensive RFID solutions across educational campuses, government libraries, and enterprise facilities throughout Tamil Nadu. Our turnkey project delivery encompasses system design, hardware installation, custom software development, operator training, and reliable ongoing technical maintenance to ensure maximum uptime and operational excellence.",
  },
];

const methodologies = [
  {
    id: 1,
    image: projectMethodologiesImg,
    title: "Project Methodologies",
    desc: "Rigorous project lifecycle execution encompassing thorough requirement gathering, detailed technical architecture, precision on-site hardware deployment, and user training.",
  },
  {
    id: 2,
    image: communicationImg,
    title: "Communication",
    desc: "Proactive, transparent communication channels keeping all institutional stakeholders, administrators, and technical teams synchronized at every project phase.",
  },
  {
    id: 3,
    image: qualityImg,
    title: "Quality",
    desc: "Adherence to stringent quality control standards, industrial-grade hardware testing, and flawless software reliability to ensure long-term durability and uptime.",
  },
  {
    id: 4,
    image: transparencyImg,
    title: "Transparency",
    desc: "Complete operational transparency through open project tracking, verifiable milestone delivery, and comprehensive documentation for every installation.",
  },
];

function RFID() {
  return (
    <div className="project-page-wrapper rfid-page-wrapper">
      <main className="project-container">
        {/* Main Title: Radio-frequency identification (RFID) */}
        <h1 className="rfid-page-title">Radio-frequency identification (RFID)</h1>

        {/* Console Checklist (7 Items) */}
        <div className="rfid-checklist-wrapper">
          <ul className="rfid-check-list">
            <li className="rfid-check-item">
              <span className="rfid-check-icon">✔</span>
              <span>Server Should Act As A Teacher Console: This Displays The List Of Students In The Teacher Console From This The Teacher Can Select The Student To Start Or Stop The Class.</span>
            </li>
            <li className="rfid-check-item">
              <span className="rfid-check-icon">✔</span>
              <span>Real Time Screen And Audio Broadcast From Teacher Console To Student</span>
            </li>
            <li className="rfid-check-item">
              <span className="rfid-check-icon">✔</span>
              <span>Viewing And Absorbing The Screens Of Students From Teacher Console</span>
            </li>
            <li className="rfid-check-item">
              <span className="rfid-check-icon">✔</span>
              <span>Recording And Storing Broadcasts For Future Use This Option Is Used To Record The Files And Broadcast It To Other Students From Teacher Console.</span>
            </li>
            <li className="rfid-check-item">
              <span className="rfid-check-icon">✔</span>
              <span>Sharing Files Among System This Module Is Used To Share The Files To Other System Or Students From The Teacher Console.</span>
            </li>
            <li className="rfid-check-item">
              <span className="rfid-check-icon">✔</span>
              <span>Having Controls Like Mute Audio, Lock The Keyboard Of Particular Student Console. This Is Used To Control The Student&apos;s Screen Such As To Lock The Screen Or Keyboard Or Mute The Audio. Teachers Can Easily Having The Control Over The Student&apos;s Screen.</span>
            </li>
            <li className="rfid-check-item">
              <span className="rfid-check-icon">✔</span>
              <span>Providing Some Sample Call Lessons This Provides Some Sample Lessons To Student&apos;s Screen.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: RFID Features */}
        <section className="rfid-section">
          <h2 className="rfid-section-heading">RFID Features</h2>
          <div className="rfid-cards-grid-3">
            {rfidFeatures.map((item) => (
              <div className="rfid-feature-card" key={item.id}>
                <div className="rfid-card-icon-frame">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="rfid-card-title">{item.title}</h3>
                <p className="rfid-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Development Software (Hardware Stations) */}
        <section className="rfid-section">
          <h2 className="rfid-section-heading">Development Software</h2>
          <div className="rfid-cards-grid-3">
            {developmentSoftwareStations.map((item) => (
              <div className="rfid-feature-card" key={item.id}>
                <div className="rfid-card-icon-frame">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="rfid-card-title">{item.title}</h3>
                <p className="rfid-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: RFID Server */}
        <section className="rfid-section">
          <h2 className="rfid-section-heading">RFID Server</h2>
          <div className="rfid-cards-grid-3">
            {rfidServerComponents.map((item) => (
              <div className="rfid-feature-card" key={item.id}>
                <div className="rfid-card-icon-frame">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="rfid-card-title">{item.title}</h3>
                <p className="rfid-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Development Software (Application Cards) */}
        <section className="rfid-section">
          <h2 className="rfid-section-heading">Development Software</h2>
          <div className="rfid-applications-stack">
            {rfidApplications.map((app) => (
              <div className="rfid-application-card" key={app.id}>
                <h3 className="rfid-app-card-title">{app.title}</h3>
                <p className="rfid-app-card-desc">{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Methodologies */}
        <section className="rfid-section rfid-methodologies-section">
          <h2 className="rfid-section-heading">Methodologies</h2>
          <div className="rfid-methodologies-grid">
            {methodologies.map((m) => (
              <div className="rfid-methodology-card" key={m.id}>
                <div className="rfid-card-icon-frame">
                  <img src={m.image} alt={m.title} />
                </div>
                <h3 className="rfid-card-title">{m.title}</h3>
                <p className="rfid-card-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default RFID;
