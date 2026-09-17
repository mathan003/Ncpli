import { Link } from "react-router-dom";
import "./Econtent.css";

import heroGraphic from "../../../assets/image/Service/E-Content/E-Content.png";
import introIllustration from "../../../assets/image/Service/E-Content/E-Content2.png";

const GUIDELINES = [
  "Content Free from Error: Factual, conceptual and grammatical correctness",
  "Content Free from Bias: Language and Representation",
  "Content Free from Inappropriate Material",
  "Comprehensive and Complete Content",
  "Clear and Concise Content: Simple Language",
];

const STORYBOARD_ITEMS = [
  "Title Screen and Introduction",
  "Concept Explanation and Theory",
  "2D / 3D Animation & Visuals",
  "Interactive Activities",
  "Real-Life Examples",
  "Summary & Assessment Questions",
];

const STEPS_ITEMS = [
  "Curriculum Analysis & Scope",
  "Pedagogical Planning",
  "Script and Storyboard Creation",
  "Media and Asset Production",
  "2D/3D Animation & Voiceover Integration",
  "Authoring and Interactive Assembly",
  "Quality Assurance & Beta Testing",
  "Final Deployment & Delivery",
];

function Econtent() {
  return (
    <div className="ec-page">
      {/* ================= HERO SECTION ================= */}
      <section className="ec-hero">
        <div className="ec-hero__container">
          <div className="ec-hero__content">
            <span className="ec-badge">OUR SERVICES</span>
            <h1>E-Content Development</h1>
            <p>
              We create interactive and engaging curriculum-aligned digital
              content that supports modern institutions and learners.
            </p>
          </div>
          <div className="ec-hero__media">
            <img
              src={heroGraphic}
              alt="E-Content Development"
              className="ec-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="ec-breadcrumb-wrapper">
        <nav className="ec-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="ec-breadcrumb-separator">›</span>
          <Link to="/service">Services</Link>
          <span className="ec-breadcrumb-separator">›</span>
          <span className="ec-breadcrumb-current">E-Content Development</span>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="ec-container">
        {/* Intro 2-Column Section */}
        <section className="ec-intro-grid">
          <article className="ec-card ec-intro-card">
            <h2 className="ec-card-title">About E-Content Development</h2>
            <p>
              E-Content or Electronic Content is digital information delivered
              over network-based devices or that can be made available on other
              computer media. It includes all forms of digital content like text,
              audio, video, animation, graphics, interactive simulations and
              games that can be used for teaching, learning and training
              purposes.
            </p>
            <p>
              Netcom Computers is an authorized educational technology and
              e-content development partner delivering interactive modules,
              animations, assessments, and curriculum digitization across state
              and national educational frameworks.
            </p>
          </article>
          <div className="ec-intro-media-card">
            <img
              src={introIllustration}
              alt="E-Content Development"
              className="ec-intro-media-img"
            />
          </div>
        </section>

        {/* Quality Guidelines Checkmarks */}
        <section className="ec-guidelines-box">
          <ul className="ec-guidelines-list">
            {GUIDELINES.map((item, idx) => (
              <li key={idx} className="ec-guideline-item">
                <span className="ec-check-icon" aria-hidden="true">
                  ✓
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <p className="ec-guidelines-summary">
            Our team creates compelling, visually engaging, curriculum-based
            interactive multimedia content. From mobile-ready educational
            modules to complete school curriculum digitization, our e-content
            enables students and educators to unlock engaging learning
            experiences.
          </p>
        </section>

        {/* Editorial Sections */}
        <section className="ec-editorial-block">
          <h2 className="ec-section-heading">
            Roles and Responsibilities of Content Writer/Subject Matter Experts
          </h2>
          <p className="ec-section-paragraph">
            As a Subject Matter Expert, you are responsible for researching,
            creating, reviewing, and editing educational content for digital
            learning. You will work closely with instructional designers,
            animators, and developers to ensure accurate, engaging, and
            syllabus-aligned material that caters to learners of all levels.
          </p>

          <h3 className="ec-section-subhead">1. Tasks:</h3>
          <p className="ec-section-paragraph">
            Conceptualizing and developing curriculum-aligned content for diverse
            educational levels; creating comprehensive scripts and storyboards for
            audio-video modules; verifying factual accuracy and ensuring
            conceptual clarity; reviewing and validating content produced by
            other team members.
          </p>

          <h3 className="ec-section-subhead">
            Web Resources / Supplementary Materials:
          </h3>
          <p className="ec-section-paragraph">
            Curating and evaluating relevant and high-quality web resources, open
            educational resources (OERs), supplementary reading lists, and digital
            assets that enrich the core syllabus. Ensuring that all external
            links and referenced materials comply with intellectual property
            guidelines and enhance the learning journey.
          </p>

          <h3 className="ec-section-subhead">
            Curriculum and Pedagogical Standards:
          </h3>
          <p className="ec-section-paragraph">
            Adhering to modern learning theories and standards like Bloom&apos;s
            Taxonomy, Constructivism, and Experiential Learning. Creating
            structured learning outcomes that guide learners systematically
            through foundational, intermediate, and advanced concepts while
            incorporating regular formative checks.
          </p>
        </section>

        <section className="ec-editorial-block">
          <h2 className="ec-section-heading">
            Our team lead by subject matter expert would have the following
            roles / responsibilities:
          </h2>
          <p className="ec-section-paragraph">
            Subject Matter Experts oversee the pedagogical integrity of every
            module. They bridge academic rigor with interactive multimedia
            production, ensuring every lesson not only satisfies the educational
            curriculum but actively stimulates curiosity and concept retention.
          </p>

          <h3 className="ec-section-subhead">
            Web Resources / Supplementary Materials:
          </h3>
          <p className="ec-section-paragraph">
            Designing interactive digital workbooks, reference guides, practice
            worksheets, and contextual glossaries that give learners
            supplementary depth and self-paced revision materials.
          </p>

          <h3 className="ec-section-subhead">Self-Learning (Audio/Video):</h3>
          <p className="ec-section-paragraph">
            Creating high-quality bite-sized videos and clear, concise audio
            explanations that enable learners to master complex concepts through
            independent self-study.
          </p>

          <h3 className="ec-section-subhead">
            Self - Assessment (Evaluation):
          </h3>
          <p className="ec-section-paragraph">
            Constructing objective and subjective assessments, interactive
            quizzes, flashcards, and diagnostic tests with immediate explanatory
            feedback to track learner progress.
          </p>

          <h3 className="ec-section-subhead">Presentation:</h3>
          <p className="ec-section-paragraph">
            Structuring visually balanced layouts with clear visual hierarchy,
            intuitive typography, and uncluttered presentation tailored for
            school and institutional environments.
          </p>

          <h3 className="ec-section-subhead">Audio Standards:</h3>
          <p className="ec-section-paragraph">
            High-definition studio-recorded voiceovers with native pronunciation,
            standard accent, uniform pacing, and optimal frequency balance for
            maximum clarity and engagement.
          </p>
        </section>

        {/* Bottom Two Cards: Storyboard & Steps */}
        <section className="ec-bottom-cards">
          {/* Left: Storyboard */}
          <article className="ec-card">
            <h2 className="ec-card-header">Storyboard</h2>
            <ul className="ec-arrow-list">
              {STORYBOARD_ITEMS.map((item, idx) => (
                <li key={idx} className="ec-arrow-item">
                  <span className="ec-arrow-icon" aria-hidden="true">
                    →
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* Right: Steps in development */}
          <article className="ec-card">
            <h2 className="ec-card-header">
              Steps in development of econtent module:
            </h2>
            <ul className="ec-steps-list">
              {STEPS_ITEMS.map((item, idx) => (
                <li key={idx} className="ec-step-item">
                  <span className="ec-check-icon" aria-hidden="true">
                    ✓
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Econtent;
