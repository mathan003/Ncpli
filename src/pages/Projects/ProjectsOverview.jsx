import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./ProjectsOverview.css";

// Project assets
import emisImg from "../../assets/image/project/Educational Management Information System/image.png";
import callSoftImg from "../../assets/image/project/Call Soft/image1.png";
import hiTechLabImg from "../../assets/image/project/Hi-Tech Lab/image1.png";
import kioskImg from "../../assets/image/project/Kiosk/image1.png";
import languageLabImg from "../../assets/image/project/Language Lab/Headphone.png";
import rfidImg from "../../assets/image/project/RFID/Books Management.png";
import skillDevImg from "../../assets/image/project/Skills Development & trsing/our Training.png";
import assessmentImg from "../../assets/image/project/Skills Development & trsing/image1.png";
import digitalContentImg from "../../assets/image/project/Language Lab/language-lab system1.png";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "elearning", label: "Digital & E-Learning" },
  { id: "assessment-skills", label: "Assessment & Skills" },
  { id: "hardware-infrastructure", label: "Smart Hardware & Labs" },
];

const PROJECTS_DATA = [
  {
    id: "digital-content",
    title: "Netcom Digital Contents",
    category: "elearning",
    categoryLabel: "Digital & E-Learning",
    image: digitalContentImg,
    to: "/projects/digital-content",
    summary:
      "High-impact 2D & 3D educational multimedia content, interactive syllabus animations, and digital learning modules for K-12 and higher secondary education.",
    highlights: ["2D/3D Animation", "Syllabus Aligned", "Multi-subject Content", "Interactive Quizzes"],
    badge: "Curriculum Aligned",
  },
  {
    id: "emis",
    title: "Educational Management Information System (EMIS)",
    category: "elearning",
    categoryLabel: "Digital & E-Learning",
    image: emisImg,
    to: "/projects/emis",
    summary:
      "A centralized school administration and student tracking platform connecting teachers, students, parents, and administrative authorities in real time.",
    highlights: ["360° Student Profile", "Biometric/RFID Sync", "Automated Gradebooks", "Role-based Dashboards"],
    badge: "Enterprise Scale",
  },
  {
    id: "language-lab",
    title: "Language Lab",
    category: "elearning",
    categoryLabel: "Digital & E-Learning",
    image: languageLabImg,
    to: "/projects/language-lab",
    summary:
      "Turnkey interactive audio-visual English language laboratories designed to build phonetics, listening, speaking, reading, and communicative confidence.",
    highlights: ["Teacher Console", "Two-way Audio Headsets", "Phonetics Trainer", "Interactive Assessments"],
    badge: "Govt & Private Schools",
  },
  {
    id: "call-soft",
    title: "Call Soft",
    category: "assessment-skills",
    categoryLabel: "Assessment & Skills",
    image: callSoftImg,
    to: "/projects/call-soft",
    summary:
      "Specialized Computer-Based Training (CBT) software accelerating English communicative competence with live student-teacher interaction and nodal controls.",
    highlights: ["Remote Screen Control", "Interactive Voice Feedback", "Pronunciation Analysis", "Student Workstations"],
    badge: "Interactive CBT",
  },
  {
    id: "assessment",
    title: "Assessment",
    category: "assessment-skills",
    categoryLabel: "Assessment & Skills",
    image: assessmentImg,
    to: "/projects/assessment",
    summary:
      "Comprehensive educational assessment framework systematically evaluating student understanding, learning progressions, and syllabus outcome mastery.",
    highlights: ["Formative & Summative", "Bloom's Taxonomy Analytics", "Diagnostic Metrics", "Targeted Interventions"],
    badge: "Outcome Driven",
  },
  {
    id: "skill-development",
    title: "Skill Development & Training",
    category: "assessment-skills",
    categoryLabel: "Assessment & Skills",
    image: skillDevImg,
    to: "/projects/skill-development",
    summary:
      "Structured vocational and soft skill programs empowering students with interpersonal communication, workplace readiness, and hands-on IT proficiencies.",
    highlights: ["Employability Skills", "Personality Development", "Industry Mentorship", "5,000+ Students Trained"],
    badge: "Employability Focus",
  },
  {
    id: "ict-hi-tech-lab",
    title: "ICT / Hi-Tech Lab",
    category: "hardware-infrastructure",
    categoryLabel: "Smart Hardware & Labs",
    image: hiTechLabImg,
    to: "/projects/ict-hi-tech-lab",
    summary:
      "Turnkey state-of-the-art computer labs with centralized thin-client architecture, master server racks, structured cabling, and zero-maintenance endpoints.",
    highlights: ["Centralized Server Rack", "Thin-Client Terminals", "Structured Networking", "UPS & Power Redundancy"],
    badge: "Infrastructure",
  },
  {
    id: "kiosk",
    title: "Kiosk Project",
    category: "hardware-infrastructure",
    categoryLabel: "Smart Hardware & Labs",
    image: kioskImg,
    to: "/projects/kiosk",
    summary:
      "Self-service interactive touchscreen kiosks deployed across government institutions and public centers for seamless citizen information delivery.",
    highlights: ["Commercial Touchscreens", "Vandal-Resistant Enclosure", "Custom Self-Service UI", "Thermal Receipt Printing"],
    badge: "Self-Service",
  },
  {
    id: "rfid",
    title: "Radio-frequency identification (RFID)",
    category: "hardware-infrastructure",
    categoryLabel: "Smart Hardware & Labs",
    image: rfidImg,
    to: "/projects/rfid",
    summary:
      "Automated library RFID infrastructure encompassing high-speed book tagging, self-issue/return circular stations, handheld inventory readers, and anti-theft gates.",
    highlights: ["4,50,000+ Books Tagged", "KOHA ILS Integration", "Anti-Theft Detection Gates", "Handheld Stock Scanners"],
    badge: "Library Automation",
  },
];

function ProjectsOverview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.categoryLabel.toLowerCase().includes(query) ||
        project.highlights.some((h) => h.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

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
        {/* Page Intro Header */}
        <div className="po-header">
          <span className="po-kicker">GOVERNMENT &amp; INSTITUTIONAL INITIATIVES</span>
          <h1 className="po-title">Our Strategic Projects</h1>
          <p className="po-subtitle">
            Netcom Computers has been at the forefront of digital transformation across educational 
            and government institutions since 2004. Explore our full portfolio of turnkey projects, 
            smart learning labs, and automation infrastructures.
          </p>
        </div>

        {/* Stats Row */}
        <div className="po-stats-grid">
          <div className="po-stat-card">
            <span className="po-stat-number">9+</span>
            <span className="po-stat-label">Turnkey Project Domains</span>
          </div>
          <div className="po-stat-card">
            <span className="po-stat-number">450k+</span>
            <span className="po-stat-label">RFID Books Tagged</span>
          </div>
          <div className="po-stat-card">
            <span className="po-stat-number">30+</span>
            <span className="po-stat-label">District Libraries Equipped</span>
          </div>
          <div className="po-stat-card">
            <span className="po-stat-number">20+</span>
            <span className="po-stat-label">Years of Project Excellence</span>
          </div>
        </div>

        {/* Search & Filters Section */}
        <div className="po-toolbar">
          <div className="po-search-box">
            <svg
              className="po-search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="po-search-input"
              placeholder="Search projects by title, keywords, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                className="po-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="po-filters-row">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`po-filter-btn ${
                    selectedCategory === cat.id ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                  <span className="po-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="po-results-meta">
            <span>
              Showing <strong>{filteredProjects.length}</strong> of{" "}
              <strong>{PROJECTS_DATA.length}</strong> projects
            </span>
            {(searchQuery || selectedCategory !== "all") && (
              <button
                type="button"
                className="po-reset-btn"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="po-grid">
            {filteredProjects.map((project) => (
              <article className="po-card" key={project.id}>
                <div className="po-card-media">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <span className="po-card-badge">{project.badge}</span>
                </div>

                <div className="po-card-body">
                  <span className="po-card-category">{project.categoryLabel}</span>
                  <h2 className="po-card-title">{project.title}</h2>
                  <p className="po-card-desc">{project.summary}</p>

                  <div className="po-card-tags">
                    {project.highlights.map((tag) => (
                      <span className="po-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="po-card-footer">
                    <Link to={project.to} className="po-card-btn">
                      Explore Project
                      <span className="po-btn-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="po-empty-state">
            <div className="po-empty-icon">🔍</div>
            <h3>No matching projects found</h3>
            <p>
              We couldn&apos;t find any project matching &ldquo;{searchQuery}&rdquo;. Try
              adjusting your search query or selecting a different category.
            </p>
            <button
              type="button"
              className="btn btn-accent"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Trust & Methodology Section */}
        <section className="po-why-section">
          <div className="po-why-header">
            <span className="po-kicker">THE NETCOM ADVANTAGE</span>
            <h2>Why Institutions Trust Netcom</h2>
            <p>
              Proven engineering methodology, field-tested infrastructure, and 
              dedicated turnkey support from consultation to lifelong maintenance.
            </p>
          </div>

          <div className="po-pillars-grid">
            <div className="po-pillar-card">
              <div className="po-pillar-icon">🏛️</div>
              <h3>Government-Grade Compliance</h3>
              <p>
                Strict adherence to institutional IT frameworks, security standards, and 
                educational board syllabi across state and national curricula.
              </p>
            </div>
            <div className="po-pillar-card">
              <div className="po-pillar-icon">⚡</div>
              <h3>Turnkey Deployment</h3>
              <p>
                From structural hardware setup, cabling, and server installation to digital content 
                provisioning and staff onboarding, we handle it all.
              </p>
            </div>
            <div className="po-pillar-card">
              <div className="po-pillar-icon">🎯</div>
              <h3>Measurable Learning Outcomes</h3>
              <p>
                Every project is engineered with real-time feedback, analytics, and 
                verifiable performance metrics that benefit both teachers and students.
              </p>
            </div>
            <div className="po-pillar-card">
              <div className="po-pillar-icon">🤝</div>
              <h3>Dedicated Support &amp; AMC</h3>
              <p>
                Reliable lifecycle maintenance, prompt on-site engineering, software updates, 
                and SLA-backed support to guarantee zero disruption.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="po-cta-banner">
          <div className="po-cta-content">
            <h2>Planning a Turnkey Project for Your Institution?</h2>
            <p>
              Let our experienced solution architects design, customize, and implement the 
              ideal educational or technological infrastructure tailored to your needs.
            </p>
          </div>
          <div className="po-cta-actions">
            <Link to="/contact" className="btn btn-accent">
              Discuss Your Project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectsOverview;
