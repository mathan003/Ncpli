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
            <p>The dashboard comes with a flexible functionality, 
which allows administrator to create number of 
portals personalized for students, faculty and parents.</p>
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
            <p>Right from academic reports, attendance information, 
grading and examination results – Everything on the 
screen with details</p>
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
            <p>Enabling timely alerts and sending push notifications 
to students, parents, and teachers.</p>
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
            <p>EMIS system is the perfect medium to integrate your 
academic calendar, through simple excel import option
and work your plan</p>
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
            <p>No more hassles of paper-based attendance routine. 
Go paperless and free your faculty from the 
monotonous manual work with EMIS.</p>
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
            <p>Enabling timely alerts and sending push notifications 
to students, parents, and teachers.</p>
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
            <p>Our educational experts have curated a large sorted 
NTA based question bank with solutions.</p>
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
            <p>Redefine your students learning experience by letting 
them access video lectures, and informative videos. 
Align into the futuristic learning and stay ahead of the 
competition.</p>
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
            <p>Taking the lecturer notes and referring them offline 
consumes enormous amount of time and efforts. 
Let you students access their lecturer’s notes, right 
after the completion of class.</p>
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
            <span>Netcom developed an application called EMIS(Educational Management Information System). In this application we can analyse overall 
school day to day process like teachers information, students information like Enroll number, Name, Class, Community, etc., by this 
appliaction we can easily handle all the school process and we can monitor the same.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>EMIS Software is a platform which helps in managing the day to day academic and administrative activities from a single platform. 
NETCOM provides user-friendly dashboards with login access for teachers, non-teaching staff, students, parents, and management 
personnel of your institution. The various modules available in school EMIS software automate daily operations of your institution such 
as from students' admission to generating transfer certificates to digitizing the online learning experience all can be managed 
effortlessly .</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>NETCOM EMIS has modules to manage Timetable, Attendance, Online Class, Examinations, Gradebooks, Mobile Learning, Hostel, Library, 
Transportation, School Calendar, Events, and many more. It has a fully-fledged Human Resource module to manage the payroll and 
employee pay slips. The Finance module helps you to plan and allot different fee structures to students. NETCOM EMIS System is also 
an excellent collaboration tool using its Task, Discussion, Poll, Blog, and Videoconference plugins. There is an internal messaging system 
within Netcom, but you can also integrate it with external communication tools like email and texting.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>Netcom is a learning platform for schools, which allows teachers to deliver courses, promote an interactive learning environment and 
provide better operations for admin from a single platform.Transform your institute's traditional academic experience into digital learning 
within a few clicks.</span>
          </div>
        </div>

        {/* Second Heading & Arrow List 2 */}
        <h2 className="emis-section-title">IMPLEMENTATION & EASE-OF-USE</h2>
        <div className="emis-arrow-list">
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>Instructors can create end to end customized and engaging courses by adding teaching materials using their favourite medium. Principal 
can access teachers and students dashboard. Teachers can record the week plan, time table and schedule. Students get notified about 
the updates. As a school administrator, take attendance, record assessments, and oragnize staff data. EMIS school facilities the 
collection, processing, and management of information at the school. It is a customizable application that supports the day-to-day 
activities involved in managing an individual school. EMIS Classroom is a mobile app for android that facilities the collection of data 
at the class room level. Techers can collect data on attandance , assessments and behaviors.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>EMIS classroom data can then be exported and shared in standard output formats. EMIS Classroom is able to function with an active in 
ternet connection.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>Principals and education officails can easily and quickly search, viw and update staff details using a mobile device including staff photos.
EMIS staffroom connects to securely access and update information.</span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>EMIS provides the Digital Content that gives a central repository accessible to teachers across Tamil Nadu and Unique login identifier for 
Teachers linked with state curiculum. Also track your personal career excellence. With the help of this portal, the school administration 
also provides all the information about the syllabus, school timings, new notices, and modification details in online.</span>
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
