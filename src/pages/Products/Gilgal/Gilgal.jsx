import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Gilgal.css";

import contactUsImg from "../../../assets/image/product/contact us.png";
import gilgalBadgeImg from "../../../assets/image/product/Educational Mobile App - Gilgal/gilgal.png";
import phoneFrameImg from "../../../assets/image/product/Educational Mobile App - Gilgal/phone frame.png";
import screenshot1 from "../../../assets/image/product/Educational Mobile App - Gilgal/Screenshots1.png";
import screenshot2 from "../../../assets/image/product/Educational Mobile App - Gilgal/Screenshots2.png";
import screenshot3 from "../../../assets/image/product/Educational Mobile App - Gilgal/Screenshots3.png";
import screenshot4 from "../../../assets/image/product/Educational Mobile App - Gilgal/Screenshots4.png";
import screenshot5 from "../../../assets/image/product/Educational Mobile App - Gilgal/Screenshots5.png";

const slides = [
  {
    id: 1,
    image: screenshot1,
    alt: "GilGal App Splash Screen",
    title: "GilGal Splash Screen",
    caption: "Personalized online learning gateway for CBSE, ICSE & State Board",
  },
  {
    id: 2,
    image: screenshot2,
    alt: "GilGal App Lesson Q&A Screen",
    title: "Unit: 1 Electrostatics - Lesson Q&A",
    caption: "Subject-wise questions with comprehensive video solutions",
  },
  {
    id: 3,
    image: screenshot3,
    alt: "GilGal App Difficulty Levels Selection",
    title: "Adaptive Difficulty Selection",
    caption: "Choose your pace with Easy, Medium, and Hard study tiers",
  },
  {
    id: 4,
    image: screenshot4,
    alt: "GilGal App Quiz and Questions",
    title: "Choice-Based Interactive Quiz",
    caption: "Timed real-time MCQs with instant answer evaluations",
  },
  {
    id: 5,
    image: screenshot5,
    alt: "GilGal App Results and Score Screen",
    title: "Performance Analytics & Scorecard",
    caption: "Detailed accuracy metrics, time duration, and topic score breakdown",
  },
];

// Tripled list for infinite looping without visual snapping
const extendedSlides = [...slides, ...slides, ...slides];

function Gilgal() {
  const [currentSlide, setCurrentSlide] = useState(slides.length); // starts at index 5 (middle set)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "Educational Mobile App - Gilgal",
    message: "",
  });

  // Auto-slide every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless infinite loop reset when boundary of middle set is reached
  const handleTransitionEnd = () => {
    if (currentSlide >= slides.length * 2) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide - slides.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    } else if (currentSlide < slides.length) {
      setIsTransitioning(false);
      setCurrentSlide(currentSlide + slides.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(slides.length + index);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartXRef.current = null;
    setIsPaused(false);
  };

  const activeIndex = currentSlide % slides.length;
  const currentSlideInfo = slides[activeIndex];

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Demo Request: Educational Mobile App - Gilgal`);
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProduct: Educational Mobile App - Gilgal\n\nMessage:\n${demoFormData.message}`
      );
      window.open(`mailto:support@ncpli.com?subject=${subject}&body=${body}`, "_blank");
    }, 800);
  };

  return (
    <div className="prod-page-wrapper">
      {/* Product Hero Banner */}
      <section className="prod-hero">
        <div className="prod-hero-container">
          <h1 className="prod-hero-title">PRODUCT</h1>
          <p className="prod-hero-subtitle">Designed for the way you work.</p>
        </div>
      </section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/products">Product</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Educational Mobile App - Gilgal</span>
        </nav>
      </div>

      <main className="prod-container">
        {/* Intro Section */}
        <div className="gilgal-intro-split">
          <div className="gilgal-intro-text">
            <p>
              <strong>Gilgal</strong> – Gilgal is an online learning app personalized for CBSE, ICSE & State Board students.
            </p>
            <p>
              We cover a very wide range of syllabus from CBSE Board, ICSE, and State Boards for Tamil Medium and English Medium.
            </p>
            <p>
              Gilgal represents the delivery of educational material and learning through digital resources. The initial skepticism surrounding it was bound to falter when the results showed that studying offline can be just as effective as studying in the classroom. Although the online learning process is based on principles of formal education, it is provided via an internet connection through electronic devices such as computers, tablets, and even smart phones. This makes it easy for students to access their online classes anywhere and anytime.
            </p>
          </div>

          <div className="gilgal-preview-card">
            <img src={gilgalBadgeImg} alt="GilGal Online Learning App on Google Play Store" />
          </div>
        </div>

        {/* Methodology 8 Cards Grid */}
        <h2 className="gilgal-section-title">Methodology</h2>
        <div className="gilgal-grid">
          <div className="gilgal-card">
            <h3>Learn with Video Classes</h3>
            <ul className="gilgal-card-list">
              <li><span className="gilgal-check-icon">✔</span> You Can Watch Each Topic And Chapter In All Lessons In Order With Videos.</li>
              <li><span className="gilgal-check-icon">✔</span> Clarifies Lessons Step By Step & Direct Lessons From The Subject Area Expert Teacher.</li>
              <li><span className="gilgal-check-icon">✔</span> Easy-To-Understand Method Of Assessment Data Analysis For The Weakness Points.</li>
            </ul>
          </div>

          <div className="gilgal-card">
            <h3>Question and Answers</h3>
            <ul className="gilgal-card-list">
              <li><span className="gilgal-check-icon">✔</span> Learn 2 Marks Questions With Answer In Form Of Videos Based On The Topic.</li>
            </ul>
          </div>

          <div className="gilgal-card">
            <h3>Model Question Papers for all Subjects</h3>
            <ul className="gilgal-card-list">
              <li><span className="gilgal-check-icon">✔</span> Model Question Paper For Each Subject Is Provided With Solved Questions.</li>
            </ul>
          </div>

          <div className="gilgal-card">
            <h3>Choice Based Questions</h3>
            <ul className="gilgal-card-list">
              <li><span className="gilgal-check-icon">✔</span> In Our App We Have All Types Of Questions Like MCQs With Choice And Solution For Each Questions.</li>
            </ul>
          </div>

          <div className="gilgal-card">
            <h3>Clear doubts anytime and anywhere</h3>
            <ul className="gilgal-card-list">
              <li><span className="gilgal-check-icon">✔</span> Clarify Doubts With Subject Matter Experts In Real-Time By Asking Questions In Doubt Section.</li>
              <li><span className="gilgal-check-icon">✔</span> Dedicated Support For Any Doubts/Queries.</li>
              <li><span className="gilgal-check-icon">✔</span> You Can Connect With Teachers And Clarify Doubts Instant Whenever Needed.</li>
            </ul>
          </div>

          <div className="gilgal-card">
            <h3>Language Support</h3>
            <ul className="gilgal-card-list">
              <li><span className="gilgal-check-icon">✔</span> Learn In Both Tamil & English Language.</li>
            </ul>
          </div>

          <div className="gilgal-card">
            <h3>Learn from Anywhere</h3>
            <ul className="gilgal-card-list">
              <li><span className="gilgal-check-icon">✔</span> You Can Access Your Courses On Any Of Devices Anywhere.</li>
            </ul>
          </div>

          <div className="gilgal-card">
            <h3>Device Support</h3>
            <ul className="gilgal-card-list">
              <li><span className="gilgal-check-icon">✔</span> Compatible Across Android, Tablets And Desktops.</li>
            </ul>
          </div>
        </div>

        {/* GilGal App Screenshots 3-Second Auto-Sliding Showcase */}
        <section className="gilgal-screenshots-section">
          <h2 className="gilgal-section-title">GilGal App Screenshots</h2>

          <div
            className="gilgal-slider-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left & Right Nav Arrows */}
            <button
              type="button"
              className="gilgal-slider-arrow gilgal-slider-arrow--prev"
              onClick={handlePrev}
              aria-label="Previous screenshot"
            >
              ‹
            </button>
            <button
              type="button"
              className="gilgal-slider-arrow gilgal-slider-arrow--next"
              onClick={handleNext}
              aria-label="Next screenshot"
            >
              ›
            </button>

            {/* Stage containing the sliding track and centered phone frame */}
            <div className="gilgal-slider-stage">
              {/* Continuous Horizontal Track */}
              <div
                className="gilgal-slider-track"
                style={{
                  transform: `translateX(calc(50% - var(--slide-w) / 2 - ${currentSlide} * (var(--slide-w) + var(--slide-gap))))`,
                  transition: isTransitioning
                    ? "transform 0.65s cubic-bezier(0.25, 1, 0.4, 1)"
                    : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedSlides.map((slide, idx) => {
                  const isCenter = idx === currentSlide;
                  return (
                    <div
                      key={`${slide.id}-${idx}`}
                      className={`gilgal-slide-card ${isCenter ? "gilgal-slide-card--active" : ""}`}
                      onClick={() => {
                        setIsTransitioning(true);
                        setCurrentSlide(idx);
                      }}
                      title={slide.title}
                    >
                      <img src={slide.image} alt={slide.alt} draggable="false" />
                    </div>
                  );
                })}
              </div>

              {/* Fixed Center Phone Mockup Frame (Cutout fits exactly over the center slide) */}
              <div className="gilgal-phone-frame-mockup" aria-hidden="true">
                <img src={phoneFrameImg} alt="" className="gilgal-phone-frame-img" />
              </div>
            </div>

            {/* Slider Caption, Dots & Timer Badge */}
            <div className="gilgal-slider-controls">
              <div className="gilgal-slider-info">
                <span className="gilgal-slide-title">{currentSlideInfo.title}</span>
                <span className="gilgal-slide-caption">{currentSlideInfo.caption}</span>
              </div>

              <div className="gilgal-slider-dots">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    className={`gilgal-dot ${activeIndex === dotIdx ? "gilgal-dot--active" : ""}`}
                    onClick={() => handleDotClick(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <div className="gilgal-slider-timer-badge">
                <span>⏱ Auto-slides every 3s</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="prod-cta-card">
          <div className="prod-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us. Also we can add/update new features and design changes in this product. If you want To discuss about this product and our other services, please mail us on <strong>support@ncpli.com</strong> or call <strong>+91 73050 23014</strong>.
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
                <p style={{ color: "#4f5d54" }}>Your demo request for Educational Mobile App - Gilgal has been received.</p>
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
                  <label htmlFor="gilgal-demo-name">Your Full Name *</label>
                  <input
                    id="gilgal-demo-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={demoFormData.name}
                    onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="gilgal-demo-inst">Institution / School Name *</label>
                  <input
                    id="gilgal-demo-inst"
                    type="text"
                    required
                    placeholder="e.g. St. Joseph Higher Secondary School"
                    value={demoFormData.institution}
                    onChange={(e) => setDemoFormData({ ...demoFormData, institution: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="gilgal-demo-email">Email Address *</label>
                  <input
                    id="gilgal-demo-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={demoFormData.email}
                    onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="gilgal-demo-phone">Phone Number *</label>
                  <input
                    id="gilgal-demo-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoFormData.phone}
                    onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="gilgal-demo-msg">Specific Requirements</label>
                  <textarea
                    id="gilgal-demo-msg"
                    rows="3"
                    placeholder="Tell us about target grades, curriculum board..."
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

export default Gilgal;
