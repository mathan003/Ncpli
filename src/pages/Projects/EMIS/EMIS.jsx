import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EMIS.css";

import emsImage from "../../../assets/image/project/Educational Management Information System/image.png";
import contactUsImg from "../../../assets/image/product/contact us.png";

const emisFeatures = [
  {
    id: 1,
    title: "Personalized portals and dashboards",
    desc: "The dashboard comes with a flexible functionality, which allows administrator to create number of portals personalized for students, faculty and parents.",
    moreText: "Role-based dashboards allow every stakeholder—principals, teachers, students, and parents—to view strictly relevant data, schedules, and priority notifications instantly.",
  },
  {
    id: 2,
    title: "360 degree student profile",
    desc: "Right from academic reports, attendance information, grading and examination results – Everything on the screen with details",
    moreText: "Consolidates comprehensive records from biographical data, behavioral notes, and fee receipts to semester marks and historical progress charts in a single unified view.",
  },
  {
    id: 3,
    title: "Alerts and notifications",
    desc: "Enabling timely alerts and sending push notifications to students, parents, and teachers.",
    moreText: "Automated SMS, email, and app notifications keep everyone informed about attendance anomalies, exam timetables, sudden holidays, and urgent fee reminders.",
  },
  {
    id: 4,
    title: "Integrated academic calendar",
    desc: "EMIS system is the perfect medium to integrate your academic calendar, through simple excel import option and work your plan",
    moreText: "Quickly schedule terms, holidays, assessment weeks, and co-curricular milestones with seamless bulk calendar sync and instant push to classroom timetables.",
  },
  {
    id: 5,
    title: "Inbuilt attendance – biometric/RFID integration",
    desc: "No more hassles of paper-based attendance routine. Go paperless and free your faculty from the monotonous manual work with EMIS.",
    moreText: "Supports optical fingerprint scanners, smart RFID ID-card taps, and mobile teacher check-ins, eliminating proxy attendance and automating parent alerts.",
  },
  {
    id: 6,
    title: "Multi-language support",
    desc: "Supporting multiple languages to seamlessly adapt to diverse student and faculty needs.",
    moreText: "Offers multilingual user interface options (English, Tamil, and regional languages) ensuring smooth communication across non-teaching staff and parents.",
  },
  {
    id: 7,
    title: "Question bank",
    desc: "Our educational experts have curated a large sorted NTA based question bank with solutions.",
    moreText: "Teachers can curate, categorize, and auto-generate balanced question papers according to Bloom's Taxonomy, difficulty levels, and syllabus units in seconds.",
  },
  {
    id: 8,
    title: "Informative videos",
    desc: "Redefine your students learning experience by letting them access video lectures, and informative videos. Align into the futuristic learning and stay ahead of the competition.",
    moreText: "Embeds curated digital animations, laboratory experiments, and flipped classroom video lectures for self-paced student revision anytime, anywhere.",
  },
  {
    id: 9,
    title: "Lecturer notes",
    desc: "Taking the lecturer notes and referring them offline consumes enormous amount of time and efforts. Let you students access their lecturer’s notes, right after the completion of class.",
    moreText: "Digitally upload presentation slides, reference PDFs, and handwritten summaries directly linked to the syllabus topic for student access.",
  },
];

function EMIS() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "Educational Management Information System (EMIS)",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent("Demo Request: Educational Management Information System");
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProject: Educational Management Information System\n\nMessage:\n${demoFormData.message}`
      );
      window.open(`mailto:support@ncpli.com?subject=${subject}&body=${body}`, "_blank");
    }, 800);
  };

  return (
    <div className="prod-page-wrapper emis-page-wrapper">
      {/* Project Hero Banner */}
      <section className="prod-hero">
        <div className="prod-hero-container">
          <h1 className="prod-hero-title">PROJECT</h1>
          <p className="prod-hero-subtitle">Designed for the way you work.</p>
        </div>
      </section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/projects">Project</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Educational Management Information System</span>
        </nav>
      </div>

      <main className="prod-container emis-main-container">
        {/* Top Centered Title */}
        <h2 className="emis-page-heading">Educational Management Information System</h2>

        {/* Top Intro Card */}
        <div className="emis-intro-card">
          <div className="emis-intro-text">
            <p>
              <strong>EMIS</strong> allows learners and instructors to easily interact, collaborate, and study from anywhere.
            </p>
            <p>
              EMIS system is the perfect medium to integrate your academic calendar, through simple excel import option and work your plan. Connect your teachers and students, empower them to access the structured academic calendar and run the events as planned.
            </p>
            <p>
              EMIS learning management system for schools lets you pass on the right information to the right individual. Relevant information updates are shown on the screen once logged in to the concerned portals, for students, teachers, admin, parents and school&apos;s management.
            </p>
          </div>

          <div className="emis-intro-media">
            <img src={emsImage} alt="EMIS Academic Calendar and Scheduler Interface" />
          </div>
        </div>

        {/* Section 1: Implementation & Ease-of-Use 9-Card Grid */}
        <section className="emis-section">
          <h2 className="emis-section-heading">IMPLEMENTATION &amp; EASE-OF-USE</h2>
          <div className="emis-cards-grid-3">
            {emisFeatures.map((item) => (
              <div className="emis-feature-card" key={item.id}>
                <h3 className="emis-card-title">{item.title}</h3>
                <p className="emis-card-desc">{item.desc}</p>
                <button
                  type="button"
                  className="emis-readmore-btn"
                  onClick={() => setSelectedFeature(item)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Core Platform Capabilities List */}
        <div className="emis-arrow-list">
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>
              Netcom developed an application called EMIS(Educational Management Information System). In this application we can analyse overall school day to day process like teachers information, students information like Enroll number, Name, Class, Community, etc., by this application we can easily handle all the school process and we can monitor the same.
            </span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>
              EMIS Software is a platform which helps in managing the day to day academic and administrative activities from a single platform. NETCOM provides user-friendly dashboards with login access for teachers, non-teaching staff, students, parents, and management personnel of your institution. The various modules available in school EMIS software automate daily operations of your institution such as from students&apos; admission to generating transfer certificates to digitizing the online learning experience all can be managed effortlessly.
            </span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>
              NETCOM EMIS has modules to manage Timetable, Attendance, Online Class, Examinations, Gradebooks, Mobile Learning, Hostel, Library, Transportation, School Calendar, Events, and many more. It has a fully-fledged Human Resource module to manage the payroll and employee pay slips. The Finance module helps you to plan and allot different fee structures to students. NETCOM EMIS System is also an excellent collaboration tool using its Task, Discussion, Poll, Blog, and Videoconference plugins. There is an internal messaging system within Netcom, but you can also integrate it with external communication tools like email and texting.
            </span>
          </div>
          <div className="emis-arrow-item">
            <span className="emis-arrow-icon">➔</span>
            <span>
              Netcom is a learning platform for schools, which allows teachers to deliver courses, promote an interactive learning environment and provide better operations for admin from a single platform. Transform your institute&apos;s traditional academic experience into digital learning within a few clicks.
            </span>
          </div>
        </div>

        {/* Section 3: Second Implementation & Ease-of-Use List */}
        <section className="emis-section">
          <h2 className="emis-section-heading">IMPLEMENTATION &amp; EASE-OF-USE</h2>
          <div className="emis-arrow-list">
            <div className="emis-arrow-item">
              <span className="emis-arrow-icon">➔</span>
              <span>
                Instructors can create end to end customized and engaging courses by adding teaching materials using their favourite medium. Principal can access teachers and students dashboard. Teachers can record the week plan, time table and schedule. Students get notified about the updates. As a school administrator, take attendance, record assessments, and oragnize staff data. EMIS school facilities the collection, processing, and management of information at the school. It is a customizable application that supports the day-to-day activities involved in managing an individual school. EMIS Classroom is a mobile app for android that facilities the collection of data at the class room level. Techers can collect data on attandance, assessments and behaviors.
              </span>
            </div>
            <div className="emis-arrow-item">
              <span className="emis-arrow-icon">➔</span>
              <span>
                EMIS classroom data can then be exported and shared in standard output formats. EMIS Classroom is able to function with an active internet connection.
              </span>
            </div>
            <div className="emis-arrow-item">
              <span className="emis-arrow-icon">➔</span>
              <span>
                Principals and education officails can easily and quickly search, viw and update staff details using a mobile device including staff photos. EMIS staffroom connects to securely access and update information.
              </span>
            </div>
            <div className="emis-arrow-item">
              <span className="emis-arrow-icon">➔</span>
              <span>
                EMIS provides the Digital Content that gives a central repository accessible to teachers across Tamil Nadu and Unique login identifier for Teachers linked with state curiculum. Also track your personal career excellence. With the help of this portal, the school administration also provides all the information about the syllabus, school timings, new notices, and modification details in online.
              </span>
            </div>
          </div>
        </section>

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

      {/* Read More Detail Modal */}
      {selectedFeature && (
        <div className="prod-modal-backdrop" onClick={() => setSelectedFeature(null)}>
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>{selectedFeature.title}</h3>
              <button
                type="button"
                className="prod-modal-close"
                onClick={() => setSelectedFeature(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <p style={{ color: "#495057", fontSize: "0.96rem", lineHeight: 1.65, marginBottom: "14px" }}>
              {selectedFeature.desc}
            </p>
            <p style={{ color: "#2b332e", fontSize: "0.94rem", lineHeight: 1.65, background: "#f8faf9", padding: "14px 16px", borderRadius: "10px", border: "1px solid #e3ece7" }}>
              {selectedFeature.moreText}
            </p>
            <button
              type="button"
              className="prod-modal-submit"
              style={{ marginTop: "16px", width: "100%" }}
              onClick={() => setSelectedFeature(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Demo Request Modal */}
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
                <p style={{ color: "#4f5d54" }}>Your demo request for Educational Management Information System (EMIS) has been received.</p>
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
                  <label htmlFor="emis-demo-comp">School / College / Institution Name *</label>
                  <input
                    id="emis-demo-comp"
                    type="text"
                    required
                    placeholder="e.g. Government Higher Secondary School"
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
                    placeholder="principal@school.edu"
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
                    placeholder="Tell us about student count, biometric integration, modules needed..."
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
