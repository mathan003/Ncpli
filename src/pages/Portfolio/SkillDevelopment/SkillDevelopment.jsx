import React from "react";
import "./SkillDevelopment.css";
import { PortfolioLayout } from "../components/PortfolioLayout.jsx";
import { PortfolioCard } from "../components/PortfolioCard.jsx";

// Skill Development Photos
import selamKunnur from "../../../assets/image/portfolio/Skill development/Selam-Kunnur School.png";
import covaiMuttathuvayal from "../../../assets/image/portfolio/Skill development/Covai-Muttathuvayal School.png";
import adw100 from "../../../assets/image/portfolio/Skill development/ADW 100 School.png";
import villupuramSamkarapuram from "../../../assets/image/portfolio/Skill development/Villupuram Samkarapuram School.png";
import thanjavurNalladai from "../../../assets/image/portfolio/Skill development/Thanjavur-Nalladai.png";
import sevvapetGirls from "../../../assets/image/portfolio/Skill development/Sevvapet Girls School.png";
import erodeKongadai from "../../../assets/image/portfolio/Skill development/Erode-Kongadai School.png";
import gtrSchool from "../../../assets/image/portfolio/Skill development/GTR School.png";

const skillDevelopmentProjects = [
  { title: "Selam Kunnur School", image: selamKunnur },
  { title: "Covai Muttathuvayal School", image: covaiMuttathuvayal },
  { title: "ADW100 School", image: adw100 },
  { title: "Villupuram Samkarapuram School", image: villupuramSamkarapuram },
  { title: "Thanjavur-Nalladai", image: thanjavurNalladai },
  { title: "Sevvapet Girls School", image: sevvapetGirls },
  { title: "Erode-Kongadai School", image: erodeKongadai },
  { title: "GTR School", image: gtrSchool },
];

function SkillDevelopment() {
  return (
    <PortfolioLayout currentSlug="skill-development" categoryTitle="Skill Development">
      <section className="location-section">
        <div className="portfolio-grid">
          {skillDevelopmentProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}

export default SkillDevelopment;

