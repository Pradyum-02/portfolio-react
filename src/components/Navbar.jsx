import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { profile } from "../data/socials";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 180 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`navbar ${scrolled ? "is-scrolled" : ""} ${hidden && !open ? "is-hidden" : ""}`}
    >
      <div className="navbar__inner container">
        <a className="navbar__logo" href="#top" onClick={() => setOpen(false)}>
          <span className="navbar__mark" aria-hidden="true">
            <Icon name="code" size={18} />
          </span>
          <span className="navbar__logo-text">
            {profile.firstName}
            <span className="navbar__dot">.</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Sections">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${active === link.id ? "is-active" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <Button
            as="a"
            href={profile.resumeUrl}
            download
            variant="primary"
            size="sm"
            icon="download"
          >
            Resume
          </Button>
          <button
            className="navbar__burger"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <ul>
          {links.map((link, index) => (
            <li key={link.id} style={{ transitionDelay: `${index * 55}ms` }}>
              <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                <span>{link.label}</span>
                <Icon name="arrowRight" size={20} />
              </a>
            </li>
          ))}
        </ul>
        <Button as="a" href={profile.resumeUrl} download variant="primary" icon="download">
          Download resume
        </Button>
      </div>
    </header>
  );
}
