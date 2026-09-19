import React from "react";
import { Link } from "react-router-dom";
import "./ICTHiTechLab.css";

import hiTechImg from "../../../assets/image/project/Hi-Tech Lab/image1.png";

function ICTHiTechLab() {
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
          <span className="project-breadcrumb-current">ICT/Hi-Tech Lab</span>
        </nav>
      </div>

      <main className="project-container">
        {/* Main Title: ICT/Hi-Tech Lab */}
        <h1 className="ictht-main-title">ICT/Hi-Tech Lab</h1>
        <p className="ictht-main-subtitle">
          ICT/HI-TECH Skills are about understanding and applying a range of computer programs, software and other applications, the activities or equipment involve or result from the use of High technology.
        </p>

        {/* Section: ICT Projects */}
        <div className="ictht-edu-block">
          <h2 className="ictht-section-title">ICT Projects: Implementing &amp; Delivering IT Infrastructure For</h2>
          <p className="ictht-edu-desc">
            <strong>Computer Education:</strong> Experience in Facility Management Facility Management: Netcom has supplied and maintained around 1500 systems and Peripherals In 500 Government schools spread across TamilNadu.Netcom maintains the uptime of 97% for the entire IT Infrastructure supplied In these schools for Computer Education.
          </p>
        </div>

        {/* Showcase Card: Hardware Maintenance Management (Left) & Lab Image (Right) */}
        <section className="ictht-showcase-card">
          <div className="ictht-card-checklist-col">
            <h3 className="ictht-card-title">Hardware Maintenance Management</h3>
            <ul className="ictht-check-list">
              <li className="ictht-check-item">
                <span className="ictht-check-icon">✔</span>
                <span>Server Should Act As A Teacher Console: This Displays The List Of Students In The Teacher Console From This The Teacher Can Select The Student To Start Or Stop The Class.</span>
              </li>
              <li className="ictht-check-item">
                <span className="ictht-check-icon">✔</span>
                <span>Real Time Screen And Audio Broadcast From Teacher Console To Student</span>
              </li>
              <li className="ictht-check-item">
                <span className="ictht-check-icon">✔</span>
                <span>Viewing And Absorbing The Screens Of Students From Teacher Console</span>
              </li>
              <li className="ictht-check-item">
                <span className="ictht-check-icon">✔</span>
                <span>Recording And Storing Broadcasts For Future Use This Option Is Used To Record The Files And Broadcast It To Other Students From Teacher Console.</span>
              </li>
              <li className="ictht-check-item">
                <span className="ictht-check-icon">✔</span>
                <span>Sharing Files Among System This Module Is Used To Share The Files To Other System Or Students From The Teacher Console.</span>
              </li>
              <li className="ictht-check-item">
                <span className="ictht-check-icon">✔</span>
                <span>Having Controls Like Mute Audio, Lock The Keyboard Of Particular Student Console. This Is Used To Control The Student's Screen Such As To Lock The Screen Or Keyboard Or Mute The Audio. Teachers Can Easily Having The Control Over The Student's Screen.</span>
              </li>
              <li className="ictht-check-item">
                <span className="ictht-check-icon">✔</span>
                <span>Providing Some Sample Call Lessons This Provides Some Sample Lessons To Student's Screen.</span>
              </li>
            </ul>
          </div>

          <div className="ictht-card-media-col">
            <img src={hiTechImg} alt="Students in Government School Hi-Tech Computer Lab with Interactive Graphics" />
          </div>
        </section>

        {/* Dual Cards: Using Teacher Computer vs Using Student's Computer */}
        <div className="ictht-dual-cards">
          <div className="ictht-info-card">
            <h3>Using the Teacher Computer or Server</h3>
            <p>
              After installing the teacher setup or server setup in the computer, the server or teacher has many features to access. They have the ability to control the student's or client machines.
            </p>
          </div>

          <div className="ictht-info-card">
            <h3>Using the Student's Computer or Client</h3>
            <p>
              Language lab is set up to run in the background on student computers. All of the functionality is controlled at the teacher computer, which enables you to have control over classroom activities.
            </p>
          </div>
        </div>

        {/* Assessment Methods Definition Section */}
        <div className="ictht-methods-section">
          <h2 className="ictht-methods-title">
            Netcom Assessment methods define the nature of the assessor actions and include
          </h2>

          <div className="ictht-methods-content">
            <p>
              <strong>Examine method:</strong> the process of reviewing, inspecting, observing, studying, or analyzing one or more assessment objects (i.e., specifications, mechanisms, or activities). The purpose of the examine method is to facilitate assessor understanding, achieve clarification, or obtain evidence.
            </p>
            <p>
              <strong>Interview method:</strong> The process of holding discussions with individuals or groups of individuals within an organization to, once again, facilitate assessor understanding, achieve clarification, or obtain evidence.
            </p>
            <p>
              <strong>Test method:</strong> the process of exercising one or more assessment objects (i.e., activities or mechanisms) under specified conditions to compare actual with expected behavior.
            </p>
            <p>
              Netcom Assessment is the ongoing process of gathering, analyzing and interpreting evidence, reflecting on findings, making informed and consistent judgements to improve student learning.
            </p>
            <p>
              Assessment for improved student learning and deep understanding requires a range of assessment practices to be used with three overarching purposes:
            </p>
            <p>
              <strong>Assessment for learning:</strong> occurs when teachers use inferences about student progress to inform their teaching.
            </p>
            <p>
              <strong>Assessment as learning:</strong> occurs when students reflect on and monitor their progress to inform their future learning goals.
            </p>
            <p>
              <strong>Assessment of learning:</strong> occurs when teachers use evidence of student learning to make judgements on student achievement against goals and standards.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="ictht-features-section">
          <h2 className="ictht-features-title">Features</h2>
          <ul className="ictht-check-list">
            <li className="ictht-check-item">
              <span className="ictht-check-icon">✔</span>
              <span>Server Should Act As A Teacher Console: This Displays The List Of Students In The Teacher Console From This The Teacher Can Select The Student To Start Or Stop The Class.</span>
            </li>
            <li className="ictht-check-item">
              <span className="ictht-check-icon">✔</span>
              <span>Real Time Screen And Audio Broadcast From Teacher Console To Student</span>
            </li>
            <li className="ictht-check-item">
              <span className="ictht-check-icon">✔</span>
              <span>Viewing And Absorbing The Screens Of Students From Teacher Console</span>
            </li>
            <li className="ictht-check-item">
              <span className="ictht-check-icon">✔</span>
              <span>Recording And Storing Broadcasts For Future Use This Option Is Used To Record The Files And Broadcast It To Other Students From Teacher Console.</span>
            </li>
            <li className="ictht-check-item">
              <span className="ictht-check-icon">✔</span>
              <span>Sharing Files Among System This Module Is Used To Share The Files To Other System Or Students From The Teacher Console.</span>
            </li>
            <li className="ictht-check-item">
              <span className="ictht-check-icon">✔</span>
              <span>Having Controls Like Mute Audio, Lock The Keyboard Of Particular Student Console. This Is Used To Control The Student's Screen Such As To Lock The Screen Or Keyboard Or Mute The Audio. Teachers Can Easily Having The Control Over The Student's Screen.</span>
            </li>
            <li className="ictht-check-item">
              <span className="ictht-check-icon">✔</span>
              <span>Providing Some Sample Call Lessons This Provides Some Sample Lessons To Student's Screen.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ICTHiTechLab;
