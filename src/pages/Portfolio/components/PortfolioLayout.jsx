import React, { useEffect, useRef, useState, useCallback } from "react";
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
  const categoriesRef = useRef(null);
  const [canSlideLeft, setCanSlideLeft] = useState(false);
  const [canSlideRight, setCanSlideRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = categoriesRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanSlideLeft(scrollLeft > 6);
      setCanSlideRight(scrollLeft + clientWidth < scrollWidth - 6);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const el = categoriesRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      const timer = setTimeout(checkScroll, 150);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, [checkScroll]);

  // Center active category into view
  useEffect(() => {
    const el = categoriesRef.current;
    if (el) {
      const activeEl = el.querySelector(".category-active");
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
      checkScroll();
    }
  }, [normCurrent, checkScroll]);

  const slide = (direction) => {
    const el = categoriesRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -180 : 180;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

        {/* CATEGORY MENU WITH MOBILE SLIDE OPTION */}
        <div className="portfolio-categories-container">
          <button
            type="button"
            className={`category-slide-btn category-slide-btn--prev ${canSlideLeft ? "visible" : ""}`}
            onClick={() => slide("left")}
            aria-label="Slide categories left"
          >
            ‹
          </button>

          <nav
            ref={categoriesRef}
            className="portfolio-categories"
            aria-label="Portfolio Categories"
          >
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

          <button
            type="button"
            className={`category-slide-btn category-slide-btn--next ${canSlideRight ? "visible" : ""}`}
            onClick={() => slide("right")}
            aria-label="Slide categories right"
          >
            ›
          </button>
        </div>

        {children}
      </main>
    </div>
  );
}
