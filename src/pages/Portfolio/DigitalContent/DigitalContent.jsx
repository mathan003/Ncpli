import React from "react";
import "./DigitalContent.css";
import { PortfolioLayout } from "../components/PortfolioLayout.jsx";
import { PortfolioCard } from "../components/PortfolioCard.jsx";

// Digital Content Photos
import sevvapetGirls from "../../../assets/image/portfolio/netcom digital content/Sevvapet Girls School.png";
import erodeKongadai from "../../../assets/image/portfolio/netcom digital content/Erode-Kongadai School.png";
import villupuramSamkarapuram from "../../../assets/image/portfolio/netcom digital content/Villupuram Samkarapuram School.png";
import selamKunnur from "../../../assets/image/portfolio/netcom digital content/Selam-Kunnur School.png";
import thanjavurNalladai from "../../../assets/image/portfolio/netcom digital content/Thanjavur-Nalladai.png";
import gtrSchool from "../../../assets/image/portfolio/netcom digital content/GTR School.png";

const digitalContentProjects = [
  { title: "Sevvapet Girls School", image: sevvapetGirls },
  { title: "Erode-Kongadai School", image: erodeKongadai },
  { title: "Villupuram Samkarapuram School", image: villupuramSamkarapuram },
  { title: "Selam-Kunnur School", image: selamKunnur },
  { title: "Thanjavur-Nalladai", image: thanjavurNalladai },
  { title: "GTR School", image: gtrSchool },
];

function DigitalContent() {
  return (
    <PortfolioLayout currentSlug="digital-content" categoryTitle="Netcom Digital Content">
      <section className="location-section">
        <div className="portfolio-grid">
          {digitalContentProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}

export default DigitalContent;

