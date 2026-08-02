import useReveal from "../hooks/useReveal";

/** Wraps children in a scroll-triggered reveal animation. */
export default function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  className = "",
  ...rest
}) {
  const Tag = as;
  const [ref, inView] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
