import React from "react";
import "./NetcomSmartClass.css";
import { PortfolioLayout } from "../components/PortfolioLayout.jsx";
import { PortfolioCard } from "../components/PortfolioCard.jsx";

// Smart Class Photos
import annaPrimary from "../../../assets/image/portfolio/Netcom Smart Class/Anna Primary School, CN Village.png";
import thachanallur from "../../../assets/image/portfolio/Netcom Smart Class/Panchayat Union Primary School, Thachanallur.png";
import mkpNagar from "../../../assets/image/portfolio/Netcom Smart Class/Corporation school, mkp nagar.png";
import hameempuram from "../../../assets/image/portfolio/Netcom Smart Class/Corporation primary school. Hameempuram, Melapalayam.png";
import quaidMilleth from "../../../assets/image/portfolio/Netcom Smart Class/Quaid Milleth Corporation Primary School.png";

// Additional Tamil Nadu Smart Class School Photos
import adw100 from "../../../assets/image/portfolio/Skill development/ADW 100 School.png";
import dharmapuriSitheri from "../../../assets/image/portfolio/Kiosk/Dharmapuri-sitheri School.png";
import dharmapuriSitheri1 from "../../../assets/image/portfolio/Kiosk/Dharmapuri-sitheri School1.png";
import erodeKongadai from "../../../assets/image/portfolio/netcom digital content/Erode-Kongadai School.png";
import gtrSchool from "../../../assets/image/portfolio/netcom digital content/GTR School.png";
import selamKunnur from "../../../assets/image/portfolio/netcom digital content/Selam-Kunnur School.png";
import sevvapetGirls from "../../../assets/image/portfolio/netcom digital content/Sevvapet Girls School.png";
import thanjavurNalladai from "../../../assets/image/portfolio/netcom digital content/Thanjavur-Nalladai.png";
import villupuramSamkarapuram from "../../../assets/image/portfolio/netcom digital content/Villupuram Samkarapuram School.png";

const smartClassProjects = [
  { title: "Anna Primary School, CN Village", image: annaPrimary },
  { title: "Panchayat Union Primary School, Thachanallur", image: thachanallur },
  { title: "Corporation school, mkp nagar", image: mkpNagar },
  { title: "Panchayat union primary school, V.M.Chattiram", image: thachanallur },
  { title: "Corporation primary school. Hameempuram, Melapalayam", image: hameempuram },
  { title: "Quaid Milleth Corporation Primary School", image: quaidMilleth },
  { title: "Corporation Middle School, Nallur", image: mkpNagar },
  { title: "Corporation New Middle School, Vannanpettai", image: annaPrimary },
  { title: "ADW100 School", image: adw100 },
  { title: "Dharmapuri sitheri School", image: dharmapuriSitheri },
  { title: "Dharmapuri-sitheri School", image: dharmapuriSitheri1 },
  { title: "Erode-Kongadai School", image: erodeKongadai },
  { title: "GTR School", image: gtrSchool },
  { title: "GTR School Training Ganithapuram", image: gtrSchool },
  { title: "Selam-Kunnur School", image: selamKunnur },
  { title: "Sevvapet Girls School", image: sevvapetGirls },
  { title: "Thanjavur-Nalladai", image: thanjavurNalladai },
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

