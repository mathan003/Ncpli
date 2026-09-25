import { Link } from "react-router-dom";
import "./CloudMaintenance.css";

import heroBannerImg from "../../../assets/image/Service/cloud maintenance/bannar.png";
import cloudOverviewImg from "../../../assets/image/Service/cloud maintenance/cloud Maintenance.png";
import proactiveMonitoringImg from "../../../assets/image/Service/cloud maintenance/Proactive Monitoring.png";
import performanceOptImg from "../../../assets/image/Service/cloud maintenance/Performance Optimization.png";
import securityComplianceImg from "../../../assets/image/Service/cloud maintenance/Security & Compliance.png";
import backupDisasterImg from "../../../assets/image/Service/cloud maintenance/Backup & Disaster Recovery.png";
import whyChooseUsImg from "../../../assets/image/Service/cloud maintenance/WHY CHOOSE US.png";

const SERVICES_CARDS = [
  {
    id: "proactive-monitoring",
    image: proactiveMonitoringImg,
    title: "Proactive Monitoring",
    description:
      "We track your systems 24/7 to detect and resolve issues before they impact your business.",
  },
  {
    id: "performance-optimization",
    image: performanceOptImg,
    title: "Performance Optimization",
    description:
      "Keep your cloud running efficiently with regular updates, tuning and resource management.",
  },
  {
    id: "security-compliance",
    image: securityComplianceImg,
    title: "Security & Compliance",
    description:
      "We protect your data and ensure compliance with industry standards and best practices.",
  },
  {
    id: "backup-recovery",
    image: backupDisasterImg,
    title: "Backup & Disaster Recovery",
    description:
      "Be prepared for the unexpected with reliable backup solutions and fast recovery plans.",
  },
];

function CloudMaintenance() {
  return (
    <div className="cm-page">
      {/* ================= HERO SECTION ================= */}
      <section
        className="cm-hero"
        style={{ backgroundImage: `url(${heroBannerImg})` }}
      >
        <div className="cm-hero-container">
          <div className="cm-hero-content">
            <span className="cm-badge">OUR SERVICES</span>
            <h1 className="cm-hero-title">
              Cloud Maintenance
              <span className="cm-hero-subtitle">for a Smoother Tomorrow</span>
            </h1>
            <p className="cm-hero-desc">
              We help you keep your cloud environment secure, optimized and
              running smoothly so you can focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="cm-breadcrumb-wrapper">
        <nav className="cm-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cm-breadcrumb-separator">›</span>
          <Link to="/service">Services</Link>
          <span className="cm-breadcrumb-separator">›</span>
          <span className="cm-breadcrumb-current">
            Cloud Maintenance Services
          </span>
        </nav>
      </div>

      {/* ================= MAIN SERVICES CONTENT ================= */}
      <main className="cm-container">
        {/* Section Header */}
        <header className="cm-section-header">
          <h2 className="cm-section-title">Our Cloud Maintenance Services</h2>
          <p className="cm-section-subtitle">
            From monitoring to troubleshooting, we ensure your cloud
            infrastructure is always up-to-date, secure and performing at its
            best.
          </p>
        </header>

        {/* 2-Column Split: Definition & 3D Graphic */}
        <section className="cm-overview-grid">
          <article className="cm-overview-card">
            <h3 className="cm-overview-title">Cloud maintenance</h3>
            <div className="cm-overview-text">
              <p>
                Cloud maintenance is the process of managing and maintaining
                cloud-based systems and services. It includes regular monitoring,
                updates, security checks, and performance optimization. Proper
                maintenance helps keep cloud applications and data safe from
                security threats. It also ensures that systems run smoothly with
                minimal downtime. Cloud maintenance involves managing storage,
                servers, databases, backups, and network resources. Regular
                updates help improve system performance and reliability.
                Overall, cloud maintenance ensures that cloud services remain
                secure, stable, efficient, and available to users.
              </p>
            </div>
          </article>
          <div className="cm-overview-media">
            <img
              src={cloudOverviewImg}
              alt="Cloud Maintenance Infrastructure"
              className="cm-overview-img"
            />
          </div>
        </section>

        {/* 4 Feature Cards Grid */}
        <section className="cm-features-grid">
          {SERVICES_CARDS.map((card) => (
            <article key={card.id} className="cm-feature-card">
              <div className="cm-feature-media">
                <img
                  src={card.image}
                  alt={card.title}
                  className="cm-feature-img"
                />
              </div>
              <h3 className="cm-feature-title">{card.title}</h3>
              <p className="cm-feature-desc">{card.description}</p>
            </article>
          ))}
        </section>

        {/* Why Choose Us Bottom Card */}
        <section className="cm-why-choose-us">
          <div className="cm-why-content">
            <span className="cm-why-eyebrow">WHY CHOOSE US</span>
            <h3 className="cm-why-title">
              Reliable Cloud Support for Your Business
            </h3>
            <p className="cm-why-desc">
              We combine technical expertise, proactive monitoring and a
              customer-first approach to keep your cloud environment secure,
              efficient and always available.
            </p>
            <p className="cm-why-desc">
              We ensure your cloud infrastructure remains secure reliable and
              high-performing so your business can grow without interruption.
            </p>
          </div>
          <div className="cm-why-media">
            <img
              src={whyChooseUsImg}
              alt="Reliable Cloud Support for Your Business"
              className="cm-why-img"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default CloudMaintenance;

