import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsOverview.css";

// Project asset images from "our project"
import digitalContentImg from "../../assets/image/project/our project/netcom digital.png";
import emisProjectImg from "../../assets/image/project/our project/emis.png";
import languageLabImg from "../../assets/image/project/our project/language lab.png";
import callSoftImg from "../../assets/image/project/our project/call soft.png";
import assessmentImg from "../../assets/image/project/our project/assment.png";
import skillDevImg from "../../assets/image/project/our project/skill development.png";
import ictImg from "../../assets/image/project/our project/ict.jpg";
import kioskImg from "../../assets/image/project/our project/kiosk.jpg";
import rfidImg from "../../assets/image/project/our project/rfid.png";

const PROJECTS = [
  {
    id: "digital-content",
    title: "Netcom Digital Contents",
    image: digitalContentImg,
    to: "/projects/digital-content",
  },
  {
    id: "emis",
    title: "Educational Management Information System (EMIS)",
    image: emisProjectImg,
    to: "/projects/emis",
  },
  {
    id: "language-lab",
    title: "Language Lab",
    image: languageLabImg,
    to: "/projects/language-lab",
  },
  {
    id: "call-soft",
    title: "Call Soft",
    image: callSoftImg,
    to: "/projects/call-soft",
  },
  {
    id: "assessment",
    title: "Assesment",
    image: assessmentImg,
    to: "/projects/assessment",
  },
  {
    id: "skill-development",
    title: "Skill Development & Training",
    image: skillDevImg,
    to: "/projects/skill-development",
  },
  {
    id: "ict-hi-tech-lab",
    title: "ICT/Hi-Tech Lab",
    image: ictImg,
    to: "/projects/ict-hi-tech-lab",
  },
  {
    id: "kiosk",
    title: "Kiosk Project",
    image: kioskImg,
    to: "/projects/kiosk",
  },
  {
    id: "rfid",
    title: "Radio-frequency identification (RFID)",
    image: rfidImg,
    to: "/projects/rfid",
  },
];

function ProjectsOverview() {
  return (
    <div className="projects-overview-page">
      {/* Hero Banner with background image */}
      <section className="project-hero" aria-label="Projects Hero Banner"></section>

      {/* Breadcrumb Capsule */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Project</span>
        </nav>
      </div>

      <main className="projects-overview-container">
        {/* Section Heading */}
        <h1 className="our-projects-title">Our Projects</h1>

        {/* Projects Grid */}
        <div className="our-projects-grid">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              to={project.to}
              className="our-project-card"
              aria-label={`View ${project.title}`}
            >
              <div className="our-project-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="our-project-img"
                  loading="lazy"
                />
              </div>
              <h2 className="our-project-name">{project.title}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProjectsOverview;
