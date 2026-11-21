import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ARVR.css";

// Hero Banner & Assets
import serviceBannerImg from "../../../assets/image/Service/banner img.png";
import arvrGraphic from "../../../assets/image/product/AR & VR/ARVR.png";
import contactUsImg from "../../../assets/image/product/contact us.png";

// Feature Icons from AR & VR folder
import curriculumIcon from "../../../assets/image/product/AR & VR/icon-park-solid_communication.png";
import handsOnIcon from "../../../assets/image/product/AR & VR/on Project.png";
import expertTrainersIcon from "../../../assets/image/product/AR & VR/Expert Trainers.png";
import flexibleLearningIcon from "../../../assets/image/product/AR & VR/Flexible Learning.png";

// School Deployment Photos from AR & VR folder
import hasthinapuramPhoto from "../../../assets/image/product/AR & VR/Corporation high sec.school  Hasthinapuram.png";
import siddhapudurPhoto from "../../../assets/image/product/AR & VR/Siddhapudur corporation girls high school.png";
import ganeshapuramPhoto from "../../../assets/image/product/AR & VR/Ganeshapuram middle school.png";
import sugunapuramPhoto from "../../../assets/image/product/AR & VR/Sugunapuram Corporation Elementary school.png";
import tatabadPhoto from "../../../assets/image/product/AR & VR/Corporation Middle School, Tatabad.png";
import westTambaramPhoto from "../../../assets/image/product/AR & VR/Corporation high. school, kalyan Nagar, West Tambaram.png";

const CORE_SERVICES = [
  {
    id: "interactive-3d-sim",
    title: "Interactive 3D Curriculum Simulations",
    desc: "Transform complex science, mathematics, and engineering concepts into fully manipulable 3D visual models mapped directly to academic syllabi.",
    tag: "EdTech & Academics",
  },
  {
    id: "virtual-labs",
    title: "Virtual Science & Technical Labs",
    desc: "Enable students and trainees to conduct chemistry titrations, physics experiments, and electrical circuit tests with zero hazard or material expense.",
    tag: "Risk-Free Labs",
  },
  {
    id: "mobile-web-ar",
    title: "Mobile & Web Augmented Reality (WebXR)",
    desc: "Lightweight, cross-platform AR experiences accessible via iOS, Android, and web browsers for interactive textbook scans and 3D product previews.",
    tag: "Mobile & Web",
  },
  {
    id: "virtual-tours",
    title: "360° Virtual Campus & Heritage Walkthroughs",
    desc: "Photorealistic 360-degree immersive walkthroughs for school admissions, historical monuments, university campuses, and smart facility tours.",
    tag: "Digital Twins",
  },
  {
    id: "vocational-training",
    title: "Vocational & Industrial VR Skill Training",
    desc: "Gamified, scenario-based virtual training modules for technical trades, equipment handling, automotive mechanics, and emergency drills.",
    tag: "Skill Development",
  },
  {
    id: "turnkey-lab-setup",
    title: "Turnkey VR Lab Infrastructure & Support",
    desc: "End-to-end institutional hardware setup including VR head-mounted displays, teacher broadcast consoles, spatial calibration, and AMC support.",
    tag: "Turnkey Hardware",
  },
];

const WHY_CHOOSE_ARVR = [
  {
    icon: curriculumIcon,
    title: "Bespoke Curriculum Architecture",
    desc: "Our interactive modules are custom-engineered to match your exact pedagogical or organizational training goals with dual-language narration.",
  },
  {
    icon: handsOnIcon,
    title: "Hands-On Interactive Engineering",
    desc: "True spatial interaction using haptic controllers and 6DoF movement that boosts concept retention by up to 4x compared to passive video.",
  },
  {
    icon: expertTrainersIcon,
    title: "Dedicated VR Engineers & Educators",
    desc: "Full-stack 3D artists, Unity/Unreal developers, and pedagogical experts who guide deployment, calibration, and faculty enablement.",
  },
  {
    icon: flexibleLearningIcon,
    title: "Cross-Device Interoperability",
    desc: "Engineered to run seamlessly across Meta Quest, HTC Vive, Windows PC, WebGL browsers, Android tablets, and interactive touch screens.",
  },
];

const SERVICE_PROJECT_GALLERY = [
  {
    title: "Corporation High Sec. School, Hasthinapuram",
    location: "Hasthinapuram, Chennai",
    image: hasthinapuramPhoto,
    badge: "Active VR Lab",
    highlight: "Equipped with multi-station VR headsets and high school interactive physics simulations.",
  },
  {
    title: "Siddhapudur Corporation Girls High School",
    location: "Siddhapudur, Coimbatore",
    image: siddhapudurPhoto,
    badge: "STEM Immersive Hub",
    highlight: "Comprehensive female student STEM empowerment through virtual chemistry and astronomy modules.",
  },
  {
    title: "Ganeshapuram Middle School",
    location: "Ganeshapuram, Coimbatore",
    image: ganeshapuramPhoto,
    badge: "Experiential Center",
    highlight: "Middle school curriculum visualizer making biology and anatomy tactile and easy to grasp.",
  },
  {
    title: "Sugunapuram Corporation Elementary School",
    location: "Sugunapuram, Coimbatore",
    image: sugunapuramPhoto,
    badge: "Foundational AR/VR",
    highlight: "Interactive elementary exploration in geography, animals, and solar system science.",
  },
  {
    title: "Corporation Middle School, Tatabad",
    location: "Tatabad, Coimbatore",
    image: tatabadPhoto,
    badge: "Digital Simulation Station",
    highlight: "Active teacher-controlled VR broadcasting with real-time student engagement tracking.",
  },
  {
    title: "Corporation High School, Kalyan Nagar",
    location: "West Tambaram, Chennai",
    image: westTambaramPhoto,
    badge: "Turnkey Lab Facility",
    highlight: "Complete turnkey deployment including ergonomics, electrical safety, and ongoing support.",
  },
];

const DEVELOPMENT_PROCESS = [
  {
    step: "01",
    phase: "Discovery & Storyboarding",
    desc: "We analyze curriculum requirements, define 3D interactive mechanics, and storyboard every user interaction.",
  },
  {
    step: "02",
    phase: "3D Asset Modeling & Animation",
    desc: "Our 3D artists craft accurate, optimized models, spatial textures, and lifelike physical animations.",
  },
  {
    step: "03",
    phase: "Physics & Interaction Programming",
    desc: "Engineered with Unity and Unreal Engine with realistic physics, tactile haptics, and spatial audio.",
  },
  {
    step: "04",
    phase: "Multi-Platform Testing & Ergonomics",
    desc: "Extensive QA testing across target VR headsets and mobile devices to ensure 90 FPS comfort and zero motion sickness.",
  },
  {
    step: "05",
    phase: "Deployment & Educator Training",
    desc: "Onsite installation, teacher console setup, and comprehensive training so your staff can run classes effortlessly.",
  },
];

function ServiceARVR() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceType: "AR & VR Development",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDemoFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`AR/VR Service Inquiry from ${demoFormData.name}`);
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nOrganization: ${demoFormData.organization}\nService: ${demoFormData.serviceType}\n\nMessage:\n${demoFormData.message}`
      );
      window.location.href = `mailto:support@ncpli.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <div className="cs-page arvr-service-page">
      {/* ================= HERO SECTION ================= */}
      <section
        className="arvr-serv-hero"
        style={{ backgroundImage: `url(${serviceBannerImg})` }}
        aria-label="AR and VR Development Service Banner"
      >
        <div className="arvr-serv-hero-container">
          <div className="arvr-serv-hero-content">
            <span className="arvr-serv-badge">OUR SERVICES</span>
            <h1 className="arvr-serv-hero-title">AR &amp; VR Development Services</h1>
            <p className="arvr-serv-hero-subtitle">
              Engineering cutting-edge Augmented Reality, Virtual Reality, and interactive 3D
              simulations for education, enterprise, and smart institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FLOATING BREADCRUMB CAPSULE ================= */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/service">Services</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">AR &amp; VR Development</span>
        </nav>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <main className="arvr-serv-main-container">
        {/* Service Intro 2-Column Section */}
        <section className="arvr-serv-intro-grid">
          <article className="arvr-serv-intro-card">
            <span className="arvr-serv-tag">SPATIAL COMPUTING &amp; 3D SIMULATION</span>
            <h2 className="arvr-serv-intro-heading">
              Custom AR &amp; VR Solutions Crafted for Real-World Impact
            </h2>
            <p>
              At Netcom, we design and build immersive Augmented Reality (AR) and Virtual Reality (VR)
              solutions that bridge the gap between abstract theoretical knowledge and hands-on spatial
              experience.
            </p>
            <p>
              Whether you are an academic institution looking to deploy state-of-the-art virtual science
              laboratories or an enterprise seeking gamified employee training, our full-cycle development
              team delivers custom simulations engineered for maximum retention, safety, and engagement.
            </p>
            <div className="arvr-serv-intro-cta">
              <button
                type="button"
                className="arvr-serv-btn-primary"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Request a Free Consultation
              </button>
            </div>
          </article>

          <div className="arvr-serv-media-card">
            <img
              src={arvrGraphic}
              alt="Interactive AR and VR Experience"
              className="arvr-serv-media-img"
            />
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="arvr-serv-offerings-sec">
          <div className="arvr-serv-heading-center">
            <span className="arvr-serv-badge-pill">OUR CAPABILITIES</span>
            <h2 className="arvr-serv-section-title">What We Build in AR &amp; VR</h2>
            <p className="arvr-serv-section-subtitle">
              Comprehensive end-to-end 3D design, physics engineering, and multi-device deployment.
            </p>
          </div>

          <div className="arvr-offerings-grid">
            {CORE_SERVICES.map((srv) => (
              <div key={srv.id} className="arvr-offering-card">
                <span className="arvr-offering-tag">{srv.tag}</span>
                <h3 className="arvr-offering-title">{srv.title}</h3>
                <p className="arvr-offering-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Netcom AR/VR Services */}
        <section className="arvr-serv-why-sec">
          <div className="arvr-serv-heading-center">
            <span className="arvr-serv-badge-pill">THE NETCOM ADVANTAGE</span>
            <h2 className="arvr-serv-section-title">Why Partner with Netcom for AR &amp; VR</h2>
            <p className="arvr-serv-section-subtitle">
              Decades of institutional IT delivery combined with next-generation spatial computing expertise.
            </p>
          </div>

          <div className="arvr-why-grid">
            {WHY_CHOOSE_ARVR.map((item, idx) => (
              <div key={idx} className="arvr-why-card">
                <div className="arvr-why-icon-wrap">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proven Deployments Showcase (School Photos) */}
        <section className="arvr-serv-gallery-sec">
          <div className="arvr-serv-heading-center">
            <span className="arvr-serv-badge-pill">DEPLOYMENT PORTFOLIO</span>
            <h2 className="arvr-serv-section-title">Proven Deployments Across Tamil Nadu</h2>
            <p className="arvr-serv-section-subtitle">
              See our AR &amp; VR software and turnkey labs in action across prominent corporation and government schools.
            </p>
          </div>

          <div className="arvr-serv-gallery-grid">
            {SERVICE_PROJECT_GALLERY.map((school, i) => (
              <article key={i} className="arvr-gallery-card">
                <div className="arvr-gallery-img-wrap">
                  <img src={school.image} alt={school.title} loading="lazy" />
                  <span className="arvr-gallery-badge">{school.badge}</span>
                </div>
                <div className="arvr-gallery-body">
                  <span className="arvr-gallery-loc">📍 {school.location}</span>
                  <h4 className="arvr-gallery-title">{school.title}</h4>
                  <p className="arvr-gallery-desc">{school.highlight}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Development Lifecycle Process */}
        <section className="arvr-process-sec">
          <div className="arvr-serv-heading-center">
            <span className="arvr-serv-badge-pill">HOW WE WORK</span>
            <h2 className="arvr-serv-section-title">Our AR &amp; VR Development Process</h2>
            <p className="arvr-serv-section-subtitle">
              A structured agile methodology designed for reliability, ergonomic comfort, and measurable learning outcomes.
            </p>
          </div>

          <div className="arvr-process-grid">
            {DEVELOPMENT_PROCESS.map((proc) => (
              <div key={proc.step} className="arvr-process-card">
                <div className="arvr-process-num">{proc.step}</div>
                <h4 className="arvr-process-phase">{proc.phase}</h4>
                <p className="arvr-process-desc">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation & Demo CTA Card */}
        <section className="arvr-serv-cta-box">
          <div className="arvr-serv-cta-left">
            <span className="arvr-serv-badge-pill">GET STARTED</span>
            <h2>Bring Your AR &amp; VR Vision to Life</h2>
            <p>
              Contact our spatial computing specialists today to discuss custom application development,
              virtual lab creation, or institutional turnkey setup.
            </p>
            <div className="arvr-serv-cta-btns">
              <button
                type="button"
                className="arvr-serv-btn-primary"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Schedule Live Demo
              </button>
              <Link to="/contact" className="arvr-serv-btn-outline">
                Contact Office
              </Link>
            </div>
          </div>
          <div className="arvr-serv-cta-right">
            <img src={contactUsImg} alt="Contact Netcom AR and VR Specialists" />
          </div>
        </section>
      </main>

      {/* ================= INQUIRY / DEMO MODAL ================= */}
      {isDemoModalOpen && (
        <div className="arvr-modal-backdrop" onClick={() => setIsDemoModalOpen(false)}>
          <div
            className="arvr-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="arvr-modal-title"
          >
            <button
              type="button"
              className="arvr-modal-close"
              onClick={() => setIsDemoModalOpen(false)}
              aria-label="Close Modal"
            >
              ✕
            </button>

            <h3 id="arvr-modal-title" className="arvr-modal-title">
              Request AR &amp; VR Consultation / Demo
            </h3>
            <p className="arvr-modal-subtitle">
              Fill in your details and our AR/VR solutions team will get in touch promptly.
            </p>

            {demoSuccess ? (
              <div className="arvr-modal-success">
                <h4>Thank you!</h4>
                <p>Opening your email client with your inquiry details...</p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="arvr-modal-form">
                <div className="arvr-form-group">
                  <label htmlFor="arvr-name">Full Name *</label>
                  <input
                    id="arvr-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Dr. Ramesh Kumar"
                    value={demoFormData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="arvr-form-row">
                  <div className="arvr-form-group">
                    <label htmlFor="arvr-email">Email Address *</label>
                    <input
                      id="arvr-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. ramesh@institution.edu"
                      value={demoFormData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="arvr-form-group">
                    <label htmlFor="arvr-phone">Phone Number *</label>
                    <input
                      id="arvr-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={demoFormData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="arvr-form-group">
                  <label htmlFor="arvr-organization">Institution / Organization *</label>
                  <input
                    id="arvr-organization"
                    name="organization"
                    type="text"
                    required
                    placeholder="e.g. Corporation High School / Tech Academy"
                    value={demoFormData.organization}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="arvr-form-group">
                  <label htmlFor="arvr-serviceType">Requirement Type</label>
                  <select
                    id="arvr-serviceType"
                    name="serviceType"
                    value={demoFormData.serviceType}
                    onChange={handleInputChange}
                  >
                    <option value="AR & VR Development">Custom AR &amp; VR Development</option>
                    <option value="Turnkey School VR Lab">Turnkey School VR Lab Setup</option>
                    <option value="Virtual Science Labs">Virtual Science &amp; Technical Labs</option>
                    <option value="Web & Mobile AR">WebXR &amp; Mobile AR Applications</option>
                    <option value="Virtual Campus Tour">360° Virtual Campus Tour</option>
                  </select>
                </div>

                <div className="arvr-form-group">
                  <label htmlFor="arvr-message">Project Notes / Requirements</label>
                  <textarea
                    id="arvr-message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about your target students, subjects, or custom training goals..."
                    value={demoFormData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="arvr-modal-submit-btn">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceARVR;
