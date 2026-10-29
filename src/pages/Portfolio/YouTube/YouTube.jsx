import React from "react";
import "./YouTube.css";
import { PortfolioLayout } from "../components/PortfolioLayout.jsx";
import { PortfolioCard } from "../components/PortfolioCard.jsx";

// YouTube Video Thumbnails
import pugaivandi from "../../../assets/image/portfolio/Youtube/புகைவண்டி.png";
import tenaliraman from "../../../assets/image/portfolio/Youtube/Adventures of Tenaliraman.png";
import vikramadhityan from "../../../assets/image/portfolio/Youtube/Adventures of Vikramadhityan.png";
import chittu from "../../../assets/image/portfolio/Youtube/சிட்டு.png";
import moralStories from "../../../assets/image/portfolio/Youtube/Moral Stories.png";
import pachaikili from "../../../assets/image/portfolio/Youtube/பச்சை கிளி.png";
import aanai from "../../../assets/image/portfolio/Youtube/ஆணை.png";
import veeran from "../../../assets/image/portfolio/Youtube/வீரன்.png";
import kullaVaathu from "../../../assets/image/portfolio/Youtube/குள்ள வாத்து.png";
import suttiVilangu from "../../../assets/image/portfolio/Youtube/சுட்டி விலங்குகளின் கதைகள்.png";
import siruvarStories from "../../../assets/image/portfolio/Youtube/Siruvar Stories Channel intro.jpg";

const youtubeProjects = [
  {
    title: "புகைவண்டி",
    image: pugaivandi,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=Uz98TQd1U_s",
  },
  {
    title: "Adventures of Tenaliraman",
    image: tenaliraman,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=elpnngb_-NM",
  },
  {
    title: "Adventures of Vikramadhityan",
    image: vikramadhityan,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=0u9WoKh2auI&t=342s",
  },
  {
    title: "சிட்டு",
    image: chittu,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?t=113&v=Vmq9CDAMjVk&feature=youtu.be",
  },
  {
    title: "Moral Stories",
    image: moralStories,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=XEA_ruJZxIE",
  },
  {
    title: "பச்சை கிளி",
    image: pachaikili,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?t=63&v=Uz98TQd1U_s&feature=youtu.be",
  },
  {
    title: "ஆணை",
    image: aanai,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=Uz98TQd1U_s&t=125s",
  },
  {
    title: "வீரன்",
    image: veeran,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=Uz98TQd1U_s&feature=youtu.be",
  },
  {
    title: "குள்ள வாத்து",
    image: kullaVaathu,
    isYoutube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=Vmq9CDAMjVk&feature=youtu.be",
  },
  {
    title: "சுட்டி விலங்குகளின் கதைகள்",
    image: suttiVilangu,
    isYoutube: true,
    youtubeUrl: "https://youtu.be/R0wHaHY8hJI?si=1l4-u81w_hRb7zlf",
  },
  {
    title: "Siruvar Stories Channel intro",
    image: siruvarStories,
    isYoutube: true,
    youtubeUrl: "https://youtu.be/5U60DAYuXgE?si=r4siVxZfgeNG3tZD",
  },
];

function YouTube() {
  return (
    <PortfolioLayout currentSlug="youtube" categoryTitle="YouTube">
      <section className="location-section">
        <div className="portfolio-grid">
          {youtubeProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}

export default YouTube;
