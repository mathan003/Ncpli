import React from "react";
import "./ARVR.css";
import { PortfolioLayout } from "../components/PortfolioLayout.jsx";
import { PortfolioCard } from "../components/PortfolioCard.jsx";

// Coimbatore School Photos
import cbeRamakrishna from "../../../assets/image/portfolio/AR&VR/Corporation Girls Higher Secondary School Ramakrishnapuram.png";
import cbeOppanakara from "../../../assets/image/portfolio/AR&VR/Corporation girls higher secondary School oppanakara Street.png";
import cbeUdayampalayam from "../../../assets/image/portfolio/AR&VR/Corporation High secondary School udayampalayam.png";
import cbeRSPuramWest from "../../../assets/image/portfolio/AR&VR/Corporation girls higher secondary school R.S Puram,west.png";
import cbeAmmaniammal from "../../../assets/image/portfolio/AR&VR/SRP Ammaniammal Girls Higher Secondary School.png";
import cbeMasakkali from "../../../assets/image/portfolio/AR&VR/Corporation middle school Masakkalipalayam.png";
import cbePeelamedu from "../../../assets/image/portfolio/AR&VR/Corporation Higher Secondary School - Peelamedu.png";
import cbeSiddhapudur from "../../../assets/image/portfolio/AR&VR/Siddhapudur corporation girls high school.png";
import cbeSriVaideeswara from "../../../assets/image/portfolio/AR&VR/Sri vaideeswara vidhyalayam  corporation middle school  Thelungupalayam,coimbatore.png";
import cbeGaneshapuram from "../../../assets/image/portfolio/AR&VR/Ganeshapuram middle school.png";
import cbeKamalanathan from "../../../assets/image/portfolio/AR&VR/corporation p kamalanathan memorial Higher secondary school venkittapuram.png";
import cbeSelvapuram from "../../../assets/image/portfolio/AR&VR/Corporation Girls High School, Selvapuram.png";
import cbeManiyakarampalayam from "../../../assets/image/portfolio/AR&VR/CHSS, Maniyakaranpalayam school old VR photos.png";
import cbeTatabad from "../../../assets/image/portfolio/AR&VR/Corporation Middle School, Tatabad.png";
import cbeVadavalli from "../../../assets/image/portfolio/AR&VR/Corporation Middle school Vadavalli.png";
import cbeNorthCbe from "../../../assets/image/portfolio/AR&VR/North coimbatore corporation higher secondary school.png";
import cbeSugunapuram from "../../../assets/image/portfolio/AR&VR/Sugunapuram Corporation Elementary school.png";

// Chennai School Photos
import chnZaminPallavaram from "../../../assets/image/portfolio/AR&VR/Municipal Higher Secondary school Zamin Pallavaram.png";
import chnSelaiyur from "../../../assets/image/portfolio/AR&VR/Corporation high sec.school Selaiyur.png";
import chnZaminRayapetai from "../../../assets/image/portfolio/AR&VR/Corporation high sec.school zamin rayapetai.png";
import chnWestTambaram from "../../../assets/image/portfolio/AR&VR/Corporation high. school, kalyan Nagar, West Tambaram.png";

const coimbatoreProjects = [
  { title: "Corporation Girls Higher Secondary School Ramanathapuram", image: cbeRamakrishna },
  { title: "Corporation Girls Higher secondary School oppanakara Street", image: cbeOppanakara },
  { title: "Corporation High secondary School udayampalayam", image: cbeUdayampalayam },
  { title: "Corporation girls higher secondary school R.S Puram(west)", image: cbeRSPuramWest },
  { title: "SRP Ammaniammal Girls Higher Secondary School", image: cbeAmmaniammal },
  { title: "Corporation Middle school Masakkalipalayam", image: cbeMasakkali },
  { title: "Corporation Higher Secondary School - Peelamedu", image: cbePeelamedu },
  { title: "Siddhapudur corporation girls high school", image: cbeSiddhapudur },
  { title: "Sri vaideeswara vidhyalayam corporation middle school Thelungupalayam,coimbatore", image: cbeSriVaideeswara },
  { title: "Ganeshapuram middle school", image: cbeGaneshapuram },
  { title: "corporation p kamalanathan memorial Higher secondary school venkittapuram", image: cbeKamalanathan },
  { title: "Corporation Girls High School, Selvapuram", image: cbeSelvapuram },
  { title: "CHSS, Maniyakaranpalayam School", image: cbeManiyakarampalayam },
  { title: "Corporation Middle School, Tatabad", image: cbeTatabad },
  { title: "Corporation Middle School Vadavalli", image: cbeVadavalli },
  { title: "North coimbatore corporation higher secondary school", image: cbeNorthCbe },
  { title: "Sugunapuram Corporation Elementary school", image: cbeSugunapuram },
];

const chennaiProjects = [
  { title: "Municipal Higher Secondary school Zamin Pallavaram", image: chnZaminPallavaram },
  { title: "Corporation high sec.school Selaiyur", image: chnSelaiyur },
  { title: "Corporation high sec.school Zamin Rayapettai", image: chnZaminRayapetai },
  { title: "Corporation high school, Kalyan Nagar, West Tambaram", image: chnWestTambaram },
];

function ARVR() {
  return (
    <PortfolioLayout currentSlug="ar&vr" categoryTitle="AR&VR">
      <section className="location-section">
        <h3 className="location-title">Coimbatore</h3>
        <div className="portfolio-grid">
          {coimbatoreProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section className="location-section chennai-section">
        <h3 className="location-title">Chennai</h3>
        <div className="portfolio-grid">
          {chennaiProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}

export default ARVR;

