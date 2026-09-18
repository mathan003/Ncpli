import React from "react";
import { Link } from "react-router-dom";
import "./SkillDevelopment.css";

import classroomHeroImg from "../../../assets/image/project/Skills Development & trsing/image1.png";
import commIcon from "../../../assets/image/project/Skills Development & trsing/our Training.png";
import skillsIcon from "../../../assets/image/project/Skills Development & trsing/Presentation.png";
import personalIcon from "../../../assets/image/project/Skills Development & trsing/personal.png";
import teamIcon from "../../../assets/image/project/Skills Development & trsing/Interpersonal.png";
import studentsIcon from "../../../assets/image/project/Skills Development & trsing/5000+.png";
import dvdIcon from "../../../assets/image/project/Skills Development & trsing/100+.png";

function SkillDevelopment() {
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
          <span className="project-breadcrumb-current">Skill Development &amp; Training</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Skill Development &amp; Training</h1>

        {/* Top Intro Section */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              Soft skills are those personal values and interpersonal skills that determine a person's ability to work in a collaborative environment. Soft skill development must be carried out as they are vital to one's professional life as they help individuals to excel in the workplace.
            </p>
            <p>
              <strong>Netcom's goal</strong> is to help you understand these important dynamics of group communication and learn how to put them into practice to improve your overall teamwork.
            </p>
            <p>
              The importance of soft skills are distinct from hard skills or domain knowledge. It is increasingly being recognized as a prerequisite in several sectors of job market. Research in many fields such as sales and marketing, software development, Engineering and Law has shown that to be successful in the workplace, knowledge alone is not enough; instead soft skills are needed to deal with the external world and to work in a collaborative manner.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={classroomHeroImg} alt="Netcom Skill Development & Soft Skills Classroom Session" />
          </div>
        </div>

        {/* Section: Our Training Focus Area */}
        <h2 className="project-section-title">Our Training Focus Area</h2>
        <div className="skill-focus-grid">
          <div className="skill-focus-card">
            <span className="skill-icon-badge">
              <img src={commIcon} alt="Our Training Focus Area Icon" />
            </span>
            <div className="skill-focus-content">
              <h3>Our Training Focus Area</h3>
              <p>
                Netcom continuous efforts develop spoken and verbal communication essential to build stronger professional as well as personal relationships. Effective communication is the cornerstone of good teamwork, auditory and visual processing skills, while our important soft skill development training begins with improving your communication, also essential personal soft skills for having a true impact on the workplace.
              </p>
            </div>
          </div>

          <div className="skill-focus-card">
            <span className="skill-icon-badge">
              <img src={skillsIcon} alt="Presentation and Business communication Skill Icon" />
            </span>
            <div className="skill-focus-content">
              <h3>Presentation and Business communication Skill:</h3>
              <p>
                To communicate effectively in the workplace, you need to be able to present your information clearly. Presentation skills classes explain how to put a good set of PowerPoint slides together to make engaging and convincing stories that will enable you to pass your message across.
              </p>
            </div>
          </div>

          <div className="skill-focus-card">
            <span className="skill-icon-badge">
              <img src={personalIcon} alt="Personal Effectiveness Skills Icon" />
            </span>
            <div className="skill-focus-content">
              <h3>Personal Effectiveness Skills:</h3>
              <p>
                Personal effectiveness builds self-discipline that can differ from individual to individual. Formal training helps build personal effectiveness and problem-solving skills across various situations.
              </p>
            </div>
          </div>

          <div className="skill-focus-card">
            <span className="skill-icon-badge">
              <img src={teamIcon} alt="Interpersonal and Team skills Icon" />
            </span>
            <div className="skill-focus-content">
              <h3>Interpersonal and Team skills:</h3>
              <p>
                Interpersonal and team skills set the foundation for teamwork and enables teams to function effectively. The ability to build positive relationships with teammates helps ensure the success of your organization.
              </p>
            </div>
          </div>
        </div>

        {/* Section: OUR PROJECTS: Anna University Coimbatore */}
        <div style={{ textAlign: "center", margin: "45px 0 10px" }}>
          <h2 style={{ color: "#0e4a34", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 6px" }}>
            OUR PROJECTS:
          </h2>
          <p style={{ color: "#4f5e55", fontSize: "0.95rem", margin: "0 0 20px" }}>
            Netcom have ventures in various fields with different institutions.
          </p>
          <h3 style={{ color: "#0e4a34", fontSize: "1.35rem", fontWeight: 700, margin: "0 0 14px", textAlign: "left" }}>
            Anna University Coimbatore:
          </h3>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.7, textAlign: "left", margin: "0 0 24px" }}>
            We have provided training for the students of ANNA UNIVERSITY, COIMBATORE during 2008-2009 and were instrumental in preparing training packages with animation as Computer Aided Learning for Soft Skill Programme.
          </p>
        </div>

        {/* Counter Stat Cards */}
        <div className="skill-stats-grid">
          <div className="skill-stat-card">
            <img src={studentsIcon} alt="Students" className="skill-stat-icon" />
            <div>
              <span className="skill-stat-number">5000+</span>
              <span className="skill-stat-label">Students Trained</span>
            </div>
          </div>

          <div className="skill-stat-card">
            <img src={dvdIcon} alt="DVDs" className="skill-stat-icon" />
            <div>
              <span className="skill-stat-number">100+</span>
              <span className="skill-stat-label">Training DVDs Produced</span>
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "#4f5e55", fontSize: "0.92rem", fontWeight: 600, margin: "16px 0 50px" }}>
          We have supported the students with INTERVIEW SKILLS &amp; GROUP DISCUSSION DVDS for 5000 students.
        </p>
      </main>
    </div>
  );
}

export default SkillDevelopment;

