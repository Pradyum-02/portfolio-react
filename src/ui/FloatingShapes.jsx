import Icon from "./Icon";
import useMousePosition from "../hooks/useMousePosition";

const shapes = [
  { name: "react", top: "12%", left: "6%", depth: 26, size: 34, delay: 0 },
  { name: "node", top: "68%", left: "10%", depth: 18, size: 30, delay: 1.4 },
  { name: "database", top: "26%", left: "22%", depth: 34, size: 26, delay: 2.2 },
  { name: "docker", top: "80%", left: "28%", depth: 22, size: 32, delay: 0.7 },
  { name: "terminal", top: "8%", left: "42%", depth: 30, size: 28, delay: 1.9 },
  { name: "git", top: "58%", left: "48%", depth: 16, size: 26, delay: 3.1 },
  { name: "cloud", top: "16%", left: "66%", depth: 28, size: 36, delay: 2.6 },
  { name: "server", top: "74%", left: "62%", depth: 20, size: 28, delay: 1.1 },
  { name: "api", top: "40%", left: "80%", depth: 32, size: 30, delay: 0.4 },
  { name: "network", top: "84%", left: "86%", depth: 24, size: 30, delay: 2.9 },
  { name: "laptop", top: "20%", left: "90%", depth: 18, size: 32, delay: 1.6 },
  { name: "code", top: "50%", left: "4%", depth: 30, size: 26, delay: 3.4 },
];

/** Ambient, parallaxed developer-themed icons behind a section. */
export default function FloatingShapes({ density = "full" }) {
  const { nx, ny } = useMousePosition();
  const list = density === "light" ? shapes.filter((_, i) => i % 2 === 0) : shapes;

  return (
    <div className="floating-shapes" aria-hidden="true">
      {list.map((shape) => (
        <span
          key={shape.name + shape.left}
          className="floating-shapes__item"
          style={{
            top: shape.top,
            left: shape.left,
            animationDelay: `${shape.delay}s`,
            transform: `translate3d(${nx * shape.depth}px, ${ny * shape.depth}px, 0)`,
          }}
        >
          <span className="floating-shapes__glyph" style={{ animationDelay: `${shape.delay}s` }}>
            <Icon name={shape.name} size={shape.size} />
          </span>
        </span>
      ))}
      <span className="floating-shapes__blob floating-shapes__blob--one" />
      <span className="floating-shapes__blob floating-shapes__blob--two" />
      <span className="floating-shapes__grid" />
    </div>
  );
}
