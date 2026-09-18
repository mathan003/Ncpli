import React from "react";

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

export function PortfolioCard({ project }) {
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

      <div className="portfolio-card-title">{project.title}</div>

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
