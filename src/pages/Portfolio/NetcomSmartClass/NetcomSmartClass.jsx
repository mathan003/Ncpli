import React from "react";
import "./NetcomSmartClass.css";
import { PortfolioLayout } from "../components/PortfolioLayout.jsx";
import { PortfolioCard } from "../components/PortfolioCard.jsx";

// Smart Class Photos from src/assets/image/portfolio/Netcom Smart Class/
import annaPrimary from "../../../assets/image/portfolio/Netcom Smart Class/Anna Primary School, CN Village.png";
import thachanallur from "../../../assets/image/portfolio/Netcom Smart Class/Panchayat Union Primary School, Thachanallur.png";
import mkpNagar from "../../../assets/image/portfolio/Netcom Smart Class/Corporation school, mkp nagar.png";
import vmChathram from "../../../assets/image/portfolio/Netcom Smart Class/Panchayat union primary school V.M.Chathram.png";
import hameempuram from "../../../assets/image/portfolio/Netcom Smart Class/Corporation primary school. Hameempuram, Melapalayam..png";
import quaidMilleth from "../../../assets/image/portfolio/Netcom Smart Class/Quaid Milleth Corporation Primary School.png";
import perumalSannathi from "../../../assets/image/portfolio/Netcom Smart Class/Corporation Middle School, Perumal Sannathi, Palayamkottai.png";
import vannarpettai from "../../../assets/image/portfolio/Netcom Smart Class/Corporation New Middle School, Vannarpettai.png";
import adw100 from "../../../assets/image/portfolio/Netcom Smart Class/ADW 100 School.png";
import adw100_2 from "../../../assets/image/portfolio/Netcom Smart Class/ADW 100 School1.png";
import dharmapuriSitheri from "../../../assets/image/portfolio/Netcom Smart Class/Dharmapuri-sitheri School.png";
import dharmapuriSitheri1 from "../../../assets/image/portfolio/Netcom Smart Class/Dharmapuri-sitheri School1.png";
import erodeKongadai from "../../../assets/image/portfolio/Netcom Smart Class/Erode-Kongadai School.png";
import gtrSchool from "../../../assets/image/portfolio/Netcom Smart Class/GTR School.png";
import gtrTraining from "../../../assets/image/portfolio/Netcom Smart Class/GTR School Training-Sankarapuram.png";
import selamKunnur from "../../../assets/image/portfolio/Netcom Smart Class/Selam-Kunnur School.png";
import sevvapetGirls from "../../../assets/image/portfolio/Netcom Smart Class/Sevvapet Girls School.png";
import thanjavurNalladai from "../../../assets/image/portfolio/Netcom Smart Class/Thanjavur-Nalladai.png";
import thanjavurNalladai1 from "../../../assets/image/portfolio/Netcom Smart Class/Thanjavur-Nalladai1.png";
import villupuramSamkarapuram from "../../../assets/image/portfolio/Netcom Smart Class/Villupuram Samkarapuram School.png";

const smartClassProjects = [
  { title: "Anna Primary School, CN Village", image: annaPrimary },
  { title: "Panchayat Union Primary School, Thachanallur", image: thachanallur },
  { title: "Corporation school, mkp nagar", image: mkpNagar },
  { title: "Panchayat union primary school, V.M.Chathram", image: vmChathram },
  { title: "Corporation primary school. Hameempuram, Melapalayam", image: hameempuram },
  { title: "Quaid Milleth Corporation Primary School", image: quaidMilleth },
  { title: "Corporation Middle School, Perumal Sannathi, Palayamkottai", image: perumalSannathi },
  { title: "Corporation New Middle School, Vannarpettai", image: vannarpettai },
  { title: "ADW 100 School", image: adw100 },
  { title: "ADW 100 School", image: adw100_2 },
  { title: "Dharmapuri-sitheri School", image: dharmapuriSitheri },
  { title: "Dharmapuri-sitheri School", image: dharmapuriSitheri1 },
  { title: "Erode-Kongadai School", image: erodeKongadai },
  { title: "GTR School", image: gtrSchool },
  { title: "GTR School Training-Sankarapuram", image: gtrTraining },
  { title: "Selam-Kunnur School", image: selamKunnur },
  { title: "Sevvapet Girls School", image: sevvapetGirls },
  { title: "Thanjavur-Nalladai", image: thanjavurNalladai },
  { title: "Thanjavur-Nalladai", image: thanjavurNalladai1 },
  { title: "Villupuram Samkarapuram School", image: villupuramSamkarapuram },
];

function NetcomSmartClass() {
  return (
    <PortfolioLayout currentSlug="netcom-smart-class" categoryTitle="Netcom Smart Class">
      <section className="location-section">
        <div className="portfolio-grid">
          {smartClassProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}

export default NetcomSmartClass;
