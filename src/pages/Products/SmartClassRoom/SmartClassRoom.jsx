import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SmartClassRoom.css";

import contactUsImg from "../../../assets/image/product/contact us.png";
import smartClassHardwaresImg from "../../../assets/image/product/Smart Class Room/hardware.png";
import smartClassPhoto1 from "../../../assets/image/product/Smart Class Room/passion of learing1.png";
import smartClassPhoto2 from "../../../assets/image/product/Smart Class Room/Methodology.png";
import smartClassPhoto3 from "../../../assets/image/product/Smart Class Room/passion of learing2.png";

function SmartClassRoom() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "Smart Class Room",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Demo Request: Smart Class Room`);
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProduct: Smart Class Room\n\nMessage:\n${demoFormData.message}`
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
          <span className="cs-breadcrumb-current">Smart Class Room</span>
        </nav>
      </div>

      <main className="prod-container">
        {/* Top Intro Section */}
        <div className="prod-intro-split">
          <div className="prod-intro-text">
            <p>
              <strong>Netcom Classroom</strong> is a computer-enabled classroom where the teacher can access students' personal computers and manage teaching activities like distributing lessons, administering tests, surveying students, controlling students' applications and managing internet access.
            </p>
            <p>
              Smart Classroom combines proprietary interactive learning software with audio-visual equipment and digital courseware to create a comprehensive digital classroom environment.
            </p>
            <p>
              Smart Classroom is a digital initiative of Netcom which is rapidly transforming the way teachers teach and students learn in schools with innovative and meaningful use of technology. Powered by the largest repository of digital content mapped to various curriculum, Smart Class has brought about a complete transformation in classrooms.
            </p>
          </div>

          <div className="prod-intro-media">
            <div style={{ width: "100%", maxWidth: "460px" }}>
              <h4 style={{ color: "#0e4a34", fontSize: "1.15rem", fontWeight: 700, margin: "0 0 12px", textAlign: "center" }}>
                Smart Classroom Teaching Video
              </h4>
              <div className="prod-video-placeholder" onClick={() => setVideoModalOpen(true)} title="Click to Watch Teaching Video">
                <div className="prod-yt-badge">
                  <span className="prod-yt-icon"><span className="prod-yt-triangle"></span></span>
                  <span>YouTube</span>
                </div>
                <span className="prod-video-caption">Watch Smart Classroom in Action</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <h2 className="prod-section-title">Methodology</h2>
        <div className="prod-intro-split" style={{ alignItems: "center", marginBottom: "40px" }}>
          <div className="prod-intro-text">
            <p>
              Smart Class was founded by experienced educators who recognize the unique needs of schools. Classroom management is a cornerstone of teaching and learning. It facilitates meaningful teacher-student collaboration and keeps students engaged while keeping teachers in control of modern classroom technology.
            </p>
            <p>
              Smart Class software combines teaching tools and automated administrative tasks to make classroom management simpler and more intuitive for educators. Teachers can seamlessly broadcast their screens to the entire class or specific students, share files, and administer tests all from a single, centralized dashboard.
            </p>
            <p>
              Teachers can monitor student activity in real time with thumbnail views of each student's screen, ensuring everyone stays focused on the lesson. With one click, teachers can mute student audio, blank screens, lock input devices, and restrict access to specific applications and websites to eliminate distractions and maintain an engaging learning environment.
            </p>
          </div>

          <div className="prod-intro-media">
            <div className="prod-preview-card" style={{ maxWidth: "440px" }}>
              <img src={smartClassPhoto2} alt="Teacher demonstrating interactive digital whiteboard" />
            </div>
          </div>
        </div>

        {/* Two Side-by-Side Cards (Projects & Highlights) */}
        <div className="smartclass-dual-cards">
          <div className="smartclass-box-card">
            <h3>Our Smart Classroom Projects</h3>
            <p>
              In collaboration with the Government of Tamil Nadu, Netcom implemented Smart Classroom projects across thousands of government schools, equipping classrooms with modern infrastructure, interactive digital whiteboards, audio systems, and teacher training to ensure effective technology integration in rural and urban schools alike.
            </p>
            <ul className="prod-check-list">
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>Interactive Whiteboard System (Multimedia Projector, Screen, Interactive Sensor)</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>2 KVA Online UPS with Battery Bank for uninterrupted learning sessions</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>Teacher Workstation with high performance CPU and dual OS</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>Pre-loaded K-12 Animated Digital Content in English and Tamil medium mapped to Samacheer Kalvi</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>Document Camera Scanner for real-time text and object display</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>Complete classroom cabling, mounting kit, and audio amplification setup</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>Comprehensive teacher enablement and orientation programs conducted on-site</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>Networked Digital Class Server System with 10,000+ curriculum-aligned resources and virtual lab tools for Science and Maths</span>
              </li>
            </ul>
          </div>

          <div className="smartclass-box-card">
            <h3>Highlights of Netcom Smart Class Room</h3>
            <div className="prod-arrow-list" style={{ margin: "16px 0 0", gap: "14px" }}>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>Netcom smart classroom includes digital content library for classes 1st to 12th covering all major subjects in English and regional languages.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>Interactive software designed specifically for school teachers with easy-to-use tools for drawing, writing, highlighting, and dynamic presentation of lessons.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>Built-in assessment engine allowing teachers to conduct formative assessments through quick polls, multiple choice questions, and interactive quizzes with instant performance analytics.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>Compatible with various input devices including interactive slates, document cameras, smart phones, and tablet PCs for seamless classroom interaction.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>High-quality audio visual experience with heavy duty wall mount speakers and wireless hand microphone ensuring crystal clear audibility even in large classrooms.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>Comprehensive post-installation technical support, hardware warranty, and periodic software updates ensuring long-term sustainability.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Class Hardwares Section */}
        <h2 className="prod-section-title">Smart Class Hardwares</h2>
        <div className="smartclass-hardware-banner">
          <img src={smartClassHardwaresImg} alt="Netcom Smart Class Room Hardware Components Architecture" />
        </div>

        {/* Passion for Learning Section */}
        <div className="smartclass-passion-section">
          <h2 className="prod-section-title">Passion for Learning</h2>
          <p className="smartclass-passion-text">
            Smart Classroom creates an interactive and collaborative learning experience that transforms everyday classrooms into vibrant knowledge hubs. Students participate actively, retain concepts longer, and develop a genuine enthusiasm for learning across all subjects.
          </p>

          <div className="smartclass-dual-photos">
            <div className="smartclass-photo-frame">
              <img src={smartClassPhoto1} alt="Students actively engaged in smart classroom lesson" />
            </div>
            <div className="smartclass-photo-frame">
              <img src={smartClassPhoto3} alt="Interactive teaching session in classroom" />
            </div>
          </div>

          <p className="smartclass-passion-text" style={{ marginTop: "20px" }}>
            Over 2000+ government and private schools across Tamil Nadu have experienced the transformational impact of Netcom Smart Classrooms, bridging the digital divide and empowering students from all socio-economic backgrounds with world-class education tools.
          </p>
        </div>

        {/* Bottom CTA Card */}
        <section className="prod-cta-card">
          <div className="prod-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us. Also we can add/update new features and design changes in this product. If you want To discuss about this product and our other services, please mail us on <strong>support@ncpli.com</strong> or call <strong>+91 73050 23014</strong>.
            </p>
            <button type="button" className="btn-request-demo" onClick={() => setIsDemoModalOpen(true)}>
              Request a Demo
            </button>
          </div>
          <div className="prod-cta-image">
            <img src={contactUsImg} alt="Netcom Support Representative" />
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="prod-modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="prod-modal-card" style={{ maxWidth: "680px" }} onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>Smart Class Room - Video Demonstration</h3>
              <button type="button" className="prod-modal-close" onClick={() => setVideoModalOpen(false)}>✕</button>
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", background: "#000" }}>
              <iframe
                title="Smart Class Room Demo"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="prod-modal-backdrop" onClick={() => setIsDemoModalOpen(false)}>
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>Request a Demo</h3>
              <button type="button" className="prod-modal-close" onClick={() => setIsDemoModalOpen(false)}>✕</button>
            </div>
            {demoSuccess ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "3rem", color: "#1b8754", marginBottom: "12px" }}>✓</div>
                <h4 style={{ color: "#0e4a34", fontSize: "1.3rem", margin: "0 0 10px" }}>Thank You!</h4>
                <p style={{ color: "#4f5d54" }}>Your demo request for Smart Class Room has been received.</p>
                <button type="button" className="prod-modal-submit" onClick={() => setIsDemoModalOpen(false)}>Done</button>
              </div>
            ) : (
              <form className="prod-modal-form" onSubmit={handleDemoSubmit}>
                <div className="prod-form-group">
                  <label htmlFor="demo-name">Your Full Name *</label>
                  <input id="demo-name" type="text" required placeholder="Enter your name" value={demoFormData.name} onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })} />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="demo-inst">Institution / Business Name *</label>
                  <input id="demo-inst" type="text" required placeholder="e.g. Cambridge School" value={demoFormData.institution} onChange={(e) => setDemoFormData({ ...demoFormData, institution: e.target.value })} />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="demo-email">Email Address *</label>
                  <input id="demo-email" type="email" required placeholder="name@example.com" value={demoFormData.email} onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })} />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="demo-phone">Phone Number *</label>
                  <input id="demo-phone" type="tel" required placeholder="+91 98765 43210" value={demoFormData.phone} onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })} />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="demo-msg">Specific Requirements</label>
                  <textarea id="demo-msg" rows="3" placeholder="Tell us about your requirements..." value={demoFormData.message} onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}></textarea>
                </div>
                <button type="submit" className="prod-modal-submit">Submit Demo Request</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SmartClassRoom;
