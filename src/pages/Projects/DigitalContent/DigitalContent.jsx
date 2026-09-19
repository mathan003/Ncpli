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
              Netcom Media Works has been started by a group of young and dynamic entrepreneurial 
              IT professionals in the year of 2002 with a vision to make a mark in Information 
              Technology. We are working with 2-D animation, Flash animation,3-D animation and 
              Visual advertisements. We are doing animation for short films, episodic works for 
              television and web.
            </p>
            <p>
              Our Development Division consists of established writers, illustrators and designers 
              who generate ideas and concepts for commercially successful and market-driven 
              products. Netcom offers end-to-end animation services for production including 
              storyboard, layout, background and animation in-betweening, clean-up and 
              compositing.
            </p>
            <p>
              <strong>3D Production:</strong> The 3-D Animation Production is the set of processes that are used to convert an idea, 
              into a finished product. It is a system designed to take each step in a pre-determined 
              order so that everyone knows when and how their work needs to be done.
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
            <p>The pre-production process of 3D animation involves the initial aspects of an an imated film. This process includes the concept creation, storyboards, rough 
              script reel, and character creation. With these steps 
              complete, the animation production pipeline is ready 
              to move to the production process.</p>
          </div>
          <div className="project-card">
            <h3>Story</h3>
            <p>Heads of story are in charge of turning the writer's words 
              and the director's vision into a visual representation of 
              the narrative. They produce series of panels to plan the 
              action, staging and camera choices in 3D digital shots 
              or 2D animation frames. They also work to ensure 
              continuity betweenanimated scenes.</p>
          </div>
          <div className="project-card">
            <h3>Animatic</h3>
            <p>An animatic is an animated storyboard, a slideshow of 
              images depicting movement. To create an animatic, 
              storyboard images are cut together to make a rough 
              draft animation, usually with sound effects or music, 
              giving filmmakers an idea of what the final animation 
              or live- actionsequence will look like.</p>
          </div>
          <div className="project-card">
            <h3>Storyboard</h3>
            <p>A storyboard is a graphic organizer that plans a narrative. 
              Storyboards are a powerful way to visually present 
              information; the linear direction of the cells is perfect 
              for storytelling, explaining a process, and showing the 
              passage of time. At their core, storyboards are a set of 
              sequential drawings to tell a story.</p>
          </div>
          <div className="project-card">
            <h3>Design</h3>
            <p>Animation design is the art of creating special effects 
              and other designs for various forms of media, including 
              video games, movies and even social media posts. Much 
              of an animation designer's work is done with specialized 
              computer software, and some even write their own 
              code!</p>
          </div>
          <div className="project-card">
            <h3>Idea</h3>
            <p>An animation is really just a moving story. So you need to have a story idea before you can begin.</p>
          </div>
        </div>

        {/* Section: Production */}
        <h2 className="project-section-title">Production</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Layout</h3>
            <p>Layout design for animation is the process of 
              conceptualizing environments based on the story of the 
              animated film, and adapting it to the stylistic choices of 
              the film. The primary role of the layout artist is to design 
              the stage on which the animation of the character or 
              special effects takes place.</p>
          </div>
          <div className="project-card">
            <h3>Modeling</h3>
            <p>Model animation is a form of stop motion animation 
              designed to merge with live-action footage to create 
              the illusion of a real-world fantasy sequence.</p>
          </div>
          <div className="project-card">
            <h3>Texturing</h3>
            <p>Texturing in 3D animation is the process of dressing up 
                3D models with 2D pictures. Texture artists oversee 
                giving 3D objects physical characteristics. The overall 
                goal is to match the surface of the model to its concept 
                art or real-world equivalent.</p>
          </div>
          <div className="project-card">
            <h3>Rigging/Setup</h3>
            <p>Rigging is making our characters able to move. The 
              process of rigging is we take that digital sculpture, and 
              we start building the skeleton, the muscles, and we 
              attach the skin to the character, and we also create a 
              set of animation controls, which our animators use to 
              push and pull the body around.</p>
          </div>
          <div className="project-card">
            <h3>Animation</h3>
            <p>Animation is a method in which figures are manipulated 
                to appear as moving images. In traditional animation, 
                images are drawn or painted by hand on transparent 
                celluloid sheets to be photographed and exhibited on 
                film. Today, most animations are made with computer-
                generated imagery (CGI).</p>
          </div>
          <div className="project-card">
            <h3>VFX</h3>
            <p>VFX or Visual Effects are a way of mixing real film 
              shooting with false or animated images. For instance, 
              a movie that shows the hero jumping off the ground 
              and flying into the air, is created using VFX. ... 
              Affordable software for Animation & VFX has made it 
              easy for almost all filmmakers to use VFX in their movie.</p>
          </div>
          <div className="project-card">
            <h3>Lighting</h3>
            <p>Lighting in 3D animation is much like lighting in 
                photography or filmmaking. The lighting artist sets up 
                a combination of light sources to either draw attention 
                to a special part of the setting, set the overall mood of 
                the scene, or represent the natural properties of the 
                scene such as time of the day.</p>
          </div>
          <div className="project-card">
            <h3>Rendering</h3>
            <p>Rendering is used in both 2D and 3D computer 
              animation.It is the process of getting the final 
              assembled animation scenes or pieces out of the 
              computer in the format of a sequence of individual 
              frames. The aim of rendering is to generate a series 
              of individual pixel based frames or a video clip.</p>
          </div>
        </div>

        {/* Section: Post-Production */}
        <h2 className="project-section-title">Post-Production</h2>
        <div className="project-grid-3">
          <div className="project-card">
            <h3>Compositing</h3>
            <p>Compositing is the process of combining visual 
              elements from separate sources to create one image. 
              The answer to why we need compositing is 
              straightforward. Compositing allows a level of 
              refinement of the imagery or animation that is still 
              hard to achieve in 3D software.</p>
          </div>
          <div className="project-card">
            <h3>2D VFX/Motion Graphics</h3>
            <p>Motion Graphics means Graphics in Movement. It’s the 
                most straightforward definition you can get. Many times, 
                Motion Graphics is also called Motion Design, making 
                the relationship between movement and design 
                elements easier to understand. Motion Graphics is 
                about bringing the design knowledge to new mediums 
                by adding the elements of time and space to it — i.e. 
                creating movement.</p>
          </div>
          <div className="project-card">
            <h3>Colors Correction</h3>
            <p>Color correction is a vital part of 3D animation 
              post-production in an animation studio and one of the 
              final stops in the 3D animation pipeline. It utilizes the 
              most powerful tools to adjust the color, and also the 
              light and contrast of the images; optimizing the scene 
              to establish the desired look. Post-Production is the 
              final stage of animation production: everything that 
              comes after the main production is finished. It includes 
              the final polishing of animation, editing, adding the
              soundtrack and sound effects.</p>
          </div>
        </div>

        {/* Section: Animation Experience */}
        <h2 className="project-section-title">Animation Experience</h2>
        <div className="project-grid-2">
          <div className="project-card">
            <h3>2D Animation Experience</h3>
            <p><strong>Reserve Bank Of India (RBI) Financial Inclusion Project </strong> Over 15+ years of excellence in traditional hand-drawn and digital puppet 2D animation. We have produced over 10,000+ curriculum-aligned learning modules, educational television episodes, and corporate presentations in Tamil and English.</p>
          </div>
          <div className="project-card">
            <h3>3D Animation Experience</h3>
            <p>We have created 3D animation episodes based on stories from the Bible.Another important establishment to add feather to our cap is feature film Productions.
              We have created 3D animation episodes based on stories from the Bible.We have ventured into production, portraying about a famous personality 
              <strong>Azariah Enum Vidha. </strong> In the Twentieth century, many great Christian leaders emerged. 
              Most of their names are unknown, expect outside in their own Church or national 
              boundaries. Their life stories can provide rich insights to the people and the world. 
              This great leader’s life, contribution to the mission, methods are the crafted in this film.</p>
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
          <span className="project-yt-icon">
            <span className="project-yt-triangle"></span>
          </span>

          <span>YouTube</span>
        </div>
      </div>

      <span className="digital-demo-title">
        {video.title}
      </span>
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

