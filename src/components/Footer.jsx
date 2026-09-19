import { Link } from "react-router-dom";
import "./Footer.css";
import netcomLogo from "../assets/image/home screen/netcom logo.png";

const SITE_MAP = [
  { label: "Smart Class Room", to: "/products/smart-class-room" },
  { label: "Netcom Digital Contents", to: "/projects/digital-content" },
  { label: "Language Lab", to: "/projects/language-lab" },
  { label: "Call Soft", to: "/projects/call-soft" },
  { label: "Assessment", to: "/projects/assessment" },
  { label: "Skill Development & Training", to: "/projects/skill-development" },
  { label: "Kiosk Projects", to: "/projects/kiosk" },
  { label: "Privacy Policy", to: "/contact" },
];

function MapPinIcon() {
  return (
    <svg className="site-footer__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="site-footer__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="site-footer__icon site-footer__icon--phone" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#ffffff" />
      <path
        d="M16.4 14.8c-.5-.5-1.2-.5-1.7 0l-.8.8c-.2.2-.5.3-.8.1-1.3-.7-2.4-1.8-3.1-3.1-.2-.3-.1-.6.1-.8l.8-.8c.5-.5.5-1.2 0-1.7L9.8 8.1c-.5-.5-1.2-.5-1.7 0l-.9.9c-.6.6-.8 1.5-.4 2.3 1.2 2.5 3.2 4.5 5.7 5.7.8.4 1.7.2 2.3-.4l.9-.9c.5-.5.5-1.2 0-1.7l-1.2-1.2z"
        fill="#0b3824"
      />
    </svg>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        {/* Column 1: Netcom Brand with Logo */}
        <div className="site-footer__brand">
          <img
            src={netcomLogo}
            alt="Netcom Computers Logo"
            className="site-footer__logo"
          />
          <p className="site-footer__brand-text">
            Netcom Computers Pvt Ltd Is An<br />
            Information Technology Based Company<br />
            In Education And Training.
          </p>
        </div>

        {/* Column 2: Site Map */}
        <div className="site-footer__col">
          <h4 className="site-footer__heading">SITE MAP</h4>
          <ul className="site-footer__nav-list">
            {SITE_MAP.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>
                  <span className="site-footer__arrow" aria-hidden="true">
                    ➔
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Head Office */}
        <div className="site-footer__col">
          <h4 className="site-footer__heading">HEAD OFFICE</h4>
          <address className="site-footer__address">
            <div className="site-footer__contact-item">
              <MapPinIcon />
              <span>
                No. 1/1, Nathan Street, Adikalapuram,<br />
                Murugankurichi, Palayamkottai,<br />
                Tirunelveli - 627 002
              </span>
            </div>
            <div className="site-footer__contact-item">
              <MailIcon />
              <a href="mailto:Support@Ncpli.Com">Support@Ncpli.Com</a>
            </div>
            <div className="site-footer__contact-item">
              <PhoneIcon />
              <div className="site-footer__phone-numbers">
                <a href="tel:+917305023014">+91 7305023014</a>,{" "}
                <a href="tel:+919791509522">+91 9791509522</a>
              </div>
            </div>
          </address>
        </div>

        {/* Column 4: Corporate Office */}
        <div className="site-footer__col">
          <h4 className="site-footer__heading">CORPORATE OFFICE</h4>
          <address className="site-footer__address">
            <div className="site-footer__contact-item">
              <MapPinIcon />
              <span>
                No. 86, First Floor,<br />
                Chamiers Road,<br />
                Chennai - 600 018.
              </span>
            </div>
            <div className="site-footer__contact-item">
              <MailIcon />
              <a href="mailto:Support@Ncpli.Com">Support@Ncpli.Com</a>
            </div>
            <div className="site-footer__contact-item">
              <PhoneIcon />
              <a href="tel:04442125369">044 - 421 253 69</a>
            </div>
          </address>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-row">
          <p>&copy; {year} Netcom Computers Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
