import { Link } from "react-router-dom";
import "./HardwareSupport.css";

import heroGraphic from "../../../assets/image/Service/Hardware Support &/Hardware Support  &.png";
import introIllustration from "../../../assets/image/Service/Hardware Support &/02.jpg";
import solutionsIllustration from "../../../assets/image/Service/Hardware Support &/03.png";

const FEATURES_LEFT = [
  "Extend The Life Of Hardware.",
  "Breakdown Calls To Be Resolved In 48 Hours Or As Per Adherence To SLA Signed.",
  "Single Point Help Desk – Call Center Facility.",
  "Availability Of Call Center Personnel & Technical Support Service Engineer.",
  "Availability Of Adequate Spare Parts In Divisional Level Offices.",
];

const FEATURES_RIGHT = [
  "Generation Of Weekly & Monthly MIS Reports.",
  "Tracking Of Service Calls.",
  "Fully Automated Maintenance Experience.",
  "Repair / Replacement Services Could Be On-Site At Client's Place Or At Our Centralized Repair Depot By Our Large Pool Of Qualified Engineers.",
  "Single Source Customizable Hardware Maintenance Accountability – Talk To Us And Our Consultants Will Devise The Most Appropriate Solution For Your Business Needs.",
];

function HardwareSupport() {
  return (
    <div className="hs-page">
      {/* ================= HERO SECTION ================= */}
      <section className="hs-hero">
        <div className="hs-hero__container">
          <div className="hs-hero__content">
            <span className="hs-badge">OUR SERVICES</span>
            <h1>Hardware Support &amp; Maintainance</h1>
            <p>
              Hardware Support &amp; Maintenance are preventive and remedial
              services that physically repair or optimize hardware, including
              contract maintenance and per-incident repair. Hardware maintenance
              deals with repairing and replacing broken and failing computer
              hardware.
            </p>
          </div>
          <div className="hs-hero__media">
            <img
              src={heroGraphic}
              alt="Hardware Support and Maintenance"
              className="hs-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="hs-breadcrumb-wrapper">
        <nav className="hs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="hs-breadcrumb-separator">›</span>
          <Link to="/service">Services</Link>
          <span className="hs-breadcrumb-separator">›</span>
          <span className="hs-breadcrumb-current">
            Hardware Support &amp; Maintenance
          </span>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="hs-container">
        {/* Intro 2-Column Section */}
        <section className="hs-intro-grid">
          <article className="hs-card hs-intro-card">
            <h2 className="hs-card-title">Hardware Support &amp; Maintenance</h2>
            <p>
              Hardware Support &amp; Maintenance Are Preventive And Remedial
              Services That Physically Repair Or Optimize Hardware, Including
              Contract Maintenance And Per-Incident Repair. Hardware Maintenance
              Deals With Repairing And Replacing Broken And Failing Computer
              Hardware.
            </p>
            <p>
              Hardware Support Also Includes Online And Technical
              Troubleshooting And Assistance For Setup, And All Fee-Based
              Hardware Warranty Upgrades.
            </p>
            <p>
              Sales Of All Parts Are Also Included, Exclusive Of Parts Bundled
              With Maintenance Contracts. This Segment Includes Only External
              Customer Spending On These Services.
            </p>
          </article>
          <div className="hs-intro-media-card">
            <img
              src={introIllustration}
              alt="Hardware Maintenance Services"
              className="hs-intro-media-img"
            />
          </div>
        </section>

        {/* Features Checklist 2-Column Section */}
        <section className="hs-features-section">
          <div className="hs-features-grid">
            <article className="hs-card">
              <h2 className="hs-card-title">
                Features of Netcom Hardware Maintenance Services:
              </h2>
              <ul className="hs-check-list">
                {FEATURES_LEFT.map((feat, idx) => (
                  <li key={idx} className="hs-check-item">
                    <span className="hs-check-icon" aria-hidden="true">
                      ✓
                    </span>
                    <p>{feat}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="hs-card">
              <ul className="hs-check-list">
                {FEATURES_RIGHT.map((feat, idx) => (
                  <li key={idx} className="hs-check-item">
                    <span className="hs-check-icon" aria-hidden="true">
                      ✓
                    </span>
                    <p>{feat}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Bottom Hardware Solutions Card */}
        <section className="hs-solutions-section">
          <h2 className="hs-solutions-title">
            Our Hardware Maintenance Services include Maintenance for Hardware
            Solutions:
          </h2>
          <div className="hs-solutions-card">
            <div>
              <h3>
                Our Hardware Maintenance Services include Maintenance for
                Hardware Solutions:
              </h3>
              <p>
                We offer preventive or remedial services to physically repair
                your hardware, as well as trouble shooting support and
                assistance, either online or via phone, to ensure you always have
                access to help.
              </p>
              <p>
                Both are offered on either a contract or per-incident basis, so
                your system will always be up and running.
              </p>
            </div>
            <div className="hs-solutions-media">
              <img
                src={solutionsIllustration}
                alt="Hardware Solutions"
                className="hs-solutions-img"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HardwareSupport;
