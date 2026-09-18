import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DigitalContent.css";

const demoVideos = [
  { id: 1, title: "English Rhymes (Kindergarten)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "Science - Plant Life (Class 6)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, title: "Maths - Shapes & Geometry (Class 3)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 4, title: "Tamil Grammar - Ilakkanam (Class 8)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 5, title: "Physics - Electric Current (Class 10)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 6, title: "Chemistry - Periodic Table (Class 9)", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

function DigitalContent() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="project-page-wrapper">
      {/* Project Hero Banner */}
      <section className="project-hero" aria-label="Project Hero Banner"></section>

      {/* Floating Mint-Green Breadcrumb Capsule */}
      <div className="project-breadcrumb-wrapper">
        <nav className="project-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="project-breadcrumb-separator">›</span>
          <Link to="/projects">Project</Link>
          <span className="project-breadcrumb-separator">›</span>
          <span className="project-breadcrumb-current">Netcom Digital Contents</span>
        </nav>
      </div>

      <main className="project-container">
        <h1 className="project-main-title">Netcom Digital Contents</h1>

        {/* Intro Section with YouTube Demo Video Preview */}
        <div className="project-intro-split">
          <div className="project-intro-text">
            <p>
              Netcom Media Works is one of the premier 2D/3D Animation Studios in India. We specialize in producing 2D/3D Animation, visual Advertisements, Short Films, and other creative animation projects. We deliver outstanding content tailored to our clients' unique visions, transforming ideas into captivating visuals with precision and creativity.
            </p>
            <p>
              We specialize in developing digital content that is comprehensively aligned with school curriculum. Our curriculum-based digital content covers grades 1 to 12 across major boards, including Tamil Nadu State Board (Samacheer Kalvi), CBSE, and ICSE. We create engaging 2D and 3D animated lessons, interactive simulations, virtual labs, and assessment modules for Science, Mathematics, Social Science, and Languages.
            </p>
            <p>
              <strong>Our Digital Content:</strong> Our e-content is crafted to make complex concepts simple and engaging for young learners. Each topic is broken down into easily digestible animated modules, supported by real-life examples, voiceovers in regional languages, and interactive quizzes to ensure effective retention and deep conceptual understanding.
            </p>
          </div>

          <div className="project-intro-media">
            <h4 style={{ color: "#0e4a34", fontSize: "1.05rem", fontWeight: 700, margin: "0 0 12px", textAlign: "center" }}>
              Netcom Digital Content Demo Video
            </h4>
            <div
              className="project-video-card"
              onClick={() =>
                setActiveVideo({
                  title: "Netcom Digital Content Demo Video",
                  url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                })
              }
              title="Click to Watch Netcom Digital Content Demo Video"
            >
              <div className="project-video-box">
                <div className="project-yt-badge">
                  <span className="project-yt-icon"><span className="project-yt-triangle"></span></span>
                  <span>YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Pre-Production */}
        <h2 className="project-section-title">Pre-Production</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Pre Production</h3>
            <p>Pre-production is the planning stage where the conceptual groundwork is established. It encompasses scripting, concept art, character design, and storyboarding to ensure a cohesive creative direction before animation begins.</p>
          </div>
          <div className="project-card">
            <h3>Story</h3>
            <p>Story development outlines the narrative arc, dialogue, character motivations, and pedagogical goals, ensuring each educational or commercial project conveys its core message with clarity and engagement.</p>
          </div>
          <div className="project-card">
            <h3>Animatic</h3>
            <p>An animatic combines storyboard sketches with rough scratch audio and dialogue to create a pre-visualization of timing, camera framing, and pacing before full-scale production begins.</p>
          </div>
          <div className="project-card">
            <h3>Character Design</h3>
            <p>Visual development of characters including expression sheets, turnarounds, color keys, and distinct visual personalities tailored to appeal to target audiences and age groups.</p>
          </div>
          <div className="project-card">
            <h3>Background</h3>
            <p>Detailed conceptualization and digital painting of background layouts, environments, perspective guides, and architectural settings that establish the mood and context.</p>
          </div>
          <div className="project-card">
            <h3>Color</h3>
            <p>Establishing the overall color palette, emotional tone, and light keys to maintain visual harmony and stylistic consistency throughout the entire production.</p>
          </div>
        </div>

        {/* Section: Production */}
        <h2 className="project-section-title">Production</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Layout</h3>
            <p>Transforming storyboard panels into final scene compositions, camera angles, motion paths, and perspective frameworks for animators to execute with geometric accuracy.</p>
          </div>
          <div className="project-card">
            <h3>Model Sheet</h3>
            <p>Standardized reference drawings showing character proportions, turnarounds from all angles, costume details, and facial expression guides for consistent multi-artist production.</p>
          </div>
          <div className="project-card">
            <h3>Line Testing</h3>
            <p>Checking rough pencil tests or digital keyframes in sequence to verify timing, weight, physics, and fluid arcs of movement before entering clean-up.</p>
          </div>
          <div className="project-card">
            <h3>Digital Cleanup</h3>
            <p>Tracing rough animation with clean vector lines, refining linework weight, and preparing clean character assets ready for digital ink and paint.</p>
          </div>
          <div className="project-card">
            <h3>Animation</h3>
            <p>Creating primary keyframes, breakdowns, and in-between frames to bring characters and objects to life with expressive movement, emotion, and personality.</p>
          </div>
          <div className="project-card">
            <h3>VFX</h3>
            <p>Visual effects creation including dynamic simulations of fire, smoke, water, explosions, magic, atmospheric particles, and specialized scientific visualizations.</p>
          </div>
          <div className="project-card">
            <h3>Lighting</h3>
            <p>Setting key, fill, and rim lights to create dimensional depth, cast realistic shadows, and enhance the visual atmosphere of each scene.</p>
          </div>
          <div className="project-card">
            <h3>Rendering</h3>
            <p>Computing 2D/3D frames with full textures, shaders, lights, and camera depth to generate high-resolution image sequences for final editing.</p>
          </div>
        </div>

        {/* Section: Post-Production */}
        <h2 className="project-section-title">Post-Production</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Compositing</h3>
            <p>Seamlessly integrating characters, backgrounds, matte paintings, lighting passes, and VFX layers into cohesive, polished cinematic shots.</p>
          </div>
          <div className="project-card">
            <h3>2D/3D Motion Graphics</h3>
            <p>Designing kinetic typography, interactive user interface elements, infographic overlays, and animated lower-thirds for educational tutorials.</p>
          </div>
          <div className="project-card">
            <h3>Colour Correction</h3>
            <p>Professional color grading to ensure chromatic balance, dynamic contrast, visual continuity across scenes, and broadcast-quality visual appeal.</p>
          </div>
        </div>

        {/* Section: Animation Experience */}
        <h2 className="project-section-title">Animation Experience</h2>
        <div className="project-grid-2">
          <div className="project-card">
            <h3>2D Animation Experience</h3>
            <p>Over 15+ years of excellence in traditional hand-drawn and digital puppet 2D animation. We have produced over 10,000+ curriculum-aligned learning modules, educational television episodes, and corporate presentations in Tamil and English.</p>
          </div>
          <div className="project-card">
            <h3>3D Animation Experience</h3>
            <p>State-of-the-art 3D animation pipeline covering advanced character rigging, organic modeling, photorealistic rendering, and architectural walkthroughs. Delivered landmark educational 3D visualizers for school science curriculums.</p>
          </div>
        </div>

        {/* Section: NetCom Digital Content Demo Videos */}
        <h2 className="project-section-title">NetCom Digital Content Demo Videos</h2>
        <div className="digital-demo-grid">
          {demoVideos.map((video) => (
            <div
              key={video.id}
              className="digital-demo-card"
              onClick={() => setActiveVideo(video)}
              title={`Watch ${video.title}`}
            >
              <div className="digital-demo-box">
                <div className="project-yt-badge">
                  <span className="project-yt-icon"><span className="project-yt-triangle"></span></span>
                  <span>YouTube</span>
                </div>
              </div>
              <span className="digital-demo-title">{video.title}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Video Modal */}
      {activeVideo && (
        <div className="project-modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-header">
              <h3>{activeVideo.title}</h3>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setActiveVideo(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", background: "#000" }}>
              <iframe
                title={activeVideo.title}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                src={`${activeVideo.url}?autoplay=1`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DigitalContent;

