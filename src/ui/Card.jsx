import useTilt from "../hooks/useTilt";

/** Solid-colour card with optional pointer-driven fake-3D tilt. */
export default function Card({
  as = "article",
  tilt = true,
  max = 9,
  lift = 10,
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const { ref, onPointerMove, onPointerLeave } = useTilt({ max, lift });
  const handlers = tilt ? { onPointerMove, onPointerLeave } : {};

  return (
    <Tag
      ref={tilt ? ref : undefined}
      className={`card ${tilt ? "card--tilt" : ""} ${className}`}
      {...handlers}
      {...rest}
    >
      <span className="card__sheen" aria-hidden="true" />
      <div className="card__inner">{children}</div>
    </Tag>
  );
}
