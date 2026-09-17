import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";
import heroImage from "../assets/image/contact/banner.png";
import companyIcon from "../assets/image/contact/Head Office.png";
import houseIcon from "../assets/image/contact/house.png";
import mailIcon from "../assets/image/contact/mail.png";
import callIcon from "../assets/image/contact/call.png";
import personIcon from "../assets/image/contact/person.png";
import messageIcon from "../assets/image/contact/message.png";
import facebookIcon from "../assets/image/contact/facebook.png";
import instagramIcon from "../assets/image/contact/insta.png";
import linkedinIcon from "../assets/image/contact/linkedin.png";
import xIcon from "../assets/image/contact/X.png";
import whatsappIcon from "../assets/image/contact/whatsapp.png";

const locations = [
  {
    id: 1,
    name: "Netcom Computers - Head Office",
    address: "Adikalapuram, Tirunelveli, Tamil Nadu, India",
    position: [8.7139, 77.7567],
    mapsUrl: "https://maps.app.goo.gl/8jndRX12MuaUeuxRA",
  },
  {
    id: 2,
    name: "Netcom Computers - Chennai Branch",
    address: "Chamiers Road, Chennai, Tamil Nadu, India",
    position: [13.0827, 80.2707],
    mapsUrl: "https://maps.app.goo.gl/hXx8qFuXUAX2db9GA",
  },
  {
    id: 3,
    name: "Netcom Computers - Coimbatore Branch",
    address: "Coimbatore, Tamil Nadu, India",
    position: [11.0168, 76.9558],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Netcom+Computers+Coimbatore+Tamil+Nadu",
  },
];

function GoogleLocationsMap({ activeLocationId, onSelectLocation }) {
  const mapElement = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const activeLocationRef = useRef(activeLocationId);

  useEffect(() => {
    activeLocationRef.current = activeLocationId;
  }, [activeLocationId]);

  useEffect(() => {
    if (!mapElement.current) return undefined;

    const bounds = L.latLngBounds(locations.map((loc) => loc.position));

    // Enable fractional zoomSnap (0.1) so Leaflet zooms in tightly around the 3 locations
    const map = L.map(mapElement.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      zoomSnap: 0.1,
      zoomDelta: 0.5,
    });

    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Fit tightly to all 3 locations with minimal padding (zoomed in tightly on display)
    map.fitBounds(bounds, {
      padding: [35, 35],
      animate: false,
    });

    locations.forEach((location) => {
      const isHeadOffice = location.id === 1;
      const markerPin = L.divIcon({
        className: "custom-map-pin",
        html: `
          <div class="map-pin-container">
            <div class="map-pin-bubble ${isHeadOffice ? "map-pin-bubble--primary" : ""}"></div>
            <div class="map-pin-label">${location.name.replace("Netcom Computers - ", "")}</div>
          </div>
        `,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
      });

      const marker = L.marker(location.position, { icon: markerPin }).addTo(map);

      marker.bindPopup(`
        <div class="map-popup">
          <h3>${location.name}</h3>
          <p>${location.address}</p>
          <a href="${location.mapsUrl}" target="_blank" rel="noreferrer">Get Directions →</a>
        </div>
      `);

      marker.on("click", () => {
        if (onSelectLocation) onSelectLocation(location.id);
      });

      markersRef.current[location.id] = marker;
    });

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
      if (!activeLocationRef.current) {
        map.fitBounds(bounds, { padding: [35, 35], animate: false });
      }
    });

    resizeObserver.observe(mapElement.current);

    return () => {
      resizeObserver.disconnect();
      map.remove();
    };
  }, [onSelectLocation]);

  useEffect(() => {
    if (!mapRef.current) return;
    const bounds = L.latLngBounds(locations.map((loc) => loc.position));

    if (activeLocationId) {
      const target = locations.find((l) => l.id === activeLocationId);
      if (target) {
        mapRef.current.flyTo(target.position, 14, { duration: 1 });
        const marker = markersRef.current[target.id];
        if (marker) {
          marker.openPopup();
        }
      }
    } else {
      mapRef.current.flyToBounds(bounds, {
        padding: [35, 35],
        duration: 1,
      });
      mapRef.current.closePopup();
    }
  }, [activeLocationId]);

  return (
    <div
      className="contact-map"
      ref={mapElement}
      aria-label="Interactive map showing three Netcom Computers locations"
    />
  );
}

const Contact = () => {
  const [activeLocationId, setActiveLocationId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Website enquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Contact Number: ${formData.phone}`,
      "",
      formData.message,
    ].join("\n");

    setSubmitState("sent");
    window.location.href = `mailto:support@ncpl.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitState("idle");
    }, 1000);
  };

  return (
    <div className="contact-page">

      {/* =========================
          CONTACT HERO
      ========================= */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div>
            <p className="contact-small-title">LET'S CONNECT</p>
            <h1>Contact Us</h1>
            <p>We are here to help answer any question you might have.<br />We look forward to hearing from you!</p>
          </div>
          <img className="contact-hero-image" src={heroImage} alt="Netcom Computers reception" />
        </div>
      </section>

      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Contact</span>
        </nav>
      </div>

      {/* =========================
          CONTACT INFORMATION + FORM
      ========================= */}
      <section className="contact-main">
        <div className="contact-grid">

          {/* Contact Form */}
          <div className="contact-form-column">
            <div className="contact-section-heading">
              <span aria-hidden="true">➤</span>
              <div>
                <h2>Send Us a Message</h2>
                <p>Fill out the form and team will get back to you soon</p>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name<sup>*</sup></label>
                  <div className="form-field">
                    <img src={personIcon} alt="" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email<sup>*</sup></label>
                  <div className="form-field">
                    <img src={mailIcon} alt="" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Contact Number<sup>*</sup></label>
                  <div className="form-field">
                    <img src={callIcon} alt="" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message<sup>*</sup></label>
                  <div className="form-field form-field-textarea">
                    <img src={messageIcon} alt="" />
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="contact-submit">Send Message</button>
                <p className={`contact-form-status contact-form-status--${submitState}`} role="status" aria-live="polite">
                  {submitState === "sent" && "Your email app is opening with this message ready to send."}
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-office-card">
              <h3><img src={companyIcon} alt="" /> Head Office</h3>
              <div className="contact-item">
                <img className="contact-icon-image" src={houseIcon} alt="" />
                <p>No. 1/1, Nathan Street, Adikalapuram, Tirunelveli - 627002, Tamil Nadu, India.</p>
              </div>
              <div className="contact-item">
                <img className="contact-icon-image" src={mailIcon} alt="" />
                <p><a href="mailto:support@ncpl.com">support@ncpl.com</a></p>
              </div>
              <div className="contact-item">
                <img className="contact-icon-image" src={callIcon} alt="" />
                <p><a href="tel:04622595979">0462 - 2595979</a></p>
              </div>
            </div>
            <div className="contact-office-card">
              <h3><img src={companyIcon} alt="" /> Branch Office</h3>
              <div className="contact-item">
                <img className="contact-icon-image" src={houseIcon} alt="" />
                <p>No. 86, First Floor, Chamiers Road, Chennai - 600018, Tamil Nadu, India.</p>
              </div>
              <div className="contact-item">
                <img className="contact-icon-image" src={mailIcon} alt="" />
                <p><a href="mailto:support@ncpl.com">support@ncpl.com</a></p>
              </div>
              <div className="contact-item">
                <img className="contact-icon-image" src={callIcon} alt="" />
                <p><a href="tel:04442125369">044 - 4212 5369</a></p>
              </div>
            </div>
            <div className="contact-social">
              <strong>Follow Us</strong>
              <a href="https://www.facebook.com/profile.php?id=100083369047697" target="_blank" rel="noreferrer" aria-label="Facebook"><img src={facebookIcon} alt="" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={instagramIcon} alt="" /></a>
              <a href="https://in.linkedin.com/company/netcom-computers-pvt-ltd" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={linkedinIcon} alt="" /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><img src={xIcon} alt="" /></a>
              <a href="https://wa.me/917397730945?text=Hello, I am interested in your services..   &   I would like to contact you." target="_blank" rel="noreferrer" aria-label="WhatsApp"><img src={whatsappIcon} alt="" /></a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          OUR LOCATIONS
      ========================= */}
      <section className="locations-section">

        <div className="section-heading centered">
          <span>OUR LOCATIONS</span>
          <h2>Location</h2>

          <p className="locations-description">
            Visit one of our locations and connect with the Netcom Computers
            team.
          </p>
        </div>

        <div className="locations-wrapper">

          {/* Map */}
          <div className="map-container">
            <GoogleLocationsMap
              activeLocationId={activeLocationId}
              onSelectLocation={setActiveLocationId}
            />
            {activeLocationId && (
              <button
                type="button"
                className="map-reset-btn"
                onClick={() => setActiveLocationId(null)}
              >
                ← View All 3 Locations
              </button>
            )}
          </div>

          {/* Location Cards */}
          <div className="location-cards">
            {locations.map((location) => {
              const isActive = activeLocationId === location.id;
              return (
                <div
                  className={`location-card ${isActive ? "location-card--active" : ""}`}
                  key={location.id}
                  onClick={() => setActiveLocationId(isActive ? null : location.id)}
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveLocationId(isActive ? null : location.id);
                    }
                  }}
                >
                  <div className="location-number">
                    {String(location.id).padStart(2, "0")}
                  </div>

                  <div className="location-card-content">
                    <h3>{location.name}</h3>

                    <p>{location.address}</p>

                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}
      <section className="contact-bottom">

        <h2>Let's Start a Conversation</h2>

        <p>
          Connect with Netcom Computers and take your next idea forward.
        </p>

        <a
          href="mailto:info@netcomcomputers.com"
          className="about-button"
        >
          Email Us <span>→</span>
        </a>

      </section>

    </div>
  );
};

export default Contact;