import React from "react";
import "./Kiosk.css";
import { PortfolioLayout } from "../components/PortfolioLayout.jsx";
import { PortfolioCard } from "../components/PortfolioCard.jsx";

// Kiosk Photos
import selamKunnur from "../../../assets/image/portfolio/Kiosk/Selam-Kunnur School.png";
import thanjavurNalladai from "../../../assets/image/portfolio/Kiosk/Thanjavur-Nalladai.png";
import dharmapuriSitheri from "../../../assets/image/portfolio/Kiosk/Dharmapuri-sitheri School.png";
import dharmapuriSitheri1 from "../../../assets/image/portfolio/Kiosk/Dharmapuri-sitheri School1.png";
import gtrSchool from "../../../assets/image/portfolio/Kiosk/GTR School.png";
import erodeKongadai from "../../../assets/image/portfolio/Kiosk/Erode-Kongadai School.png";
import covaiMuttathuvayal from "../../../assets/image/portfolio/Kiosk/Covai-Muttathuvayal School.png";
import sevvapetGirls from "../../../assets/image/portfolio/Kiosk/Sevvapet Girls School.png";
import adw100 from "../../../assets/image/portfolio/Kiosk/ADW 100 School.png";

const kioskProjects = [
  { title: "Selam Kunnur School", image: selamKunnur },
  { title: "Thanjavur-Nalladai", image: thanjavurNalladai },
  { title: "Dharmapuri-sitheri School", image: dharmapuriSitheri },
  { title: "GTR School", image: gtrSchool },
  { title: "Erode-Kongadai School", image: erodeKongadai },
  { title: "Dharmapuri-sitheri School", image: dharmapuriSitheri1 },
  { title: "Covai-Muttathuvayal School", image: covaiMuttathuvayal },
  { title: "Sevvapet Girls School", image: sevvapetGirls },
  { title: "ADW 100 School", image: adw100 },
];

function Kiosk() {
  return (
    <PortfolioLayout currentSlug="kiosk" categoryTitle="Kiosk">
      <section className="location-section">
        <div className="portfolio-grid">
          {kioskProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}

export default Kiosk;

