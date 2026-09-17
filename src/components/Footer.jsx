import { Link } from "react-router-dom";
import "./Footer.css";

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

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__about">
          <h3>Netcom Computers Pvt Ltd</h3>
          <p>
            Netcom Computers Pvt Ltd is an information technology based
            company in education and training.
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Site map</h4>
          <ul>
            {SITE_MAP.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>
                  <span className="site-footer__arrow" aria-hidden="true">
                    &rarr;
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Head office</h4>
          <address>
            <p>No. 1/1, Nathan Street, Adikalapuram,<br />Murugankurichi, Palayamkottai,<br />Tirunelveli &ndash; 627 002</p>
            <p><a href="mailto:support@ncpl.com">support@ncpl.com</a></p>
            <p><a href="tel:+917306025014">+91 7306025014</a>, <a href="tel:+919791509522">+91 9791509522</a></p>
          </address>
        </div>

        <div className="site-footer__col">
          <h4>Corporate office</h4>
          <address>
            <p>No. 96, First Floor,<br />Chamiers Road,<br />Chennai &ndash; 600 018.</p>
            <p><a href="mailto:support@ncpl.com">support@ncpl.com</a></p>
            <p><a href="tel:04442125369">044 &ndash; 421 253 69</a></p>
          </address>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-row">
          <p>&copy; {year} Netcom Computers Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
