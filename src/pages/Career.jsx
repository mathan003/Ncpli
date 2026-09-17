import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Career.css";
import careerBanner from "../assets/image/career/Career banner.jpg";

// Job positions data matching mockups
const careerJobs = [
  {
    id: "animation-and-graphic-designer",
    title: "Animation and Graphic Designer",
    experience: "2 years experience",
    education: "Any Degree/Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Designing and creating engaging 2D/3D animations and visual assets for educational modules.",
      "Developing graphics, illustrations, layouts, and multimedia elements across digital media.",
      "Collaborating with instructional designers to convert instructional scripts into visual storyboards.",
      "Maintaining brand aesthetic, typography, and visual consistency across all creative outputs.",
      "Reviewing and refining graphic assets based on cross-functional feedback."
    ],
    requirementsAndSkills: [
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro).",
      "Strong understanding of layout principles, color palettes, and typography.",
      "Knowledge of 2D/3D animation software and digital illustration tools.",
      "Ability to handle multiple projects and meet established deadlines.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Any Degree or Diploma in Graphic Design, Animation, Visual Communication, or related field.",
      "Minimum 2 years of relevant industry experience with a creative design portfolio."
    ]
  },
  {
    id: "animator",
    title: "Animator",
    experience: "0-1 year experience",
    education: "Bachelor's degree",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Creating fluid 2D and 3D animations for digital educational content and e-learning products.",
      "Keyframing characters, vehicles, environments, and scientific concepts with proper timing.",
      "Working closely with storyboard artists and content creators to match visual pacing.",
      "Reviewing animation sequences to ensure seamless deformation, weight, and timing.",
      "Exporting and optimizing animation assets for interactive web and app deployment."
    ],
    requirementsAndSkills: [
      "Solid knowledge of the 12 principles of animation.",
      "Hands-on experience with Maya, Blender, Adobe Animate, or 3ds Max.",
      "Keen visual eye for character timing, expression, and pacing.",
      "Strong team player with an eagerness to learn modern animation pipelines.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Bachelor's degree in Animation, Fine Arts, Multimedia, or related discipline.",
      "0 - 1 year of experience (Fresher with exceptional showreel is welcome)."
    ]
  },
  {
    id: "storyboard-artist-2d-3d",
    title: "Storyboard Artist 2D/3D",
    experience: "1 years experience",
    education: "Any Degree/Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Translating educational concepts and course scripts into dynamic visual storyboard sequences.",
      "Sketching rough thumbnail compositions, camera angles, perspective, and character poses.",
      "Collaborating with animators, directors, and SME teams to determine scene timing.",
      "Producing clean animatics and presentation pitch boards for project review.",
      "Adjusting frames and camera setups based on editorial and instructional feedback."
    ],
    requirementsAndSkills: [
      "Strong digital drawing and sketching skills with digital drawing tablets (Wacom/iPad).",
      "Deep understanding of cinematography, framing, continuity, and visual storytelling.",
      "Familiarity with Storyboard Pro, Adobe Photoshop, or Clip Studio Paint.",
      "High attention to detail and ability to work in a collaborative studio setup.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Any Degree or Diploma in Fine Arts, Animation, or Visual Communication.",
      "Minimum 1 year of experience in 2D/3D storyboarding or concept sketching."
    ]
  },
  {
    id: "editor",
    title: "Editor",
    experience: "Editing & Visual Effect Skills",
    education: "Any Degree/Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Assembling raw footage, illustrations, animations, voiceovers, and SFX into polished videos.",
      "Performing color grading, audio leveling, noise reduction, and sound mixing.",
      "Applying motion graphics, lower thirds, titles, and visual effects to heighten learner engagement.",
      "Ensuring all exported media meets strict resolution, bitrate, and broadcast quality standards.",
      "Archiving raw materials and project project files systematically for future versioning."
    ],
    requirementsAndSkills: [
      "Mastery of Premiere Pro, DaVinci Resolve, Final Cut Pro, and After Effects.",
      "Strong aesthetic sensibility for rhythm, tempo, and storytelling pacing.",
      "Knowledge of modern video codecs, rendering pipelines, and aspect ratios.",
      "Ability to thrive under tight schedules and adapt quickly to editorial revisions.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Any Degree or Diploma in Visual Communication, Film Editing, or Media Arts.",
      "Demonstrated video editing and visual effect skills with an impressive showreel."
    ]
  },
  {
    id: "rigging",
    title: "Rigging",
    experience: "1 years experience",
    education: "Any Degree/Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Building skeletal rigs and control systems for 3D characters, props, and mechanical assets.",
      "Painting skin weights and setting up blendshapes for realistic facial animations.",
      "Collaborating with modelers to optimize edge loops and deformation topology.",
      "Testing and troubleshooting rigs alongside animators to ensure intuitive manipulation.",
      "Developing basic automation scripts to streamline repetitive rigging tasks."
    ],
    requirementsAndSkills: [
      "In-depth knowledge of Maya or Blender rigging toolsets and constraint systems.",
      "Strong understanding of human and animal anatomy, joint kinematics, and weight distribution.",
      "Basic scripting skills in Python or MEL is an advantage.",
      "Rigorous problem-solving aptitude and meticulous attention to detail.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Any Degree or Diploma in Animation, 3D Computer Graphics, or equivalent.",
      "Minimum 1 year of practical experience as a 3D Rigging Artist."
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    experience: "2-3 years experience",
    education: "Any Degree In Engineering",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Architecting, coding, and maintaining scalable enterprise software applications.",
      "Writing clean, modular, and maintainable code adhering to industry software patterns.",
      "Developing and integrating RESTful APIs, third-party microservices, and databases.",
      "Conducting code reviews, unit and integration testing, and bug fixing.",
      "Participating in agile sprints to deliver edtech solutions that serve thousands of users."
    ],
    requirementsAndSkills: [
      "Proficiency in Java, Python, C#, or modern TypeScript/Node.js.",
      "Solid foundation in Data Structures, Algorithms, and Object-Oriented Programming (OOP).",
      "Hands-on experience with SQL databases (MySQL, PostgreSQL) and NoSQL storage.",
      "Familiarity with Git, CI/CD pipelines, Docker, and cloud platforms (AWS/Azure).",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Any Degree in Engineering (BE / B.Tech in CSE, IT, ECE or MCA).",
      "2 - 3 years of software engineering experience in enterprise or web products."
    ]
  },
  {
    id: "web-developer",
    title: "Web Developer",
    experience: "1 years experience",
    education: "Any Degree In Engineering",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Developing and optimizing responsive, high-performance web applications.",
      "Building reusable React UI components with modular and accessible styling.",
      "Integrating front-end applications with server APIs, headless CMS, and authentication systems.",
      "Ensuring cross-browser compatibility and snappy performance across desktop and mobile.",
      "Troubleshooting, debugging, and continuous improvement of client-facing web portals."
    ],
    requirementsAndSkills: [
      "Strong proficiency in HTML5, CSS3/SCSS, JavaScript (ES6+), and React.js.",
      "Familiarity with state management, REST APIs, JSON, and asynchronous requests.",
      "Experience with modern build tools (Vite, Webpack) and version control with Git.",
      "Good aesthetic sense for clean UI/UX and micro-interactions.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Any Degree in Engineering (B.E / B.Tech / B.Sc Computer Science / IT / BCA / MCA).",
      "Minimum 1 year of professional web development experience."
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    experience: "2 years experience",
    education: "PG and Digital Marketing",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Devising and driving end-to-end digital marketing campaigns across search and social channels.",
      "Executing Search Engine Optimization (SEO) strategies to maximize organic search visibility.",
      "Managing PPC ad campaigns on Google Ads, Meta Ads, and LinkedIn Ads with high ROI.",
      "Tracking website metrics, user journey analytics, and campaign conversions via Google Analytics 4.",
      "Collaborating with design and content teams to produce high-converting marketing collateral."
    ],
    requirementsAndSkills: [
      "Hands-on mastery of Google Ads, Meta Ads Manager, GA4, and SEO keyword tools.",
      "Strong analytical mindset with ability to interpret data and generate actionable insights.",
      "Competency in email marketing automation, content strategy, and lead nurturing funnels.",
      "Excellent written communication and copywriting skills.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Post Graduate Degree (MBA, M.Com, MA, or PG Diploma) with certified Digital Marketing training.",
      "Minimum 2 years of proven digital marketing campaign experience."
    ]
  },
  {
    id: "marketing-executive",
    title: "Marketing Executive",
    experience: "1 year experience",
    education: "UG/PG Degree",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Conducting outreach to schools, colleges, and training institutions to introduce Netcom solutions.",
      "Building and cultivating long-term client relationships through regular communication and visits.",
      "Preparing and presenting tailored product demonstrations and commercial proposals.",
      "Representing Netcom at educational expos, conferences, and institutional roadshows.",
      "Analyzing competitor offerings and reporting client feedback to leadership."
    ],
    requirementsAndSkills: [
      "Strong interpersonal, verbal communication, and consultative presentation abilities.",
      "High energy, self-driven work ethic with a result-oriented mindset.",
      "Competency with CRM software, MS Office (PowerPoint, Excel), and presentation tools.",
      "Willingness to travel locally and regionally for institutional meetings.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "UG or PG Degree in Business Administration, Marketing, Commerce, or related disciplines.",
      "Minimum 1 year of marketing or business development experience (edtech preferred)."
    ]
  },
  {
    id: "telemarketing-executive",
    title: "Telemarketing Executive",
    experience: "0-1 year experience",
    education: "UG Degree",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Engaging potential educational clients and school administrators via outbound phone calls.",
      "Clearly communicating the features and value proposition of Netcom's learning products.",
      "Identifying customer needs and booking product demonstration appointments for sales managers.",
      "Recording detailed customer details, conversation notes, and follow-up schedules in the CRM.",
      "Achieving daily and monthly target call volumes and qualified lead quotas."
    ],
    requirementsAndSkills: [
      "Pleasing phone demeanor, active listening skills, and polite communication.",
      "Ability to handle customer questions, objections, and inquiries with composure.",
      "Basic computer literacy, CRM navigation, and fast typing speed.",
      "Goal-driven, punctual, and resilient personality.",
      "Languages Must Know: Tamil & English."
    ],
    qualificationsAndExperience: [
      "Any Under Graduate (UG) Degree.",
      "0 - 1 year experience (Freshers with strong verbal articulation are welcome)."
    ]
  },
  {
    id: "sme",
    title: "SME (SUBJECT MATTER EXPERT)",
    experience: "5-10 years experience",
    education: "Any Post Graduate or PhD",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Concept Creation",
      "Concepts Segregation And Script Writing",
      "Question Bank Preparation (Based On Guidelines)",
      "Subject Matter Explanation To Content Developers",
      "Concept Videos Review And Conveying Feedback",
      "Check For The Corrections Update In The Mentioned Files",
      "Task Completion On Time Must Be Ensured",
      "Vast Subject Knowledge",
      "Must Be Able To Handle The Relevant Subjects In All Standards Also"
    ],
    requirementsAndSkills: [
      "List Of Subjects (Tamilnadu State Board): All Subjects Other Than Languages - Both Tamil And English Medium",
      "1st-5th Std: Tamil, English, Mathematics, Environmental Science (1st & 2nd), Science (3rd-5th) And Social Science (3rd-5th)",
      "6th-10th Std: Tamil, English, Mathematics, Science And Social Science.",
      "11th And 12th Std: Tamil, English, Advanced Tamil, Communicative English, Mathematics, Physics, Chemistry, Biology, Bio-Botany, Bio-Zoology, Microbiology, Bio-Chemistry, Computer Science, Computer Applications, Accountancy, Commerce, Economics, Statistics, Business Mathematics And Statistics, Ethics And Indian Culture, Geography, History, Political Science And Home Science."
    ],
    qualificationsAndExperience: [
      "Any Post Graduate Or PhD In The Following Subjects With A Minimum Of 5-10 Years Of Experience In Teaching And Curriculum Creation.",
      "Teachers And Tutors Or Curriculum Developers."
    ]
  },
  {
    id: "hardware-engineer",
    title: "Hardware Engineer",
    experience: "Fresher/ Experienced",
    education: "B.Sc IT, CS (or) Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Designing And Building Hardware",
      "Recommending New Hardware Designs",
      "Performing Tests Of New Hardware And Software",
      "Troubleshooting And Debugging Performance Issues",
      "Working With Vendors And Hardware Suppliers To Implement New Designs",
      "Supporting The Hardware Engineering Team",
      "Providing Technical Support For Hardware Issues",
      "Following Industry Standard Processes And Procedures",
      "Collaborating With Other Engineer",
      "Willingness To Travel Or Relocate."
    ],
    requirementsAndSkills: [
      "Hardware Development, Analysis, And Testing",
      "Desktop Management Interface.",
      "Cloud Management.",
      "Network Configuration.",
      "WAN/LAN.",
      "Technical Support And Troubleshooting",
      "Network Security.",
      "Languages Must Know Tamil & English."
    ],
    qualificationsAndExperience: [
      "B.Sc IT, CS (Or) Diploma",
      "Fresher/ Experienced"
    ]
  }
];

// Helper to normalize and find a role
function findJobBySlug(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase().trim();
  return (
    careerJobs.find(
      (job) =>
        job.id === s ||
        job.id.replace(/-/g, "") === s.replace(/-/g, "") ||
        (s.includes("hardware") && job.id === "hardware-engineer") ||
        (s.includes("sme") && job.id === "sme")
    ) || null
  );
}

// Icon: Briefcase
function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
  );
}

// Icon: Graduation Cap
function IconGraduation() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm0 14.9L6.8 15v-3.79l5.2 2.84 5.2-2.84V15L12 17.9z" />
    </svg>
  );
}

// Icon: Map Pin
function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

// Icon: Styled Arrow (matches mockups)
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.7 12l-8.85-7.85-1.42 1.42L16.86 11H5v2z" />
    </svg>
  );
}

// Icon: Styled Green Checkmark (matches mockups)
function IconCheckmark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
  );
}

// Icon: Close (X)
function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Career() {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const selectedJob = findJobBySlug(roleId);

  // Application modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeApplyingJob, setActiveApplyingJob] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    message: ""
  });

  // Scroll to top on route or role change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [roleId]);

  // Handle Explore the Job click
  const handleExploreClick = (e) => {
    e.preventDefault();
    if (selectedJob) {
      navigate("/career#career-roles");
    } else {
      const el = document.getElementById("career-roles");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openApplyModal = (job) => {
    setActiveApplyingJob(job || selectedJob);
    setSubmitSuccess(false);
    setIsModalOpen(true);
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
    setSubmitSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Pre-fill mailto URL to support immediate email drafting to HR
    const jobTitle = activeApplyingJob ? activeApplyingJob.title : "General Application";
    const subject = encodeURIComponent(`Job Application: ${jobTitle} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Experience: ${formData.experience}\n` +
      `Portfolio/Resume Link: ${formData.portfolio}\n\n` +
      `Cover Note:\n${formData.message}`
    );

    // Open mailto link
    window.location.href = `mailto:support@ncpli.com?subject=${subject}&body=${body}`;

    setSubmitSuccess(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="career-page">
      {/* ====================================================================
          HERO BANNER
          ==================================================================== */}
      <section
        className="career-hero"
        style={{ "--career-banner-bg": `url("${careerBanner}")` }}
      >
        <div className="career-hero-container">
          <div className="career-hero-content">
            <h1 className="career-hero-title">career</h1>

            <nav className="career-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="career-breadcrumb-sep">&gt;</span>
              {selectedJob ? (
                <>
                  <Link to="/career">Career</Link>
                  <span className="career-breadcrumb-sep">&gt;</span>
                  <span className="career-breadcrumb-current">Career Details</span>
                </>
              ) : (
                <span className="career-breadcrumb-current">Career</span>
              )}
            </nav>

            <div className="career-hero-cta">
              <span className="career-hero-kicker">Grow With Us</span>
              <button
                type="button"
                className="career-explore-btn"
                onClick={handleExploreClick}
              >
                Explore the job
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          VIEW 1: JOB DETAIL VIEW (when a role is selected)
          ==================================================================== */}
      {selectedJob ? (
        <section className="career-detail-section" id="career-detail-content">
          <div className="career-detail-header">
            <h2 className="career-detail-title">{selectedJob.title}</h2>
            <div className="career-detail-pills">
              <span className="career-detail-pill">
                <span className="career-meta-icon"><IconBriefcase /></span>
                {selectedJob.experience}
              </span>
              <span className="career-detail-pill">
                <span className="career-meta-icon"><IconGraduation /></span>
                {selectedJob.education}
              </span>
              <span className="career-detail-pill">
                <span className="career-meta-icon"><IconMapPin /></span>
                {selectedJob.location}
              </span>
            </div>
          </div>

          {/* 1. Job Description */}
          <div className="career-detail-block">
            <h3 className="career-block-heading">Job Description:</h3>
            <ul className="career-spec-list">
              {selectedJob.jobDescription.map((item, idx) => (
                <li key={idx} className="career-spec-item">
                  <span className="career-arrow-icon"><IconArrow /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Requirements And Skills */}
          <div className="career-detail-block">
            <h3 className="career-block-heading">Requirements And Skills:</h3>
            <ul className="career-spec-list">
              {selectedJob.requirementsAndSkills.map((item, idx) => (
                <li key={idx} className="career-spec-item">
                  <span className="career-check-icon"><IconCheckmark /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Qualifications And Experience */}
          <div className="career-detail-block">
            <h3 className="career-block-heading">Qualifications And Experience:</h3>
            <ul className="career-spec-list">
              {selectedJob.qualificationsAndExperience.map((item, idx) => (
                <li key={idx} className="career-spec-item">
                  <span className="career-arrow-icon"><IconArrow /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom actions */}
          <div className="career-detail-actions">
            <button
              type="button"
              className="career-apply-btn"
              onClick={() => openApplyModal(selectedJob)}
            >
              Apply Now
            </button>
            <Link to="/career" className="career-back-btn">
              ← View All Positions
            </Link>
          </div>
        </section>
      ) : (
        /* ====================================================================
           VIEW 2: 12-ROLE LISTING VIEW ("Join Our Team!")
           ==================================================================== */
        <section className="career-listing-section" id="career-roles">
          <h2 className="career-section-title">Join Our Team!</h2>

          <div className="career-grid">
            {careerJobs.map((job) => (
              <article key={job.id} className="career-card">
                <h3 className="career-card-title">{job.title}</h3>

                <div className="career-card-meta">
                  {/* Experience */}
                  <div className="career-meta-row">
                    <span className="career-meta-icon" title="Experience">
                      <IconBriefcase />
                    </span>
                    <span className="career-meta-text">{job.experience}</span>
                  </div>

                  {/* Education */}
                  <div className="career-meta-row">
                    <span className="career-meta-icon" title="Education">
                      <IconGraduation />
                    </span>
                    <span className="career-meta-text">{job.education}</span>
                  </div>

                  {/* Location */}
                  <div className="career-meta-row">
                    <span className="career-meta-icon" title="Location">
                      <IconMapPin />
                    </span>
                    <span className="career-meta-text">{job.location}</span>
                  </div>
                </div>

                <div className="career-card-footer">
                  <Link to={`/career/${job.id}`} className="career-details-btn">
                    Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ====================================================================
          APPLICATION MODAL
          ==================================================================== */}
      {isModalOpen && (
        <div className="career-modal-backdrop" onClick={closeApplyModal}>
          <div
            className="career-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="career-modal-header">
              <h3>Apply for {activeApplyingJob?.title || "Role"}</h3>
              <button
                type="button"
                className="career-modal-close"
                onClick={closeApplyModal}
                aria-label="Close modal"
              >
                <IconClose />
              </button>
            </div>

            <div className="career-modal-body">
              {submitSuccess ? (
                <div className="career-modal-success">
                  <div className="career-success-icon">
                    <IconCheckmark />
                  </div>
                  <h4>Application Drafted!</h4>
                  <p>
                    Your email client has been opened with your application details.
                    You can also email your resume directly to{" "}
                    <strong>support@ncpli.com</strong>.
                  </p>
                  <button
                    type="button"
                    className="career-apply-btn"
                    onClick={closeApplyModal}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form className="career-form" onSubmit={handleFormSubmit}>
                  <div className="career-form-row">
                    <div className="career-form-group">
                      <label htmlFor="applicant-name">Full Name *</label>
                      <input
                        id="applicant-name"
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="career-form-group">
                      <label htmlFor="applicant-email">Email Address *</label>
                      <input
                        id="applicant-email"
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="career-form-row">
                    <div className="career-form-group">
                      <label htmlFor="applicant-phone">Phone Number *</label>
                      <input
                        id="applicant-phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="career-form-group">
                      <label htmlFor="applicant-experience">Experience *</label>
                      <input
                        id="applicant-experience"
                        type="text"
                        name="experience"
                        required
                        placeholder="e.g. 2 years / Fresher"
                        value={formData.experience}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="career-form-group">
                    <label htmlFor="applicant-portfolio">
                      Resume or Portfolio Link (Google Drive / LinkedIn / GitHub) *
                    </label>
                    <input
                      id="applicant-portfolio"
                      type="url"
                      name="portfolio"
                      required
                      placeholder="https://drive.google.com/..."
                      value={formData.portfolio}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="career-form-group">
                    <label htmlFor="applicant-message">Brief Note / Message</label>
                    <textarea
                      id="applicant-message"
                      name="message"
                      placeholder="Tell us briefly why you're a great fit for this role..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="career-form-submit">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Career;
