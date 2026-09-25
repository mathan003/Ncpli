import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./Career.css";
import careerBanner from "../assets/image/career/Career banner.jpg";

// Job positions data matching mockups
const careerJobs = [
  {
    id: "animation-and-graphic-designer",
    title: "Animation And Graphic Designer",
    experience: "2 years experience",
    education: "Any Degree/Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Study Design Briefs And Determine Requirements.",
      "Advise Clients On Strategies To Engage Target Audiences.",
      "Identify The Best Ways To Illustrate And Communicate Clients' Vision While Complying With Design Best Practices.",
      "Create Designs Using Illustration, Photo Editing And Layout Software.",
      "Select Colors, Images, Typography And Layout For Communication Materials, Including Websites, Logos, Signs, Advertisements, And Social Media Posts.",
      "Produce Drafts For Client Review And Make Revisions Based On Feedback Received.",
      "Collaborate With Other Team Members, Such As Marketing, Sales, And Business Operations, Throughout The Various Phases Of A Project.",
      "Review Designs For Errors Before They Are Printed Or Published.",
      "Keep Up-To-Date With The Latest Design Trends, Tools, And Technologies."
    ],
    requirementsAndSkills: [
      "Autodesk Maya",
      "Blender",
      "Adobe Animate CC",
      "Adobe Premiere",
      "Adobe After Effects",
      "Photoshop",
      "Corel Draw"
    ],
    qualificationsAndExperience: [
      "Any Degree/Diploma With Animation Course From Any Reputed Company/Institute.",
      "Minimum 2 Years Experienced.",
      "Must Be Fluent In Tamil And English."
    ]
  },
  {
    id: "animator",
    title: "Animator",
    experience: "0-1 year experience",
    education: "Bachelor's degree",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Create Expressive Character Animation Portraying A Wide Range Of Emotions.",
      "Recommend The Best Approaches To Integrate 3-D And 2-D Components Into Final Commercial Quality Products.",
      "Create High-Quality Animations By Utilizing Both Hard Key Animation And Motion Capture Data.",
      "Collaborating With The Client Team Members To Understand Needs, Review Scripts, Design Storyboards, And Create And Edit Animations.",
      "Using Software And Other Techniques To Produce Animations.",
      "Listening To Feedback And Altering Animations To Better Suit Client Needs.",
      "Using Creativity And Artistic Techniques To Tell A Story Or Provide Information In Visual Form.",
      "Researching Industry Trends And Developments And Learning New Applications.",
      "To Work With On Subject Development And Children Stories."
    ],
    requirementsAndSkills: [
      "Autodesk Maya",
      "Blender",
      "Adobe Animate CC",
      "Adobe Premiere",
      "Adobe After Effects",
      "Photoshop",
      "Corel Draw",
      "Flash"
    ],
    qualificationsAndExperience: [
      "Bachelor's Degree Or Certificate In Computer Animation, Fine Arts, Graphic Design, Or Related Field.",
      "Experience 0-1 Year.",
      "Must Be Fluent In Tamil And English."
    ]
  },
  {
    id: "storyboard-artist-2d-3d",
    title: "Storyboard Artist 2D/3D",
    experience: "1 years experience",
    education: "Any Degree/Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Liaising With Writers, Animators And Directors Regarding The Look, Style And Level Of Detail Required For The Storyboard Of Each Production.",
      "Reading And Interpreting Scripts.",
      "Breaking Down The Script With The Director To Identify Key Scenes And Plan Them Visually.",
      "Sequencing The Scenes From A Script Into Storyboard Format Using Panels Of Images.",
      "Including Special Effects In The Storyboard Frames.",
      "Identifying Lighting Requirements And Articulating Circles Of Tension Within Each Scene.",
      "Including Key Dialogue Or Scene Directions Within Each Frame.",
      "Briefing Animators On Key Scenes Within The Storyboard.",
      "Amending Storyboard Scenes During The Course Of Production."
    ],
    requirementsAndSkills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Ability To Collaborate Effectively With Concept Artists, Writers, Directors, Clients, Etc To Visualize The Story",
      "Training In Animation",
      "Presentation Skills",
      "Fluency In Visual Storytelling"
    ],
    qualificationsAndExperience: [
      "Any Degree/Diploma With Animation Course From Any Reputed Company/Institute.",
      "Minimum 1 Year Experienced.",
      "Must Be Fluent In Tamil And English."
    ]
  },
  {
    id: "editor",
    title: "Editor",
    experience: "Editing & Visual Effect Skills",
    education: "Any Degree/Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "The Editor Has To Discuss With The Team Thinking Of A Concept For A Story And Align Each Others' Vision.",
      "The Editor Helps To Decide On The Look, Feel, Mood And Style For The Animation And Characters.",
      "The Editor Discuss With The Team To Get All The Details Concerning Dialogue And Camera Angles.",
      "A Static Visual Display Of Each Scene Is Created With The Placement Of Desired Sound And Music.",
      "This Is Essentially A Rough Draft Before Animating Begins To Check The Flow Of The Story And Possible Changes Of The Order Of The Visuals Or Sound.",
      "Editing And Reordering The Footage Is Essential In Telling The Story In The Most Direct Way Possible, Following The Director's Vision.",
      "The Editor Has To Check That The Animations Have Good Timing And That The Sound And Music Conveys The Desired Mood And Pace.",
      "Changing Between Compositions And Alternating Footage To Create The Desired Effect.",
      "Ensures The Sound Effects Play In Time To The Visuals."
    ],
    requirementsAndSkills: [
      "Have Excellent Editing And Visual Effect Skills.",
      "Must Be Fluent In Tamil And English. Multilingual Candidates Are Preferable."
    ],
    qualificationsAndExperience: [
      "Any Degree/Diploma.",
      "Video Editing/Graphic Designing Certification Course From Any Reputed Institute."
    ]
  },
  {
    id: "rigging",
    title: "Rigging",
    experience: "1 years experience",
    education: "Any Degree/Diploma",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Has A Solid Grasp And Understanding Of The Principles Of Anatomy And Expression.",
      "Knowledge Of Traditional And Computer 2D And 3D Animation Techniques.",
      "Experience With 3D Modelling And Animation Systems.",
      "Advanced Knowledge Of Maya",
      "Self - Driven, Good Communicator And A Great Team Player.",
      "Excellent Organizational And Communication Skills."
    ],
    requirementsAndSkills: [
      "Have Excellent Animation And Rigging Skills.",
      "Must Be Fluent In Tamil And English."
    ],
    qualificationsAndExperience: [
      "Any Degree/Diploma With Animation Certification Course From Any Reputed Institute.",
      "Minimum 1 Yr Experienced."
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    experience: "2-5 years experience",
    education: "Any Degree In Engineering",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Write Well Designed, Testable, Efficient Code By Using Best Software Development Practices",
      "Create Website Layout/User Interface By Using Standard HTML/CSS Practices",
      "Integrate Data From Various Back-End Services And Databases",
      "Gather And Refine Specifications And Requirements Based On Technical Needs",
      "Create And Maintain Software Documentation",
      "Be Responsible For Maintaining, Expanding, And Scaling Our Site",
      "Stay Plugged Into Emerging Technologies/Industry Trends And Apply Them Into Operations And Activities",
      "Cooperate With Web Designers To Match Visual-Design Intent",
      "Maintain And Configure MongoDB Instances",
      "Keep Clean Documentation Of The Database Setup And Architecture",
      "Write Procedures For Backup And Disaster Recovery",
      "Ensure That The Databases Achieve Maximum Performance And Availability",
      "Design Indexing Strategies",
      "Configure, Monitor, And Deploy Replica Sets",
      "Upgrade Databases Through Patches",
      "Create Roles And Users And Set Their Permissions",
      "Experience With The Core AWS Services, Plus The Specifics Mentioned In This Job Description.",
      "Good Background In Linux/Unix Administration"
    ],
    requirementsAndSkills: [
      "Javascript",
      "React JS",
      "CSS",
      "MongoDB",
      "MySQL",
      "Node JS",
      "Express",
      "PHP",
      "Amazon Web Services (AWS)"
    ],
    qualificationsAndExperience: [
      "B.E | M.E | B.Tech | M.Tech | BCA | MCA",
      "2 – 5 Years Experience In Software Development"
    ]
  },
  {
    id: "web-developer",
    title: "Web Developer",
    experience: "1 years experience",
    education: "Any Degree In Engineering",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Website And Software Application Designing, Building, Or Maintaining.",
      "Using Scripting Or Authoring Languages, Management Tools, Content Creation Tools, Applications, And Digital Media.",
      "Work Efficient And Time Responsible Person",
      "Must Be Aiming To Work For The Longer Run",
      "Works To Design And Develop Websites In Both Static And Dynamic.",
      "Based On Client Requirements And Demands, Develop The Sites With The Add-On Features.",
      "Project Accomplishment, Team-Playing And Task Management."
    ],
    requirementsAndSkills: [
      "Bachelors Degree In Web Development Or Related Field, Or Relevant Experience.",
      "Solid Knowledge And Experience In Programming Applications.",
      "Proficient In JavaScript, HTML, CSS.",
      "Proficient In My SQL.",
      "Dedicated Team Player.",
      "Ability To Thrive In A Fast-Paced Environment.",
      "Solid Ability In Both Written And Verbal Communication."
    ],
    qualificationsAndExperience: [
      "B.E | M.E | B.Tech | M.Tech | BCA | MCA",
      "Minimum 1 Year"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    experience: "2 years experience",
    education: "PG and Digital Marketing",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Plan And Execute All Digital Marketing, Including SEO/SEM, Marketing Database, Email, Social Media And Display Advertising Campaigns.",
      "Design, Build And Maintain Our Social Media Presence.",
      "Measure And Report Performance Of All Digital Marketing Campaigns.",
      "Identify Trends And Insights, And Optimize Spend And Performance Based On The Insights.",
      "Brainstorm New And Creative Growth Strategies",
      "Plan, Execute, And Measure Experiments And Conversion Tests.",
      "Collaborate With Internal Teams To Create Landing Pages And Optimize User Experience.",
      "Utilize Strong Analytical Ability To Evaluate End-To-End Customer Experience Across Multiple Channels And Customer Touch Points.",
      "Instrument Conversion Points And Optimize User Funnels.",
      "Collaborate With Agencies And Other Vendor Partners.",
      "Evaluate Emerging Technologies. Provide Thought Leadership And Perspective For Adoption Where Appropriate."
    ],
    requirementsAndSkills: [
      "Proven Working Experience In Digital Marketing",
      "Demonstrable Experience Leading And Managing SEO/SEM, Marketing Database, Email, Social Media And/Or Display Advertising Campaigns",
      "Highly Creative With Experience In Identifying Target Audiences And Devising Digital Campaigns That Engage, Inform And Motivate.",
      "Experience In Optimizing Landing Pages And User Funnels",
      "Solid Knowledge Of Website Analytics Tools (E.G., Google Analytics)/Working Knowledge Of Ad Serving Tools",
      "Experience In Setting Up And Optimizing Google Adwords Campaigns",
      "Strong Analytical Skills And Data-Driven Thinking",
      "Up-To-Date With The Latest Trends And Best Practices In Online Marketing And Measurement."
    ],
    qualificationsAndExperience: [
      "PG With Digital Marketing Course",
      "Minimum 2 Years"
    ]
  },
  {
    id: "marketing-executive",
    title: "Marketing Executive",
    experience: "1 year experience",
    education: "UG/PG Degree",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Create Awareness Of And Develop The Brand You Are Marketing",
      "Communicate With Target Audiences And Build And Develop Customer Relationships",
      "Help With Marketing Plans, Advertising, Direct Marketing And Campaigns",
      "Work Closely With In-House Or External Creative Agencies To Design Marketing Materials Such As Brochures And Adverts",
      "Write And Proofread Marketing Copy For Both Online And Print Campaigns",
      "Produce Creative Content, Including Videos And Blog Posts",
      "Run Social Media Channels",
      "Organise And Attend Events Such As Conferences, Seminars, Receptions And Exhibitions",
      "Arrange The Effective Distribution Of Marketing Materials Maintain And Update Customer Databases",
      "Conduct Market Research, For Example Using Customer Questionnaires And Focus Groups",
      "Develop Relationships With Key Stakeholders Both Internal And External"
    ],
    requirementsAndSkills: [
      "Good Teamwork And Ability To Foster Good working Relationships",
      "Communication And Interpersonal Skills",
      "Creativity",
      "Analytical And Strategic Thinking",
      "Influencing And Negotiation Skill",
      "Ability To Work Under Pressure",
      "A Flexible Approach To Work"
    ],
    qualificationsAndExperience: [
      "UG/PG Degree In Marketing, Sales, Or Similar",
      "Minimum 1 Year"
    ]
  },
  {
    id: "telemarketing-executive",
    title: "Telemarketing Executive",
    experience: "0-1 year experience",
    education: "UG Degree",
    location: "Tirunelveli & Chennai",
    jobDescription: [
      "Completion Of A Marketing-Related Training Program Is Ideal.",
      "Experience As A Telemarketing Executive Within The Industry.",
      "Considerable Experience As A Telemarketer Prior To Your Promotion.",
      "Knowledge Of All Pertinent Consumer Rights And Responsibilities",
      "Excellent Communication, Both Written And Verbal.",
      "Ability To Conceptualize, Communicate, And Fulfill Visions",
      "Top-Notch Leadership, Mentorship, And Capacity Development Abilities",
      "Capacity To Remain Respectful, Particularly When Speaking To Disgruntled Customers"
    ],
    requirementsAndSkills: [
      "Ability To Conduct Sales And Marketing Calls And Knowledge Of Sales Techniques",
      "Relaxed, Confident Telephone Manner, And Strong Communication, Negotiation And Persuasion Skills.",
      "Ability To Convey Message To Customer And Elicit Answers",
      "Computer Skills",
      "Result-Oriented Approach.",
      "Good Team Worker",
      "Patient, Determined And Motivated"
    ],
    qualificationsAndExperience: [
      "UG Degree In Marketing, Sales, Or Similar.",
      "0-1 Year Experience"
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
  const clean = s.replace(/[^a-z0-9]/g, "");
  return (
    careerJobs.find((job) => {
      if (job.id === s) return true;
      if (job.id.replace(/[^a-z0-9]/g, "") === clean) return true;
      if (job.title.toLowerCase().replace(/[^a-z0-9]/g, "") === clean) return true;
      return false;
    }) ||
    (s.includes("hardware") ? careerJobs.find((j) => j.id === "hardware-engineer") : null) ||
    (s.includes("sme") ? careerJobs.find((j) => j.id === "sme") : null) ||
    (s.includes("telemarketing") ? careerJobs.find((j) => j.id === "telemarketing-executive") : null) ||
    (s.includes("market") && !s.includes("tele") && !s.includes("digit") ? careerJobs.find((j) => j.id === "marketing-executive") : null) ||
    (s.includes("digit") ? careerJobs.find((j) => j.id === "digital-marketing") : null) ||
    (s.includes("web") ? careerJobs.find((j) => j.id === "web-developer") : null) ||
    (s.includes("soft") ? careerJobs.find((j) => j.id === "software-development") : null) ||
    (s.includes("rig") ? careerJobs.find((j) => j.id === "rigging") : null) ||
    (s.includes("edit") ? careerJobs.find((j) => j.id === "editor") : null) ||
    (s.includes("story") ? careerJobs.find((j) => j.id === "storyboard-artist-2d-3d") : null) ||
    (s.includes("graph") ? careerJobs.find((j) => j.id === "animation-and-graphic-designer") : null) ||
    (s.includes("animat") && !s.includes("graph") ? careerJobs.find((j) => j.id === "animator") : null) ||
    null
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

// Icon: Styled Green Checkmark (matches mockups)
function IconCheckmark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
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
  const selectedJob = findJobBySlug(roleId);

  // Application modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeApplyingJob, setActiveApplyingJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [savedFileName, setSavedFileName] = useState("");
  const [savedFormData, setSavedFormData] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef(null);

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

  const openApplyModal = (job) => {
    setActiveApplyingJob(job || selectedJob);
    setSubmitStatus("idle");
    setIsSubmitting(false);
    setResumeFile(null);
    setSavedFileName("");
    setSavedFormData(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setIsModalOpen(true);
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
    setSubmitStatus("idle");
    setIsSubmitting(false);
    setResumeFile(null);
    setSavedFileName("");
    setSavedFormData(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate PDF file format
    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      setFileError("Please choose a valid PDF file (.pdf).");
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10 MB limit for email attachments. Please upload a smaller PDF file.");
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setFileError("");
    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const getMailData = (customData) => {
    const d = customData || savedFormData || {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      portfolio: formData.portfolio,
      message: formData.message,
      jobTitle: activeApplyingJob?.title || "Role",
      fileName: savedFileName,
      fileSizeMB: "",
    };
    const recipientEmail = "hr@ncpli.com";
    const subject = `Job Application: ${d.jobTitle} - ${d.name}`;
    const body =
`Dear Netcom HR Team,

I am applying for the position of "${d.jobTitle}" at Netcom Computers.

APPLICANT DETAILS:
-------------------
• Full Name: ${d.name}
• Email: ${d.email}
• Phone: ${d.phone}
• Experience: ${d.experience}
• Job Position: ${d.jobTitle}
${d.portfolio ? `• Portfolio/Profile: ${d.portfolio}\n` : ""}${d.fileName ? `• Attached Resume PDF: ${d.fileName}${d.fileSizeMB ? ` (${d.fileSizeMB} MB)` : ""}\n` : ""}
COVER MESSAGE:
--------------
${d.message || "Please find my attached resume for your consideration."}

--------------------------------------------------
[IMPORTANT: Please attach your resume file '${d.fileName || "PDF"}' to this email before clicking Send.]

Best regards,
${d.name}
${d.phone}
${d.email}`;

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return { recipientEmail, subject, body, mailtoUrl, d };
  };

  const triggerEmailDefault = (customData) => {
    const { mailtoUrl } = getMailData(customData);
    window.location.href = mailtoUrl;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!resumeFile) {
      setFileError("Please upload your resume in PDF format (mandatory).");
      return;
    }

    setFileError("");
    const currentFile = resumeFile;
    const currentName = currentFile.name;
    setSavedFileName(currentName);

    const jobTitle = activeApplyingJob ? activeApplyingJob.title : "General Application";

    const submissionSnapshot = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      portfolio: formData.portfolio,
      message: formData.message,
      jobTitle,
      fileName: currentName,
      fileSizeMB: (currentFile.size / (1024 * 1024)).toFixed(2),
    };
    setSavedFormData(submissionSnapshot);

    // Show the "Application Email Prepared! / IMPORTANT STEP" screen for ALL applications
    setSubmitStatus("ready_to_send");
    setIsSubmitting(false);

    // Trigger email client immediately on direct user click (prevent popup/mailto blocking on Vercel/mobile)
    triggerEmailDefault(submissionSnapshot);

    // Also send submission to FormSubmit in background without blocking UI
    try {
      const postData = new FormData();
      postData.append("Applicant_Name", formData.name);
      postData.append("Email_Address", formData.email);
      postData.append("Phone_Number", formData.phone);
      postData.append("Experience", formData.experience);
      postData.append("Job_Position", jobTitle);
      postData.append("Portfolio_Link", formData.portfolio || "Not provided");
      postData.append("Cover_Message", formData.message || "Not provided");
      postData.append("attachment", currentFile, currentName);
      postData.append("_subject", `Job Application: ${jobTitle} - ${formData.name}`);
      postData.append("_template", "table");
      postData.append("_captcha", "false");
      postData.append("_replyto", formData.email);

      fetch("https://formsubmit.co/ajax/hr@ncpli.com", {
        method: "POST",
        body: postData,
        headers: {
          Accept: "application/json",
        },
      }).catch(() => {});
    } catch {
      // background submission non-blocking
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      portfolio: "",
      message: ""
    });
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="career-page">
      {/* ====================================================================
          HERO BANNER
          ==================================================================== */}
      <section className="career-hero" aria-label="Career Hero Banner">
        <img
          src={careerBanner}
          alt="Careers at Netcom Computers"
          className="career-hero-image"
        />
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          {selectedJob ? (
            <>
              <Link to="/career">Career</Link>
              <span className="cs-breadcrumb-separator">›</span>
              <span className="cs-breadcrumb-current">{selectedJob.title}</span>
            </>
          ) : (
            <span className="cs-breadcrumb-current">Career</span>
          )}
        </nav>
      </div>

      {/* ====================================================================
          VIEW 1: JOB DETAIL VIEW (when a role is selected)
          ==================================================================== */}
      {selectedJob ? (
        <section className="career-detail-section" id="career-detail-content">
          <div className="career-detail-header">
            <h2 className="career-detail-title">{selectedJob.title}</h2>
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
                    Apply
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
              {submitStatus !== "idle" ? (
                <div className="career-modal-success">
                  <div className="career-success-icon">
                    <IconCheckmark />
                  </div>
                  <h4>Application Email Prepared!</h4>
                  <p>
                    Your application to <strong>hr@ncpli.com</strong> has been prepared with your details.
                  </p>
                  <div className="career-attach-alert">
                    <span className="career-attach-badge">IMPORTANT STEP</span>
                    <p>
                      Please ensure your resume PDF (<strong>{savedFileName}</strong>) is attached to the email before clicking <strong>Send</strong>.
                    </p>
                  </div>
                  <div className="career-email-actions">
                    <button
                      type="button"
                      className="career-mailto-retry-btn"
                      onClick={() => triggerEmailDefault()}
                    >
                      ✉️ Open Email
                    </button>
                  </div>
                </div>
              ) : (
                <form className="career-form" onSubmit={handleFormSubmit}>
                  <div className="career-form-row">
                    <div className="career-form-group">
                      <label htmlFor="applicant-name">
                        Full Name <span className="career-required-star">*</span>
                      </label>
                      <input
                        id="applicant-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Mathan"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="career-form-group">
                      <label htmlFor="applicant-email">
                        Email Address <span className="career-required-star">*</span>
                      </label>
                      <input
                        id="applicant-email"
                        type="email"
                        name="email"
                        required
                        placeholder="Mathan@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="career-form-row">
                    <div className="career-form-group">
                      <label htmlFor="applicant-phone">
                        Phone Number <span className="career-required-star">*</span>
                      </label>
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
                      <label htmlFor="applicant-experience">
                        Experience <span className="career-required-star">*</span>
                      </label>
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

                  {/* Resume Upload (PDF) */}
                  <div className="career-form-group">
                    <label htmlFor="applicant-resume">
                      Resume (PDF) <span className="career-required-star">*</span>
                    </label>

                    <input
                      ref={fileInputRef}
                      id="applicant-resume"
                      type="file"
                      name="resume"
                      accept=".pdf,application/pdf"
                      onChange={handleFileChange}
                      className="career-file-input-hidden"
                    />

                    {!resumeFile ? (
                      <div
                        className="career-upload-box"
                        onClick={() => fileInputRef.current?.click()}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            fileInputRef.current?.click();
                          }
                        }}
                      >
                        <div className="career-upload-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="12" y1="18" x2="12" y2="12" />
                            <line x1="9" y1="15" x2="15" y2="15" />
                          </svg>
                        </div>
                        <div className="career-upload-text">
                          <button
                            type="button"
                            className="career-add-resume-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              fileInputRef.current?.click();
                            }}
                          >
                            + Add Resume
                          </button>
                          <span className="career-upload-hint">
                            Upload PDF file (Max 10MB) • <span className="career-required-star">*</span> Mandatory
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="career-file-selected-box">
                        <div className="career-file-info">
                          <span className="career-file-badge">PDF</span>
                          <div className="career-file-details">
                            <span className="career-file-name" title={resumeFile.name}>
                              {resumeFile.name}
                            </span>
                            <span className="career-file-size">
                              {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                            </span>
                          </div>
                        </div>
                        <div className="career-file-actions">
                          <button
                            type="button"
                            className="career-file-change-btn"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            Change
                          </button>
                          <button
                            type="button"
                            className="career-file-remove-btn"
                            onClick={handleRemoveFile}
                            aria-label="Remove selected PDF"
                            title="Remove file"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    )}

                    {fileError && (
                      <p className="career-file-error" role="alert">
                        {fileError}
                      </p>
                    )}
                  </div>

                  <div className="career-form-group">
                    <label htmlFor="applicant-portfolio">
                      Portfolio or Profile Link (Optional)
                    </label>
                    <input
                      id="applicant-portfolio"
                      type="url"
                      name="portfolio"
                      placeholder="https://linkedin.com/in/... or GitHub / Portfolio"
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

                  <button
                    type="submit"
                    className="career-form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="career-submit-loading">
                        <span className="career-spinner" aria-hidden="true" /> Sending Application &amp; Resume...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
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
