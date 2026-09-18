import React from "react";
import { Link } from "react-router-dom";
import "./ICTHiTechLab.css";

import hiTechImg from "../../../assets/image/project/Hi-Tech Lab/image1.png";

function ICTHiTechLab() {
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
          <span className="project-breadcrumb-current">ICT / Hi-Tech Lab</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">ICT / Hi-Tech Lab Projects</h1>

        {/* Intro Section with Lab Photo */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              Netcom Computers has been at the forefront of implementing landmark <strong>Information and Communication Technology (ICT) and Hi-Tech Labs</strong> in thousands of government higher secondary and high schools across Tamil Nadu under the Samagra Shiksha initiative.
            </p>
            <p>
              These state-of-the-art computer laboratories provide rural and semi-urban students with equal access to modern digital computing facilities, interactive courseware, coding platforms, and internet connectivity, bridging the digital divide at an unprecedented scale.
            </p>
            <p>
              Each laboratory features high-performance server workstations, networked desktop units, centralized power backup (Online UPS), high-speed structured cabling, document projection systems, and licensed educational operating environments.
            </p>
          </div>
          <div className="project-intro-media">
            <img src={hiTechImg} alt="Government School Hi-Tech Computer Lab Infrastructure" />
          </div>
        </div>

        {/* Feature Grid */}
        <h2 className="project-section-title">Key Infrastructure Components</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Central Server Architecture</h3>
            <p>Enterprise-grade master servers running Linux and Windows dual operating environments to orchestrate local lesson caching, authentication, and student testing.</p>
          </div>
          <div className="project-card">
            <h3>Student Workstations</h3>
            <p>10 to 20 high-speed networked desktop units per school lab equipped with monitors, headphones, and localized curriculum software.</p>
          </div>
          <div className="project-card">
            <h3>Uninterrupted Power (UPS)</h3>
            <p>Heavy-duty online UPS systems with dedicated battery banks ensuring continuous lab sessions even during unexpected power outages.</p>
          </div>
          <div className="project-card">
            <h3>Gigabit Structured Cabling</h3>
            <p>Comprehensive shielded CAT-6 network cabling, rack enclosures, patch panels, and managed network switches for ultra-low latency internal data transfer.</p>
          </div>
          <div className="project-card">
            <h3>Teacher Enablement</h3>
            <p>On-site orientation and master training workshops conducted by Netcom technical engineers to empower teachers to manage and teach effectively.</p>
          </div>
          <div className="project-card">
            <h3>Statewide SLA Support</h3>
            <p>Comprehensive technical support, hardware warranty, and periodic software maintenance handled by Netcom district support teams across all taluks.</p>
          </div>
        </div>

        {/* Implementation Scope Highlights */}
        <h2 className="project-section-title">Project Highlights &amp; Reach</h2>
        <div className="project-grid-2">
          <div className="project-card">
            <h3>6,000+ Government Schools Transformed</h3>
            <p>Over six thousand schools equipped with modern computing infrastructure, benefiting over 1.5 million students annually with digital literacy and computer education.</p>
          </div>
          <div className="project-card">
            <h3>Localized K-12 Digital Repository</h3>
            <p>Pre-loaded with 10,000+ animated learning resources and virtual labs mapped directly to the Tamil Nadu State Board Samacheer Kalvi syllabus.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ICTHiTechLab;

