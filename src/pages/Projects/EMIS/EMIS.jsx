import React from "react";
import { Link } from "react-router-dom";
import "./EMIS.css";

import emsImage from "../../../assets/image/project/Educational Management Information System/image.png";

function EMIS() {
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
              <strong>EMIS</strong> (Educational Management Information System) allows learners, educators, administrators, and parents to easily interact, collaborate, and manage academic life from anywhere.
            </p>
            <p>
              The EMIS system is designed to integrate the whole spectrum of institutional academic operations through intuitive Excel import options, timetable schedulers, and structured student databases.
            </p>
            <p>
              It provides safe, secure login portals for students, teachers, administrative personnel, and institutional leadership, delivering the right information to the right stakeholder at the right time.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={emsImage} alt="EMIS Academic Calendar and Scheduler Interface" />
          </div>
        </div>

        {/* 9 Feature Cards */}
        <h2 className="project-section-title">Implementation &amp; Ease-of-Use</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Personalized Portals &amp; Dashboards</h3>
            <p>Individual identities and specialized dashboards for students, teachers, non-teaching staff, and management for smooth institutional workflows.</p>
          </div>
          <div className="project-card">
            <h3>360° Student Profile</h3>
            <p>Comprehensive insight into personal, academic, developmental, and attendance records to support holistic student well-being.</p>
          </div>
          <div className="project-card">
            <h3>Alerts &amp; Notifications</h3>
            <p>Instant automated alerts to parents regarding daily attendance, exam schedules, fee dues, and urgent institutional announcements via SMS and app.</p>
          </div>
          <div className="project-card">
            <h3>Integrated Academic Calendar</h3>
            <p>Convenient centralized calendar accessible on mobile and web to monitor academic events, examination cycles, and holiday schedules.</p>
          </div>
          <div className="project-card">
            <h3>Biometric &amp; RFID Attendance</h3>
            <p>Direct hardware synchronization with smart RFID student cards and biometric turnstiles ensuring accurate, hassle-free attendance tracking.</p>
          </div>
          <div className="project-card">
            <h3>Multi-Language Support</h3>
            <p>Full linguistic accessibility in English and regional languages, facilitating smoother communication for parents and local school administrators.</p>
          </div>
          <div className="project-card">
            <h3>Question Bank Management</h3>
            <p>Expansive question database categorized by subjects, difficulty levels, and learning standards for rapid test generation.</p>
          </div>
          <div className="project-card">
            <h3>Curated Educational Videos</h3>
            <p>Interactive animated courseware and video lessons directly linked to syllabus topics to boost classroom retention.</p>
          </div>
          <div className="project-card">
            <h3>Lecturer Notes &amp; Resources</h3>
            <p>Central repository of verified lesson plans, presentation slides, practice worksheets, and digital reference materials.</p>
          </div>
        </div>

        {/* Arrow Capability List */}
        <div className="emis-proj-arrow-list">
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>Netcom developed EMIS to empower schools across Tamil Nadu to manage daily academic operations from a single unified cloud platform with offline syncing.</span>
          </div>
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>Modules automate end-to-end student lifecycle management: from new admissions and digital roll registers to automated transfer certificate generation.</span>
          </div>
          <div className="emis-proj-arrow-item">
            <span className="emis-proj-arrow-icon">➔</span>
            <span>Comprehensive HR and payroll integration manages staff service books, leaves, timetable allocations, and automated monthly pay slip disbursements.</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EMIS;

