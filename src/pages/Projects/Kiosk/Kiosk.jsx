import React from "react";
import { Link } from "react-router-dom";
import "./Kiosk.css";

import kioskImg1 from "../../../assets/image/project/Kiosk/image1.png";
import kioskImg2 from "../../../assets/image/project/Kiosk/image2.png";
import kioskImg3 from "../../../assets/image/project/Kiosk/image3.png";
import kioskImg4 from "../../../assets/image/project/Kiosk/image4.png";
import kioskImg5 from "../../../assets/image/project/Kiosk/image5.png";
import kioskImg6 from "../../../assets/image/project/Kiosk/image6.png";

function Kiosk() {
  return (
    <div className="project-page-wrapper">
      {/* Project Hero Banner */}
      <section className="project-hero" aria-label="Project Hero Banner"></section>

      {/* Floating Mint-Green Breadcrumb Capsule */}
      <div className="project-breadcrumb-wrapper">
        <nav className="project-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="project-breadcrumb-separator">&gt;</span>
          <Link to="/projects">Project</Link>
          <span className="project-breadcrumb-separator">&gt;</span>
          <span className="project-breadcrumb-current">Kiosk Project</span>
        </nav>
      </div>

      <main className="project-container">
        {/* Top Showcase Card (Image Left, Text Right) */}
        <section className="kiosk-top-showcase-card">
          <div className="kiosk-top-media-col">
            <img src={kioskImg1} alt="Students interacting with Netcom touch kiosk" />
          </div>
          <div className="kiosk-top-info-col">
            <h2 className="kiosk-top-card-title">Kiosk Project</h2>
            <p>
              A Kiosk is a small, stand-alone booth used in high-traffic areas for marketing, service or informational purposes. Early kiosks were simple wooden booths that sold refreshments or provided information to passersby, but today&apos;s kiosks are much more sophisticated.
            </p>
            <p>
              Interactive digital kiosks feature touchscreen displays, video players, and audio systems that allow users to interact with content in a variety of ways. Self-service kiosks are also becoming increasingly popular in places like airports, grocery stores, and quick-service restaurants, allowing customers to check in for flights, purchase groceries, and order food without waiting in line for a customer service representative.
            </p>
          </div>
        </section>

        {/* Development Goals Callout Card */}
        <div className="kiosk-goals-box">
          <h3 className="kiosk-goals-heading">Development Goals</h3>
          <p className="kiosk-goals-desc">
            Netcom is an expert provider of KIOSK based solutions for various organizations like Government and Corporates. We offer complete solutions for Kiosk projects, including software and hardware.
          </p>
        </div>

        {/* Centered Heading & Intro Paragraphs */}
        <section className="kiosk-intro-block">
          <h1 className="kiosk-center-title">Kiosk Project</h1>
          <p className="kiosk-center-desc">
            The self-service interactive KIOSK machine is an effective communication medium designed for indoor and outdoor environments. In today&apos;s competitive world, it is vital to stay ahead of the curve and offer your customers the best possible experience.
          </p>
          <p className="kiosk-center-desc">
            Netcom provides complete end-to-end solutions for Kiosk projects, from design and development to hardware deployment and ongoing maintenance. Our interactive kiosks are engineered to streamline operations, reduce wait times, and deliver engaging user experiences across diverse industries.
          </p>
        </section>

        {/* 5 Alternating Industry Showcase Cards */}
        <div className="kiosk-industry-list">
          {/* 1. Healthcare (Text Left, Image Right) */}
          <div className="kiosk-industry-card">
            <div className="kiosk-industry-text">
              <h3 className="kiosk-industry-title">KIOSK In Healthcare:</h3>
              <p>
                Healthcare kiosks are revolutionizing patient care by streamlining registration, check-ins, and appointments. Patients can easily verify insurance information, pay co-pays, and access health records privately. This reduces waiting room congestion and frees hospital staff to focus on critical patient care and medical assistance.
              </p>
            </div>
            <div className="kiosk-industry-media">
              <img src={kioskImg2} alt="Healthcare Kiosk illustration" />
            </div>
          </div>

          {/* 2. Travel Desk (Image Left, Text Right) */}
          <div className="kiosk-industry-card kiosk-card-reverse">
            <div className="kiosk-industry-media">
              <img src={kioskImg3} alt="Travel Desk Kiosk illustration" className="kiosk-media-contain" />
            </div>
            <div className="kiosk-industry-text">
              <h3 className="kiosk-industry-title">KIOSK In Travel Desk:</h3>
              <p>
                Interactive travel and ticketing kiosks simplify trip planning for commuters and travelers. From booking bus, train, or attraction tickets to printing itinerary details and viewing city route maps, travel kiosks deliver 24/7 self-service convenience without requiring dedicated ticket counter agents.
              </p>
            </div>
          </div>

          {/* 3. Airports (Text Left, Image Right) */}
          <div className="kiosk-industry-card">
            <div className="kiosk-industry-text">
              <h3 className="kiosk-industry-title">KIOSK at Airports:</h3>
              <p>
                Airport self-service check-in kiosks empower passengers to quickly print boarding passes, select or change seats, scan passports, and check in baggage with ease. This significantly accelerates passenger throughput, mitigates long queues during peak flight hours, and optimizes terminal floor operations.
              </p>
            </div>
            <div className="kiosk-industry-media">
              <img src={kioskImg4} alt="Airport self-service check-in kiosks" />
            </div>
          </div>

          {/* 4. Tourism Department (Image Left, Text Right) */}
          <div className="kiosk-industry-card kiosk-card-reverse">
            <div className="kiosk-industry-media">
              <img src={kioskImg5} alt="Tourism Department vertical touchscreen kiosk" />
            </div>
            <div className="kiosk-industry-text">
              <h3 className="kiosk-industry-title">KIOSK in Tourism Department:</h3>
              <p>
                Tourism information kiosks serve as 24/7 digital concierge terminals in public centers, heritage landmarks, and transport hubs. Visitors can explore interactive maps, local cultural attractions, emergency helplines, hotel accommodations, and upcoming events in multiple regional and international languages.
              </p>
            </div>
          </div>

          {/* 5. Agriculture (Text Left, Image Right) */}
          <div className="kiosk-industry-card">
            <div className="kiosk-industry-text">
              <h3 className="kiosk-industry-title">KIOSK In Agriculture:</h3>
              <p>
                Rural and agricultural kiosks bridge the digital divide for farming communities by delivering localized weather forecasts, real-time crop market prices, government subsidy schemes, and modern farming techniques through simple multilingual touch interfaces, empowering farmers with actionable insights.
              </p>
            </div>
            <div className="kiosk-industry-media">
              <img src={kioskImg6} alt="Agriculture greenhouse smart kiosk illustration" />
            </div>
          </div>
        </div>

        {/* Reasons to Consider a Kiosk for Your Bank */}
        <section className="kiosk-bank-section">
          <h2 className="kiosk-bank-title">Reasons to Consider a Kiosk for Your Bank</h2>
          <p className="kiosk-bank-intro">
            As customer expectations continue to evolve towards faster, personalized, and more convenient banking experiences, self-service kiosks have emerged as one of the most effective and versatile tools for banks looking to modernise their branch operations, improve customer satisfaction, and reduce operating costs.
          </p>

          <ul className="kiosk-bank-checklist">
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Higher brand recognition through dynamic and interactive advertising &amp; marketing materials</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Reduced long queues and customer churn rate with faster and more efficient service</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Lower costs per transaction. Self-service kiosks can be up to 90% cheaper than traditional branch counters</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Improved customer satisfaction through faster response times</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Extended working hours with round-the-clock service availability</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>More personalized and streamlined banking experience</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Greater flexibility with a broad range of banking capabilities</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Increased cross-selling and up-selling opportunities through targeted promotions</span>
            </li>
          </ul>

          <p className="kiosk-bank-conclusion">
            As banks continue to adapt to the latest digital trends, kiosks will likely become an increasingly popular option for consumers looking for a fast, convenient and cost-effective way to conduct their banking transactions. If you&apos;re looking for a way to improve your bank&apos;s efficiency and customer service, consider implementing a kiosk system.
          </p>
        </section>

        {/* Common Reasons for using KIOSK */}
        <section className="kiosk-common-reasons-section">
          <h2 className="kiosk-common-title">Common Reasons for using KIOSK:</h2>
          <ul className="kiosk-common-list">
            <li>
              <span className="kiosk-arrow-icon">➔</span>
              <div>
                <strong>To improve customer satisfaction</strong> - Self - Service kiosk can help you simplify the customer journey and improve their overall experience with your company.
              </div>
            </li>
            <li>
              <span className="kiosk-arrow-icon">➔</span>
              <div>
                <strong>To save time and money</strong> - Automated kiosks can help you reduce the need for manual processing and shorten wait times, saving both time and money for your business.
              </div>
            </li>
            <li>
              <span className="kiosk-arrow-icon">➔</span>
              <div>
                <strong>Increased efficiency for the bank.</strong>
              </div>
            </li>
            <li>
              <span className="kiosk-arrow-icon">➔</span>
              <div>
                <strong>Streamline operations and improve employee efficiency:</strong> Self-service kiosks can free up your staff from having to perform mundane tasks, such as printing boarding passes or issuing movie tickets. This allows them to focus on other tasks, such as helping customers with more complicated queries or issues.
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Kiosk;
