import { Link } from "react-router-dom";
import "./WebHostingServices.css";

import heroGraphic from "../../../assets/image/Service/Web Hosting/Web Hosting Services.png";
import introIllustration from "../../../assets/image/Service/Web Hosting/02.png";
import elasticComputeImg from "../../../assets/image/Service/Web Hosting/03.png";
import s3Img from "../../../assets/image/Service/Web Hosting/04.png";
import cloudStorageImg from "../../../assets/image/Service/Web Hosting/06.jpg";
import awsLogo from "../../../assets/image/Service/Web Application/aws.png";

const CLOUD_BENEFITS = [
  "High Reliability & Redundancy",
  "Cost Optimization",
  "Proactive Security",
  "Automated Backups",
  "24/7 Technical Support",
  "Seamless Scalability",
];

const SERVER_MAINTENANCE_TASKS = [
  "Server Setup and Configuration",
  "Operating System Patching",
  "Regular Data Backup Verification",
  "Hardware Health and Diagnostics",
  "Firewall and Port Security Audits",
  "Antivirus & Malware Protection",
  "Proactive Performance Monitoring",
  "24/7 Rapid Incident Resolution",
];

const NETWORK_MAINTENANCE_TASKS = [
  "Router and Switch Configuration",
  "Network Traffic and Bandwidth Monitoring",
  "LAN/WAN Cabling and Infrastructure",
  "VPN & Remote Access Solutions",
  "Wireless Network Optimization",
  "Disaster Recovery Planning",
  "Quality of Service (QoS) Implementation",
  "Regular Security and Firmware Updates",
];

function WebHostingServices() {
  return (
    <div className="wh-page">
      {/* ================= HERO SECTION ================= */}
      <section className="wh-hero">
        <div className="wh-hero__container">
          <div className="wh-hero__content">
            <span className="wh-badge">OUR SERVICES</span>
            <h1>Web Hosting Services</h1>
            <p>
              Web hosting allows organizations and individuals to post a website
              or web page onto the Internet. A web hosting service provider is a
              business that provides the technologies and services needed for the
              website or webpage to be viewed in the Internet.
            </p>
          </div>
          <div className="wh-hero__media">
            <img
              src={heroGraphic}
              alt="Web Hosting Services"
              className="wh-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="wh-breadcrumb-wrapper">
        <nav className="wh-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="wh-breadcrumb-separator">›</span>
          <Link to="/">Services</Link>
          <span className="wh-breadcrumb-separator">›</span>
          <span className="wh-breadcrumb-current">Web Hosting Services</span>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="wh-container">
        {/* Intro 2-Column Section */}
        <section className="wh-intro-grid">
          <article className="wh-card wh-intro-card">
            <h2>Web Hosting Services</h2>
            <p>
              Websites Are Hosted Or Stored On Special Computers Called Servers.
              When Internet Users Want To View Your Website, All They Need To Do
              Is Type Your Website Address Or Domain Into Their Browser. Their
              Computer Will Then Connect To Your Server And Your Webpages Will Be
              Delivered To Them Through The Browser.
            </p>
            <p>
              Most Hosting Companies Require That You Own Your Domain In Order To
              Host With Them. If You Do Not Have A Domain, The Hosting Companies
              Will Help You Purchase One.
            </p>
          </article>
          <div className="wh-intro-media-card">
            <img
              src={introIllustration}
              alt="Web Hosting Services"
              className="wh-intro-media-img"
            />
          </div>
        </section>

        {/* AWS Development Block */}
        <h2 className="wh-section-title">AWS Development</h2>
        <section className="wh-feature-block">
          <div className="wh-feature-media">
            <div className="wh-aws-banner">
              <img src={awsLogo} alt="Amazon Web Services" />
            </div>
          </div>
          <div className="wh-feature-content">
            <h3>Amazon Web Services</h3>
            <p>
              To meet the complex and dynamic requirements of businesses,
              Netcom specializes in providing full-suite AWS cloud consulting
              and development services.
            </p>
            <p>
              We assist clients from varied business verticals to adopt the cloud
              for agility, lower costs, and enhanced performance. Netcom helps
              build and modernize applications using cloud-native architectures
              that deliver high availability and elastic scaling.
            </p>
          </div>
        </section>

        {/* Services Offered By Amazon */}
        <h2 className="wh-section-title">Services Offered By Amazon</h2>
        <section className="wh-feature-block wh-feature-block--reverse">
          <div className="wh-feature-content">
            <h3>Elastic Computing</h3>
            <p>
              Amazon Elastic Compute Cloud (Amazon EC2) is a web service that
              provides secure, resizable compute capacity in the cloud. It is
              designed to make web-scale cloud computing easier for developers.
            </p>
            <p>
              Amazon EC2’s simple web service interface allows you to obtain and
              configure capacity with minimal friction. It provides you with
              complete control of your computing resources and lets you run on
              Amazon’s proven computing environment.
            </p>
          </div>
          <div className="wh-feature-media">
            <img
              src={elasticComputeImg}
              alt="Elastic Computing"
            />
          </div>
        </section>

        {/* Amazon S3 Block */}
        <h2 className="wh-section-title">Amazon S3</h2>
        <section className="wh-feature-block">
          <div className="wh-feature-media">
            <img src={s3Img} alt="Amazon S3" />
          </div>
          <div className="wh-feature-content">
            <h3>Amazon S3</h3>
            <p>
              Amazon Simple Storage Service (Amazon S3) is an object storage
              service that offers industry-leading scalability, data availability,
              security, and performance.
            </p>
            <p>
              Customers of all sizes and industries can use Amazon S3 to store
              and protect any amount of data for a range of use cases, such as
              data lakes, websites, mobile applications, backup and restore,
              archive, enterprise applications, IoT devices, and big data
              analytics.
            </p>
          </div>
        </section>

        {/* Why dedicated Web Hosting 3-card block */}
        <h2 className="wh-section-title">
          Why dedicated Web Hosting when Cloud Computing exist?
        </h2>
        <section className="wh-three-cards">
          <div className="wh-why-card">
            <p>
              Cost-Effective Control: Dedicated web hosting offers predictable
              monthly costs and fixed pricing, ideal for established websites
              with consistent traffic and resource demands.
            </p>
          </div>
          <div className="wh-why-card">
            <p>
              Tailored Configuration: Full root access and customized server
              configurations give you complete freedom to tailor server-level
              software, libraries, and security policies.
            </p>
          </div>
          <div className="wh-why-card">
            <p>
              Dedicated Performance: High processing speeds without resource
              contention. You never share CPU, RAM, or bandwidth with other
              users, ensuring sustained performance.
            </p>
          </div>
        </section>

        {/* Cloud Storage Management Block */}
        <h2 className="wh-section-title">Cloud Storage Management</h2>
        <section className="wh-feature-block">
          <div className="wh-feature-media">
            <img src={cloudStorageImg} alt="Cloud Storage Management" />
          </div>
          <div className="wh-feature-content">
            <h3>Cloud Storage Management</h3>
            <p>
              Cloud Storage Management involves managing data storage across
              remote cloud servers, ensuring data integrity, encryption,
              automated backups, and seamless scalability for modern enterprise
              workloads.
            </p>
          </div>
        </section>

        {/* Benefits in NETCOM Cloud Services */}
        <section className="wh-benefits-box">
          <h2>Benefits in NETCOM Cloud Services:</h2>
          <p>
            Netcom Cloud Services deliver an agile, high-uptime cloud ecosystem
            with end-to-end security, continuous performance monitoring, and
            proactive technical assistance.
          </p>
          <ul className="wh-arrows-list">
            {CLOUD_BENEFITS.map((b) => (
              <li key={b} className="wh-arrow-item">
                <span aria-hidden="true">→</span>
                <p>{b}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom 2 Comparison Cards */}
        <section className="wh-bottom-cards">
          <article className="wh-card wh-list-card">
            <h3>Netcom Server Maintenance Services</h3>
            <ul className="wh-check-list">
              {SERVER_MAINTENANCE_TASKS.map((task) => (
                <li key={task} className="wh-check-item">
                  <span aria-hidden="true">✓</span>
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="wh-card wh-list-card">
            <h3>Netcom Network Maintenance Services</h3>
            <ul className="wh-check-list">
              {NETWORK_MAINTENANCE_TASKS.map((task) => (
                <li key={task} className="wh-check-item">
                  <span aria-hidden="true">→</span>
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default WebHostingServices;
