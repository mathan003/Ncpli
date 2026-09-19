import React from "react";
import { Link } from "react-router-dom";
import "./Assessment.css";

function Assessment() {
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
          <span className="project-breadcrumb-current">Assessment</span>
        </nav>
      </div>

      <main className="project-container">
        {/* Main Title: Assessment */}
        <h1 className="assess-main-title">Assessment</h1>

        {/* Top 3 Intro Paragraphs */}
        <div className="assess-intro-block">
          <p>
            Netcom Assessment is the process of gathering and discussing information from multiple and diverse sources in order to develop a deep understanding of what students know, understand, and can do with their knowledge as a result of their educational experiences; Netcom process culminates when assessment results are used to improve subsequent learning.
          </p>
          <p>
            Assessment is the systematic basis for making inferences about the learning and development of students; Netcom process is about defining, selecting, designing, collecting, analyzing, interpreting, and using information to increase students' learning and development.
          </p>
          <p>
            Assessment is the systematic collection, review, and use of information about educational programs undertaken for the purpose of improving student learning and development.
          </p>
        </div>

        {/* Centered Purpose of Assessment Heading & Paragraphs */}
        <h2 className="assess-center-title">Purpose of Assessment:</h2>
        <div className="assess-purpose-block">
          <p>
            Two common phrases surrounding assessment recently are assessment for improvement and assessment for accountability. While assessment for accountability is an important reason to initiate and conduct assessment, the real benefit to an institution and its students come from the discussions and changes that happen as a result of assessment for improvement.
          </p>
          <p>
            Many staff are motivated by the benefits of focusing on assessment for improving the quality of teaching, learning, programs and services, and planning and decision making. The purpose of assessment for accountability is to demonstrate the effectiveness of programs and services across the institution to various audiences, including parents.
          </p>
        </div>

        {/* Sub-section: Purpose of Assessment */}
        <div className="assess-sub-block">
          <h3 className="assess-subhead-title">Purpose of Assessment:</h3>
          <p>
            After installing the teacher setup or server setup in the computer, the server or teacher has many features to access. They have the ability to control the student's or client machines.
          </p>
        </div>

        {/* Sub-section: Using the Student's Computer or Client */}
        <div className="assess-sub-block">
          <h3 className="assess-subhead-title">Using the Student's Computer or Client</h3>
          <p>
            Language lab is set up to run in the background on student computers. All of the functionality is controlled at the teacher computer, which enables you to have control over how it is used.
          </p>
          <p>
            An assessment cycle effectively addressing assessment for improvement will also provide the necessary evidence for accountability.
          </p>
          <p className="assess-methods-intro">
            Netcom Assessment methods define the nature of the assessor actions and include:
          </p>
        </div>

        {/* Dual Cards Grid: Left (Methods) & Right (Features) */}
        <div className="assess-dual-cards">
          {/* Left Card: Methods */}
          <div className="assess-card">
            <div className="assess-method-group">
              <h4 className="assess-method-title">Examine method:</h4>
              <p className="assess-method-desc">
                The process of reviewing, inspecting, observing, studying, or analyzing one or more assessment objects (i.e., specifications, mechanisms, or activities). The purpose of the examine method is to facilitate assessor understanding, achieve clarification, or obtain evidence.
              </p>
            </div>

            <div className="assess-method-group">
              <h4 className="assess-method-title">Interview method:</h4>
              <p className="assess-method-desc">
                The process of holding discussions with individuals or groups of individuals within an organization to, once again, facilitate assessor understanding, achieve clarification, or obtain evidence.
              </p>
            </div>

            <div className="assess-method-group">
              <h4 className="assess-method-title">Test method:</h4>
              <p className="assess-method-desc">
                The process of exercising one or more assessment objects (i.e., activities or mechanisms) under specified conditions to compare actual with expected behavior.
              </p>
              <p className="assess-method-desc">
                Netcom Assessment is the ongoing process of gathering, analyzing and interpreting evidence, reflecting on findings, making informed and consistent judgements to improve student learning.
              </p>
              <p className="assess-method-desc">
                Assessment for improved student learning and deep understanding requires a range of assessment practices to be used with three overarching purposes.
              </p>
            </div>

            <div className="assess-method-group">
              <h4 className="assess-method-title">Assessment for learning:</h4>
              <p className="assess-method-desc">
                occurs when teachers use inferences about student progress to inform their teaching.
              </p>
              <p className="assess-method-desc">
                Assessment as learning: occurs when students reflect on and monitor their progress to inform their future learning goals.
              </p>
              <p className="assess-method-desc">
                Assessment of learning: occurs when teachers use evidence of student learning to make judgements on student achievement against goals and standards.
              </p>
            </div>
          </div>

          {/* Right Card: Features */}
          <div className="assess-card">
            <h3 className="assess-features-title">Features</h3>
            <ul className="assess-check-list">
              <li className="assess-check-item">
                <span className="assess-check-icon">✔</span>
                <span>Server Should Act As A Teacher Console: This Displays The List Of Students In The Teacher Console From This The Teacher Can Select The Student To Start Or Stop The Class.</span>
              </li>
              <li className="assess-check-item">
                <span className="assess-check-icon">✔</span>
                <span>Real Time Screen And Audio Broadcast From Teacher Console To Student</span>
              </li>
              <li className="assess-check-item">
                <span className="assess-check-icon">✔</span>
                <span>Viewing And Absorbing The Screens Of Students From Teacher Console</span>
              </li>
              <li className="assess-check-item">
                <span className="assess-check-icon">✔</span>
                <span>Recording And Storing Broadcasts For Future Use This Option Is Used To Record The Files And Broadcast It To Other Students From Teacher Console.</span>
              </li>
              <li className="assess-check-item">
                <span className="assess-check-icon">✔</span>
                <span>Sharing Files Among System This Module Is Used To Share The Files To Other System Or Students From The Teacher Console.</span>
              </li>
              <li className="assess-check-item">
                <span className="assess-check-icon">✔</span>
                <span>Having Controls Like Mute Audio, Lock The Keyboard Of Particular Student Console. This Is Used To Control The Student's Screen Such As To Lock The Screen Or Keyboard Or Mute The Audio. Teachers Can Easily Having The Control Over The Student's Screen.</span>
              </li>
              <li className="assess-check-item">
                <span className="assess-check-icon">✔</span>
                <span>Providing Some Sample Call Lessons This Provides Some Sample Lessons To Student's Screen.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Assessment;
