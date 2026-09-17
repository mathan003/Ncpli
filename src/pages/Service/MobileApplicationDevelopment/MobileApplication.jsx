import { Link } from "react-router-dom";
import "./MobileApplication.css";

import heroGraphic from "../../../assets/image/Service/Mobile Application/Mobile.png";
import introIllustration from "../../../assets/image/Service/Mobile Application/mobile2.jpg";
import achieveImg from "../../../assets/image/Service/Mobile Application/achive.png";
import presenceImg from "../../../assets/image/Service/Mobile Application/presence.png";

const STAGES = [
  {
    title: "Discovery",
    desc: "We work with you to understand the user journey, market competition, and core objectives that drive adoption and long-term user retention.",
  },
  {
    title: "Features & Architecture",
    desc: "Complete technical scoping, API planning, and cloud database integration built on scalable and maintainable architectures.",
  },
  {
    title: "Design & Development",
    desc: "Modern UI/UX prototyping paired with native and hybrid codebases built for high-performance rendering across modern Android and iOS devices.",
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous automated testing, security validation, and device fragmentation testing on actual hardware.",
  },
  {
    title: "Launch",
    desc: "App store submission, Google Play Store compliance, and seamless release management.",
  },
  {
    title: "Maintenance",
    desc: "Continuous monitoring, OS version updates, feature rollouts, and ongoing app optimization.",
  },
];

const CIRCLE_FEATURES = [
  {
    color: "purple",
    label: "Offers High Scalability and Secures Your App Data",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 7v5" />
        <path d="M9 10l3-3 3 3" />
      </svg>
    ),
  },
  {
    color: "orange",
    label: "Integrates With Existing Software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2m0 16v2m-10-10h2m16 0h2" />
      </svg>
    ),
  },
  {
    color: "blue",
    label: "Provides Real-time Project Access",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    color: "green",
    label: "Facilitates New Client Data Retrieval",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        <polyline points="12 13 12 9 10 11" />
      </svg>
    ),
  },
  {
    color: "orange",
    label: "Record Digital Files for Accountability",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    color: "purple",
    label: "Improves Efficiency & Business Relationship",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
];

function MobileApplication() {
  return (
    <div className="ma-page">
      {/* ================= HERO SECTION ================= */}
      <section className="ma-hero">
        <div className="ma-hero__container">
          <div className="ma-hero__content">
            <span className="ma-badge">OUR SERVICES</span>
            <h1>Mobile Application Development</h1>
            <p>
              We build powerful, secure and user-friendly mobile apps for Android
              and iOS that help businesses engage their customers.
            </p>
          </div>
          <div className="ma-hero__media">
            <img
              src={heroGraphic}
              alt="Mobile Application Development"
              className="ma-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="ma-breadcrumb-wrapper">
        <nav className="ma-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="ma-breadcrumb-separator">›</span>
          <Link to="/service">Services</Link>
          <span className="ma-breadcrumb-separator">›</span>
          <span className="ma-breadcrumb-current">
            Mobile Application Development
          </span>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="ma-container">
        {/* Intro 2-Column Section */}
        <section className="ma-intro-grid">
          <article className="ma-card ma-intro-card">
            <h2 className="ma-card-title">Mobile Application Development</h2>
            <p>
              Mobile App Development Is The Process Of Developing And Helping To
              Implement Apps That Run On Android And iOS Powered Mobile Devices
              And Typical Mobile Applications Utilize A Network Connection To
              Work With Remote Computing Resources.
            </p>
            <p>
              Many Of You Will Think That — Our Business Style Doesn’t Need An
              App To Sell Products To Our Clients! And Maybe That Would Have Been
              The Case In The Past, But If You Want To Prepare For The Future And
              Start Reaping The Massive Benefits Right Out The Gate, You’ll
              Definitely Need A Mobile App For Your Business Development.
            </p>
          </article>
          <div className="ma-intro-media-card">
            <img
              src={introIllustration}
              alt="Mobile Application Development Process"
              className="ma-intro-media-img"
            />
          </div>
        </section>

        {/* What does a Mobile App do? */}
        <section className="ma-section-block">
          <h2 className="ma-heading-center">What does a Mobile App actually do?</h2>
          <p className="ma-subtext-center">
            Mobile Applications Would Permit The Users To Have 24x7 Network
            Access To Any Product&apos;s Information, Process Or Services That They
            Would Demand In Real-Time. It Enables The Business To Send
            Notifications About Changes In Products And Services Or Something New.
          </p>

          <div className="ma-stages-grid">
            {STAGES.map((st) => (
              <div key={st.title} className="ma-stage-card">
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Circular Feature Pillars */}
        <section className="ma-features-circle-section">
          <div className="ma-circles-grid">
            {CIRCLE_FEATURES.map((item, idx) => (
              <div key={idx} className="ma-circle-item">
                <div className={`ma-circle-icon-box ma-circle--${item.color}`}>
                  {item.icon}
                </div>
                <span className={`ma-circle-arrow ma-arrow--${item.color}`}>
                  ↓
                </span>
                <p className="ma-circle-label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom 2 Strategy Cards */}
        <section className="ma-strategy-grid">
          <div className="ma-strategy-card">
            <div>
              <h3>What you can achieve by that?</h3>
              <ul>
                <li>Expand your reach to users on mobile devices with high brand awareness.</li>
                <li>Streamline orders, subscriptions, and payment flows in real-time.</li>
                <li>Provide personal notifications and instant customer updates.</li>
              </ul>
            </div>
            <div className="ma-strategy-media">
              <img src={achieveImg} alt="Achieve with mobile apps" />
            </div>
          </div>

          <div className="ma-strategy-card">
            <div>
              <h3>Our Developing Strategies for Brand &amp; Online Presence</h3>
              <ul>
                <li>Omnichannel Brand Sync across all Platforms</li>
                <li>High Retention Design Frameworks</li>
                <li>Continuous Performance Tracking</li>
              </ul>
            </div>
            <div className="ma-strategy-media">
              <img src={presenceImg} alt="Brand and Online Presence" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MobileApplication;

