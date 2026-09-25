import { Link } from "react-router-dom";
import "./WebHostingServices.css";

import heroGraphic from "../../../assets/image/Service/Web Hosting/Web Hosting Services.png";
import introIllustration from "../../../assets/image/Service/Web Hosting/02.png";
import elasticComputeImg from "../../../assets/image/Service/Web Hosting/03.png";
import s3Img from "../../../assets/image/Service/Web Hosting/04.png";
import cloudStorageImg from "../../../assets/image/Service/Web Hosting/06.jpg";
import awsLogo from "../../../assets/image/Service/Web Application/aws.png";

const CLOUD_BENEFITS = [
  "Cloud Storage might be more secure",
  "Zero Maintenance",
  "Anywhere Access",
  "Automated Backups",
  "Pay As You Go Pricing",
  "Scalability",
  "Automate data protection",
];

const SERVER_MAINTENANCE_TASKS = [
  "Checking server log files",
  "Assessing hard disk space",
  "Examining folder permissions",
  "Monitoring network temperature applications",
  "Ensuring adequate redundancy of systems",
  "Examining security features",
  "Installing security software patches",
  "Reading server logs for security alerts or evidence of computer hacking attempts",
  "Updating antivirus software on all computers on the network",
  "Updating critical service packs and software updates",
];

const NETWORK_MAINTENANCE_TASKS = [
  "Troubleshooting network problems.",
  "Hardware and software installation/configuration.",
  "Monitoring and improving network performance.",
  "Planning for future network growth.",
  "Creating network documentation and keeping it up-to-date.",
  "Ensuring compliance with company policies.",
  "Ensuring compliance with legal regulations.",
  "Securing the network against all kind of threats.",
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
              Web Hosting is a service that allows organizations and individuals to post a website or web 
              page onto the Internet. It is the activity of providing storage space for a website that is 
              connected to the Internet. 
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
              Web Hosting is a service that allows organizations and individuals to post a 
              website or web page onto the Internet. It is the activity of providing storage 
              space for a website that is connected to the Internet. Websites are hosted, or 
              stored, on special computers called servers. When any client wants to view your 
              website, all they need to do is type your website address or domain into their 
              browser.
            </p>
            <p>
              Their computer will then connect to your server and your webpage(s) will be 
              delivered to them through the browser. You must have your own domain in order 
              to host webs. If you do not have a domain, we will help you purchase one for your 
              site.Netcom provide the latest technologies and services that needed for your 
              website or webpage to be viewed in the Internet.
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
              Amazon Web Services is a collection of web services that provides on-demand 
              cloud computing platforms and APIs to individuals, companies, and governments.
            </p>
            <p>
              Application Nexus has good hand-in experience in Amazon Web Services. We have 
              a dedicated team of developers that will help you to do all the configuration and 
              optimization of the AWS Cloud to meet your business needs. Also, we offer an 
              orderly step-by-step strategy for migrating applications to the cloud and 
              monitoring the performance of the cloud applications.
            </p>
          </div>
        </section>

        {/* Services Offered By Amazon */}
        <h2 className="wh-section-title">Services Offered By Amazon</h2>
        <section className="wh-feature-block wh-feature-block--reverse">
          <div className="wh-feature-content">
            <h3>Elastic Computing</h3>
            <p>
              An Amazon EC2 instance is a virtual server in Amazon's Elastic Compute Cloud (EC2) 
              for running applications on the Amazon Web Services (AWS) infrastructure.
            </p>
            <p>
              C2 encourages the scalable deployment of applications by providing a web service 
              through which a user can boot an Amazon Machine Image (AMI) to configure a 
              virtual machine, which Amazon calls an "instance", containing any software desired.
            </p>
            <p>

              A user can create, launch, and terminate server-instances as needed, paying by 
              the second for active servers – hence the term "elastic". EC2 provides users with 
              control over the geographical location of instances that allows for latency 
              optimization and high levels of redundancy.
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
              An Amazon S3 is a high-speed and low-cost service offered by Amazon Web 
              Services that provides object storage, archiving of data and application programs 
              through a web service interface.
            </p>
            <p>
              The need for storage for any business increases day by day without knowing 
              actual numbers which sometimes results in overused or underused of that 
              storage. AWS S3 is highly-scalable and it uses the same storage infrastructure 
              that Amazon.com uses.
            </p>
            <p>
              Amazon S3 offers four different storage classes that offer different levels of 
              durability, availability, and performance requirements.
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
              Cloud computing can also support remote web hosting. The definition of cloud computing services involves the connection of clients to vendors through wireless or IP connected networks. In cloud computing, a client sends data to a vendor through an abstract network trajectory called 'the cloud.' Data is then stored and maintained on remote servers owned and operated by the vendors.
            </p>
          </div>
          <div className="wh-why-card">
            <p>
              In general, cloud computing services that include web hosting can be an alternative to other traditional kinds of web hosting that are not based on cloud computing principles. One of the biggest differences could be called a 'single client' versus 'multitenant' approach.
            </p>
          </div>
          <div className="wh-why-card">
            <p>
              Cloud computing services that include web hosting are usually multitenant. That means that the files and data resources of multiple clients are housed on the same server. This provides flexibility and on-demand services for individual clients, so that providers can scale up or scale down delivery easily.By contrast, dedicated web hosting will involve a web hosting company serving only one client on any given server. This provides more individual security and a more focused approach to serving an individual customer.
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
              Cloud Data Management is the practice of storing a company's data on an offsite 
              server that is typically owned and overseen by a vendor who specialized in cloud 
              data hosting. Netcom Cloud Computing is now a standard way to access IT 
              infrastructure,software,hardware resources.They are Scalable,which means as your 
              company grows you can increase the subscription to the resources you need.
            </p>
            <p>
              When you adopt cloud services,you benefit from improved efficiency and lower 
              costs. Our Cloud Storage Management helps business to be more efficient. 
              Managing data in the cloud provides an automated backup strategy, professional 
              support, and ease of access from any location.
            </p>
          </div>
        </section>

        {/* Benefits in NETCOM Cloud Services */}
        <section className="wh-benefits-box">
          <h2>Benefits in NETCOM Cloud Services:</h2>
          <p>
            Netcom Cloud Services are designed around our customers and delivered on the platform that best meets their needs. Whether you are looking 
            to fix issues, develop a strategy, utilize managed services, or further modernize and secure your applications and infrastructure. Netcom is the 
            end-to-end services provider that can help.
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
