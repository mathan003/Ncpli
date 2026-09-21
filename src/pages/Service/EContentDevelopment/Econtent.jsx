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
  "Title and version as the header",
  "Page number as the footer",
  "Category / illustrations",
  "Voice over Script.",
  "Text Script",
  "Descriptions of media objects",
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
              Hauty dang contant for scand Inalitutions. We croats inocactive angaging 
and cuticulum agnet coment that stances warming cutcomes
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
          <Link to="/">Services</Link>
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
              Netcom E-Content includes a comprehensive digital repository offering 
              superior-quality content in Mathematics, Physics, Chemistry, Biology, Social 
              Sciences, English Grammar, Business Studies, Economics and Accountancy. 
              The portal has been designed especially for students of Classes I to XII and 
              includes numerous visuals and animations to help increase student 
              understanding and retention.
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
            Technologies are changing the way we develop and deliver online content. Enable exploration of more usable presentation in the context of 
elearning content creation through models, practical examples and checklists.To develop e-content using contemporary ICT. To maintain 
uniformity and follow appropriate standards for interoperability.
          </p>
        </section>

        {/* Editorial Sections */}
        <section className="ec-editorial-block">
          <h2 className="ec-section-heading">
            Roles and Responsibilities of Content Writer/Subject Matter Experts
          </h2>
          <p className="ec-section-paragraph">
            Subject Matter Experts are academics with sufficient experience in teaching and optionally have past experience in creating content in the area 
            they have specialised.They have been involved in academic activities at UG or PG level.Content writing could be accomplished by the subject 
            matter expert by co-opting academics into the team.
          </p>

          <h3 className="ec-section-subhead">E-Tasks:</h3>
          <p className="ec-section-paragraph">
            Content Writer have detailed write-up on the topic of module as per content structure.The textual description also enriched with multimedia 
supplements, wherever applicable. Multimedia supplements may include images, animations, graphics, video or audio clips, line drawings, 
hand drawings whichever applicable/possible.For each topic or subtopic, Content Writer have used the examples to explain the module..
          </p>

          <h3 className="ec-section-subhead">
            Web Resources / Supplementary Materials:
          </h3>
          <p className="ec-section-paragraph">
            It contains supplementary material for the topic of the module in different forms like other related reading materials, source of further reading (such as books, articles etc.) and links to websites dealing with the topic etc. Supplementary material for respective modules in different forms. Books, articles, research papers, journals, case studies etc. Links to web sites giving additional readings, Wikipedia, blogs, open source content etc., Glossary
          </p>

          <h3 className="ec-section-subhead">
            Curriculum and Pedagogical Standards:
          </h3>
          <p className="ec-section-paragraph">
           In Netcom, The learning object conforms the curriculum in terms of its aims, learning outcomes, objectives,skills and values. The learning object promotes the acquisition of knowledge: content, problem solving, epistemic and inquiry knowledge.The learning object is depict local life or culture.Local life or culture depicted in the learning object must observe sensitivity issues of various ethnic groups in the country.The learning object permits self-paced, self-accessed and self- directed learning.The content is to clear learning strategy to achieve learning.
          </p>
        </section>

        <section className="ec-editorial-block">
          <h2 className="ec-section-heading">
            Our team lead by subject matter expert would have the following
            roles / responsibilities:
          </h2>
          <p className="ec-section-paragraph">
           Subject matter expert / team carried out necessary corrections as determined by the academic coordinators or the peer review team from CEC. The subject matter expert would be responsible for preparing the course within the time limit to make it possible to undertake the production and editing related activities.The subject matter expert also ensured the content is free from plagiarism and copyright issues.
          </p>

          <h3 className="ec-section-subhead">
            Web Resources / Supplementary Materials:
          </h3>
          <p className="ec-section-paragraph">
           It contains supplementary material for the topic of the module in different forms like other related reading materials, source of further reading (such as books, articles etc.) and links to websites dealing with the topic etc. supplementary material for respective modules in different forms. Books, articles, research papers, journals, case studies etc. Links to web sites giving additional readings, Wikipedia, blogs, open source content etc., Glossary
          </p>

          <h3 className="ec-section-subhead">Self-Learning (Audio/Video):</h3>
          <p className="ec-section-paragraph">
            Content Writers provide video tutorial which will explain the topic of the module.It includes Multimedia, Animation, Documentary, Simulation, Virtual Lab, etc,
          </p>

          <h3 className="ec-section-subhead">
            Self - Assessment (Evaluation):
          </h3>
          <p className="ec-section-paragraph">
            Content Writers provide minimum 10-15 questions for each module in Multiple Choice Questions with Answer or True & False Statements.
          </p>

          <h3 className="ec-section-subhead">Presentation:</h3>
          <p className="ec-section-paragraph">
            The presentation is a part of video. The format for presentation would be PPT (PowerPoint Presentation program). During preparation of presentation
          </p>

          <h3 className="ec-section-subhead">Audio Standards:</h3>
          <p className="ec-section-paragraph">
            It Specifies the kinds of music and sound effects if required.Voice over is synchronized with text, video, animation or graphic. Voice Over is appropriate according to gender and age of the character is portrayed.The voice talent is appropriate to the characters appear in the learning object.
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
