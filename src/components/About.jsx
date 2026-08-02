import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import useReveal from "../hooks/useReveal";
import useCounter from "../hooks/useCounter";
import { stats } from "../data/experience";
import { profile } from "../data/socials";
import portrait from "../assets/images/portrait.svg";

function StatCard({ stat, index }) {
  const [ref, inView] = useReveal();
  const value = useCounter(stat.value, inView, 1200 + index * 120);

  return (
    <Card
      className={`stat-card reveal reveal--up ${inView ? "is-in" : ""}`}
      max={12}
      lift={8}
    >
      <div ref={ref} className="stat-card__body">
        <span className="stat-card__value">
          {value}
          {stat.suffix}
        </span>
        <span className="stat-card__label">{stat.label}</span>
      </div>
    </Card>
  );
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title="Full-Stack Web Developer & AI Developer"
          highlight={["obsession."]}
          description="I care about writing clean code, designing scalable systems, and building products that are fast, reliable, and enjoyable to use."
        />

        <div className="about__grid">
          <Reveal variant="left" className="about__media">
            <div className="about__portrait">
              <span className="about__ring" aria-hidden="true" />
              <span className="about__ring about__ring--two" aria-hidden="true" />
              <img
                src={portrait}
                alt={`Portrait illustration of ${profile.name}`}
                width="440"
                height="440"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about__location">
              <Icon name="spark" size={18} />
              <span>{profile.location} · {profile.availability}</span>
            </div>
          </Reveal>

          <div className="about__body">
            <Reveal delay={80}>
              <p>
                I&apos;m {profile.name}, a Full-Stack Web Developer and AI Developer passionate about
                building scalable digital products. From responsive React frontends to robust
                Node.js backends and AI-driven features, I enjoy creating software that&apos;s fast,
                reliable, and designed for real-world users.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Every project is an opportunity to write clean code, solve meaningful problems,
                and deliver exceptional user experiences.
              </p>
            </Reveal>

            <div className="about__stats">
              {stats.map((stat, index) => (
                <StatCard stat={stat} index={index} key={stat.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
