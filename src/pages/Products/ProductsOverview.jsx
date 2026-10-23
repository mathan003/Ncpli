import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./ProductsOverview.css";

// Product asset images
import roboticsImg from "../../assets/image/product/Robotics/RoboticsIntro.png";
import arvrImg from "../../assets/image/product/AR & VR/ARVR.png";
import smartClassImg from "../../assets/image/product/Smart Class Room/passion of learing1.png";
import smartTailorImg from "../../assets/image/product/Smart Tailor Shop/image1.png";
import cabBookingImg from "../../assets/image/product/Online Cab Booking/cab book interface.png";
import gilgalImg from "../../assets/image/product/Educational Mobile App - Gilgal/gilgal.png";
import emisProductImg from "../../assets/image/product/Educational Management Information System/image 35.png";
import assessmentToolImg from "../../assets/image/home screen/smartclass.png";

const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "ai-immersive", label: "AI & Emerging Tech" },
  { id: "edtech-campus", label: "Smart Campus & EdTech" },
  { id: "enterprise-apps", label: "Enterprise & Mobile Apps" },
];

const PRODUCTS_DATA = [
  {
    id: "robotics",
    title: "Robotics",
    category: "ai-immersive",
    categoryLabel: "AI & Emerging Tech",
    image: roboticsImg,
    to: "/products/robotics",
    summary:
      "Hands-on STEM robotics kits, programmable microcontrollers, and comprehensive school curricula empowering students to assemble, wire, and code real-world robots.",
    highlights: ["Hands-on STEM Kits", "Visual & Block Coding", "Sensor Integration", "Competition Ready"],
    badge: "STEM & AI",
  },
  {
    id: "ar-vr",
    title: "AR & VR",
    category: "ai-immersive",
    categoryLabel: "AI & Emerging Tech",
    image: arvrImg,
    to: "/products/ar-vr",
    summary:
      "Immersive Augmented and Virtual Reality learning suites bringing complex scientific concepts, human anatomy, and astronomy into breathtaking 3D interactive simulations.",
    highlights: ["3D Virtual Laboratories", "VR Headset Compatible", "Interactive 3D Models", "Self-Paced Exploration"],
    badge: "Virtual Reality",
  },
  {
    id: "smart-class-room",
    title: "Smart Class Room",
    category: "edtech-campus",
    categoryLabel: "Smart Campus & EdTech",
    image: smartClassImg,
    to: "/products/smart-class-room",
    summary:
      "Complete digitized classroom ecosystem featuring interactive flat panels, multimedia syllabus lessons, wireless screen casting, and digital whiteboard teaching tools.",
    highlights: ["Interactive Touch Panels", "Multimedia Lesson Bank", "Multi-Touch Whiteboard", "Cloud Content Sync"],
    badge: "Digital Classroom",
  },
  {
    id: "smart-tailor-shop",
    title: "Smart Tailor Shop",
    category: "enterprise-apps",
    categoryLabel: "Enterprise & Mobile Apps",
    image: smartTailorImg,
    to: "/products/smart-tailor-shop",
    summary:
      "An intelligent bespoke business solution for tailors, fashion designers, and boutiques managing custom measurements, order workflows, and automated client SMS alerts.",
    highlights: ["Digital Measurement Book", "Order Pipeline Tracking", "Automated SMS Alerts", "Fabric Stock Logs"],
    badge: "Bespoke SaaS",
  },
  {
    id: "online-cab-booking",
    title: "Online Cab Booking",
    category: "enterprise-apps",
    categoryLabel: "Enterprise & Mobile Apps",
    image: cabBookingImg,
    to: "/products/online-cab-booking",
    summary:
      "Turnkey on-demand ride-hailing and fleet management platform featuring real-time GPS navigation, dynamic fare estimation, driver dispatch, and instant digital payments.",
    highlights: ["Real-Time GPS Tracking", "Driver & Rider Portals", "Dynamic Fare Calculator", "Multi-tier Fleet Config"],
    badge: "Mobility Platform",
  },
  {
    id: "gilgal",
    title: "Educational Mobile App - Gilgal",
    category: "edtech-campus",
    categoryLabel: "Smart Campus & EdTech",
    image: gilgalImg,
    to: "/products/gilgal",
    summary:
      "All-in-one mobile institutional communication app connecting parents, educators, and pupils with instant homework alerts, attendance logs, and school announcements.",
    highlights: ["Daily Homework Push", "Instant Parent Alerts", "Digital Report Cards", "Attendance Notifications"],
    badge: "Mobile App",
  },
  {
    id: "emis",
    title: "Educational Management Information System (EMIS)",
    category: "edtech-campus",
    categoryLabel: "Smart Campus & EdTech",
    image: emisProductImg,
    to: "/products/emis",
    summary:
      "Enterprise institutional administration suite streamlining student enrollment, faculty scheduling, automated report cards, timetable scheduling, and campus finance.",
    highlights: ["Admissions & Fees", "Automated Timetabling", "Examination Modules", "Stakeholder Portals"],
    badge: "Campus ERP",
  },
  {
    id: "assessment-tool",
    title: "Assessment Tool",
    category: "edtech-campus",
    categoryLabel: "Smart Campus & EdTech",
    image: assessmentToolImg,
    to: "/products/assessment-tool",
    summary:
      "Cloud-based computer evaluation software featuring automated question paper generation, instant scoring, bloom's taxonomy classification, and diagnostic progress reports.",
    highlights: ["Randomized Question Banks", "Automated Grading", "Taxonomy Analytics", "Student Growth Tracking"],
    badge: "Diagnostic Suite",
  },
];

function ProductsOverview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.summary.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query) ||
        product.highlights.some((h) => h.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="products-overview-page">
      {/* Product Hero Banner */}
      <section className="prod-hero" aria-label="Products Hero Banner"></section>

      {/* Floating Breadcrumb Capsule */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Products</span>
        </nav>
      </div>

      <main className="products-overview-container">
        {/* Page Header */}
        <div className="pro-header">
          <span className="pro-kicker">PROPRIETARY EDTECH &amp; ENTERPRISE SOLUTIONS</span>
          <h1 className="pro-title">Our Innovative Products</h1>
          <p className="pro-subtitle">
            Explore our ecosystem of cutting-edge educational technology and business software
            engineered to inspire learning, accelerate digital literacy, and optimize operational efficiency.
          </p>
        </div>

        {/* Stats Row */}
        <div className="pro-stats-grid">
          <div className="pro-stat-card">
            <span className="pro-stat-number">8+</span>
            <span className="pro-stat-label">Flagship Tech Products</span>
          </div>
          <div className="pro-stat-card">
            <span className="pro-stat-number">300+</span>
            <span className="pro-stat-label">Schools &amp; Campuses Equipped</span>
          </div>
          <div className="pro-stat-card">
            <span className="pro-stat-number">100k+</span>
            <span className="pro-stat-label">Students Empowered Daily</span>
          </div>
          <div className="pro-stat-card">
            <span className="pro-stat-number">99.8%</span>
            <span className="pro-stat-label">Client Satisfaction Rating</span>
          </div>
        </div>

        {/* Toolbar: Search and Filter Tabs */}
        <div className="pro-toolbar">
          <div className="pro-search-box">
            <svg
              className="pro-search-icon"
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
              className="pro-search-input"
              placeholder="Search products by title, features, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                type="button"
                className="pro-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="pro-filters-row">
            {PRODUCT_CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? PRODUCTS_DATA.length
                  : PRODUCTS_DATA.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`pro-filter-btn ${
                    selectedCategory === cat.id ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                  <span className="pro-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="pro-results-meta">
            <span>
              Showing <strong>{filteredProducts.length}</strong> of{" "}
              <strong>{PRODUCTS_DATA.length}</strong> products
            </span>
            {(searchQuery || selectedCategory !== "all") && (
              <button
                type="button"
                className="pro-reset-btn"
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

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="pro-grid">
            {filteredProducts.map((product) => (
              <article className="pro-card" key={product.id}>
                <div className="pro-card-media">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                  />
                  <span className="pro-card-badge">{product.badge}</span>
                </div>

                <div className="pro-card-body">
                  <span className="pro-card-category">{product.categoryLabel}</span>
                  <h2 className="pro-card-title">{product.title}</h2>
                  <p className="pro-card-desc">{product.summary}</p>

                  <div className="pro-card-tags">
                    {product.highlights.map((tag) => (
                      <span className="pro-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pro-card-footer">
                    <Link to={product.to} className="pro-card-btn">
                      View Product Details
                      <span className="pro-btn-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="pro-empty-state">
            <div className="pro-empty-icon">📦</div>
            <h3>No matching products found</h3>
            <p>
              We couldn&apos;t find any product matching &ldquo;{searchQuery}&rdquo;.
              Try adjusting your query or resetting category filters.
            </p>
            <button
              type="button"
              className="btn btn-accent"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              View All Products
            </button>
          </div>
        )}

        {/* Product Ecosystem Features */}
        <section className="pro-features-section">
          <div className="pro-features-header">
            <span className="pro-kicker">ENGINEERED FOR EXCELLENCE</span>
            <h2>Why Institutions Choose Netcom Products</h2>
            <p>
              Built from the ground up with modular architecture, intuitive user experiences, 
              and robust security to scale effortlessly with your organization.
            </p>
          </div>

          <div className="pro-pillars-grid">
            <div className="pro-pillar-card">
              <div className="pro-pillar-icon">🧠</div>
              <h3>Hands-On &amp; Experiential</h3>
              <p>
                From tactile robotics to interactive VR sandboxes, our products transform passive 
                listeners into active creators and critical thinkers.
              </p>
            </div>
            <div className="pro-pillar-card">
              <div className="pro-pillar-icon">☁️</div>
              <h3>Cloud &amp; Offline Hybrid</h3>
              <p>
                Seamless cloud synchronization with reliable offline-first fallback ensures 
                uninterrupted instruction even in low-bandwidth regions.
              </p>
            </div>
            <div className="pro-pillar-card">
              <div className="pro-pillar-icon">📱</div>
              <h3>Cross-Device Accessible</h3>
              <p>
                Optimized performance across desktops, interactive displays, tablets, and 
                smartphones with native and responsive interfaces.
              </p>
            </div>
            <div className="pro-pillar-card">
              <div className="pro-pillar-icon">🔒</div>
              <h3>Enterprise Security</h3>
              <p>
                End-to-end data encryption, role-based access management, and automated daily 
                backups guarding student and business data integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="pro-cta-banner">
          <div className="pro-cta-content">
            <h2>Ready to Experience a Live Product Demonstration?</h2>
            <p>
              Schedule a personalized walkthrough with our product specialists and explore how 
              Netcom solutions can empower your classrooms or enterprise.
            </p>
          </div>
          <div className="pro-cta-actions">
            <Link to="/contact" className="btn btn-accent">
              Schedule Free Demo
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductsOverview;
