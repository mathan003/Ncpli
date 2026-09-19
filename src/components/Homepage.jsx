import { Link } from "react-router-dom";
import heroWoman from "../assets/image/home screen/header img.png";
import "./Homepage.css";
// meet netcom
import img1 from "../assets/image/home screen/hp1.jpg";
import img2 from "../assets/image/home screen/hp2.jpg";
import img3 from "../assets/image/home screen/hp3.jpg";
import img4 from "../assets/image/home screen/hp4.jpg";
// services
import graphicDesign from "../assets/image/home screen/Graphic Design.jpg";
import econtent from "../assets/image/home screen/E Content Development.jpg";
import shortfilm from "../assets/image/home screen/shortflim.jpg";
import webapp from "../assets/image/home screen/Web Application Development.jpg";
import mobileapp from "../assets/image/home screen/Mobile Application Development.jpg";
import webhosting from "../assets/image/home screen/Web Hosting Services.jpg";
import customsoftware from "../assets/image/home screen/Customized Software.jpg";
import hardware from "../assets/image/home screen/Hardware Support.jpg";
import cloud from "../assets/image/home screen/Cloud Maintainance.jpg";

import statProjects from "../assets/image/home screen/25+.png";
import statClients from "../assets/image/home screen/30+.png";
import statEmployees from "../assets/image/home screen/100+.png";
import statExperience from "../assets/image/home screen/20+.png";

// our products
import { useState, useEffect, useCallback, useRef } from "react";
import gilgal from "../assets/image/home screen/gillgall.jpg";
import emis from "../assets/image/home screen/emis.png";
import smartclass from "../assets/image/home screen/smartclass.png";
import smarttailor from "../assets/image/home screen/smarttailor.png";
import onlinecap from "../assets/image/home screen/onlinecap.png";

// Clients
import client1 from "../assets/image/home screen/Clients1.jpg";
import client2 from "../assets/image/home screen/Clients2.jpg";
import client3 from "../assets/image/home screen/Clients3.jpg";
import client4 from "../assets/image/home screen/Clients4.jpg";
import client5 from "../assets/image/home screen/Clients5.jpg";
import client6 from "../assets/image/home screen/Clients6.jpg";
import client7 from "../assets/image/home screen/Clients7.jpg";
import client8 from "../assets/image/home screen/Clients8.jpg";
import client9 from "../assets/image/home screen/Clients9.jpg";
import client10 from "../assets/image/home screen/Clients10.png";
import client11 from "../assets/image/home screen/Clients11.png";
import client12 from "../assets/image/home screen/Clients12.jpg";
import client13 from "../assets/image/home screen/Clients13.jpg";


// home page banner
function Hero() {
  return (
    <section className="hero">
      <div className="hero_row">
        <div className="hero_text">
          <h1>
            Innovating Learning.
            <br />
            Building the Future.
          </h1>
          <p>
            Netcom Computers Pvt Ltd , an information technology based company since 2004, 
            in Education and Training, is offering wide range of that include creating educational 
            and training content of global relevance,designing and executing large learning initiatives 
            and setting up the requisite infrastructure.
          </p>
          <button
  className="btn btn-accent"
  onClick={() =>
    document.getElementById("service")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
>
  Explore Our Services
  <span aria-hidden="true">&rarr;</span>
</button>
        </div>
        <div className="hero_img">
          <img src={heroWoman} alt="Netcom team member working on a laptop" />
        </div>
      </div>
    </section>
  );
}


// Meet Netcom


function MeetNetcom() {
  return (
    <section className="section_meet">
      <div className="container">
        <h2>Meet Netcom</h2>
        <div className="meet__row">
          <div className="meet__text">
            <p>
              Netcom Computers an information technology based company since 2004, in 
              Education and Training, is offering wide range of that include creating educational 
              and training content of global relevance,designing and executing large learning 
              initiatives and setting up the requisite infrastructure. Netcom providing multiple 
              software services to clients. Our mission is to help customers achieve their business 
              objectives by providing innovative, best-in-class consulting, IT solutions, and services. 
              We function as an IT partner to business, offering a consulting – plan – implementation 
              approach with an integrated portfolio of technology IT solutions that encompass the 
              entire Enterprise value chain.Netcom Computers Pvt Ltd , an information technology based company since 2004, 
              in Education and Training, is offering wide range of that include creating educational 
              and training content of global relevance,designing and executing large learning initiatives 
              and setting up the requisite infrastructure.
            </p>
          </div>

          <div className="meet__gallery">
            <img className="img1" src={img1} alt="Students exploring an AI and VR classroom lesson" />
            <img className="img2" src={img2} alt="Student working at a computer workstation" />
            <img className="img3" src={img3} alt="Teacher guiding students at a computer" />
            <img className="img4" src={img4} alt="Close up of code and design work on a laptop screen" />
          </div>
        </div>
      </div>
    </section>
  );
}

// services

const SERVICES = [
  {
    title: "Graphic Design",
    image: graphicDesign,
    description:
      "With A Team Of Creative Design Professionals, We Support Our Clients To Enter Into The Global Business Market With Trendy And Eye-Catching Designs.",
    to: "/service/graphic-design",
  },
  {
    title: "E Content Development",
    image: econtent,
    description:
      "Comprehensive digital repository offering superior-quality content in Mathematics, Physics, Chemistry, Biology, Social Sciences, English Grammar, Business Studies, Economics and Accountancy",
    to: "/service/e-content-development",
  },
  {
    title: "Short Film",
    image: shortfilm,
    description: "We make Short Films, Ads, 2D and 3D Animations",
    to: "/service/short-film",
  },
  {
    title: "Web Application Development",
    image: webapp,
    description:
      "A Composed Team Of Pre-Eminent And Rapid Working Web Development Professionals Are In Netcom", to: "/service/web-application-development",  },
  {
    title: "Mobile Application Development",
    image: mobileapp,
    description:
      "With A Great Fame, Best Working Mobile Apps Are Warm Welcomed. In That Line, Apps From Netcom Has Received Great Response From Our Clients.",   to: "/service/mobile-application-development",
  },
  {
    title: "Web Hosting Services",
    image: webhosting,
    description:
      "Includes software upgrades, repairs and fixes. We will also monitor the performance of the software so you don’t face any issues.",    to: "/service/web-hosting-services",
  },
  {
    title: "Customized Software Development",
    image: customsoftware,
    description:
      "Aim to provide you the exact services and solutions you have asked for, because we value your product!.",    to: "/service/custom-software-development",
  },
  {
    title: "Hardware Support & Maintenance",
    image: hardware,
    description:
      "Aim to provide you the exact services and solutions you have asked for, because we value your product!.",
          to: "/service/hardware-support",
  },
  {
    title: "Cloud Maintenance",
    image: cloud,
    description:
      "Aim to provide you the exact services and solutions you have asked for, because we value your product!.",
    to: "/service/web-hosting-services",
  },
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <section id="service">
  <div className="section-heading">
    <h2>Our Services</h2>
    <p>
      Full-Spectrum Service Offerings To Make Your Business Into The Next Stage
    </p>
  </div>

  {/* Your services content */}
</section>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__media">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.to} className="btn_btn-outline service-card__btn">
                Explore
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



const STATS = [
  { image: statProjects, label: "No of Projects" },
  { image: statClients, label: "No of Clients" },
  { image: statEmployees, label: "No of Employees" },
  { image: statExperience, label: "Years of Experience" },
];

function Stats() {
  return (
    <section className="stats">
      <div className="container stats__row">
        {STATS.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <img src={stat.image} alt={stat.label} />
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// our products


const SLIDES = [
  { image: gilgal, alt: "GilGal mobile application feature overview" },
  { image: emis, alt: "EMIS school management system feature overview" },
  { image: smartclass, alt: "Smart Class learning through technology overview" },
  { image: smarttailor, alt: "Smart Tailor product overview" },
  { image: onlinecap, alt: "Online capability product overview" },
];

const AUTO_PLAY_MS = 5000;

function ProductsCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((next) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-advance the carousel, restarting the timer whenever the
  // person interacts with the dots so it doesn't jump unexpectedly.
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [index]);

  return (
    <section className="section products" id="products">
      <div className="container">
        <div className="section-heading">
          <h2>Our Products</h2>
          <p>Products that make you better</p>
        </div>

        <div className="carousel">
          <div
            className="carousel__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((slide) => (
              <div className="carousel__slide" key={slide.image}>
                <img src={slide.image} alt={slide.alt} loading="lazy" />
              </div>
            ))}
          </div>

          <button
            className="carousel__arrow carousel__arrow--prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous product"
          >
            &#8249;
          </button>
          <button
            className="carousel__arrow carousel__arrow--next"
            onClick={() => goTo(index + 1)}
            aria-label="Next product"
          >
            &#8250;
          </button>

          <div className="carousel__dots" role="tablist" aria-label="Product slides">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.image}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}`}
                className={`carousel__dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



const CLIENTS = [
  client1, client2, client3, client4, client5, client6,
  client7, client8, client9, client10, client11, client12, client13,
];

function Clients() {
  const clientsViewportRef = useRef(null);
  const clientsPausedRef = useRef(false);

  useEffect(() => {
    const viewport = clientsViewportRef.current;
    if (!viewport) return undefined;

    const scrollNext = () => {
      if (clientsPausedRef.current) return;

      const atEnd =
        viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2;

      viewport.scrollTo({
        left: atEnd ? 0 : viewport.scrollLeft + viewport.clientWidth,
        behavior: atEnd ? "auto" : "smooth",
      });
    };

    const timer = setInterval(scrollNext, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollClients = (direction) => {
    const viewport = clientsViewportRef.current;
    if (!viewport) return;

    viewport.scrollBy({
      left: direction * viewport.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="section clients">
      <div className="container">
        <div className="section-heading">
          <h2>Our Honourable Clients</h2>
        </div>

        <div className="clients__carousel">
          <button
            type="button"
            className="clients__arrow clients__arrow--prev"
            onClick={() => scrollClients(-1)}
            aria-label="Previous clients"
          >
            &#8249;
          </button>

          <div
            className="clients__viewport"
            ref={clientsViewportRef}
            tabIndex={0}
            aria-label="Client logos"
            onMouseEnter={() => {
              clientsPausedRef.current = true;
            }}
            onMouseLeave={() => {
              clientsPausedRef.current = false;
            }}
            onFocus={() => {
              clientsPausedRef.current = true;
            }}
            onBlur={() => {
              clientsPausedRef.current = false;
            }}
          >
            <div className="clients__grid">
              {CLIENTS.map((logo, i) => (
                <div className="clients__item" key={i}>
                  <img
                    src={logo}
                    alt={`Client or government partner logo ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="clients__arrow clients__arrow--next"
            onClick={() => scrollClients(1)}
            aria-label="Next clients"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

function Homepage() {
  return (
    <>
      <Hero />
      <MeetNetcom />
      <Services />
      <Stats />
      <ProductsCarousel />
      <Clients />
    </>
  );
}

export default Homepage;
