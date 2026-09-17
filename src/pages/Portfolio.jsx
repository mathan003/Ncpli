import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Portfolio.css";
import portfolioBanner from "../assets/image/portfolio/portfolio banner.jpg";

const portfolioImages = import.meta.glob(
  "../assets/image/portfolio/**/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default", query: "?url" },
);

function findPortfolioImage(folder, fileName) {
  const normFile = fileName.toLowerCase().replace(/\.[^.]+$/, "").trim();
  const normFolder = folder.toLowerCase().trim();

  // 1. Try matching both folder and filename
  let entry = Object.entries(portfolioImages).find(([path]) => {
    const p = path.toLowerCase();
    return p.includes(normFolder) && p.includes(normFile);
  });

  // 2. Fallback: match filename anywhere in portfolio
  if (!entry) {
    entry = Object.entries(portfolioImages).find(([path]) =>
      path.toLowerCase().includes(normFile),
    );
  }

  return entry ? entry[1] : undefined;
}

const coimbatoreProjects = [
  {
    title: "Corporation Girls Higher Secondary School Ramanathapuram",
    image: findPortfolioImage("AR&VR", "Corporation Girls Higher Secondary School Ramakrishnapuram.png"),
  },
  {
    title: "Corporation Girls Higher secondary School oppanakara Street",
    image: findPortfolioImage("AR&VR", "Corporation girls higher secondary School oppanakara Street.png"),
  },
  {
    title: "Corporation High secondary School udayampalayam",
    image: findPortfolioImage("AR&VR", "Corporation High secondary School udayampalayam.png"),
  },
  {
    title: "Corporation girls higher secondary school R.S Puram(west)",
    image: findPortfolioImage("robotics", "R.S Puram West Corp Girls Hr Sec School.png"),
  },
  {
    title: "SRP Ammaniammal Girls Higher Secondary School",
    image: findPortfolioImage("AR&VR", "SRP Ammaniammal Girls Higher Secondary School.png"),
  },
  {
    title: "Corporation Middle school Masakkalipalayam",
    image: findPortfolioImage("AR&VR", "Corporation middle school Masakkalipalayam.png"),
  },
  {
    title: "Corporation Higher Secondary School - Peelamedu",
    image: findPortfolioImage("AR&VR", "Corporation Higher Secondary School - Peelamedu.png"),
  },
  {
    title: "Siddhapudur corporation girls high school",
    image: findPortfolioImage("AR&VR", "Siddhapudur corporation girls high school.png"),
  },
  {
    title: "Sri vaideeswara vidhyalayam added corporation middle school Thelungupalayam,coimbatore",
    image: findPortfolioImage("AR&VR", "Sri vaideeswara vidhyalayam added corporation middle school  Thelungupalayam,coimbatore.png"),
  },
  {
    title: "Ganeshapuram middle school",
    image: findPortfolioImage("AR&VR", "Ganeshapuram middle school.png"),
  },
  {
    title: "corporation p kamalanathan memorial Higher secondary school venkittapuram",
    image: findPortfolioImage("AR&VR", "corporation p kamalanathan memorial Higher secondary school venkittapuram.png"),
  },
  {
    title: "Corporation Girls High School, Selvapuram",
    image: findPortfolioImage("AR&VR", "Siddhapudur corporation girls high school.png"),
  },
  {
    title: "Corporation Middle school, Maniyakarampalayam",
    image: findPortfolioImage("AR&VR", "Corporation middle school Masakkalipalayam.png"),
  },
  {
    title: "SRP AMAMANIAMMAL GIRL'S SCHOOL R.S.PURAM",
    image: findPortfolioImage("robotics", "SRP AMAMANIAMMAL GIRL'S SCHOOL R.S.PURAM.png"),
  },
  {
    title: "Corporation Middle School, Pulakulam",
    image: findPortfolioImage("AR&VR", "Corporation Girls Higher Secondary School Ramakrishnapuram.png"),
  },
  {
    title: "Corporation Primary School Maniyakarampalayam",
    image: findPortfolioImage("AR&VR", "Ganeshapuram middle school.png"),
  },
  {
    title: "North coimbatore corporation higher secondary school",
    image: findPortfolioImage("AR&VR", "Corporation High secondary School udayampalayam.png"),
  },
];

const chennaiProjects = [
  {
    title: "Corporation high sec.school Selaiyur",
    image: findPortfolioImage("robotics", "Corporation high sec.school Selaiyur.png"),
  },
  {
    title: "Municipal Higher Secondary school Zamin Pallavaram",
    image: findPortfolioImage("AR&VR", "Municipal Higher Secondary school Zamin Pallavaram.png"),
  },
  {
    title: "Corporation high sec.school Alapakkam West, Chennai 600116",
    image: findPortfolioImage("robotics", "PUMS school, Thiruneermalai.png"),
  },
  {
    title: "Corporation high sec.school Hastinapuram",
    image: findPortfolioImage("AR&VR", "Municipal Higher Secondary school Zamin Pallavaram.png"),
  },
  {
    title: "Corporation high sec.school Zamin Rayapettai",
    image: findPortfolioImage("robotics", "Corporation high sec.school Selaiyur.png"),
  },
];

const roboticsCoimbatore = [
  {
    title: "R.S Puram West Corp Girls Hr Sec School",
    image: findPortfolioImage("robotics", "R.S Puram West Corp Girls Hr Sec School.png"),
  },
  {
    title: "SRP AMAMANIAMMAL GIRL'S SCHOOL R.S.PURAM",
    image: findPortfolioImage("robotics", "SRP AMAMANIAMMAL GIRL'S SCHOOL R.S.PURAM.png"),
  },
  {
    title: "Ramathanapuram school",
    image: findPortfolioImage("robotics", "Ramathanapuram school.png"),
  },
];

const roboticsChennai = [
  {
    title: "Corporation high sec.school Selaiyur",
    image: findPortfolioImage("robotics", "Corporation high sec.school Selaiyur.png"),
  },
  {
    title: "PUMS school, Thiruneermalai",
    image: findPortfolioImage("robotics", "PUMS school, Thiruneermalai.png"),
  },
];

const smartClassProjects = [
  {
    title: "Anna Primary School, CN Village",
    image: findPortfolioImage("Netcom Smart Class", "Anna Primary School, CN Village.png"),
  },
  {
    title: "Panchayat Union Primary School, Thachanallur",
    image: findPortfolioImage("Netcom Smart Class", "Panchayat Union Primary School, Thachanallur.png"),
  },
  {
    title: "Corporation school, mkp nagar",
    image: findPortfolioImage("Netcom Smart Class", "Corporation school, mkp nagar.png"),
  },
  {
    title: "Panchayat union primary school, V.M.Chattiram",
    image: findPortfolioImage("Netcom Smart Class", "Panchayat Union Primary School, Thachanallur.png"),
  },
  {
    title: "Corporation primary school. Hameempuram, Melapalayam",
    image: findPortfolioImage("Netcom Smart Class", "Corporation primary school. Hameempuram, Melapalayam.png"),
  },
  {
    title: "Quaid Milleth Corporation Primary School",
    image: findPortfolioImage("Netcom Smart Class", "Quaid Milleth Corporation Primary School.png"),
  },
  {
    title: "Corporation Middle School, Nallur",
    image: findPortfolioImage("Netcom Smart Class", "Corporation school, mkp nagar.png"),
  },
  {
    title: "Corporation New Middle School, Vannanpettai",
    image: findPortfolioImage("Netcom Smart Class", "Anna Primary School, CN Village.png"),
  },
  {
    title: "ADW100 School",
    image: findPortfolioImage("Skill development", "ADW 100 School.png"),
  },
  {
    title: "ADW100 School",
    image: findPortfolioImage("Kiosk", "ADW 100 School.png"),
  },
  {
    title: "Dharmapuri sitheri School",
    image: findPortfolioImage("Kiosk", "Dharmapuri-sitheri School.png"),
  },
  {
    title: "Dharmapuri-sitheri School",
    image: findPortfolioImage("Kiosk", "Dharmapuri-sitheri School1.png"),
  },
  {
    title: "Erode-Kongadai School",
    image: findPortfolioImage("netcom digital content", "Erode-Kongadai School.png"),
  },
  {
    title: "GTR School",
    image: findPortfolioImage("netcom digital content", "GTR School.png"),
  },
  {
    title: "GTR School Training Ganithapuram",
    image: findPortfolioImage("Skill development", "GTR School.png"),
  },
  {
    title: "Selam-Kunnur School",
    image: findPortfolioImage("netcom digital content", "Selam-Kunnur School.png"),
  },
  {
    title: "Sevvapet Girls School",
    image: findPortfolioImage("netcom digital content", "Sevvapet Girls School.png"),
  },
  {
    title: "Thanjavur-Nalladai",
    image: findPortfolioImage("netcom digital content", "Thanjavur-Nalladai.png"),
  },
  {
    title: "Thanjavur-Nalladai",
    image: findPortfolioImage("Skill development", "Thanjavur-Nalladai.png"),
  },
  {
    title: "Villupuram Samkarapuram School",
    image: findPortfolioImage("netcom digital content", "Villupuram Samkarapuram School.png"),
  },
];

const kioskProjects = [
  {
    title: "Selam Kunnur School",
    image: findPortfolioImage("Kiosk", "Selam-Kunnur School.png"),
  },
  {
    title: "Thanjavur-Nalladai",
    image: findPortfolioImage("Kiosk", "Thanjavur-Nalladai.png"),
  },
  {
    title: "Dharmapuri-sitheri School",
    image: findPortfolioImage("Kiosk", "Dharmapuri-sitheri School.png"),
  },
  {
    title: "GTR School",
    image: findPortfolioImage("Kiosk", "GTR School.png"),
  },
  {
    title: "Erode-Kongadai School",
    image: findPortfolioImage("Kiosk", "Erode-Kongadai School.png"),
  },
  {
    title: "Dharmapuri-sitheri School",
    image: findPortfolioImage("Kiosk", "Dharmapuri-sitheri School1.png"),
  },
  {
    title: "Covai-Muttathuvayal School",
    image: findPortfolioImage("Kiosk", "Covai-Muttathuvayal School.png"),
  },
  {
    title: "Sevvapet Girls School",
    image: findPortfolioImage("Kiosk", "Sevvapet Girls School.png"),
  },
  {
    title: "ADW 100 School",
    image: findPortfolioImage("Kiosk", "ADW 100 School.png"),
  },
];

const skillDevelopmentProjects = [
  {
    title: "Selam Kunnur School",
    image: findPortfolioImage("Skill development", "Selam-Kunnur School.png"),
  },
  {
    title: "Covai Muttathuvayal School",
    image: findPortfolioImage("Skill development", "Covai-Muttathuvayal School.png"),
  },
  {
    title: "ADW100 School",
    image: findPortfolioImage("Skill development", "ADW 100 School.png"),
  },
  {
    title: "Villupuram Samkarapuram School",
    image: findPortfolioImage("Skill development", "Villupuram Samkarapuram School.png"),
  },
  {
    title: "Thanjavur-Nalladai",
    image: findPortfolioImage("Skill development", "Thanjavur-Nalladai.png"),
  },
  {
    title: "Sevvapet Girls School",
    image: findPortfolioImage("Skill development", "Sevvapet Girls School.png"),
  },
  {
    title: "Erode-Kongadai School",
    image: findPortfolioImage("Skill development", "Erode-Kongadai School.png"),
  },
  {
    title: "GTR School",
    image: findPortfolioImage("Skill development", "GTR School.png"),
  },
];

const digitalContentProjects = [
  {
    title: "Sevvapet Girls School",
    image: findPortfolioImage("netcom digital content", "Sevvapet Girls School.png"),
  },
  {
    title: "Erode-Kongadai School",
    image: findPortfolioImage("netcom digital content", "Erode-Kongadai School.png"),
  },
  {
    title: "Villupuram Samkarapuram School",
    image: findPortfolioImage("netcom digital content", "Villupuram Samkarapuram School.png"),
  },
  {
    title: "Selam-Kunnur School",
    image: findPortfolioImage("netcom digital content", "Selam-Kunnur School.png"),
  },
  {
    title: "Thanjavur-Nalladai",
    image: findPortfolioImage("netcom digital content", "Thanjavur-Nalladai.png"),
  },
  {
    title: "GTR School",
    image: findPortfolioImage("netcom digital content", "GTR School.png"),
  },
];

const youtubeProjects = [
  {
    title: "புகைவண்டி",
    image: findPortfolioImage("Youtube", "புகைவண்டி.png"),
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=Uz98TQd1U_s",
  },
  {
    title: "Adventures of Tenaliraman",
    image: findPortfolioImage("Youtube", "Adventures of Tenaliraman.png"),
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=elpnngb_-NM",
  },
  {
    title: "Adventures of Vikramadhityan",
    image: findPortfolioImage("Youtube", "Adventures of Vikramadhityan.png"),
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=0u9WoKh2auI&t=342s",
  },
  {
    title: "சிட்டு",
    image: findPortfolioImage("Youtube", "சிட்டு.png"),
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?t=113&v=Vmq9CDAMjVk&feature=youtu.be",
  },
  {
    title: "Moral Stories",
    image: findPortfolioImage("Youtube", "Moral Stories.png"),
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=XEA_ruJZxIE",
  },
  {
    title: "பச்சை கிளி",
    image: findPortfolioImage("Youtube", "பச்சை கிளி.png"),
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?t=63&v=Uz98TQd1U_s&feature=youtu.be",
  },
  {
    title: "ஆணை",
    image: findPortfolioImage("Youtube", "ஆணை.png"),
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=Uz98TQd1U_s&t=125s",
  },
  {
    title: "வீரன்",
    image: findPortfolioImage("Youtube", "வீரன்.png"),
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=Uz98TQd1U_s&feature=youtu.be",
  },
  {
    title: "குள்ள வாத்து",
    image: findPortfolioImage("Youtube", "குள்ள வாத்து.png"),
    isYoutube: true,
    youtubeUrl: "youtube.com/watch?v=Vmq9CDAMjVk&feature=youtu.be",
  },
];

const portfolioCategories = [
  { label: "AR&VR", slug: "ar&vr" },
  { label: "ROBOTICS", slug: "robotics" },
  { label: "NETCOM SMART CLASS", slug: "netcom-smart-class" },
  { label: "KIOSK", slug: "kiosk" },
  { label: "SKILL DEVELOPMENT", slug: "skill-development" },
  { label: "NETCOM DIGITAL CONTENT", slug: "digital-content" },
  { label: "YOUTUBE", slug: "youtube" },
];

const categoryProjects = {
  "ar-vr": {
    title: "AR&VR",
    locations: [
      { name: "Coimbatore", projects: coimbatoreProjects },
      { name: "Chennai", projects: chennaiProjects },
    ],
  },
  robotics: {
    title: "Robotics",
    locations: [
      { name: "Coimbatore", projects: roboticsCoimbatore },
      { name: "Chennai", projects: roboticsChennai },
    ],
  },
  "netcom-smart-class": {
    title: "Netcom Smart Class",
    projects: smartClassProjects,
  },
  kiosk: {
    title: "Kiosk",
    projects: kioskProjects,
  },
  "skill-development": {
    title: "Skill Development",
    projects: skillDevelopmentProjects,
  },
  "digital-content": {
    title: "Netcom Digital Content",
    projects: digitalContentProjects,
  },
  youtube: {
    title: "YouTube",
    projects: youtubeProjects,
  },
};

const portfolioFallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#edf7f1"/>
        <stop offset="100%" stop-color="#dfeee7"/>
      </linearGradient>
    </defs>
    <rect width="800" height="560" fill="url(#g)"/>
    <g fill="#0d7a53" font-family="Arial, Helvetica, sans-serif" font-weight="700">
      <text x="50%" y="52%" font-size="62" text-anchor="middle">Netcom</text>
      <text x="50%" y="63%" font-size="24" text-anchor="middle" fill="#1f5d46">Portfolio</text>
    </g>
  </svg>
`)}`;

function PortfolioCard({ project }) {
  const handleImageError = (event) => {
    if (event.target.src !== portfolioFallbackImage) {
      event.target.src = portfolioFallbackImage;
      event.target.onerror = null;
    }
  };

  return (
    <div className={`portfolio-card ${project.isYoutube ? "portfolio-card--youtube" : ""}`}>
      <div className="portfolio-image-wrapper">
        <img
          src={project.image || portfolioFallbackImage}
          alt={project.title}
          className="portfolio-image"
          onError={handleImageError}
          loading="lazy"
        />
      </div>

      <div className="portfolio-card-title">
        {project.title}
      </div>

      {project.isYoutube && (
        <a
          href={project.youtubeUrl || "https://www.youtube.com/@netcomcomputers"}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-youtube-btn"
          aria-label={`Visit ${project.title} on YouTube`}
        >
          <span className="portfolio-youtube-badge">
            <svg
              className="portfolio-youtube-play"
              viewBox="0 0 24 24"
              width="11"
              height="11"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="portfolio-youtube-text">visit</span>
        </a>
      )}
    </div>
  );
}

function Portfolio() {
  const { category = "ar&vr" } = useParams();
  const categoryAliases = {
    "ar&vr": "ar-vr",
    "AR&VR": "ar-vr",
    "ar-vr": "ar-vr",
    Robotics: "robotics",
    robotics: "robotics",
  };
  const normalizedCategory = categoryAliases[category] || category.toLowerCase();
  const selectedCategory = categoryProjects[normalizedCategory] || categoryProjects["ar-vr"];
  const isLocationBased = Boolean(selectedCategory.locations);
  const genericProjects = selectedCategory.projects || [];

  return (
    <div className={`portfolio-page portfolio-page--${normalizedCategory}`}>
      {/* ================= HERO ================= */}
      <section className="portfolio-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url("${portfolioBanner}")`,
          }}
          aria-hidden="true"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Portfolio</h1>
          <a href="#portfolio-content" className="explore-btn">
            Explore Now
          </a>
          <p>We devote all of our experience and efforts for creation</p>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/portfolio">Portfolio</Link>
          {selectedCategory && (
            <>
              <span className="cs-breadcrumb-separator">›</span>
              <span className="cs-breadcrumb-current">{selectedCategory.title}</span>
            </>
          )}
        </nav>
      </div>

      {/* ================= PORTFOLIO CONTENT ================= */}
      <main className="portfolio-content" id="portfolio-content">
        <h2 className="portfolio-heading">Portfolio</h2>

        {/* CATEGORY MENU */}
        <nav className="portfolio-categories" aria-label="Portfolio Categories">
          {portfolioCategories.map((item) => {
            const itemNormalized = categoryAliases[item.slug] || item.slug.toLowerCase();
            return (
              <Link
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                className={`portfolio-category-link ${
                  itemNormalized === normalizedCategory ? "category-active" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {isLocationBased ? (
          selectedCategory.locations.map((location, locationIndex) => (
            <section
              className={`location-section ${locationIndex ? "chennai-section" : ""}`}
              key={location.name}
            >
              <h3 className="location-title">{location.name}</h3>
              <div className="portfolio-grid">
                {location.projects.map((project, index) => (
                  <PortfolioCard key={index} project={project} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <section className="location-section">
            <div className="portfolio-grid">
              {genericProjects.map((project, index) => (
                <PortfolioCard key={index} project={project} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Portfolio;