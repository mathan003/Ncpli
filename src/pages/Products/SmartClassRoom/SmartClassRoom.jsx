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
              Smart Classroom is a specially designed computer enabled classroom and has 
interactive learning software which provides teachers with essential tools to manage 
classrooms, assess students and encourage collaboration.
            </p>
            <p>
              Smart Classroom is designed to integrate with the existing classroom technology and 
also with school's wireless or wired network. The need to improve the quality of 
education to global standards is contributing to the increase in adoption of smart 
classrooms in India.
            </p>
            <p>
              Smart Classroom helps in making classroom sessions more interactive by incorporating 
live videos, audio, and pictures. This helps in improving students' engagement with 
learning. With advances in content creation technology and availability of online 
content,the proportion of digital content in course curriculum has increased.
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
              Smart Classroom helps in making classroom sessions more interactive by incorporating 
live videos, audio, and pictures. This helps in improving students' engagement with 
learning. With advances in content creation technology and availability of online 
content,the proportion of digital content in course curriculum has increased.
            </p>
            <p>
              The result was amazing. Knowledge flourished freed from the centuries old bonds of 
books and chalk and blackboard.
            </p>
            <p>
              A new light of understanding dawned on young awakened minds. And the classroom 
became a fascinating place to be in as a new generation of learners saw (instead of just 
being told and explained) for the first time. And the teacher smiled as she now saw not 
just one, two or three but a sea of hands go up every time she asked a question.
            </p>
            <p>
              nitial and ongoing trainings are given to the teachers. Training to teachers is given by 
the trainers appointed by the management. We can provide guidance to the teachers in 
digitizing existing curricular materials for use with the Smart Classrooms. A periodical 
training session is given to the teachers so that they can easily adopt the innovative 
technology. By this training, teachers can help the students to become familiar with IT 
and problem solving skills.
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
              Initial and ongoing trainings are given to the teachers. Training to 
teachers is given by the trainers appointed by the management. 
We can provide guidance to the teachers in digitizing existing 
curricular materials for use with the Smart Classrooms. A periodical 
training session is given to the teachers so that they can easily adopt
the innovative technology. By this training, teachers can help the 
students to become familiar with IT and problem solving skills.
            </p>
            <ul className="prod-check-list">
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>86 Smart Classrooms in Chennai Corporation Schools through ELCOT.</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>171 Adi Dravidar & Tribal Welfare Department schools through ELCOT.</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>25 Smart classrooms through Tirunelveli Corporations.</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>15 Kallar (Most Denotified Backward Class) schools in districts of Madurai, Theni and Dindugal through ELCOT.</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>13 Thanjavur Corporation Schools through ELCOT</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>4 Smart classrooms through ELCOT by Coimbatore Corporations.</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>38 Smart classrooms through Government aided Schools</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>1 Government Children Home for Boys, Ranipet through ELCOT</span>
              </li>
              <li className="prod-check-item">
                <span className="prod-check-icon">✔</span>
                <span>Netcom e-Smart Class Rooms more than 300 Government and Corporation Schools through ELCOT in BOOT model.</span>
              </li>
            </ul>
          </div>

          <div className="smartclass-box-card">
            <h3>Highlights of Netcom Smart Class Room</h3>
            <div className="prod-arrow-list" style={{ margin: "16px 0 0", }}>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>The content installed in the server is Samacheer based syllabus 
for the Std. 6 to 12 with diagrams and animations for the easy 
understanding of students.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>The content has been developed and installed at schools in 
both Tamil and English language according to the medium of 
instruction required for the students.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>An excellent ambience with live voice and computer 
presentation through multimedia,projector will enable the 
students to have 100% attention which converts the 
teaching process into more effective learning than the 
traditional class room teaching.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>The touch screen feature placed in KIOSK is loaded with the 
same content for students to enhance self-learning, which is 
one of the main feature in the E-Smart Class Room project.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>We have these animated contents for the schools under both 
the State and the CBSE syllabus, in English, Tamil and Hindi.</span>
              </div>
              <div className="prod-arrow-item" style={{ padding: "12px 14px", border: "none", boxShadow: "none", background: "transparent" }}>
                <span className="prod-arrow-icon">➔</span>
                <span>We take full credit as we have successfully implemented these 
projects within the stipulated time frame by the Government 
for the beneficial of student community.</span>
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
            Smart Classroom is celebrating the influential people who inspire students "passion for learning". Initial and ongoing trainings are given to the 
teachers. Training to teachers is given by the trainers appointed by the management. We can provide guidance to the teachers in digitizing existing 
curricular materials for use with the Smart Classrooms.
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
            Smart Class Room is an integrated program for schools with interactive self-placed learning for students. Smart Class Room uses a rational approach
in selecting Innovative Technology that gives good results. Improving the learning ability through self evaluation. A Smart Class Room that has 
stationed a teacher equipped with computer and audio visual aids."
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
