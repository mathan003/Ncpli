import { useState } from "react";
import { Link } from "react-router-dom";
import "./WebApplication.css";

import heroGraphic from "../../../assets/image/Service/Web Application/Web Application.png";
import introIllustration from "../../../assets/image/Service/Web Application/Web Application2.png";

import frontendIcon from "../../../assets/image/Service/Web Application/frontend.png";
import testingIcon from "../../../assets/image/Service/Web Application/Testing.png";
import responsiveIcon from "../../../assets/image/Service/Web Application/responsive.png";
import uiuxIcon from "../../../assets/image/Service/Web Application/UI and UX.png";
import cmsIcon from "../../../assets/image/Service/Web Application/cms.png";
import jsIcon from "../../../assets/image/Service/Web Application/js.png";

import step1Icon from "../../../assets/image/Service/Web Application/01.png";
import step2Icon from "../../../assets/image/Service/Web Application/02.png";
import step3Icon from "../../../assets/image/Service/Web Application/03.png";
import step4Icon from "../../../assets/image/Service/Web Application/04.png";
import step5Icon from "../../../assets/image/Service/Web Application/05.png";
import step6Icon from "../../../assets/image/Service/Web Application/06.png";

import htmlLogo from "../../../assets/image/Service/Web Application/htnl.png";
import cssLogo from "../../../assets/image/Service/Web Application/css.png";
import jsLogo from "../../../assets/image/Service/Web Application/jslogo.png";
import reactLogo from "../../../assets/image/Service/Web Application/react.png";
import muiLogo from "../../../assets/image/Service/Web Application/mui.png";
import nodeLogo from "../../../assets/image/Service/Web Application/nodejs.png";
import expressLogo from "../../../assets/image/Service/Web Application/ex.png";
import awsLogo from "../../../assets/image/Service/Web Application/aws.png";
import mongoLogo from "../../../assets/image/Service/Web Application/mango db.png";

const SERVICES_LIST = [
  { label: "Front End Architecture & Design", icon: frontendIcon },
  { label: "Testing & Performance Tuning", icon: testingIcon },
  { label: "Responsive Design", icon: responsiveIcon },
  { label: "UI / UX Development", icon: uiuxIcon },
  { label: "CMS & eCommerce Theme Development", icon: cmsIcon },
  { label: "Custom JavaScript Solutions", icon: jsIcon },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Analysis",
    icon: step1Icon,
    desc: "Detailed business and requirements analysis to determine scope.",
  },
  {
    step: "02",
    title: "Design",
    icon: step2Icon,
    desc: "Wireframes, prototypes, and user-centric UI/UX architectures.",
  },
  {
    step: "03",
    title: "Responsive Development",
    icon: step3Icon,
    desc: "Clean, modular code built for mobile and desktop screens.",
  },
  {
    step: "04",
    title: "Testing & Bug Fixes",
    icon: step4Icon,
    desc: "Thorough cross-browser validation and performance tuning.",
  },
  {
    step: "05",
    title: "Deployment",
    icon: step5Icon,
    desc: "Seamless production rollout and cloud server integration.",
  },
  {
    step: "06",
    title: "Maintenance & Support",
    icon: step6Icon,
    desc: "Ongoing monitoring, system updates, and reliable support.",
  },
];

const STACK_DATA = {
  languages: [
    { name: "HTML5", logo: htmlLogo },
    { name: "CSS3", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
  ],
  "front-end": [
    { name: "React", logo: reactLogo },
    { name: "Material UI", logo: muiLogo },
  ],
  "back-end": [
    { name: "Node.js", logo: nodeLogo },
    { name: "Express", logo: expressLogo },
  ],
  database: [
    { name: "AWS", logo: awsLogo },
    { name: "MongoDB", logo: mongoLogo },
  ],
};

const TABS = [
  { id: "languages", label: "Languages" },
  { id: "front-end", label: "Front-end" },
  { id: "back-end", label: "Back-end" },
  { id: "database", label: "Database" },
];

function WebApplication() {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <div className="wa-page">
      {/* ================= HERO SECTION ================= */}
      <section className="wa-hero">
        <div className="wa-hero__container">
          <div className="wa-hero__content">
            <span className="wa-badge">OUR SERVICES</span>
            <h1>Web Application Development</h1>
            <p>
              We build secure, scalable and high-performance web applications
              that drive your business forward.
            </p>
          </div>
          <div className="wa-hero__media">
            <img
              src={heroGraphic}
              alt="Web Application Development"
              className="wa-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="wa-breadcrumb-wrapper">
        <nav className="wa-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="wa-breadcrumb-separator">›</span>
          <Link to="/service">Services</Link>
          <span className="wa-breadcrumb-separator">›</span>
          <span className="wa-breadcrumb-current">
            Web Application Development
          </span>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="wa-container">
        {/* Intro 2-Column Section */}
        <section className="wa-intro-grid">
          <article className="wa-card wa-intro-card">
            <h2 className="wa-card-title">Web Application Development</h2>
            <p>
              Web Application Development Is The Creation Of Application Program
              That Reside On Remote Servers And Are Delivered To The User&apos;s
              Device Over The Internet. Netcom Development Process Will
              Typically Have A Short Development Life-Cycle Lead By A Small And
              Efficient Development Team.
            </p>
            <p>
              Our Web Development Company Has Been Developing Web Applications
              For The Custom Business Requirements Of All Our Esteemed Clients.
              Our Developer&apos;s Skill &amp; Experience And Cutting-Edge
              Technology Will Deliver You With Robust Web Applications.
            </p>
            <p>
              As Leading Web Development Company, Delivering Quality
              Applications Is Always Our Priority. Discover Our Wide Range Of
              Services And Work With Us!
            </p>
          </article>
          <div className="wa-intro-media-card">
            <img
              src={introIllustration}
              alt="Web Application Development Process"
              className="wa-intro-media-img"
            />
          </div>
        </section>

        {/* 2-Column Comparison Section */}
        <section className="wa-columns-grid">
          {/* Left: Web App for your Business */}
          <article className="wa-card">
            <h2 className="wa-card-title">
              Web Application for your Business
            </h2>
            <ul className="wa-arrow-list">
              <li className="wa-arrow-item">
                <span className="wa-arrow-icon" aria-hidden="true">
                  →
                </span>
                <p>
                  Businesses From All Corners Of The World, Offering A Huge
                  Range Of Products, Have Begun Migrating From The Physical World
                  Of Handing Out Leaflets, Printing Advertisements, And Hanging
                  Billboards To The Digital Realm.
                </p>
              </li>
              <li className="wa-arrow-item">
                <span className="wa-arrow-icon" aria-hidden="true">
                  →
                </span>
                <p>
                  The Business World Is Evolving Every Single Day, Thus
                  Increasing Your Competitors And – Making It Hard To Sustain
                  Like Yesterday. So The Only Solution To Standout In The Crowd
                  Is To Attracting Clients And New Orders By Showcasing Your Work
                  Style, Products And Skills In The Right.
                </p>
              </li>
            </ul>
          </article>

          {/* Right: Why to approach Netcom ? */}
          <article className="wa-card">
            <h2 className="wa-card-title">Why to approach Netcom ?</h2>
            <ul className="wa-check-list">
              <li className="wa-check-item">
                <span className="wa-check-icon" aria-hidden="true">
                  ✓
                </span>
                <p>
                  NETCOM Will Help You In Developing Your Company Web
                  Application That Would Help Increasing The Pace And Quality Of
                  Your Business Operations.
                </p>
              </li>
              <li className="wa-check-item">
                <span className="wa-check-icon" aria-hidden="true">
                  ✓
                </span>
                <p>
                  We Will Create And Customize Your Website Highlighting All The
                  Services And Features Of Your Business Niche In A Cost Effective
                  Way.
                </p>
              </li>
              <li className="wa-check-item">
                <span className="wa-check-icon" aria-hidden="true">
                  ✓
                </span>
                <p>
                  Our Strength Is Our Small And Highly Experienced Team Of Web
                  Development Pros, Who Are In Turn Complemented By Our
                  Experience.
                </p>
              </li>
            </ul>
          </article>
        </section>

        {/* Services Grid Section */}
        <section className="wa-services-section">
          <h2 className="wa-section-title">
            Web Application Development Services
          </h2>
          <div className="wa-services-grid">
            {SERVICES_LIST.map((item) => (
              <div key={item.label} className="wa-service-card">
                <div className="wa-service-icon-box">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </div>
                <span className="wa-service-label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Process Section */}
        <section className="wa-process-section">
          <h2 className="wa-section-title">How We Work</h2>
          <div className="wa-process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="wa-process-item">
                <img
                  src={step.icon}
                  alt=""
                  aria-hidden="true"
                  className="wa-process-icon"
                />
                <span className="wa-process-badge">{step.step}</span>
                <h3 className="wa-process-title">{step.title}</h3>
                <p className="wa-process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Interactive Tabs Section */}
        <section className="wa-stack-section">
          <h2 className="wa-section-title">
            Web Application Development Stack
          </h2>
          <div className="wa-tabs-bar" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`wa-tab-btn ${
                  activeTab === tab.id ? "is-active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="wa-stack-display" role="tabpanel">
            {STACK_DATA[activeTab].map((tech) => (
              <div key={tech.name} className="wa-stack-logo-item">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="wa-stack-logo-img"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default WebApplication;
