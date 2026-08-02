import Button from "../ui/Button";
import Icon from "../ui/Icon";
import FloatingShapes from "../ui/FloatingShapes";
import DevIllustration from "../ui/DevIllustration";
import Reveal from "../ui/Reveal";
import { profile } from "../data/socials";
import { stack } from "../data/skills";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <FloatingShapes />

      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal variant="up" className="hero__badge-wrap">
            <span className="badge">
              <span className="badge__pulse" aria-hidden="true" />
              {profile.availability}
            </span>
          </Reveal>

          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__line-inner" style={{ animationDelay: "80ms" }}>
                Hi, I&apos;m {profile.firstName}.
              </span>
            </span>
            <span className="hero__line">
              <span
                className="hero__line-inner hero__line-inner--accent"
                style={{ animationDelay: "220ms" }}
              >
                Full-Stack Web Developer & AI Developer
              </span>
            </span>
          </h1>

          <Reveal delay={280}>
            <p className="hero__lede">
              {profile.tagline} Final-year Computer Engineering student who ships
              production-grade React frontends, Node.js APIs and the cloud plumbing that keeps
              them fast.
            </p>
          </Reveal>

          <Reveal delay={380} className="hero__cta">
            <Button as="a" href={profile.resumeUrl} download variant="primary" size="lg" icon="download">
              Download Resume
            </Button>
            <Button as="a" href="#projects" variant="ghost" size="lg" iconRight="arrowRight">
              View Projects
            </Button>
          </Reveal>

          <Reveal delay={480} className="hero__meta">
            <div className="hero__meta-item">
              <Icon name="cloud" size={18} />
              <span>{profile.location}</span>
            </div>
          </Reveal>
        </div>

        <div className="hero__visual">
          <DevIllustration />
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...stack, ...stack].map((item, index) => (
            <span className="hero__marquee-item" key={`${item}-${index}`}>
              {item}
              <span className="hero__marquee-sep" />
            </span>
          ))}
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span className="hero__scroll-line" aria-hidden="true" />
        <Icon name="arrowDown" size={18} />
      </a>
    </section>
  );
}
