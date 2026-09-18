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
          <span className="project-breadcrumb-separator">›</span>
          <Link to="/projects">Project</Link>
          <span className="project-breadcrumb-separator">›</span>
          <span className="project-breadcrumb-current">Assessment</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Assessment</h1>

        {/* Top Intro Paragraphs */}
        <div style={{ maxWidth: "1000px", margin: "0 auto 35px" }}>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "16px" }}>
            Netcom Assessment is the process of gathering and discussing information from multiple and diverse sources in order to develop a deep understanding of what students know, understand, and can do with their educational experiences; Netcom process culminates when assessment results are used to improve subsequent learning.
          </p>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "16px" }}>
            Assessment is the systematic basis for making inferences about the learning and development of students. Netcom process is about defining, selecting, designing, collecting, analyzing, interpreting, and using information to increase students' learning and development.
          </p>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "28px" }}>
            Assessment is the systematic collection, review, and use of information about educational programs undertaken for the purpose of improving student learning and development.
          </p>

          <h2 className="assess-project-subhead">Purpose of Assessment:</h2>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "16px" }}>
            Two common phrases surrounding assessment recently are Assessment for Improvement and Assessment for Accountability. While assessment for accountability is an important reason to initiate and conduct assessment, the real benefit to an institution and its students come from the discussions and changes that happen as a result of assessment for improvement.
          </p>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "24px" }}>
            Many staff are motivated by the benefits of focusing on assessment for improving the quality of teaching, learning, programs and services, and planning and decision making. The purpose of assessment for accountability is to demonstrate the effectiveness of programs and services across the institution to various audiences, including parents.
          </p>

          <h2 className="assess-project-subhead">Purpose of Assessment:</h2>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "24px" }}>
            After installing the teacher setup or server setup in the computer, the server or teacher has many features to access. They have the control over the student's or client machines.
          </p>

          <h2 className="assess-project-subhead">Using the Student's Computer or Client</h2>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "16px" }}>
            Language lab is set up to run in the background on student computers. All the functionality is controlled at the teacher computer, which enables you to have control over classroom activities.
          </p>
          <p style={{ color: "#3b4640", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: "16px" }}>
            An assessment cycle effectively addressing assessment for improvement will also provide the necessary evidence for accountability.
          </p>
          <p style={{ color: "#0e4a34", fontWeight: 700, fontSize: "0.95rem", margin: "24px 0 16px" }}>
            Netcom Assessment methods define the nature of the assessor actions and include:
          </p>
        </div>

        {/* Dual Cards: Left Methods, Right Features */}
        <div className="project-grid-2" style={{ marginBottom: "50px" }}>
          {/* Left Card: Methods */}
          <div className="project-card" style={{ padding: "28px 24px" }}>
            <div className="assess-method-group">
              <h3 className="assess-method-title">Examine method:</h3>
              <p className="assess-method-desc">
                The process of reviewing, inspecting, observing, studying, or analyzing one or more assessment objects (i.e., specifications, mechanisms, or activities). The purpose of the examine method is to facilitate assessor understanding, achieve clarification, or obtain evidence.
              </p>
            </div>

            <div className="assess-method-group">
              <h3 className="assess-method-title">Interview method:</h3>
              <p className="assess-method-desc">
                The process of holding discussions with individuals or groups of individuals within an organization to facilitate assessor understanding, achieve clarification, or obtain evidence.
              </p>
            </div>

            <div className="assess-method-group">
              <h3 className="assess-method-title">Test method:</h3>
              <p className="assess-method-desc">
                The process of exercising one or more assessment objects (i.e., activities) under specified conditions to compare actual with expected behavior.
              </p>
              <p className="assess-method-desc" style={{ marginTop: "8px" }}>
                Netcom Assessment is the ongoing process of gathering, analyzing, and interpreting evidence, reflecting on findings, making informed and consistent judgements to improve student learning.
              </p>
              <p className="assess-method-desc" style={{ marginTop: "8px" }}>
                Assessment for improved student learning and deep understanding requires a range of assessment practices to be used with three overarching purposes.
              </p>
            </div>

            <div className="assess-method-group">
              <h3 className="assess-method-title">Assessment for learning:</h3>
              <p className="assess-method-desc">
                Occurs when teachers use inferences about student progress to inform their teaching.
              </p>
              <p className="assess-method-desc" style={{ marginTop: "6px" }}>
                Assessment as learning: occurs when students reflect on and monitor their progress to inform their future learning goals.
              </p>
              <p className="assess-method-desc" style={{ marginTop: "6px" }}>
                Assessment of learning: occurs when teachers use evidence of student learning to make judgements on student achievement against goals and standards.
              </p>
            </div>
          </div>

          {/* Right Card: Features */}
          <div className="project-card" style={{ padding: "28px 24px" }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "20px" }}>Features</h3>
            <ul className="project-check-list" style={{ gap: "16px" }}>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Server Should Act As A Teacher Console: This Displays The List Of Students In The Teacher Console From This The Teacher Can Select The Student To Start Or Stop The Class.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Real Time Screen And Audio Broadcast From Teacher Console To Student.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Viewing And Monitoring The Screens Of Students From Teacher Console.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Recording And Storing Broadcasts For Future Use: This Option Is Used To Record The Files And Broadcast It To Other Students From Teacher Console.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Sharing Files Among System: This Module Is Used To Share The Files To Other System Or Students From The Teacher Console.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Having Controls Like Mute Audio, Lock The Keyboard Of Particular Student Console: This Is Used To Control The Student's Screen Such As To Lock The Screen Or Keyboard Or Mute The Audio. Teachers Can Easily Having The Control Over The Student's Screen.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Providing Some Sample Cell Lessons: This Provides Some Sample Lessons To Student's Screen.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Assessment;

