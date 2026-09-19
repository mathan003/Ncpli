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
          <span className="project-breadcrumb-separator">&gt;</span>
          <Link to="/projects">Project</Link>
          <span className="project-breadcrumb-separator">&gt;</span>
          <span className="project-breadcrumb-current">Call Soft</span>
        </nav>
      </div>

      <main className="project-container">
        {/* Section 1: Call Soft Overview */}
        <h1 className="callsoft-main-title">Call Soft</h1>
        <div className="callsoft-intro-text">
          <p>
            Computer Based Tutorial is a new medium of imparting education and not just an interactive CD ROM equivalent to a book with a difference to view on a computer screen. The CBT course material should be designed keeping in mind one concept - the package should be useful to the end user.
          </p>
          <p>
            The success of a CBT depends on the content of the CBT and how the subject is conveyed. We have also developed CBT's for school students for all subjects. CALLSOFT is an English Language Learning Software specially designed for the development of English Language Skills in students which has provision for interaction between students and teachers.
          </p>
        </div>

        {/* Section 2: Features Heading & Paragraph */}
        <h2 className="callsoft-section-title">Features</h2>
        <p className="callsoft-features-desc">
          We have strong foothold in a variety of fields like computer education, computer-aided education, software solutions, web solutions, cartoon animations, etc. We are also doing data entry and conversion works and provide sales and servicing of computers and computer peripherals.
        </p>

        {/* Card 1: Checkmarks List (Left) & Digital Multimedia Language Lab Screen (Right) */}
        <section className="callsoft-showcase-card">
          <div className="callsoft-card-checklist-col">
            <ul className="callsoft-check-list">
              <li className="callsoft-check-item">
                <span className="callsoft-check-icon">✔</span>
                <span>The Teacher Can Control The Nodal Computers Of The Students Through His/Her Computer And Correct Them Then And There During The Session.</span>
              </li>
              <li className="callsoft-check-item">
                <span className="callsoft-check-icon">✔</span>
                <span>The Most Logical Way To Set Up CALLSOFT Is For Each Classroom Or Room To Have Its Own Teacher Channel, As Well As Just One Teacher And A Computer.</span>
              </li>
              <li className="callsoft-check-item">
                <span className="callsoft-check-icon">✔</span>
                <span>This Setup Enables All The Computers In The Same Classroom To Interact With One Another And One Teacher To Control The Entire Room.</span>
              </li>
              <li className="callsoft-check-item">
                <span className="callsoft-check-icon">✔</span>
                <span>The Teacher Can Monitor Students As They Join Or Leave The Class.</span>
              </li>
              <li className="callsoft-check-item">
                <span className="callsoft-check-icon">✔</span>
                <span>This Makes It Easy To See Who Is Absent Or Who Has Newly Joined The Class.</span>
              </li>
            </ul>
          </div>

          <div className="callsoft-card-media-col">
            <img src={callSoftImg1} alt="Digital Multimedia Language Lab - Active and Passive Voice screen" />
          </div>
        </section>

        {/* Card 2: Art of Conversation Screen (Left) & ELCOT Project Description (Right) */}
        <section className="callsoft-showcase-card callsoft-showcase-card--reverse">
          <div className="callsoft-card-media-col">
            <img src={callSoftImg2} alt="Art of Conversation - Conversational English skills and dialogues" />
          </div>

          <div className="callsoft-card-text-col">
            <p>
              <strong>CALL LAB PROJECT - ELCOT 350 SCHOOLS IN TAMILNADU:</strong> We have implemented CALL LAB Project with ELCOT for 350 Schools in Tamilnadu. CALLSOFT works by enabling a Teacher to control all student computers within a computer-based classroom.
            </p>
            <p>
              The coordination of ELCOT in 1000 Schools in Thoothukudi, Tirunelveli, Kanyakumari, Madurai, Virudhunagar, Sivagangai, Ramanathapuram, Dindugal, Theni, Thiruvarur, Namakkal, Karur, Coimbatore, Erode, Salem, Dharmapuri, Krishnagiri, Thiruvannamalai, Vellore, Cuddalore and Villupuram Districts in Tamilnadu.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CallSoft;
