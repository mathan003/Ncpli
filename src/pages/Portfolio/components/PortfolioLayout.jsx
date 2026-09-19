import React from "react";
import { Link } from "react-router-dom";
import "../Portfolio.css";
import portfolioBanner from "../../../assets/image/portfolio/portfolio banner.jpg";

const PORTFOLIO_CATEGORIES = [
  { label: "AR&VR", slug: "ar&vr" },
  { label: "ROBOTICS", slug: "robotics" },
  { label: "NETCOM SMART CLASS", slug: "netcom-smart-class" },
  { label: "KIOSK", slug: "kiosk" },
  { label: "SKILL DEVELOPMENT", slug: "skill-development" },
  { label: "NETCOM DIGITAL CONTENT", slug: "digital-content" },
  { label: "YOUTUBE", slug: "youtube" },
];

export function PortfolioLayout({ currentSlug, categoryTitle, children }) {
  const normCurrent = (currentSlug || "").toLowerCase().replace(/&/g, "-");

  return (
    <div className={`portfolio-page portfolio-page--${normCurrent}`}>
      {/* ================= HERO ================= */}
      <section className="portfolio-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url("${portfolioBanner}")`,
          }}
          aria-hidden="true"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Portfolio</h1>
          <a href="#portfolio-content" className="explore-btn">
            Explore Now
          </a>
          <p>We devote all of our experience and efforts for creation</p>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/portfolio">Portfolio</Link>
          {categoryTitle && (
            <>
              <span className="cs-breadcrumb-separator">›</span>
              <span className="cs-breadcrumb-current">{categoryTitle}</span>
            </>
          )}
        </nav>
      </div>

      {/* ================= PORTFOLIO CONTENT ================= */}
      <main className="portfolio-content" id="portfolio-content">
        <h2 className="portfolio-heading">Portfolio</h2>

        {/* CATEGORY MENU */}
        <nav className="portfolio-categories" aria-label="Portfolio Categories">
          {PORTFOLIO_CATEGORIES.map((item) => {
            const itemNorm = item.slug.toLowerCase().replace(/&/g, "-");
            const isActive = itemNorm === normCurrent;
            return (
              <Link
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                className={`portfolio-category-link ${isActive ? "category-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {children}
      </main>
    </div>
  );
}
