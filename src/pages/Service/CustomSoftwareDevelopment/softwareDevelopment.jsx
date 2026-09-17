import { Link } from "react-router-dom";
import "./softwareDevelopment.css";

import heroGraphic from "../../../assets/image/Service/Custom Software/Custom Software.png";
import introIllustration from "../../../assets/image/Service/Custom Software/02.png";
import efficiencyIcon from "../../../assets/image/Service/Custom Software/Efficiency.png";
import scalabilityIcon from "../../../assets/image/Service/Custom Software/Scalability.png";
import lowerCostsIcon from "../../../assets/image/Service/Custom Software/Lower Integration Costs.png";
import profitabilityIcon from "../../../assets/image/Service/Custom Software/Profitability.png";
import independenceIcon from "../../../assets/image/Service/Custom Software/Independence.png";
import userFriendlyIcon from "../../../assets/image/Service/Custom Software/User-Friendly.svg";

const WHY_CUSTOM_POINTS = [
  "Custom Software is specifically designed for the company or a business, according to the company's way of doing business or a work.",
  "While Off-The-Shelf Software is readily available and not customized. Hence it often falls short of meeting according to specific needs as there will be a lot of unused features in this software.",
  "It is where we need custom software development services and to obtain such services, require a company to develop software applications that cater to its sole needs and requirements.",
  "In short, Custom Software is adapted to meet your business needs, whereas Off-The-Shelf Software requires your business to adapt to its capabilities.",
];

const BENEFITS = [
  { label: "Efficiency", icon: efficiencyIcon },
  { label: "Scalability", icon: scalabilityIcon },
  { label: "Lower Integration Costs", icon: lowerCostsIcon },
  { label: "Profitability", icon: profitabilityIcon },
  { label: "User-Friendly", icon: userFriendlyIcon },
  { label: "Independence", icon: independenceIcon },
];

function CustomSoftwareDevelopment() {
  return (
    <div className="cs-page">
      {/* ================= HERO SECTION ================= */}
      <section className="cs-hero">
        <div className="cs-hero__container">
          <div className="cs-hero__content">
            <span className="cs-badge">OUR SERVICES</span>
            <h1>Custom Software Development</h1>
            <p>
              Custom software development is the process of designing, creating,
              deploying and maintaining software for a specific set of users,
              functions or organizations.
            </p>
          </div>
          <div className="cs-hero__media">
            <img
              src={heroGraphic}
              alt="Custom Software Development"
              className="cs-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/">Services</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">
            Custom Software Development
          </span>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="cs-container">
        {/* Intro 2-Column Section */}
        <section className="cs-intro-grid">
          <article className="cs-card cs-intro-card">
            <h2 className="cs-card-title">Custom Software Development</h2>
            <p>
              Our Skilled Specialists Know The Game Of Business And Deliver
              Successful Solutions That Accord With All The Specified Requirements
              While Invariably Staying Within Time And Budget Limits. Along With
              Full-Cycle Custom Software Development, We Provide Software
              Maintenance And Platform-Based Customization.
            </p>
            <p>
              In Contrast To The Conventional Method Of Using Commercial
              Off-The-Shelf Software (COTS), Custom Software Development Aims At A
              Narrowly Defined Set Of Requirements. Our Team Of Excellent And
              Proficient Software Developers Will Customize, Create And Test Your
              Software From Start To Finish.
            </p>
          </article>
          <div className="cs-intro-media-card">
            <img
              src={introIllustration}
              alt="Custom Software Development Process"
              className="cs-intro-media-img"
            />
          </div>
        </section>

        {/* Why vs Deliver 2-Column Section */}
        <section className="cs-columns-grid">
          {/* Left: Why Custom Software */}
          <article className="cs-card">
            <h2 className="cs-card-title">Why Custom Software and not COTS?</h2>
            <ul className="cs-arrow-list">
              {WHY_CUSTOM_POINTS.map((point, idx) => (
                <li key={idx} className="cs-arrow-item">
                  <span className="cs-arrow-icon" aria-hidden="true">
                    →
                  </span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* Right: Custom Software We Deliver */}
          <article className="cs-card">
            <h2 className="cs-card-title">Custom Software we deliver</h2>

            <h3 className="cs-deliver-subheading">
              1. Corporate &amp; Inter-Organizational Software Systems
            </h3>
            <ul className="cs-check-list">
              <li className="cs-check-item">
                <span className="cs-check-icon" aria-hidden="true">
                  ✓
                </span>
                <p>
                  We Build Software That Automates Enterprise-Wide Processes And
                  Covers Interdepartmental Information Flows, And May Also Include
                  Transactions With Customers, Vendors And Partners.
                </p>
              </li>
              <li className="cs-check-item">
                <span className="cs-check-icon" aria-hidden="true">
                  ✓
                </span>
                <p>
                  For Instance In Educational Institutions, Generic Software
                  Called As EMIS (Educational Management Information System) Is
                  Used For Their Management Functions. EMIS Aims To Collect,
                  Integrate, Process, Maintain And Disseminate Data And
                  Information To Support Decision-Making, Policy-Analysis And
                  Formulation, Planning, Monitoring And Management At All Levels
                  Of An Education System.
                </p>
              </li>
            </ul>

            <h3 className="cs-deliver-subheading cs-deliver-subheading--secondary">
              2. Departmental Software
            </h3>
            <ul className="cs-check-list">
              <li className="cs-check-item">
                <span className="cs-check-icon" aria-hidden="true">
                  ✓
                </span>
                <p>
                  We Build Software With Features That Are Unmet By Mass-Market
                  Commercial Or Free Software To Cover The Needs Of A Particular
                  Department Within An Organization. We Can Build Any Customized
                  Software Upon Your Request For Easing The Day-To-Day Operations
                  Of Your Crucial Departments.
                </p>
              </li>
            </ul>
          </article>
        </section>

        {/* Benefits Section */}
        <section className="cs-benefits-section">
          <h2 className="cs-benefits-title">
            Overall Benefits of Netcom Custom Software Development
          </h2>
          <div className="cs-benefits-grid">
            {BENEFITS.map((item) => (
              <div key={item.label} className="cs-benefit-card">
                <div className="cs-benefit-icon-box">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </div>
                <span className="cs-benefit-label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CustomSoftwareDevelopment;
