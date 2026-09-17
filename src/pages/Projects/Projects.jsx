import { Link, useParams } from "react-router-dom";
import "../PageHero.css";

const projectImages = import.meta.glob(
  [
    "../../assets/image/project/**/*.{png,jpg,jpeg,webp}",
    "../../assets/image/portfolio/**/*.{png,jpg,jpeg,webp}",
    "../../assets/image/Service/**/*.{png,jpg,jpeg,webp}",
  ],
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const PROJECTS = {
  "digital-content": {
    title: "Netcom Digital Contents",
    folder: "digital content",
    description: "Netcom Media Works creates 2D animation, 3D animation, visual advertisements, short films and curriculum-aligned digital learning content.",
    features: ["Pre-production", "Production", "Post-production", "Animation experience", "Storyboard and design", "Educational video content"],
  },
  emis: {
    title: "Educational Management Information System",
    folder: "Educational Management Information System",
    description: "EMIS allows learners and instructors to interact, collaborate and study from anywhere while helping schools manage academic calendars, people and daily activities.",
    features: ["Personalized portals and dashboards", "360 degree student profile", "Alerts and notifications", "Integrated academic calendar", "Attendance and RFID integration", "Multi-language support", "Question bank", "Informative videos", "Lecturer notes"],
  },
  "language-lab": {
    title: "Language Lab",
    folder: "Language Lab",
    description: "Language Lab is a software program designed to help students improve listening, speaking, reading and writing skills through guided digital practice.",
    features: ["Digital language practice", "Teacher monitoring", "Listening activities", "Speaking exercises", "Interactive lessons", "Student progress tracking"],
  },
  "call-soft": {
    title: "Call Soft",
    folder: "Call Soft",
    description: "Call Soft is a computer-based tutorial platform that supports structured learning through engaging multimedia lessons and guided practice.",
    features: ["Interactive tutorials", "Multimedia lessons", "Self-paced learning", "Teacher support", "Progress monitoring", "Digital assessments"],
  },
  assessment: {
    title: "Assessment",
    folder: "Assessment",
    description: "Netcom Assessment gathers information from multiple sources to understand learner progress and support better academic decisions.",
    features: ["Online examinations", "Question bank management", "Automated evaluation", "Performance reports", "Student progress tracking", "Secure assessments"],
  },
  "skill-development": {
    title: "Skill Development & Training",
    folder: "Skill Development",
    description: "Our skill development initiatives build communication, interpersonal, personal and workplace skills that help learners prepare for future opportunities.",
    features: ["Communication skills", "Interpersonal skills", "Personal development", "Career readiness", "Training resources", "Practical learning"],
  },
  "ict-hi-tech-lab": {
    title: "ICT/Hi-Tech Lab",
    folder: "ICTHi-Tech Lab",
    description: "ICT and Hi-Tech Lab projects help students understand and apply digital technology through hands-on infrastructure and guided learning.",
    features: ["Computer lab setup", "Digital learning systems", "Hardware installation", "Technology training", "Teacher enablement", "Technical support"],
  },
  kiosk: {
    title: "Kiosk Projects",
    folder: "Kiosk",
    description: "A kiosk is an interactive system designed for public use that delivers information and services through a simple, accessible interface.",
    features: ["Interactive information access", "Self-service workflows", "Touchscreen interface", "School installations", "Public information systems", "Easy maintenance"],
  },
  rfid: {
    title: "RFID Software Solutions",
    folder: "RFID",
    description: "RFID solutions use electromagnetic fields to automatically identify and track tagged objects, people and assets with reliable digital records.",
    features: ["Automated identification", "Attendance tracking", "Asset tracking", "Real-time records", "Secure data capture", "Reports and monitoring"],
  },
  "smart-tailor-shop": {
    title: "Smart Tailor Shop",
    folder: "Smart Tailor Shop",
    description: "Smart Tailor Application is a responsive and easy-to-use tailor shop management system for customer, order and business operations.",
    features: ["Customer management", "Order tracking", "Measurement records", "Billing workflow", "Responsive interface", "Business reports"],
  },
  "online-cab-booking": {
    title: "Online Cab Booking",
    folder: "Online Cab Booking",
    description: "Online Cab Booking Application is an online system for booking cabs, managing vehicles and coordinating journeys from one platform.",
    features: ["Cab booking", "Vehicle management", "Map and route support", "Price list", "Mobile-friendly experience", "Booking status tracking"],
  },
};

const fallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><rect width='800' height='450' fill='#dff7e9'/><text x='50%' y='52%' text-anchor='middle' font-family='Arial' font-size='48' font-weight='700' fill='#176b46'>NETCOM PROJECT</text></svg>")}`;

function getProjectImage(folder) {
  const cleanFolder = folder.toLowerCase().replace(/[^a-z0-9]/g, "");
  const match = Object.entries(projectImages).find(([path]) => {
    const cleanPath = path.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanPath.includes(cleanFolder);
  });
  return match ? match[1] : fallbackImage;
}

function Projects() {
  const { category = "digital-content" } = useParams();
  const project = PROJECTS[category] || PROJECTS["digital-content"];
  const image = getProjectImage(project.folder);

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <span className="detail-kicker">PROJECT</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </section>
      <div className="detail-breadcrumb">Home <span>›</span> Project <span>›</span> {project.title}</div>
      <main className="detail-page">
        <section className="detail-intro">
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Netcom combines technology, creative thinking and practical implementation to deliver dependable solutions for schools, institutions and businesses.</p>
          </div>
          <img src={image} alt={project.title} />
        </section>
        <h2 className="detail-section-title">Implementation &amp; Ease-of-Use</h2>
        <section className="detail-grid">
          {project.features.map((feature) => (
            <article className="detail-card" key={feature}>
              <h3>{feature}</h3>
              <p>Designed to be practical, accessible and easy to use in real-world learning and business environments.</p>
              <span className="detail-arrow">→</span>
            </article>
          ))}
        </section>
        <section className="detail-cta">
          <div><h2>Need this project?</h2><p>Contact the Netcom team to discuss implementation, demonstrations and support.</p></div>
          <Link to="/contact" className="btn btn-accent">Contact us</Link>
        </section>
      </main>
    </>
  );
}

export default Projects;
