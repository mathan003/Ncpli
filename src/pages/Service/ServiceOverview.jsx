import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./ServiceOverview.css";

// Service asset images
import graphicDesignImg from "../../assets/image/home screen/Graphic Design.jpg";
import econtentImg from "../../assets/image/home screen/E Content Development.jpg";
import shortfilmImg from "../../assets/image/home screen/shortflim.jpg";
import webappImg from "../../assets/image/home screen/Web Application Development.jpg";
import mobileappImg from "../../assets/image/home screen/Mobile Application Development.jpg";
import webhostingImg from "../../assets/image/home screen/Web Hosting Services.jpg";
import customsoftwareImg from "../../assets/image/home screen/Customized Software.jpg";
import hardwareImg from "../../assets/image/home screen/Hardware Support.jpg";
import cloudImg from "../../assets/image/home screen/Cloud Maintainance.jpg";

const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "design-media", label: "Design & Multimedia" },
  { id: "software-apps", label: "Software & Mobile Apps" },
  { id: "cloud-infrastructure", label: "Cloud & Infrastructure" },
];

const SERVICES_DATA = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "design-media",
    categoryLabel: "Design & Multimedia",
    image: graphicDesignImg,
    to: "/service/graphic-design",
    summary:
      "Creative corporate branding, marketing collaterals, brochures, business cards, social media campaigns, and impactful 2D/3D visual artwork.",
    highlights: ["Brand Identity", "Brochures & Flyers", "Social Media Graphics", "2D/3D Artwork"],
    badge: "Creative Design",
  },
  {
    id: "e-content-development",
    title: "E-Content Development",
    category: "design-media",
    categoryLabel: "Design & Multimedia",
    image: econtentImg,
    to: "/service/e-content-development",
    summary:
      "Comprehensive curriculum-mapped interactive digital content across Mathematics, Sciences, Humanities, and Commerce with rich animated explanations.",
    highlights: ["K-12 Syllabus", "Interactive Modules", "Audio-Visual Lessons", "Pedagogical Design"],
    badge: "EdTech Content",
  },
  {
    id: "short-film",
    title: "Short Film & Animations",
    category: "design-media",
    categoryLabel: "Design & Multimedia",
    image: shortfilmImg,
    to: "/service/short-film",
    summary:
      "Compelling storytelling through commercial short films, promotional corporate videos, product walkthroughs, and captivating 2D/3D cartoon animations.",
    highlights: ["Corporate Videos", "2D/3D Animation", "Commercial Ads", "Video Editing"],
    badge: "Video & Motion",
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    category: "software-apps",
    categoryLabel: "Software & Mobile Apps",
    image: webappImg,
    to: "/service/web-application-development",
    summary:
      "Robust, scalable, high-performance web applications built on modern frameworks (React, Node.js, Cloud DBs) with responsive interfaces and secure APIs.",
    highlights: ["Custom Portals", "REST / GraphQL APIs", "Responsive UX", "Secure Architecture"],
    badge: "Full-Stack Web",
  },
  {
    id: "mobile-application-development",
    title: "Mobile Application Development",
    category: "software-apps",
    categoryLabel: "Software & Mobile Apps",
    image: mobileappImg,
    to: "/service/mobile-application-development",
    summary:
      "High-speed native and cross-platform iOS and Android mobile apps engineered for peak user engagement, real-time push alerts, and offline caching.",
    highlights: ["iOS & Android", "React Native / Flutter", "Push Notifications", "Cloud Backend"],
    badge: "Mobile Apps",
  },
  {
    id: "web-hosting-services",
    title: "Web Hosting Services",
    category: "cloud-infrastructure",
    categoryLabel: "Cloud & Infrastructure",
    image: webhostingImg,
    to: "/service/web-hosting-services",
    summary:
      "High-speed SSD hosting, domain management, SSL security, automated daily backups, and pro-active server monitoring with 99.9% uptime reliability.",
    highlights: ["SSD Web Hosting", "SSL & DDoS Defense", "Automated Backups", "cPanel Management"],
    badge: "Hosting & Domains",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    category: "software-apps",
    categoryLabel: "Software & Mobile Apps",
    image: customsoftwareImg,
    to: "/service/custom-software-development",
    summary:
      "Tailor-made software architectures addressing unique business workflows, enterprise resource planning, legacy modernization, and third-party integrations.",
    highlights: ["Bespoke Architecture", "Legacy Migration", "ERP / CRM Systems", "Workflow Automation"],
    badge: "Enterprise Custom",
  },
  {
    id: "hardware-support",
    title: "Hardware Support & Maintenance",
    category: "cloud-infrastructure",
    categoryLabel: "Cloud & Infrastructure",
    image: hardwareImg,
    to: "/service/hardware-support",
    summary:
      "Comprehensive AMC services, server maintenance, computer peripheral servicing, network troubleshooting, and rapid on-site hardware support.",
    highlights: ["AMC Contracts", "Server & Network Servicing", "Hardware Diagnostics", "Component Replacement"],
    badge: "Hardware & AMC",
  },
  {
    id: "cloud-maintenance",
    title: "Cloud Maintenance",
    category: "cloud-infrastructure",
    categoryLabel: "Cloud & Infrastructure",
    image: cloudImg,
    to: "/service/cloud-maintenance",
    summary:
      "Proactive AWS & cloud infrastructure management, automated disaster recovery, cost optimization, performance scaling, and cloud security compliance.",
    highlights: ["AWS Management", "Disaster Recovery", "Cost Optimization", "24/7 Monitoring"],
    badge: "Cloud & DevOps",
  },
];

function ServiceOverview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        selectedCategory === "all" || service.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.summary.toLowerCase().includes(query) ||
        service.categoryLabel.toLowerCase().includes(query) ||
        service.highlights.some((h) => h.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="service-overview-page">
      {/* Service Hero Banner with image */}
      <section className="service-hero-banner" aria-label="Services Hero Banner"></section>

      {/* Floating Breadcrumb Capsule */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Services</span>
        </nav>
      </div>

      <main className="service-overview-container">
        {/* Page Intro Header */}
        <div className="so-header">
          <span className="so-kicker">COMPREHENSIVE IT &amp; MEDIA SOLUTIONS</span>
          <h2 className="so-title">Explore Our Full Range of Services</h2>
          <p className="so-subtitle">
            Netcom Computers delivers end-to-end consulting, design, engineering, and maintenance 
            services to elevate businesses, educational boards, and institutions into the digital age.
          </p>
        </div>

        {/* Stats Row */}
        <div className="so-stats-grid">
          <div className="so-stat-card">
            <span className="so-stat-number">9+</span>
            <span className="so-stat-label">Specialized IT Domains</span>
          </div>
          <div className="so-stat-card">
            <span className="so-stat-number">99.9%</span>
            <span className="so-stat-label">Cloud Uptime Reliability</span>
          </div>
          <div className="so-stat-card">
            <span className="so-stat-number">20+</span>
            <span className="so-stat-label">Years of Industry Expertise</span>
          </div>
          <div className="so-stat-card">
            <span className="so-stat-number">24/7</span>
            <span className="so-stat-label">Dedicated Technical Support</span>
          </div>
        </div>

        {/* Toolbar: Search and Filter Tabs */}
        <div className="so-toolbar">
          <div className="so-search-box">
            <svg
              className="so-search-icon"
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
              className="so-search-input"
              placeholder="Search services by name, capabilities, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search services"
            />
            {searchQuery && (
              <button
                type="button"
                className="so-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="so-filters-row">
            {SERVICE_CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? SERVICES_DATA.length
                  : SERVICES_DATA.filter((s) => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`so-filter-btn ${
                    selectedCategory === cat.id ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                  <span className="so-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="so-results-meta">
            <span>
              Showing <strong>{filteredServices.length}</strong> of{" "}
              <strong>{SERVICES_DATA.length}</strong> services
            </span>
            {(searchQuery || selectedCategory !== "all") && (
              <button
                type="button"
                className="so-reset-btn"
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

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="so-grid">
            {filteredServices.map((service) => (
              <article className="so-card" key={service.id}>
                <div className="so-card-media">
                  <Link to={service.to} className="so-card-media-link" aria-label={`View ${service.title}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </Link>
                  <span className="so-card-badge">{service.badge}</span>
                </div>

                <div className="so-card-body">
                  <span className="so-card-category">{service.categoryLabel}</span>
                  <h3 className="so-card-title">
                    <Link to={service.to}>{service.title}</Link>
                  </h3>
                  <p className="so-card-desc">{service.summary}</p>

                  <div className="so-card-tags">
                    {service.highlights.map((tag) => (
                      <span className="so-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="so-card-footer">
                    <Link to={service.to} className="so-card-btn">
                      Explore Service
                      <span className="so-btn-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="so-empty-state">
            <div className="so-empty-icon">🛠️</div>
            <h3>No matching services found</h3>
            <p>
              We couldn&apos;t find any service matching &ldquo;{searchQuery}&rdquo;.
              Try adjusting your search query or selecting another category.
            </p>
            <button
              type="button"
              className="btn btn-accent"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              View All Services
            </button>
          </div>
        )}

        {/* Process Section: How We Deliver */}
        <section className="so-process-section">
          <div className="so-process-header">
            <span className="so-kicker">OUR SERVICE DELIVERY LIFECYCLE</span>
            <h2>How Netcom Delivers Excellence</h2>
            <p>
              A battle-tested consulting-plan-implementation approach designed to 
              minimize risks, speed up execution, and maximize return on investment.
            </p>
          </div>

          <div className="so-steps-grid">
            <div className="so-step-card">
              <span className="so-step-num">01</span>
              <h3>Consultation &amp; Scoping</h3>
              <p>
                In-depth discovery workshops analyzing business requirements, pain points, 
                and defining clear deliverable roadmaps.
              </p>
            </div>
            <div className="so-step-card">
              <span className="so-step-num">02</span>
              <h3>UI/UX &amp; Architecture</h3>
              <p>
                Iterative wireframing, high-fidelity prototypes, and robust cloud-native architecture 
                blueprints for flawless usability.
              </p>
            </div>
            <div className="so-step-card">
              <span className="so-step-num">03</span>
              <h3>Agile Engineering</h3>
              <p>
                Clean modular code development in sprints with continuous integration, live milestone 
                reviews, and transparent client reporting.
              </p>
            </div>
            <div className="so-step-card">
              <span className="so-step-num">04</span>
              <h3>QA &amp; Security Testing</h3>
              <p>
                Thorough cross-browser validation, performance benchmarking, automated regression, 
                and penetration testing.
              </p>
            </div>
            <div className="so-step-card">
              <span className="so-step-num">05</span>
              <h3>Launch &amp; 24/7 Support</h3>
              <p>
                Zero-downtime deployment, user training, SLA-backed maintenance, and proactive cloud 
                monitoring round the clock.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="so-cta-banner">
          <div className="so-cta-content">
            <h2>Ready to Elevate Your Technology &amp; Operations?</h2>
            <p>
              Partner with Netcom&apos;s seasoned software developers, creative media experts, and cloud 
              engineers to drive tangible business growth.
            </p>
          </div>
          <div className="so-cta-actions">
            <Link to="/contact" className="btn btn-accent">
              Get Started with Netcom
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServiceOverview;
