import { useCallback } from "react";
import Icon from "./Icon";

/**
 * Reusable button / link. Variants: primary | ghost | solid | pill.
 * Includes a pure-CSS ripple driven by pointer coordinates.
 */
export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  children,
  className = "",
  ...rest
}) {
  const Tag = as;

  const onPointerDown = useCallback((event) => {
    const node = event.currentTarget;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--rx-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--rx-y", `${event.clientY - rect.top}px`);
    node.classList.remove("is-rippling");
    void node.offsetWidth;
    node.classList.add("is-rippling");
  }, []);

  return (
    <Tag
      className={`btn btn--${variant} btn--${size} ${className}`}
      onPointerDown={onPointerDown}
      {...rest}
    >
      {icon ? <Icon name={icon} size={18} /> : null}
      <span className="btn__label">{children}</span>
      {iconRight ? <Icon name={iconRight} size={18} className="btn__arrow" /> : null}
      <span className="btn__ripple" aria-hidden="true" />
    </Tag>
  );
}
