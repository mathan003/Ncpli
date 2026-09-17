import { Link } from "react-router-dom";
import "./GraphicDesign.css";

import heroGraphic from "../../../assets/image/Service/grapicsdesign/grapicsdesign.png";
import introIllustration from "../../../assets/image/Service/grapicsdesign/design Makes.jpg";

import animIcon from "../../../assets/image/Service/grapicsdesign/2D and 3D Animations.png";
import brochureIcon from "../../../assets/image/Service/grapicsdesign/Brochure.png";
import flyerIcon from "../../../assets/image/Service/grapicsdesign/Flyer.png";
import businessCardIcon from "../../../assets/image/Service/grapicsdesign/Business Card.png";
import socialMediaIcon from "../../../assets/image/Service/grapicsdesign/Social Media Posters.png";
import promotionalIcon from "../../../assets/image/Service/grapicsdesign/Promotional Posters.png";
import menuCardIcon from "../../../assets/image/Service/grapicsdesign/Menu Card Designs.png";

const TOP_SERVICES = [
  { label: "2D and 3D Animations", icon: animIcon },
  { label: "Brochure", icon: brochureIcon },
  { label: "Flyer", icon: flyerIcon },
  { label: "Business Card", icon: businessCardIcon },
];

const BOTTOM_SERVICES = [
  { label: "Social Media Posters", icon: socialMediaIcon },
  { label: "Promotional Posters", icon: promotionalIcon },
  { label: "Menu Card Designs", icon: menuCardIcon },
];

function GraphicDesign() {
  return (
    <div className="gd-page">
      {/* ================= HERO SECTION ================= */}
      <section className="gd-hero">
        <div className="gd-hero__container">
          <div className="gd-hero__content">
            <span className="gd-badge">OUR SERVICES</span>
            <h1>Graphic Design</h1>
            <p>
              Creative design solutions that communicate your ideas, build your
              brand and make a lasting impact.
            </p>
          </div>
          <div className="gd-hero__media">
            <img
              src={heroGraphic}
              alt="Graphic Design Services"
              className="gd-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="gd-breadcrumb-wrapper">
        <nav className="gd-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="gd-breadcrumb-separator">›</span>
          <Link to="/service">Services</Link>
          <span className="gd-breadcrumb-separator">›</span>
          <span className="gd-breadcrumb-current">Graphic Design</span>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="gd-container">
        {/* Intro 2-Column Section */}
        <section className="gd-intro-grid">
          <article className="gd-card gd-intro-card">
            <h2 className="gd-card-title">Design Makes Greater</h2>
            <p>
              Netcom Computers Is A Professional 2D And 3D Design Service
              Provider In Tirunelveli, India. We Create Visually Stunning Designs
              That Help Businesses Communicate Effectively, Build Strong Brand
              Identity And Connect With Their Audience. From Digital Graphics To
              Print Media, We Bring Creativity And Strategy Together To Deliver
              Impactful Designs.
            </p>
          </article>
          <div className="gd-intro-media-card">
            <img
              src={introIllustration}
              alt="Design Makes Greater"
              className="gd-intro-media-img"
            />
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="gd-services-section">
          <h2 className="gd-services-title">Our Graphic Design Servies are:</h2>

          {/* Row 1: 4 Cards */}
          <div className="gd-services-row-top">
            {TOP_SERVICES.map((item) => (
              <div key={item.label} className="gd-service-card">
                <div className="gd-service-icon-box">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </div>
                <span className="gd-service-label">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Row 2: 3 Cards Centered */}
          <div className="gd-services-row-bottom">
            {BOTTOM_SERVICES.map((item) => (
              <div key={item.label} className="gd-service-card">
                <div className="gd-service-icon-box">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </div>
                <span className="gd-service-label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default GraphicDesign;
