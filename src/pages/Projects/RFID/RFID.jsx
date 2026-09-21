import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RFID.css";

import contactUsImg from "../../../assets/image/product/contact us.png";
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
    desc: "Netcom have implemented E-Library Projects in Madurai, Trichy and Coimbatore district libraries. We executed delivery, Installation, RFID tagging and Integration in all these libraries. The details of RFID Implementation are as follows",
  },
  {
    id: 2,
    image: rfidTaggingImg,
    title: "RFID Tagging",
    desc: "We have completed 4,50,000 books in tagging.",
  },
  {
    id: 3,
    image: handHeldReaderImg,
    title: "Hand Held Reader",
    desc: "We have installed the Hand held reader application which is used to check the stocks and locate the scanned and missing books.",
  },
];

const developmentSoftwareStations = [
  {
    id: 1,
    image: taggingStationImg,
    title: "Tagging Station",
    desc: "As part of RFID Project, the Tagging station application is used to update the books to RFID database. This application is used to read the RFID tag ID and the data's are stored in the KOHA Server, there by entering access code we can fetch the required books.",
  },
  {
    id: 2,
    image: circularStationImg,
    title: "Circular Station",
    desc: "The Circular Station application helps to view the details of the Users of the Library to issue / return the books and renew the issue dates of the books borrowed by the members.",
  },
  {
    id: 3,
    image: opacKioskImg,
    title: "OPAC (Kiosk Machine)",
    desc: "Online Public Access Catalog (OPAC) is used by the library members as search engine. The users can search / locate the books by using this application. We have implemented the OPAC in Kiosk machine for the users to be more accessible.",
  },
];

const rfidServerComponents = [
  {
    id: 1,
    image: trackLibServerImg,
    title: "Track Lib Server",
    desc: "Track Library Server plays a vital role and is an important server of the RFID Project. The administration management is been optimized here in the server and the application is used for the following: User Management Work Stations Tagging details Stock details Backup Server",
  },
  {
    id: 2,
    image: multisocketServerImg,
    title: "Multisocket Server",
    desc: "The implementation of Multi socket Server serves has connector to connect all the implementation software and the database.",
  },
  {
    id: 3,
    image: antiTheftGateImg,
    title: "Anti Theft Gate",
    desc: "The Anti-The Gate is used to monitor the entry / exit passage of the members. As the name depicts, books will not be allowed to carry out from the library premises without permission of the librarian, during which a message with a beep sound and red light alerts the Library officials. The Library members get the permission to borrow books when the green indicator blinks after reading the RFID tag confirmation. This device can read 100 books within a distance of 5metres.",
  },
];

const rfidApplications = [
  {
    id: 1,
    title: "Animal Migration",
    tag: "Wildlife Telemetry",
    desc: "Netcom RFID in Animal Migration is the great potential for Radio Frequency Identification (RFID) technology to benefit the study ofbirds and other wildlife, the cost of RFID systems can be prohibitive to those with a very modestresearch budget. To those researchers, we offer our design for a RFID data logging system that can be used in association with birdfeeders, nest boxes, or anywhere birds may congregate, to monitor the activity of individual birds bearing RFID tags. Radio tracking involves attaching a small radio transmitter to the animal.This can track the locations and movement of the tagged animals without recapturing them using this RFID technology. RFID ear tags provide superior solutions for animal identification, independent of the field of application and the size of the animal. For livestock, animal identification is necessary for guaranteeing food chain security and food traceability. RFID tags for animals represent one of the uses of RFID. RFID has become crucial in animal identification management. An implantable RFID tag or transponder can also be used for animal identification.",
  },
  {
    id: 2,
    title: "Shopping Malls",
    tag: "Smart Retail & Billing",
    desc: "NETCOM project is based on RFID technology used for uniquely identifying and handling various products in a Shopping mall. The software system is made for thebilling counters with the help of which tracing and billing is made fast and easy. Each individual product is uniquely identified and classified based on its RFID. This is an RFID tag that is attached to the product s that it can be easily scanned and even related data can be entered into the system. The system allows for fast and easy billing procedure. The RFID tag when scanned, allows the billing person to get product specific data into the database and then also sum up the product prices in order to generate the final bill for a customer. The system then stores all these bills generated in its database for further reference. The system provides specific reports of sales along with products. Implementation of RFID in supermarkets allows customers to obtain information about the goods they collect when they are doing the shopping. In Shopping Malls, RFID technology can help retailers manage and track inventory. This enables the consumers satisfaction, reducing time requirement for payment and also the manpower required at markets or malls by instantly payoff their entire purchase upon arrival at the payment counter, increasing customer. These RFID tags to automate the checkout process by building a system that could read the RFID signals of all the objects that would be placed in proximity to an antenna platform. This eliminates the need for barcode scanning of each individual item, making checkout a significantly faster experience. The tags are little in size and so it can be easily pasted on products.",
  },
  {
    id: 3,
    title: "Software Development",
    tag: "Enterprise Engineering",
    desc: "Netcom Computer provides software product and application development solutions to large established companies as well as startups. All services include product visualization, prototyping, design, implementation, maintenance and customer support. Our Motto is to Develop and implement software solutions to stream line and automate business processes to provide optimal, sustainable and scalable technology solutions to minimize risk with greater accessibility to key business functions across spectrum of technology platforms We have the extensive expertise, experience and resources to develop web applications and customized software solutions. We provide web solutions with totally focus and plan on software development as per client requirement with minimal cost as per the global market. Our motto is high professional quality of work hence our path is growth in performance with effective in work. We focus in providing innovate and high superiority solutions to help our clients in advance an edge over their business competitors. We include a wide range of solutions from web solutions, desktop to Mobile solutions. We deliver high quality solutions at spirited cost bringing cost efficiency to the client organization. Our software development experts gain a strong understand your idea, target users, and monetization strategy before offering you a wide range of software solutions.We improve business agility and efficiency by building cutting-edge mobile and web software solutions",
  },
  {
    id: 4,
    title: "Netcom Project - Trademark Search Engine",
    tag: "Anna University, Coimbatore",
    desc: "We have developed Trade Mark Search Engine Project for Anna University, Coimbatore. A Trademark search engine database is created which updates the database and alter the damaged trademark images. The characters, symbols, leer and whatever seen in the image should be classified according to Vienna Classification and stored as data in SQL Server database along the corresponding fields. The image should also be stored in separate folder and should be linked to database. The Vienna Classification is the Table of 29 categories and divisions with explanatory notes about the symbols and leers seen in the image.",
  },
];

const methodologies = [
  {
    id: 1,
    image: projectMethodologiesImg,
    title: "Project Methodologies",
    desc: "We strongly believe in agile work processes and implement weekly scrum during the project lifecycle in close coordination with our clients.",
  },
  {
    id: 2,
    image: communicationImg,
    title: "Communication",
    desc: "We always keep our clients communicated through our daily status reports and weekly stakeholders meetings thus making it sure that all concerned entities reflect on the same page. Our project team is directly accessible to our clients through email, calls etc.",
  },
  {
    id: 3,
    image: qualityImg,
    title: "Quality",
    desc: "We have an extensive quality management system, wherein we dedicated Quality Analysts to the projects undertaken. Our quality team works as an independent unit and makes sure that the deliverables meet clients' satisfaction.",
  },
  {
    id: 4,
    image: transparencyImg,
    title: "Transparency",
    desc: "We utilize industry focused project management tools and version controllers, allowing direct access to our clients.",
  },
];

function RFID() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "RFID Software Solutions",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent("Demo Request: RFID Software Solutions");
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nOrganization: ${demoFormData.institution}\nSolution: RFID Software Solutions\n\nMessage:\n${demoFormData.message}`
      );
      window.open(`mailto:support@ncpli.com?subject=${subject}&body=${body}`, "_blank");
    }, 800);
  };

  return (
    <div className="prod-page-wrapper rfid-page-wrapper">
      {/* Product / Project Hero Banner */}
      <section className="prod-hero">
        <div className="prod-hero-container">
          <h1 className="prod-hero-title">PROJECT</h1>
          <p className="prod-hero-subtitle">Designed for the way you work.</p>
        </div>
      </section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/projects">Project</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">RFID Project</span>
        </nav>
      </div>

      <main className="prod-container rfid-main-container">
        {/* Top Intro Card: Title + Checklist (Left) & Hero Image (Right) */}
        <div className="rfid-intro-card">
          <div className="rfid-intro-text">
            <h2>Radio-frequency identification (RFID)</h2>
            <ul className="rfid-check-list">
              <li className="rfid-check-item">
                <span className="rfid-check-icon">✔</span>
                <span>Uses electromagnetic fields to automatically identify and track tags attached to objects.</span>
              </li>
              <li className="rfid-check-item">
                <span className="rfid-check-icon">✔</span>
                <span>An RFID system consists of a tiny radio transponder, a radio receiver and transmitter.</span>
              </li>
              <li className="rfid-check-item">
                <span className="rfid-check-icon">✔</span>
                <span>Viewing and absorbing the screens of students from teacher console</span>
              </li>
              <li className="rfid-check-item">
                <span className="rfid-check-icon">✔</span>
                <span>
                  When triggered by an electromagnetic interrogation pulse from a nearby RFID reader device, the tag transmits digital data, usually an identifying inventory number, back to the reader.
                </span>
              </li>
              <li className="rfid-check-item">
                <span className="rfid-check-icon">✔</span>
                <span>This number can be used to track inventory goods. The tags contain electronically stored information.</span>
              </li>
              <li className="rfid-check-item">
                <span className="rfid-check-icon">✔</span>
                <span>Passive tags collect energy from a nearby RFID reader&apos;s interrogating radio waves.</span>
              </li>
              <li className="rfid-check-item">
                <span className="rfid-check-icon">✔</span>
                <span>We are using this RFID technology in E-Library, Animal Migration, Forest, Shopping malls.</span>
              </li>
            </ul>
          </div>

          <div className="rfid-intro-media">
            <img src={rfidTaggingImg} alt="Radio-frequency identification smart tag and device reader" />
          </div>
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

        {/* Section 2: Development Software & Stations */}
        <section className="rfid-section">
          <h2 className="rfid-section-heading">Development Software &amp; Stations</h2>
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

        {/* Section 3: RFID Server Components */}
        <section className="rfid-section">
          <h2 className="rfid-section-heading">RFID Server Components</h2>
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

        {/* Section 4: Applications & Real-World Solutions */}
        <section className="rfid-section">
          <h2 className="rfid-section-heading">RFID Applications &amp; Solutions</h2>
          <div className="rfid-applications-stack">
            {rfidApplications.map((app) => (
              <div className="rfid-application-card" key={app.id}>
                <div className="rfid-app-header">
                  <h3 className="rfid-app-card-title">{app.title}</h3>
                  {app.tag && <span className="rfid-app-badge">{app.tag}</span>}
                </div>
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

        {/* Bottom CTA Card: Need this Product? Contact us */}
        <section className="prod-cta-card">
          <div className="prod-cta-content">
            <h2>Need this Solution? Contact us:</h2>
            <p>
              If you like and want this product or solution, Please feel free to contact us. Also we can add/update new features and design changes in this product. If you want to discuss about this project and our other services, please mail us on <strong>support@ncpli.com</strong> or call <strong>+91 73050 23014</strong>.
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
                <p style={{ color: "#4f5d54" }}>Your demo request for RFID Software Solutions has been received.</p>
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
                  <label htmlFor="rfid-demo-name">Your Full Name *</label>
                  <input
                    id="rfid-demo-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={demoFormData.name}
                    onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="rfid-demo-comp">Organization / Institution Name *</label>
                  <input
                    id="rfid-demo-comp"
                    type="text"
                    required
                    placeholder="e.g. Anna University / District Central Library"
                    value={demoFormData.institution}
                    onChange={(e) => setDemoFormData({ ...demoFormData, institution: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="rfid-demo-email">Email Address *</label>
                  <input
                    id="rfid-demo-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={demoFormData.email}
                    onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="rfid-demo-phone">Phone Number *</label>
                  <input
                    id="rfid-demo-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoFormData.phone}
                    onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="rfid-demo-msg">Specific Requirements</label>
                  <textarea
                    id="rfid-demo-msg"
                    rows="3"
                    placeholder="Tell us about the library size, tagging scale, anti-theft gates required..."
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

export default RFID;
