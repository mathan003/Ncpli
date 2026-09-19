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
          <span className="project-breadcrumb-separator">&gt;</span>
          <Link to="/projects">Project</Link>
          <span className="project-breadcrumb-separator">&gt;</span>
          <span className="project-breadcrumb-current">Skill Development &amp; Training</span>
        </nav>
      </div>

      <main className="project-container">
        {/* Main Title: Skill Development & Training */}
        <h1 className="skill-main-title">Skill Development &amp; Training</h1>

        {/* Top 2-Column Split: Text (Left) & Classroom Image (Right) */}
        <div className="skill-intro-split">
          <div className="skill-intro-text">
            <p>
              Soft skills are those personal values and interpersonal skills that determine a person's ability to work in a collaborative environment. Soft skill development must be carried out as they are vital to one's professional life as they help individuals to excel in the workplace.
            </p>
            <p>
              <strong>Netcom</strong> goal is to help you understand these important dynamics of group communication and learn how to put them into practice to improve your overall teamwork.
            </p>
            <p>
              The importance of soft skills are distinct from hard skills or domain knowledge. It is increasingly being recognized as a prerequisite in several sections of job market.
            </p>
            <p>
              Research in many fields such as sales and marketing, software development, Engineering and Law has shown that to be successful in the workplace, knowledge alone is not enough instead soft skills are needed to deal with the external world and to work in a collaborative manner.
            </p>
          </div>

          <div className="skill-intro-media">
            <img src={classroomHeroImg} alt="Netcom Skill Development and Soft Skills Classroom Session" />
          </div>
        </div>

        {/* Section: Our Training Focus Area */}
        <h2 className="skill-section-title">Our Training Focus Area</h2>
        <div className="skill-focus-grid">
          {/* Card 1: Communication */}
          <div className="skill-focus-card">
            <span className="skill-icon-badge">
              <img src={commIcon} alt="Our Training Focus Area Icon" />
            </span>
            <div className="skill-focus-content">
              <h3>Our Training Focus Area</h3>
              <p>
                Netcom considers effective combination of spoken and written communication essential to build stronger professional as well as personal relationships. Effective communication is the essence of good cognitive, auditory and visual processing skills, which are important soft skill development. Beginning with improving your communication is an essential step as it would prolong the rest of the skills to impact.
              </p>
            </div>
          </div>

          {/* Card 2: Presentation & Business */}
          <div className="skill-focus-card">
            <span className="skill-icon-badge">
              <img src={skillsIcon} alt="Presentation and Business communication Skill Icon" />
            </span>
            <div className="skill-focus-content">
              <h3>Presentation and Business communication Skill:</h3>
              <p>
                It is to communicate effectively in the workplace, you need to be able to present your information clearly. Presentation skills doesn't just mean knowing how to put a good set of powerpoint slides together. It means engaging and connecting with an audience to get your message across.
              </p>
            </div>
          </div>

          {/* Card 3: Personal Effectiveness */}
          <div className="skill-focus-card">
            <span className="skill-icon-badge">
              <img src={personalIcon} alt="Personal Effectiveness Skills Icon" />
            </span>
            <div className="skill-focus-content">
              <h3>Personal Effectiveness Skills:</h3>
              <p>
                Personal Effectiveness skills are not fixed in the mindset; they vary from individual to individual, from discipline to discipline and from situation to situation.
              </p>
            </div>
          </div>

          {/* Card 4: Interpersonal & Team */}
          <div className="skill-focus-card">
            <span className="skill-icon-badge">
              <img src={teamIcon} alt="Interpersonal and Team skills Icon" />
            </span>
            <div className="skill-focus-content">
              <h3>Interpersonal and Team skills:</h3>
              <p>
                Interpersonal and team skills are the behavior and tactics that a person uses to interact with and relates with others effectively. The ability to build relationships with others and maintain them successfully is key to the success of your project.
              </p>
            </div>
          </div>
        </div>

        {/* Section: OUR PROJECTS: Anna University Coimbatore */}
        <div className="skill-projects-header">
          <h2 className="skill-projects-main-title">OUR PROJECTS:</h2>
          <p className="skill-projects-subtitle">
            Netcom have ventured in various fields with different institutions.
          </p>
          <h3 className="skill-univ-title">Anna University Coimbatore:</h3>
          <p className="skill-univ-desc">
            We have provided training for the students of ANNA UNIVERSITY, COIMBATORE during 2008 - 2009 and were instrumental in preparing training packages with animation as Computer Aided Learning for Soft Skill Programme.
          </p>
        </div>

        {/* Counter Stat Cards */}
        <div className="skill-stats-grid">
          <div className="skill-stat-card">
            <img src={studentsIcon} alt="Students Trained Icon" className="skill-stat-icon" />
            <div className="skill-stat-content">
              <span className="skill-stat-number">5000+</span>
              <span className="skill-stat-label">Students Trained</span>
            </div>
          </div>

          <div className="skill-stat-card">
            <img src={dvdIcon} alt="Training DVDs Produced Icon" className="skill-stat-icon" />
            <div className="skill-stat-content">
              <span className="skill-stat-number">100+</span>
              <span className="skill-stat-label">Training DVDs Produced</span>
            </div>
          </div>
        </div>

        {/* Stat Support Note */}
        <p className="skill-stats-footer-note">
          We have supported the students with INTERVIEW SKILLS &amp; GROUP DISCUSSION DVDS for 5000 students.
        </p>
      </main>
    </div>
  );
}

export default SkillDevelopment;
