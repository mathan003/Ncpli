import React from "react";
import { Link } from "react-router-dom";
import "./ARVR.css";

// School Project Photos from Product AR & VR assets
import hasthinapuramPhoto from "../../../assets/image/product/AR & VR/Corporation high sec.school  Hasthinapuram.png";
import siddhapudurPhoto from "../../../assets/image/product/AR & VR/Siddhapudur corporation girls high school.png";
import ganeshapuramPhoto from "../../../assets/image/product/AR & VR/Ganeshapuram middle school.png";
import sugunapuramPhoto from "../../../assets/image/product/AR & VR/Sugunapuram Corporation Elementary school.png";
import tatabadPhoto from "../../../assets/image/product/AR & VR/Corporation Middle School, Tatabad.png";
import westTambaramPhoto from "../../../assets/image/product/AR & VR/Corporation high. school, kalyan Nagar, West Tambaram.png";

// Intro Graphic & Feature Icons
import arvrIntro from "../../../assets/image/product/AR & VR/ARVR.png";
import curriculumIcon from "../../../assets/image/product/AR & VR/icon-park-solid_communication.png";
import handsOnIcon from "../../../assets/image/product/AR & VR/on Project.png";
import expertTrainersIcon from "../../../assets/image/product/AR & VR/Expert Trainers.png";
import flexibleLearningIcon from "../../../assets/image/product/AR & VR/Flexible Learning.png";

const SCHOOL_DEPLOYMENTS = [
  {
    id: "hasthinapuram",
    title: "Corporation High Sec. School, Hasthinapuram",
    location: "Hasthinapuram, Chennai",
    badge: "Smart VR Lab Deployed",
    image: hasthinapuramPhoto,
    desc: "Complete implementation of interactive AR/VR experiential lab for high school science and mathematics.",
  },
  {
    id: "siddhapudur",
    title: "Siddhapudur Corporation Girls High School",
    location: "Siddhapudur, Coimbatore",
    badge: "Interactive STEM Lab",
    image: siddhapudurPhoto,
    desc: "Empowering young female students with hands-on 3D science simulations and virtual space exploration.",
  },
  {
    id: "ganeshapuram",
    title: "Ganeshapuram Middle School",
    location: "Ganeshapuram, Coimbatore",
    badge: "Experiential Learning Lab",
    image: ganeshapuramPhoto,
    desc: "Interactive curriculum visualization helping middle school students master foundational science concepts.",
  },
  {
    id: "sugunapuram",
    title: "Sugunapuram Corporation Elementary School",
    location: "Sugunapuram, Coimbatore",
    badge: "Foundational AR/VR Hub",
    image: sugunapuramPhoto,
    desc: "Immersive visual learning modules enabling elementary learners to explore anatomy, astronomy, and geography.",
  },
  {
    id: "tatabad",
    title: "Corporation Middle School, Tatabad",
    location: "Tatabad, Coimbatore",
    badge: "Digital Classroom Active",
    image: tatabadPhoto,
    desc: "High-engagement VR simulation stations deployed for interactive experiments and experiential pedagogy.",
  },
  {
    id: "west-tambaram",
    title: "Corporation High School, Kalyan Nagar",
    location: "West Tambaram, Chennai",
    badge: "Advanced VR Lab Setup",
    image: westTambaramPhoto,
    desc: "Equipped with state-of-the-art VR headsets and a teacher console for real-time classroom broadcasting.",
  },
];

const PROJECT_HIGHLIGHTS = [
  {
    icon: curriculumIcon,
    title: "Curriculum-Mapped Content",
    desc: "Fully aligned with Samacheer Kalvi and national STEM curricula for physics, chemistry, biology, and math.",
  },
  {
    icon: handsOnIcon,
    title: "100% Hands-On Practical Modules",
    desc: "Students perform complex laboratory experiments virtually with zero safety hazards or chemical consumption.",
  },
  {
    icon: expertTrainersIcon,
    title: "Onsite Educator Enablement",
    desc: "Comprehensive teacher training programs ensuring seamless operation of consoles, headsets, and modules.",
  },
  {
    icon: flexibleLearningIcon,
    title: "Turnkey Infrastructure & Support",
    desc: "Full lifecycle support including hardware setup, software updates, centralized teacher console, and AMC maintenance.",
  },
];

const IMPLEMENTATION_STEPS = [
  {
    step: "01",
    title: "Campus Survey & Infrastructure Planning",
    desc: "Detailed evaluation of classroom space, power distribution, ergonomic seating, and optical tracking requirements.",
  },
  {
    step: "02",
    title: "Hardware Deployment & Calibration",
    desc: "Installation of high-performance VR headsets, teacher management workstation, interactive displays, and protective gear.",
  },
  {
    step: "03",
    title: "Software & 3D Module Provisioning",
    desc: "Deployment of Netcom's curated AR/VR educational library with bilingual English and Tamil audio narrations.",
  },
  {
    step: "04",
    title: "Teacher Training & Curriculum Integration",
    desc: "Hands-on workshops for educators to operate teacher console controls, session locks, and live screen broadcast.",
  },
  {
    step: "05",
    title: "Ongoing Monitoring & Upgrades",
    desc: "Dedicated field engineer visits, periodic content updates, hardware uptime maintenance, and pedagogical assessments.",
  },
];

function ProjectARVR() {
  return (
    <div className="project-page-wrapper arvr-proj-page">
      {/* Project Hero Banner */}
      <section className="project-hero" aria-label="Project Hero Banner"></section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/projects">Project</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">AR &amp; VR Project</span>
        </nav>
      </div>

      <main className="project-container arvr-proj-container">
        {/* Main Title Header */}
        <div className="arvr-proj-header">
          <span className="arvr-proj-tag">GOVERNMENT &amp; INSTITUTIONAL INITIATIVE</span>
          <h1 className="arvr-proj-title">AR &amp; VR Experiential Learning Labs</h1>
          <p className="arvr-proj-subtitle">
            Transforming conventional classrooms into immersive 3D experiential learning ecosystems
            across Government and Corporation schools in Tamil Nadu.
          </p>
        </div>

        {/* Project Metrics Summary Bar */}
        <div className="arvr-proj-metrics-bar">
          <div className="arvr-metric-item">
            <span className="arvr-metric-number">6+</span>
            <span className="arvr-metric-label">Corporation Labs Deployed</span>
          </div>
          <div className="arvr-metric-item">
            <span className="arvr-metric-number">15,000+</span>
            <span className="arvr-metric-label">Students Empowered</span>
          </div>
          <div className="arvr-metric-item">
            <span className="arvr-metric-number">120+</span>
            <span className="arvr-metric-label">Interactive 3D Modules</span>
          </div>
          <div className="arvr-metric-item">
            <span className="arvr-metric-number">98%</span>
            <span className="arvr-metric-label">Engagement &amp; Retention</span>
          </div>
        </div>

        {/* Project Overview Showcase Card */}
        <section className="arvr-proj-overview-card">
          <div className="arvr-proj-overview-text">
            <h2 className="arvr-proj-sec-title">Project Purpose &amp; Scope</h2>
            <p>
              Under Netcom’s smart education modernization initiative, our AR &amp; VR Experiential
              Labs project delivers cutting-edge Augmented Reality and Virtual Reality infrastructure
              directly into government and corporation schools.
            </p>
            <p>
              Students no longer have to rely solely on 2D textbook diagrams. Through stereoscopic 3D
              headsets and interactive controllers, learners can inspect the human circulatory system,
              manipulate chemical molecules, explore historical heritage monuments, and travel across the
              solar system in real-time.
            </p>
            <div className="arvr-proj-keypoints">
              <div className="arvr-keypoint-item">
                <span className="arvr-kp-check">✔</span>
                <span><strong>Centralized Teacher Console:</strong> Broadcast lessons, freeze displays, and observe individual student progress.</span>
              </div>
              <div className="arvr-keypoint-item">
                <span className="arvr-kp-check">✔</span>
                <span><strong>Bilingual Accessibility:</strong> Complete audio voiceovers and subtitles in both Tamil and English.</span>
              </div>
              <div className="arvr-keypoint-item">
                <span className="arvr-kp-check">✔</span>
                <span><strong>Zero Hazard Lab Safety:</strong> Conduct high-voltage and chemical experiments in a risk-free virtual environment.</span>
              </div>
            </div>
          </div>

          <div className="arvr-proj-overview-media">
            <img
              src={arvrIntro}
              alt="Students experiencing immersive VR learning in classroom"
              className="arvr-proj-overview-img"
            />
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="arvr-proj-highlights-sec">
          <div className="arvr-sec-heading-center">
            <h2 className="arvr-sec-title-main">Key Project Highlights</h2>
            <p className="arvr-sec-subtitle-main">
              Built on proven instructional design, robust hardware ergonomics, and active curriculum integration.
            </p>
          </div>

          <div className="arvr-highlights-grid">
            {PROJECT_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="arvr-highlight-card">
                <div className="arvr-highlight-icon-box">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* School Deployments Showcase Grid (Using Product AR/VR school photos) */}
        <section className="arvr-deployments-sec">
          <div className="arvr-sec-heading-center">
            <span className="arvr-badge-pill">FIELD IMPLEMENTATIONS</span>
            <h2 className="arvr-sec-title-main">Netcom AR &amp; VR School Installations</h2>
            <p className="arvr-sec-subtitle-main">
              Real classrooms, real students, and real learning outcomes across our corporation school deployments.
            </p>
          </div>

          <div className="arvr-deployments-grid">
            {SCHOOL_DEPLOYMENTS.map((school) => (
              <article key={school.id} className="arvr-deployment-card">
                <div className="arvr-school-img-box">
                  <img
                    src={school.image}
                    alt={school.title}
                    loading="lazy"
                  />
                  <span className="arvr-school-badge">{school.badge}</span>
                </div>
                <div className="arvr-school-content">
                  <span className="arvr-school-loc">📍 {school.location}</span>
                  <h3 className="arvr-school-title">{school.title}</h3>
                  <p className="arvr-school-desc">{school.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Phased Implementation Framework */}
        <section className="arvr-framework-sec">
          <div className="arvr-sec-heading-center">
            <span className="arvr-badge-pill">PROJECT EXECUTION</span>
            <h2 className="arvr-sec-title-main">Turnkey Project Rollout Methodology</h2>
            <p className="arvr-sec-subtitle-main">
              Our structured multi-phase deployment roadmap guarantees high adoption, minimal downtime, and lasting academic impact.
            </p>
          </div>

          <div className="arvr-framework-timeline">
            {IMPLEMENTATION_STEPS.map((step) => (
              <div key={step.step} className="arvr-timeline-step">
                <div className="arvr-step-number">{step.step}</div>
                <div className="arvr-step-info">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Footer Card */}
        <section className="arvr-proj-cta-card">
          <div className="arvr-cta-content">
            <h2>Ready to Deploy an AR/VR Experiential Lab in Your Institution?</h2>
            <p>
              Partner with Netcom to create an interactive learning space tailored to your syllabus, students, and campus infrastructure.
            </p>
            <div className="arvr-cta-actions">
              <Link to="/contact" className="arvr-cta-btn-primary">
                Consult with Project Team
              </Link>
              <Link to="/projects" className="arvr-cta-btn-secondary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectARVR;
