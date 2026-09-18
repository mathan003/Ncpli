import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/home screen/netcom logo.png";
import "./Header.css";

// Nav items that need a dropdown list their children here.
// Items with an empty children array render as a plain link.
const NAV_ITEMS = [
  { label: "Home", to: "/", children: [] },
  { label: "About us", to: "/about", children: [] },
  {
    label: "Projects",
    to: "/projects",
    children: [
      { label: "Netcom Digital Contents", to: "/projects/digital-content" },
      { label: "Educational Management Information System", to: "/projects/emis" },
      { label: "Language Lab", to: "/projects/language-lab" },
      { label: "Call Soft", to: "/projects/call-soft" },
      { label: "Assessment", to: "/projects/assessment" },
      { label: "Skill Development & Training", to: "/projects/skill-development" },
      { label: "ICT/Hi-Tech Lab", to: "/projects/ict-hi-tech-lab" },
      { label: "Kiosk Project", to: "/projects/kiosk" },
      { label: "Radio-frequency identification (RFID)", to: "/projects/rfid" },
      { label: "Smart Tailor Shop", to: "/projects/smart-tailor-shop" },
      { label: "Online Cab Booking", to: "/projects/online-cab-booking" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Smart Class Room", to: "/products/smart-class-room" },
      { label: "Smart Tailor Shop", to: "/products/smart-tailor-shop" },
      { label: "Online Cab Booking", to: "/products/online-cab-booking" },
      { label: "Educational Mobile App - Gilgal", to: "/products/gilgal" },
      { label: "Educational Management Information System", to: "/products/emis" },
      { label: "Assessment Tool", to: "/products/assessment-tool" },
    ],
  },
  {
    label: "Service",
    to: "/service",
    children: [
      { label: "Graphic Design", to: "/service/graphic-design" },
      { label: "E-Content Development", to: "/service/e-content-development" },
      { label: "Short Film", to: "/service/short-film" },
      { label: "Web Application Development", to: "/service/web-application-development" },
      { label: "Mobile Application Development", to: "/service/mobile-application-development" },
      { label: "Web Hosting Services", to: "/service/web-hosting-services" },
      { label: "Custom Software Development", to: "/service/custom-software-development" },
      { label: "Hardware Support & Maintenance", to: "/service/hardware-support" },
    ],
  },
  {
    label: "Portfolio",
    to: "/portfolio",
    children: [
      { label: "AR&VR", to: "/portfolio/ar&vr" },
      { label: "Robotics", to: "/portfolio/robotics" },
      { label: "Netcom Smart Class", to: "/portfolio/netcom-smart-class" },
      { label: "Kiosk", to: "/portfolio/kiosk" },
      { label: "Skill Development", to: "/portfolio/skill-development" },
      { label: "Netcom Digital Content", to: "/portfolio/digital-content" },
      { label: "YouTube", to: "/portfolio/youtube" },
    ],
  },
  { label: "Career", to: "/career", children: [] },
  { label: "Contact", to: "/contact", children: [] },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle shadow to the header once the page has scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the viewport is resized back to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__row">
        <NavLink to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Ncpli logo" />
        </NavLink>

        <button
          className={`site-header__toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={`site-nav__item ${item.children.length ? "has-dropdown" : ""}`}
              >
                {item.children.length ? (
                  <>
                    <button
                      type="button"
                      className="site-nav__link site-nav__link--button"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <svg
                        className="site-nav__chevron"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        aria-hidden="true"
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" fill="none" />
                      </svg>
                    </button>
                    <ul
                      className={`site-nav__dropdown ${
                        openDropdown === item.label ? "is-open" : ""
                      }`}
                    >
                      {item.children.map((child) => {
                        const childLabel = typeof child === "string" ? child : child.label;
                        const childTo = typeof child === "string" ? item.to : child.to;
                        return (
                        <li key={childLabel}>
                          <NavLink
                            to={childTo}
                            onClick={() => {
                              setMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {childLabel}
                          </NavLink>
                        </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `site-nav__link ${isActive ? "is-active" : ""}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
