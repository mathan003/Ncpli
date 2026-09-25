import { Link } from "react-router-dom";
import "./ShortFilm.css";

import heroGraphic from "../../../assets/image/Service/Short Film/Short Film.png";
import introIllustration from "../../../assets/image/Service/Short Film/Short Film2.png";

function ShortFilm() {
  return (
    <div className="sf-page">
      {/* ================= HERO SECTION ================= */}
      <section className="sf-hero">
        <div className="sf-hero__container">
          <div className="sf-hero__content">
            <span className="sf-badge">OUR SERVICES</span>
            <h1>Short Film</h1>
            <p>
              Creative staying through powerful visual storytelling. We craft
              cinematic short films that engage, inspire and leave a lasting
              impact.
            </p>
          </div>
          <div className="sf-hero__media">
            <img
              src={heroGraphic}
              alt="Short Film Production"
              className="sf-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="sf-breadcrumb-wrapper">
        <nav className="sf-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="sf-breadcrumb-separator">›</span>
          <Link to="/">Services</Link>
          <span className="sf-breadcrumb-separator">›</span>
          <span className="sf-breadcrumb-current">Short Film</span>
        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="sf-container">
        {/* Intro 2-Column Section */}
        <section className="sf-intro-grid">
          <article className="sf-card sf-intro-card">
            <h2 className="sf-card-title">About Short Film Production</h2>
            <p>
              Netcom Media Works has been started by a group of young and dynamic 
              entrepreneurial IT professionals in the year of 2004 with a vision to make a 
              mark in Information Technology. We are working with Short films,2D animation, 
              Flash animation, 3D animation and Visual advertisements. We are doing animation 
              for short films, episodic works for television and web. Our Development Division 
              consists of established writers, illustrators and designers who generate ideas 
              and concepts for commercially successful and market-driven products. We are 
              working on a short films. A complete range of animation services are available 
              for Netcom's clients. Netcom offers end-to-end animation services for production 
              including storyboard, layout, background and animation, clean-up and 
              compositing.
            </p>
            
          </article>
          <div className="sf-intro-media-card">
            <img
              src={introIllustration}
              alt="Short Film"
              className="sf-intro-media-img"
            />
          </div>
        </section>

        {/* 2-Column Stages Grid */}
        <section className="sf-stages-grid">
          <article className="sf-card">
            <div className="sf-stage-box">
              <h3>Pre Production</h3>
              <p>
                Our Talented Creative Directors Work Here During The
                Preproduction Stages. We Will Fine Tune Every Aspect Of
                Preproduction From Script To Storyboard, To Ensure The Smoothest
                Transition Into Production, Resulting In A Perfect Film.
              </p>
            </div>
            <div className="sf-stage-box">
              <h3>Production</h3>
              <p>
                Our Production Team Will Guarantee The Best Quality Using The
                Latest State Of The Art Equipment And Can Cater To All Budgets.
                We Have High-End Cameras Dependent On Budget We’ll Always Make
                Sure Quality Comes First. As You Know Equipment Doesn&apos;t Solely
                Guarantee Quality But Here Experience Is Another Thing We Have
                Which Contributes To Quality.
              </p>
            </div>
          </article>

          <article className="sf-card">
            <div className="sf-stage-box">
              <h3>Post Production</h3>
              <p>
                Once All Scenes Have Been Filmed We’ll Take It To Our Editing
                Suite And Begin Our Johanne&apos;s Edit. From Rough Cut To Colour
                Grading We Tenaciously Pay Attention To Detail To Provide A
                Perfect Final Film. Our Editors Are Also Experienced With Visual
                Effects, From Action Effects To Background Replacements, We
                Guarantee An Audience Won’t Know Those Skyscraper In The
                Distance Aren&apos;t Real.
              </p>
            </div>
            <div className="sf-stage-box">
              <h3>NETCOM Media Services</h3>
              <p>
                Netcom Media Works Has Own Studio For Filming. Our Video
                Production Services Are Appreciated By Our Clients: We Create
                Corporate Films, Short Films, Video Ads, Documentaries, TV
                Commercials, Animated Videos.
              </p>
            </div>
          </article>
        </section>

        {/* Project Details */}
        <section className="sf-spotlight-section">
          <article className="sf-card sf-project-card">
            <h2 className="sf-card-title">Our Projects</h2>
            <div className="sf-project-info">
              <p>We Have Done A Project For Indian Missionary Society (IMS)</p>
              <p>
                <strong className="sf-project-highlight">BISHOP AZARIA</strong>{" "}
                Is An Indian Tamil Language Film. This Autobiography Of
                Vedanayagam Samuel Azariah (1874–1945) Bishop Of The Anglican
                Church In India From 1912 Until His Death In 1945. We Have Done
                This Film In 2D Animation And We Have Distributed Entire Story In
                Books.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default ShortFilm;
