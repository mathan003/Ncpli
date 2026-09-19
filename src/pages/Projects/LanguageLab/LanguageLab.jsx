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
              Language Lab is a software program designed to help the teachers to improve 
the learning environment in a Computer-based classroom. It is to increase the 
language skill to the students in English. In this we can teach the good 
Pronunciation, Letter writing, Grammar, Conversation, Voice and words 
reorganization tools, and Parts of Speech.
            </p>
            <p>
              Without language we cannot communicate with the world. English is the 
common language that is spoken all over the world. So it is necessary to speak 
English fluently with proper pronunciation without any grammatical mistakes. 
we are implementing ―DIGITAL MULTIMEDIA LANGUAGE LAB in colleges and 
schools. We split whole subject coverage into three different levels. Level 1, 
Level 2 & Level 3.Language Hall - consists of Hardware -based classroom control 
system. We have established this language lab projects in 12 colleges based on 
the UGC norms
            </p>
            <p>
              In this software Call Soft installed on each computer in a classroom, a teacher 
has the ability to, Reduce Student Distractions, Demonstrate Skills, Monitor 
Students, Access Students Understanding, and Help Individual Students.
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
                <span>Coverage of key grammar areas</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Integrated Vocabulary</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Dictionary</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Synonyms, Antonyms</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Spell Check</span>
              </li>
            </ul>
            <p style={{ marginTop: "18px", fontSize: "0.88rem", color: "#55645b" }}>
              We have Memorandum of Understanding (MOU) with around 10 great 
institutions for our language lab program.
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
              Language Lab works by enabling a teacher to control all student 
              computers within a computer- based classroom. The most logical 
              way to set up Language Lab is for each classroom or room to have 
              a teacher computer. This setup enables all of the computers in 
              the same classroom to interact with each other and one teacher 
              to control the entire room.
            </p>
            <p style={{ marginTop: "12px" }}>
              After installing the software on each computer in a classroom, 
              one system can act as a teacher or server and remaining system 
              can act as a student or client. The teacher can monitor students 
              as they join and/or leave the class. This makes it easy to see who 
              is absent or who has joined the class.
            </p>
          </div>
        </div>

        {/* Dual Cards: Teacher & Student Console Roles */}
        <div className="project-grid-2" style={{ margin: "35px 0 20px" }}>
          <div className="project-card">
            <div className="project-card-header">
            <h3>Using the Teacher Computer or Server</h3>
            <p>
              After installing the teacher setup or server setup in the computer, 
              the server or teacher has many features to access. They have the 
              ability to control the student’s or client machines.
            </p>
            <h3 style={{ marginTop: "24px" }}>Using the Student's Computer or Client</h3>
            <p>
              Language Lab is set up to run in the background on student 
              computers. All of the functionality is controlled at the teacher 
              computer, which enables you to have control over how it is used.
            </p>
            </div>
          </div>

          <div className="project-card">
            
            <h3>Features</h3>
            <ul className="project-check-list" style={{ marginTop: "14px" }}>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Server should act as a Teacher console. This displays the list of students in the teacher console. From this the teacher can select the student to start or stop the class.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Real Time Screen and Audio Broadcast from Teacher console to Student</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Viewing and absorbing the screens of students from teacher console</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Recording and storing broadcasts for future use this option is used to record the files and broadcast it to other students from teacher console.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Sharing files among System this module is used to share the files to other system or students from the teacher console.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Having controls like mute audio, lock the keyboard of particular student console. This is used to control the student’s 
                  screen such as to lock the screen or keyboard or mute the audio. Teachers can easily having the control over the student’s screen.</span>
              </li>
              <li>
                <span className="project-check-icon">✔</span>
                <span>Providing some sample call lessons this provides some sample lessons to student’s 
                  screen.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Banner: Providing Grammar Tools */}
        <div className="lang-grammar-banner">
          <strong>Providing Grammar Tools:</strong>
          This Provides Some Grammar Tools Like - ARTICLES, VOICE, TENSE, PUNCTUATION, PARTS OF SPEECH CONVERSATION, DICTIONARY
        </div>

        {/* Section: Language Lab System Screenshots */}
        <h2 className="project-section-title">Language Lab System</h2>
        <div className="lang-system-grid">
          <div className="lang-system-card">
            <img src={systemScreen1} alt="Language Lab Teacher Console Master Control Interface" />
            <div className="lang-system-caption"><strong>Level I - Grammar </strong> Grammar through activities language lab and 
                      classroom. The teacher has to be a vigilant, careful of the 
                      performance, behavior, interest, and need of the students, 
                      the enthusiastic participants in the lab. Let’s consider Active 
                      Voice and Passive Voice as an example</div>
          </div>

          <div className="lang-system-card">
            <img src={systemScreen2} alt="Interactive Student Practice & Phonetic Drill Interface" />
            <div className="lang-system-caption"><strong>Skill Generation</strong>Programs are designed to take into account your existing 
skills and knowledge as well as workplace and other training you may 
have received.Skills Generation will help you whether you are looking for 
new career opportunities, advancement within your current role or 
improving and honing existing skills and knowledge.</div>
            <div className="lang-system-caption"><strong>Art Of Conversation</strong>Art of conversation includes the ability to listen to others as well as the 
ability to speak effectively.</div>
          </div>
          
        </div>

        <div style={{ maxWidth: "560px", margin: "0 auto 40px" }}>
          <div className="lang-system-card">
            <img src={systemScreen3} alt="Grammar & Vocabulary Workshop Module" />
            <div className="lang-system-caption"><strong>Art of writing:</strong>Writing is the art of expressing our views, ideas, and thoughts.
            Writing is a very important skill anywhere, anytime as long as we live. Through writing, we communicate to teachers to receive grades in school. Effective writing can be a task as it demands much more than correct grammar. It is about to gain knowledge about sentence structure, 
            develop your vocabulary, and build other basic writing skills.</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LanguageLab;

