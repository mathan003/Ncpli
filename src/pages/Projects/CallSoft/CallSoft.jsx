import React from "react";
import { Link } from "react-router-dom";
import "./CallSoft.css";

import callSoftImg1 from "../../../assets/image/project/Call Soft/image1.png";
import callSoftImg2 from "../../../assets/image/project/Call Soft/image2.png";

function CallSoft() {
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
          <span className="project-breadcrumb-current">Call Soft</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Call Soft</h1>

        {/* Top Intro Section */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              <strong>Call Soft</strong> is a computer-based tutorial platform that supports structured learning through engaging multimedia lessons and guided practice. Designed specifically for institutional and school environments, it transforms traditional computer lessons into dynamic visual experiences.
            </p>
            <p>
              Equipped with curriculum-mapped modules, automated student progress tracking, and interactive quizzes, Call Soft bridges foundational education with hands-on computer competence for young learners.
            </p>
            <p>
              Teachers can administer tests, guide individual students through self-paced learning paths, and monitor mastery of core computer concepts through comprehensive analytics dashboards.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={callSoftImg1} alt="Call Soft Interactive Learning Interface" />
          </div>
        </div>

        {/* Features Grid */}
        <h2 className="project-section-title">Core Capabilities &amp; Features</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Interactive Tutorials</h3>
            <p>Engaging step-by-step digital lessons that simplify complex computing concepts with animated demonstrations and real-time audio guidance.</p>
          </div>
          <div className="project-card">
            <h3>Multimedia Lessons</h3>
            <p>Rich digital courseware with animations, diagrams, audio narrations in English and regional languages, and practical exercise workflows.</p>
          </div>
          <div className="project-card">
            <h3>Self-Paced Learning</h3>
            <p>Enables students to progress according to their individual learning pace, revisiting challenging topics with dedicated review tools.</p>
          </div>
          <div className="project-card">
            <h3>Teacher Dashboard</h3>
            <p>Centralized console allowing educators to assign lessons, oversee student screen progress, and review comprehension benchmarks.</p>
          </div>
          <div className="project-card">
            <h3>Automated Assessments</h3>
            <p>Built-in question banks with automated scoring for chapter reviews, practice quizzes, and formal end-of-term evaluations.</p>
          </div>
          <div className="project-card">
            <h3>Offline Compatibility</h3>
            <p>Designed to operate seamlessly on local school networks without requiring persistent high-speed internet connectivity.</p>
          </div>
        </div>

        {/* System Screenshots */}
        <h2 className="project-section-title">System Showcase</h2>
        <div className="callsoft-screens-grid">
          <div className="callsoft-screen-card">
            <img src={callSoftImg1} alt="Call Soft Tutorial Navigator" />
            <div className="callsoft-screen-caption">Interactive Lesson Navigator</div>
          </div>
          <div className="callsoft-screen-card">
            <img src={callSoftImg2} alt="Call Soft Assessment Module" />
            <div className="callsoft-screen-caption">Practice Drills &amp; Evaluation Interface</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CallSoft;

