import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EMIS.css";

import contactUsImg from "../../../assets/image/product/contact us.png";
import emisPreviewImg from "../../../assets/image/product/Educational Management Information System/image 35.png";

function EMIS() {
  const [emisDetailModal, setEmisDetailModal] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "Educational Management Information System",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Demo Request: Educational Management Information System`);
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProduct: Educational Management Information System\n\nMessage:\n${demoFormData.message}`
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
          <span className="cs-breadcrumb-current">Educational Management Information System</span>
        </nav>
      </div>

      <main className="prod-container">
        <h2 className="emis-main-title">Educational Management Information System</h2>

        {/* Intro 2-Column Split */}
        <div className="emis-intro-split">
          <div className="emis-intro-text">
            <p>
              <strong>EMIS</strong> allows learners and instructors to easily interact, collaborate, and study from anywhere.
            </p>
            <p>
              EMIS system is the part of institution to integrate whole academic activities, through simple excel import option and works prompt to: Connect your teachers and students, empower them to access the structure data, curriculum and run the events as planned.
            </p>
            <p>
              <strong>EMIS</strong> is an environment system for school allows easy access the right information to the right individual at right time through provide access through safe and secure login into the concerned portals for students, teachers, admin, parents and school's management.
            </p>
          </div>

          <div className="emis-preview-card">
            <img src={emisPreviewImg} alt="Netcom EMIS Academic Calendar & Excel Import Interface" />
          </div>
        </div>

        {/* Implementation & Ease-of-Use 9 Cards */}
        <h2 className="emis-section-title">IMPLEMENTATION & EASE-OF-USE</h2>
        <div className="emis-grid">
          <div className="emis-card">
            <h3>Personalized portals and dashboards</h3>
            <p>Students and school staff have their own identity, individual dashboards and environment for communication and interaction between individuals.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "Personalized portals and dashboards",
                  content:
                    "Students and school staff have their own identity, individual dashboards and environment for communication and interaction between individuals. Role-based privileges ensure students access syllabus and assignments, teachers manage mark entry and schedules, and administrators control institutional workflows.",
                })
              }
            >
              Read More
            </button>
          </div>

          <div className="emis-card">
            <h3>360 degree student profile</h3>
            <p>Provides extensive insight about personal, academic information, and health information about students for student well-being.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "360 degree student profile",
                  content:
                    "Provides extensive insight about personal, academic information, and health information about students for student well-being. Consolidates performance records, attendance histories, guardian details, and developmental milestones into a single accessible record.",
                })
              }
            >
              Read More
            </button>
          </div>

          <div className="emis-card">
            <h3>Alerts and notifications</h3>
            <p>Instantly notify alerts and sending updates to parents regarding daily activities of students.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "Alerts and notifications",
                  content:
                    "Instantly notify alerts and sending updates to parents regarding daily activities of students, exam timetables, fee dues, attendance absences, and special announcements via automated SMS, push notifications, and email.",
                })
              }
            >
              Read More
            </button>
          </div>

          <div className="emis-card">
            <h3>Integrated academic calendar</h3>
            <p>It's convenient for parents and students to get accurate academic calendar through mobile app to monitor events of the academic year.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "Integrated academic calendar",
                  content:
                    "It's convenient for parents and students to get accurate academic calendar through mobile app to monitor events of the academic year, holiday schedules, examination dates, cultural activities, and parent-teacher meetings.",
                })
              }
            >
              Read More
            </button>
          </div>

          <div className="emis-card">
            <h3>Inbuilt attendance – biometric/ RFID Integration</h3>
            <p>Multiple modes of attendance to keep attendance easy and effective without taking away crucial classroom hours and send alert to parents.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "Inbuilt attendance – biometric/ RFID Integration",
                  content:
                    "Multiple modes of attendance to keep attendance easy and effective without taking away crucial classroom hours and send alert to parents. Direct hardware synchronization with smart cards and biometric turnstiles ensures accurate records.",
                })
              }
            >
              Read More
            </button>
          </div>

          <div className="emis-card">
            <h3>Multi-language support</h3>
            <p>Learning in regular languages makes understanding easy and available in English and regional languages.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "Multi-language support",
                  content:
                    "Learning in regular languages makes understanding easy and available in English and regional languages, facilitating smoother communication for parents and local school administrators across diverse demographics.",
                })
              }
            >
              Read More
            </button>
          </div>

          <div className="emis-card">
            <h3>Question bank</h3>
            <p>Choose from huge database of questions categorized according to topics and difficulty levels.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "Question bank",
                  content:
                    "Choose from huge database of questions categorized according to topics and difficulty levels. Enables educators to create customized exam papers, periodic revision tests, and practice worksheets with automated answer key generation.",
                })
              }
            >
              Read More
            </button>
          </div>

          <div className="emis-card">
            <h3>Informative videos</h3>
            <p>Delivers curated videos aligned with learning outcomes that teachers can readily integrate into lessons to help students better visualize concepts and boost retention.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "Informative videos",
                  content:
                    "Delivers curated videos aligned with learning outcomes that teachers can readily integrate into lessons to help students better visualize concepts and boost retention across STEM and humanities curriculums.",
                })
              }
            >
              Read More
            </button>
          </div>

          <div className="emis-card">
            <h3>Lecturer notes</h3>
            <p>High-quality resources including lesson plans, multimedia presentations, exercises, and assessments to support teachers in lesson delivery and enrich learning experiences.</p>
            <button
              type="button"
              className="emis-btn-readmore"
              onClick={() =>
                setEmisDetailModal({
                  title: "Lecturer notes",
                  content:
                    "High-quality resources including lesson plans, multimedia presentations, exercises, and assessments to support teachers in lesson delivery and enrich learning experiences across all grades.",
                })
              }
            >
              Read More
            </button>
          </div>
        </div>

        {/* Detailed Netcom EMIS Capabilities (Arrow List 1) */}
        <div className="emis-arrow-list">
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>Netcom Developed An Application Called EMIS (Educational Management Information System). In This Application We Can Analyze Overall School Day To Day Tasks And Activities Through Interactive Dashboard, Student Information, Staff Record, Number, Class, Community, Etc., By This Application We Can Easily Handle All Tendencial Process And We Can Monitor The Same.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>EMIS Software Is A Platform Which Helps In Managing The Day To Day Academic And Administrative Activities From A Single Platform. NETCOM Provides User-Friendly Dashboards With Login Access For Teachers, Non-Teaching Staff, Students, Parents, And Management Personnel Of Your Institution. The Various Modules Available in Netcom EMIS Software Automate Daily Operations Of Your Institution Such As From Students' Admission To Generating Transfer Certificates To Digital To The Online Learning Experience That Can Be Managed Effortlessly.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>NETCOM EMIS Has Modules To Manage Timetable, Attendance, Online Class, Examinations, Gradebooks, Mobile Learning, Hostel, Library, Transportation, School Calendar, Events, And Many More. It Has A Fully-Fledged Human Resource Module To Manage The Payroll And Employee Pay Slips. The Finance Module Helps You To Plan And Allot Different Fee Structures To Students. NETCOM EMIS System Is Also An Excellent Collaboration Tool Using Its Task, Discussion, Poll, Blog, And Video Conference Plugins. There Is An Internal Messaging System Within Netcom, But You Can Also Integrate It With External Communication Tools Like Email And Texting.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>Netcom Is A Leading System Provider Of All Of Above Features. NETCOM Delivers Practical Advanced Web-Based Features Which Are Able To Provide Better Operations For Admin / Multi-Scale Platform Transforming Your Institutional Traditional Academic Experience Into Digital Learning With All New Utilities.</span>
          </div>
        </div>

        {/* Second Heading & Arrow List 2 */}
        <h2 className="emis-section-title">IMPLEMENTATION & EASE-OF-USE</h2>
        <div className="emis-arrow-list">
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>Institutions Can Create End To End Customized And Engaging Courses By Adding Teaching Materials With Their Respective Medium. Principal Can Access Teachers And Students Dashboard, Teachers Can Record The Week Plan, Time Table And Schedule, Students Get Notified About The Updates At Different Administrative Tasks Attendance, Result, Assessments, And Curriculum. By This Data, EMIS School Facilities The Collection, Processing, And Management Of Information At The School. Like A Customizable Application That Supports The Day-To-Day Administrative And Academic Activities And Provide A Clear Framework That Outlines The Core Elements That Should Be Considered In The Class Room Level. Teachers Can Collect Data On Attendance, Assessment, And Behaviors.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>EMIS Classroom Store Data Can Then Be Exported And Shared In Standard Central Formats, EMIS Classroom Is Able To Function With Limited Or No Internet Connection.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>Principals And Education Officials Can Easily And Quickly Search, View, And Update Staff Details Using A Mobile Device Including Staff Profile. EMIS Staff Room Connects To Securely Access And Update Information.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>EMIS Provides The Digital Content That Gives A Central Repository Accessible To Teachers Across Tamil Nadu And Unique Identification For Transaction With SAMI (Samiksha) Curriculum. Also Track User Nutritional Status/Readiness, With The Help Of This Portal. The School Administrator Also Provides All The Information Through The Syllabus, School Topology, New Modules, And Maintenance Details In Online.</span>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <section className="prod-cta-card">
          <div className="prod-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us. Also we can add/update new features and design changes in this product. If you want To discuss about this product and our other services, please mail us on <strong>support@ncpli.com</strong> or call <strong>+91 73050 23014</strong>.
            </p>
            <button
              type="button"
              className="btn-request-demo"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request a Demo
            </button>
          </div>
          <div className="prod-cta-image">
            <img src={contactUsImg} alt="Netcom Support Representative" />
          </div>
        </section>
      </main>

      {/* EMIS "Read More" Detail Modal */}
      {emisDetailModal && (
        <div className="prod-modal-backdrop" onClick={() => setEmisDetailModal(null)}>
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>{emisDetailModal.title}</h3>
              <button
                type="button"
                className="prod-modal-close"
                onClick={() => setEmisDetailModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <p style={{ color: "#3a4640", fontSize: "1rem", lineHeight: 1.7, margin: "16px 0 24px" }}>
              {emisDetailModal.content}
            </p>
            <button
              type="button"
              className="prod-modal-submit"
              style={{ width: "100%", padding: "10px" }}
              onClick={() => setEmisDetailModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="prod-modal-backdrop" onClick={() => setIsDemoModalOpen(false)}>
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>Request a Demo</h3>
              <button
                type="button"
                className="prod-modal-close"
                onClick={() => setIsDemoModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            {demoSuccess ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "3rem", color: "#1b8754", marginBottom: "12px" }}>✓</div>
                <h4 style={{ color: "#0e4a34", fontSize: "1.3rem", margin: "0 0 10px" }}>Thank You!</h4>
                <p style={{ color: "#4f5d54" }}>Your demo request for EMIS has been received.</p>
                <button
                  type="button"
                  className="prod-modal-submit"
                  onClick={() => setIsDemoModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="prod-modal-form" onSubmit={handleDemoSubmit}>
                <div className="prod-form-group">
                  <label htmlFor="emis-demo-name">Your Full Name *</label>
                  <input
                    id="emis-demo-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={demoFormData.name}
                    onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="emis-demo-inst">Institution / School Name *</label>
                  <input
                    id="emis-demo-inst"
                    type="text"
                    required
                    placeholder="e.g. Cambridge Matriculation School"
                    value={demoFormData.institution}
                    onChange={(e) => setDemoFormData({ ...demoFormData, institution: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="emis-demo-email">Email Address *</label>
                  <input
                    id="emis-demo-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={demoFormData.email}
                    onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="emis-demo-phone">Phone Number *</label>
                  <input
                    id="emis-demo-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoFormData.phone}
                    onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="emis-demo-msg">Specific Requirements</label>
                  <textarea
                    id="emis-demo-msg"
                    rows="3"
                    placeholder="Tell us about student count, modules needed..."
                    value={demoFormData.message}
                    onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="prod-modal-submit">
                  Submit Demo Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EMIS;
