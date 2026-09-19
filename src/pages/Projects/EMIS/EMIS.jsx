import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EMIS.css";

import emsImage from "../../../assets/image/project/Educational Management Information System/image.png";
import contactUsImg from "../../../assets/image/product/contact us.png";

function EMIS() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    project: "Educational Management Information System",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Demo Request: Educational Management Information System`);
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProject: Educational Management Information System\n\nMessage:\n${demoFormData.message}`
      );
      window.open(`mailto:support@ncpli.com?subject=${subject}&body=${body}`, "_blank");
    }, 800);
  };

  return (
    <div className="project-page-wrapper">
      {/* Project Hero Banner */}
      <section className="project-hero" aria-label="Project Hero Banner"></section>

      {/* Floating Mint-Green Breadcrumb Capsule */}
      <div className="project-breadcrumb-wrapper">
        <nav className="project-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="project-breadcrumb-separator">›</span>
          <Link to="/projects">Project</Link>
          <span className="project-breadcrumb-separator">›</span>
          <span className="project-breadcrumb-current">Educational Management Information System</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Educational Management Information System</h1>

        {/* Top Intro Section */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              <strong>EMIS</strong> allows learners and instructors to easily interact, collaborate, and study from 
anywhere.
            </p>
            <p>
              EMIS system is the perfect medium to integrate your academic calendar, through simple 
excel import option and work your plan. Connect your teachers and students, empower 
them to access the structured academic calendar and run the events as planned.
            </p>
            <p>
              EMIS learning management system for schools lets you pass on the right information to 
the right individual. Relevant information updates are shown on the screen once logged 
in to the concerned portals, for students, teachers, admin, parents and school’s 
management.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={emsImage} alt="EMIS Academic Calendar and Scheduler Interface" />
          </div>
        </div>

        {/* 9 Feature Cards */}
        <h2 className="project-section-title">IMPLEMENTATION & EASE-OF-USE</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Personalized portals and dashboards</h3>
            <p>The dashboard comes with a flexible functionality, 
which allows administrator to create number of 
portals personalized for students, faculty and parents.</p>
          </div>
          <div className="project-card">
            <h3>360 Degree Student Profile</h3>
            <p>Right from academic reports, attendance information, 
grading and examination results – Everything on the 
screen with details</p>
          </div>
          <div className="project-card">
            <h3>Alerts and notifications</h3>
            <p>Enabling timely alerts and sending push notifications 
to students, parents, and teachers.</p>
          </div>
          <div className="project-card">
            <h3>Integrated Academic Calendar</h3>
            <p>EMIS system is the perfect medium to integrate your 
academic calendar, through simple excel import option
and work your plan</p>
          </div>
          <div className="project-card">
            <h3>Inbuilt attendance – biometric/RFID integration</h3>
            <p>No more hassles of paper-based attendance routine. 
Go paperless and free your faculty from the 
monotonous manual work with EMIS.</p>
          </div>
          <div className="project-card">
            <h3>Multi-Language Support</h3>
            <p>Enabling timely alerts and sending push notifications 
to students, parents, and teachers.</p>
          </div>
          <div className="project-card">
            <h3>Question Bank</h3>
            <p>Our educational experts have curated a large sorted 
NTA based question bank with solutions.</p>
          </div>
          <div className="project-card">
            <h3>Informative videos</h3>
            <p>Redefine your students learning experience by letting 
them access video lectures, and informative videos. 
Align into the futuristic learning and stay ahead of the 
competition.</p>
          </div>
          <div className="project-card">
            <h3>Lecturer Notes</h3>
            <p>Taking the lecturer notes and referring them offline 
consumes enormous amount of time and efforts. 
Let you students access their lecturer’s notes, right 
after the completion of class.</p>
          </div>
        </div>

        {/* Arrow Capability List */}
        <div className="emis-proj-arrow-list">
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>Netcom developed an application called EMIS(Educational Management Information System). In this application we can analyse overall 
school day to day process like teachers information, students information like Enroll number, Name, Class, Community, etc., by this 
appliaction we can easily handle all the school process and we can monitor the same.</span>
          </div>
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>EMIS Software is a platform which helps in managing the day to day academic and administrative activities from a single platform. 
NETCOM provides user-friendly dashboards with login access for teachers, non-teaching staff, students, parents, and management 
personnel of your institution. The various modules available in school EMIS software automate daily operations of your institution such 
as from students' admission to generating transfer certificates to digitizing the online learning experience all can be managed 
effortlessly .</span>
          </div>
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>NETCOM EMIS has modules to manage Timetable, Attendance, Online Class, Examinations, Gradebooks, Mobile Learning, Hostel, Library, 
Transportation, School Calendar, Events, and many more. It has a fully-fledged Human Resource module to manage the payroll and 
employee pay slips. The Finance module helps you to plan and allot different fee structures to students. NETCOM EMIS System is also 
an excellent collaboration tool using its Task, Discussion, Poll, Blog, and Videoconference plugins. There is an internal messaging system 
within Netcom, but you can also integrate it with external communication tools like email and texting.</span>
          </div>
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>Netcom is a learning platform for schools, which allows teachers to deliver courses, promote an interactive learning environment and 
provide better operations for admin from a single platform.Transform your institute's traditional academic experience into digital learning 
within a few clicks.</span>
          </div>
        </div>

        {/* IMPLEMENTATION & EASE-OF-USE */}
        <h2 className="project-section-title">IMPLEMENTATION & EASE-OF-USE</h2>

        <div className="emis-proj-arrow-list">
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>Instructors can create end to end customized and engaging courses by adding teaching materials using their favourite medium. Principal 
can access teachers and students dashboard. Teachers can record the week plan, time table and schedule. Students get notified about 
the updates. As a school administrator, take attendance, record assessments, and oragnize staff data. EMIS school facilities the 
collection, processing, and management of information at the school. It is a customizable application that supports the day-to-day 
activities involved in managing an individual school. EMIS Classroom is a mobile app for android that facilities the collection of data 
at the class room level. Techers can collect data on attandance , assessments and behaviors.</span>
          </div>
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>EMIS classroom data can then be exported and shared in standard output formats. EMIS Classroom is able to function with an active in 
ternet connection.</span>
          </div>
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>Principals and education officails can easily and quickly search, viw and update staff details using a mobile device including staff photos.
EMIS staffroom connects to securely access and update information.</span>
          </div>
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>EMIS provides the Digital Content that gives a central repository accessible to teachers across Tamil Nadu and Unique login identifier for 
Teachers linked with state curiculum. Also track your personal career excellence. With the help of this portal, the school administration 
also provides all the information about the syllabus, school timings, new notices, and modification details in online.</span>
          </div>
        </div>

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
                  onClick={() => {
                    setIsDemoModalOpen(false);
                    setDemoSuccess(false);
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="prod-modal-form" onSubmit={handleDemoSubmit}>
                <div className="prod-form-group">
                  <label htmlFor="emis-proj-demo-name">Your Full Name *</label>
                  <input
                    id="emis-proj-demo-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={demoFormData.name}
                    onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="emis-proj-demo-inst">Institution / School Name *</label>
                  <input
                    id="emis-proj-demo-inst"
                    type="text"
                    required
                    placeholder="e.g. Cambridge Matriculation School"
                    value={demoFormData.institution}
                    onChange={(e) => setDemoFormData({ ...demoFormData, institution: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="emis-proj-demo-email">Email Address *</label>
                  <input
                    id="emis-proj-demo-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={demoFormData.email}
                    onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="emis-proj-demo-phone">Phone Number *</label>
                  <input
                    id="emis-proj-demo-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoFormData.phone}
                    onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="emis-proj-demo-msg">Specific Requirements</label>
                  <textarea
                    id="emis-proj-demo-msg"
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

