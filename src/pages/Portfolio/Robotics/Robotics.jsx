import React from "react";
import "./Robotics.css";
import { PortfolioLayout } from "../components/PortfolioLayout.jsx";
import { PortfolioCard } from "../components/PortfolioCard.jsx";

// Coimbatore Robotics Photos
import cbeRSPuramWest from "../../../assets/image/portfolio/robotics/R.S Puram West Corp Girls Hr Sec School.png";
import cbeAmmaniammal from "../../../assets/image/portfolio/robotics/SRP AMAMANIAMMAL GIRL'S SCHOOL R.S.PURAM.png";
import cbeRamathanapuram from "../../../assets/image/portfolio/robotics/Ramathanapuram school.png";

// Chennai Robotics Photos
import chnSelaiyur from "../../../assets/image/portfolio/robotics/Corporation high sec.school Selaiyur.png";
import chnThiruneermalai from "../../../assets/image/portfolio/robotics/PUMS school, Thiruneermalai.png";

const roboticsCoimbatore = [
  {
    title: "R.S Puram West Corp Girls Hr Sec School",
    image: cbeRSPuramWest,
  },
  {
    title: "SRP AMAMANIAMMAL GIRL'S SCHOOL R.S.PURAM",
    image: cbeAmmaniammal,
  },
  {
    title: "Ramathanapuram school",
    image: cbeRamathanapuram,
  },
];

const roboticsChennai = [
  {
    title: "Corporation high sec.school Selaiyur",
    image: chnSelaiyur,
  },
  {
    title: "PUMS school, Thiruneermalai",
    image: chnThiruneermalai,
  },
];

function Robotics() {
  return (
    <PortfolioLayout currentSlug="robotics" categoryTitle="Robotics">
      <section className="location-section">
        <h3 className="location-title">Coimbatore</h3>
        <div className="portfolio-grid">
          {roboticsCoimbatore.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section className="location-section chennai-section">
        <h3 className="location-title">Chennai</h3>
        <div className="portfolio-grid">
          {roboticsChennai.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}

export default Robotics;

