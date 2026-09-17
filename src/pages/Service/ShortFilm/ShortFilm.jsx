import { Link } from "react-router-dom";
import "./ShortFilm.css";

import heroGraphic from "../../../assets/image/Service/Short Film/Short Film.png";
import introIllustration from "../../../assets/image/Service/Short Film/Short Film2.png";
import youtubeLogo from "../../../assets/image/Service/Short Film/youtube.png";

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
          <Link to="/service">Services</Link>
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
              Netcom Media Works Has Been Started By A Group Of Young And Dynamic
              Entrepreneurial IT Professionals In The Year Of 2004 With A Vision
              To Make A Mark In Information Technology. We Are Working With
              Short Films, 2D Animation, Flash Animation, 3D Animation And Visual
              Advertisements. We Are Doing Animation For Short Films, Episode
              Works For Television And Web.
            </p>
            <p>
              Our Development Division Consists Of Established Writers,
              Illustrators And Designers Who Generate Ideas And Concepts For
              Commercially Successful And Market-Driven Products. We Are Working
              On A Short Films, A Complete Range Of Animation Services Are
              Available For Netcom’s Clients. Netcom Offers End-To-End Animation
              Services For Production Including Storyboard, Layout, Background And
              Animation, Clean Up And Compositing.
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

        {/* Spotlight Video and Project Details */}
        <section className="sf-spotlight-section">
          <div className="sf-spotlight-grid">
            <div className="sf-video-container">
              <h2 className="sf-video-title">BISHOP AZARIA Trailer Video</h2>
              <div
                className="sf-video-player-mock"
                role="button"
                tabIndex={0}
                aria-label="Play BISHOP AZARIA Trailer Video"
              >
                <img
                  src={youtubeLogo}
                  alt="YouTube Play Button"
                  className="sf-youtube-logo"
                />
              </div>
            </div>

            <div className="sf-project-info">
              <h3>Our Projects:</h3>
              <p>We Have Done A Project For Indian Missionary Society (IMS)</p>
              <p>
                <strong className="sf-project-highlight">BISHOP AZARIA</strong>{" "}
                Is A Indian Tamil Language Film. This Autobiography Of
                Vedanayagam Samuel Azariah (1874–1945) Bishop Of The Anglican
                Church In India From 1912 Until His Death In 1945. We Have Done
                This Film In 2D Animation And We Have Distributed Entire Story In
                Books.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ShortFilm;
