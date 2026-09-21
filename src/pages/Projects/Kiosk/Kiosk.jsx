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
              A kiosk is an interactive system designed for public use thatdelivers information or enables transactions.
              Standard or custom applications developed for information kiosks provide customers with information, 
              the ability to participate in loyalty programs, and transaction capability.Enterprises deploy kiosks to 
              increase customer loyalty, strengthen their brand with target customers, and reduce operational costs.
            </p>
            <p>
              A kiosk includes a computer and a display screen and allows for customer input of data via an input device 
              such as a touch screen or keyboard. A kiosk differs from a standard computer in that it runs application(s) 
              developed for a specific purpose(s).
            </p>
          </div>
        </section>

        {/* Development Goals Callout Card */}
        <div className="kiosk-goals-box">
          <h3 className="kiosk-goals-heading">Purpose of Kiosk:</h3>
          <p className="kiosk-goals-desc">
                A kiosk is a small, stand-alone booth typically placed in high-traffic areas for business purposes.It typically provides information and applications on education, commerce, entertainment, 
                and a variety of other topics.
          </p>
        </div>

        {/* Centered Heading & Intro Paragraphs */}
        <section className="kiosk-intro-block">
          <h1 className="kiosk-center-title">Kiosk Project</h1>
          <p className="kiosk-center-desc">
            The software we developed for TMB contains the Contents that are designed and developed by using the FLASH software. Online Contents can be upload/download easily. If we want to changeor edit the contents, it will be easily modified and updated.
          </p>
          <p className="kiosk-center-desc">
            NETCOM executed the KIOSK project along with Software and have installed 82 Bank Kiosks for Tamil Nadu Mercantile Bank (TMB). These KIOSKs have touch screen facility where the user or the customer could access his / her Banking details such as transaction details along with the information about the bank's new products and facilities. These KIOSKs have been established in the States of Karnataka, Gujarat, Delhi, Maharashtra, Andhra Pradesh, Kerala, Tamil Nadu and Puducherry in India.
          </p>
        </section>

        {/* 5 Alternating Industry Showcase Cards */}
        <div className="kiosk-industry-list">
          {/* 1. Healthcare (Text Left, Image Right) */}
          <div className="kiosk-industry-card">
            <div className="kiosk-industry-text">
              <h3 className="kiosk-industry-title">KIOSK In Healthcare:</h3>
              <p>
                Netcom Health Care Kiosk helps in mechanised check-ins and registration, patient 
                status, online filling of forms and questionnaires, insurance confirmation, 
                systematize patient queuing, payment of bills and report of outstanding payments. 
                Public Health Centre often utilize self-service kiosks to assist patients with 
                check-in, as well as offer wayfinding services on large campuses.
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
                Netcom Travel Desk Kiosk used in bus and train stations to dispense tickets and 
                provide wayfinding for different stops along each route.Printing tickets for train 
                or bus journeys.Interactive touchscreen for viewing timetables and selecting 
                train or bus tickets. Scanning railcards, and season tickets.Buying travel and 
                season tickets.Gaining feedback via surveys on interactive kiosks.It is helpful in 
                information such as bus or train times, travel updates or government guidelines.
              </p>
            </div>
          </div>

          {/* 3. Airports (Text Left, Image Right) */}
          <div className="kiosk-industry-card">
            <div className="kiosk-industry-text">
              <h3 className="kiosk-industry-title">KIOSK at Airports:</h3>
              <p>
                Netcom kiosks for flight check-in and self-tagging of checked luggage have been 
                common for more than a decade now. Airports also utilize kiosks for wayfinding 
                around facility, and to communicate flight information and gate changes. It is a 
                touch-screen device allowing passengers to do self-check-in and pay with credit 
                or debit cards for free.Kiosks provide a valid boarding pass at the end.Passengers 
                can save time by using kiosks at busy airports and avoid long queues.
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
                Netcom Travel and Tourism kiosks provide visitors with information on local 
                restaurants, hotels, shopping, and attractions. Individual listings provide 
                additional information, and wayfinding capabilities allow visitors to navigate 
                their destination.
              </p>
            </div>
          </div>

          {/* 5. Agriculture (Text Left, Image Right) */}
          <div className="kiosk-industry-card">
            <div className="kiosk-industry-text">
              <h3 className="kiosk-industry-title">KIOSK In Agriculture:</h3>
              <p>
                Netcom agri-kiosk is finding a strong foothold and to empower marginalized 
                peoples from some of the backward districts and creating skilled farmers.
                Agri-kiosk is a one-stop shop for all agricultural needs providing services such 
                as soil testing, seed selection, appropriate pesticides, herbicides, and fungicides.
                Agri-kiosks also provide the latest agriculturalequipment on rent which make it 
                easily accessible for women farmers.             </p>
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
            Netcom smart card is connected with our project ―School Management System‖. This is about the class attendance signing system using student’s smart card. The Purpose of our project is to collect the student’s class attendance by using student’s smart card and it also provides the options for the staff to calculate the student attendance percentage to view the attendance report and entry the student’s marks for automatically calculating the total, percentage, and grade.
          </p>

          <ul className="kiosk-bank-checklist">
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Migrate customers from teller-based transactions to on-line banking to reduce costs.</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Enhance customer satisfaction by providing needed Web-based services in the branch office.</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Increase revenue and 'share of wallet' by offering additional products and services via cross sell and up-sell opportunities.</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Improved customer satisfaction through faster response times</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Acquire new customers via sign-up/opening an account.</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Educate new and existing customers about service & product offering.</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>nitiate and provide rewards in the form of loyalty.</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Learn more about customer preferences by collecting vital data.</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Provide additional training and educational services to employees.</span>
            </li>
            <li>
              <span className="kiosk-check-icon">✔</span>
              <span>Bridge language barriers with non-English speaking customers.
                    Netcom can give this project to Aranilayathurai, Agriculture, health care, travel desk, tourism department.</span>
            </li>
          </ul>

          <p className="kiosk-bank-conclusion">
            Our kiosks can also streamline the check-in process— significantly reducing long lines at airports, train stations or car hire outlets. Netcom Tourism Kiosk Application streamlines information and provides the best possible and latest results, which significantly saves the time of users and consistently yields desirable results.
          </p>
        </section>

        {/* Common Reasons for using KIOSK */}
        <section className="kiosk-common-reasons-section">
          <h2 className="kiosk-common-title">Common Reasons for using KIOSK:</h2>
          <ul className="kiosk-common-list">
            <li>
              <span className="kiosk-arrow-icon">➔</span>
              <div>
                The primary reasons of self-service kiosks have become popular so quickly is that they allow companies to engage with their customer base on the user’s own terms.
              </div>
            </li>
            <li>
              <span className="kiosk-arrow-icon">➔</span>
              <div>
                The self-service kiosk is to allow customers to complete various common tasks on their own without the assistance of a dedicated employee.
              </div>
            </li>
            <li>
              <span className="kiosk-arrow-icon">➔</span>
              <div>
                Kiosks can also reduce business costs.
              </div>
            </li>
            <li>
              <span className="kiosk-arrow-icon">➔</span>
              <div>
                Kiosks are easily accessible and the individuals working there are usually pleasant and ready to help, both of which make it simpler to provide the customer with detailed information. ∙ Kiosks are small, temporary booths placed in areas with high foot traffic that are used by businesses to reach their customers.
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Kiosk;
