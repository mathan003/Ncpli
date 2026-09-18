import React from "react";
import { Link } from "react-router-dom";
import "./LanguageLab.css";

import heroStudentImg from "../../../assets/image/project/Language Lab/language-lab-hero-image 1.png";
import headphonesImg from "../../../assets/image/project/Language Lab/Headphone.png";
import howItWorksImg from "../../../assets/image/project/Language Lab/How It Works.png";
import systemScreen1 from "../../../assets/image/project/Language Lab/language-lab system1.png";
import systemScreen2 from "../../../assets/image/project/Language Lab/language-lab system2.png";
import systemScreen3 from "../../../assets/image/project/Language Lab/language-lab system3.png";

function LanguageLab() {
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
          <span className="project-breadcrumb-current">Language Lab</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Language Lab</h1>

        {/* Top Section: About Language Lab */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <h3 style={{ color: "#0e4a34", fontSize: "1.35rem", fontWeight: 700, margin: "0 0 14px" }}>
              About Language Lab
            </h3>
            <p>
              A language laboratory is a dedicated space for language learning where students can access audio or audiovisual materials. Language labs allow teachers to monitor student speech, provide individualized practice, and foster an immersive language acquisition environment.
            </p>
            <p>
              Netcom Language Lab is a digital, multimedia-based learning solution designed to help learners master English and regional languages. It facilitates active listening, speaking, reading, and writing (LSRW) practice through computer-aided instruction and guided teacher oversight.
            </p>
            <p>
              Equipped with pronunciation modules, phonetic charts, interactive voice recording, and native speaker benchmarks, Netcom Language Lab bridges the gap between classroom theory and confident, real-world communication skills.
            </p>
          </div>

          <div className="project-intro-media">
            <img src={heroStudentImg} alt="Student learning with headphones on laptop in Language Lab" />
          </div>
        </div>

        {/* Card: Language Lab software include */}
        <div className="lang-feature-card">
          <div>
            <h3>Language Lab software include:</h3>
            <ul className="project-check-list" style={{ marginTop: "16px" }}>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Student-Centric Practice Modules</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Listening and Recording</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Model Speech</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Pronunciation Assessment</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Vocabulary &amp; Grammar</span>
              </li>
            </ul>
            <p style={{ marginTop: "18px", fontSize: "0.88rem", color: "#55645b" }}>
              Netcom Language Lab software operates on high-efficiency client-server architecture, enabling seamless synchronized practice across 60+ workstations simultaneously.
            </p>
          </div>

          <div className="lang-feature-img">
            <img src={headphonesImg} alt="High-fidelity Language Lab Stereo Headset with Noise-Cancelling Mic" />
          </div>
        </div>

        {/* Card: How It Works */}
        <div className="lang-feature-card lang-feature-card--reverse">
          <div className="lang-feature-img">
            <img src={howItWorksImg} alt="How Language Lab Works Collaboration Illustration" />
          </div>

          <div>
            <h3>How It Works</h3>
            <p>
              The language laboratory operates through a centralized teacher console communicating with student client consoles. Teachers broadcast lessons, conduct listening exercises, pair students for dialogues, and review recorded voice samples in real time.
            </p>
            <p style={{ marginTop: "12px" }}>
              Students listen to native speaker audio recordings, record their own speech through noise-cancelling headsets, and play back their recordings to analyze pitch, tone, and pronunciation accuracy with visual waveform feedback.
            </p>
          </div>
        </div>

        {/* Dual Cards: Teacher & Student Console Roles */}
        <div className="project-grid-2" style={{ margin: "35px 0 20px" }}>
          <div className="project-card">
            <h3>Using the Teacher Computer or Server</h3>
            <p>
              Teachers have total administrative oversight from the master console: broadcasting lesson content, listening in discreetly to individual students, providing two-way intercom feedback, pairing students for interactive role-play, and administering automated listening tests.
            </p>
            <h3 style={{ marginTop: "24px" }}>Using the Student's Computer or Client</h3>
            <p>
              Students engage in self-paced learning: listening to pristine audio lessons, recording responses, playing back recordings side-by-side with reference speech, consulting the interactive pronunciation dictionary, and completing grammar assessments.
            </p>
          </div>

          <div className="project-card">
            <h3>Features</h3>
            <ul className="project-check-list" style={{ marginTop: "14px" }}>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Server acts as a Teacher Console with full student list display and class start/stop controls.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Real-time screen and high-definition audio broadcast from Teacher Console to student workstations.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Viewing and remote monitoring of student screens from the Teacher Console without interruption.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Recording and storing audio broadcasts and student voice submissions for future academic review.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>File sharing and lesson distribution between Teacher Console and student machines.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Teacher management controls including audio mute, screen blanking, and keyboard/mouse lock.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Pre-loaded sample lesson library with progressive phonetic and grammatical drills.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Banner: Providing Grammar Tools */}
        <div className="lang-grammar-banner">
          Providing Grammar Tools: NETCOM LANGUAGE LAB PROVIDES GRAMMAR TOOLS, VOCABULARY BUILDERS, AND PHONETIC PRACTICE FOR COMPREHENSIVE FLUENCY.
        </div>

        {/* Section: Language Lab System Screenshots */}
        <h2 className="project-section-title">Language Lab System</h2>
        <div className="lang-system-grid">
          <div className="lang-system-card">
            <img src={systemScreen1} alt="Language Lab Teacher Console Master Control Interface" />
            <div className="lang-system-caption">Teacher Console Master Control Interface</div>
          </div>

          <div className="lang-system-card">
            <img src={systemScreen2} alt="Interactive Student Practice & Phonetic Drill Interface" />
            <div className="lang-system-caption">Interactive Student Practice &amp; Phonetic Drill Interface</div>
          </div>
        </div>

        <div style={{ maxWidth: "560px", margin: "0 auto 40px" }}>
          <div className="lang-system-card">
            <img src={systemScreen3} alt="Grammar & Vocabulary Workshop Module" />
            <div className="lang-system-caption">Grammar &amp; Vocabulary Workshop Module</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LanguageLab;

