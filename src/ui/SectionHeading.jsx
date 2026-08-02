import AnimatedTitle from "./AnimatedTitle";
import Reveal from "./Reveal";

/** Consistent eyebrow + title + description block used by every section. */
export default function SectionHeading({
  eyebrow,
  title,
  highlight = [],
  description,
  align = "left",
}) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow ? (
        <Reveal className="section-heading__eyebrow">
          <span className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <AnimatedTitle text={title} highlight={highlight} className="section-heading__title" />
      {description ? (
        <Reveal delay={120}>
          <p className="section-heading__desc">{description}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
