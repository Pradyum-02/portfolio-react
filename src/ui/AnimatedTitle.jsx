import useReveal from "../hooks/useReveal";

/**
 * Splits text into words and reveals each one with a staggered
 * translate + blur transition. `highlight` words get the accent gradient.
 */
export default function AnimatedTitle({
  text,
  as = "h2",
  highlight = [],
  className = "",
  delay = 0,
}) {
  const Tag = as;
  const [ref, inView] = useReveal();
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`anim-title ${inView ? "is-in" : ""} ${className}`}>
      {words.map((word, index) => (
        <span className="anim-title__word" key={`${word}-${index}`}>
          <span
            className={`anim-title__inner ${
              highlight.includes(word.replace(/[.,]/g, "")) ? "anim-title__inner--accent" : ""
            }`}
            style={{ transitionDelay: `${delay + index * 55}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
