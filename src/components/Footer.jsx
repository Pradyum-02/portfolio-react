import Icon from "../ui/Icon";
import { profile, socials } from "../data/socials";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container">
        <span className="footer__divider" aria-hidden="true" />

        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__mark" aria-hidden="true">
              <Icon name="code" size={18} />
            </span>
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.role} · {profile.location}</span>
            </div>
          </div>

          <nav className="footer__socials" aria-label="Social links">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className="social-btn social-btn--sm"
                aria-label={social.label}
              >
                <Icon name={social.id === "mail" ? "mail" : social.id} size={18} />
              </a>
            ))}
          </nav>

          <button className="footer__top" onClick={toTop} aria-label="Back to top">
            <Icon name="arrowUp" size={18} />
            <span>Back to top</span>
          </button>
        </div>

        <p className="footer__note">
          © {new Date().getFullYear()} {profile.name}. Built with love ❤️ and a lot of coffee ☕
        </p>
      </div>
    </footer>
  );
}
