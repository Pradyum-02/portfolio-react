import { useEffect, useRef, useState } from "react";
import Card from "../ui/Card";
import Icon from "../ui/Icon";

/** Reusable vertical timeline whose progress line grows while scrolling. */
export default function Timeline({ items }) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = trackRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = rect.height + window.innerHeight * 0.3;
      const seen = window.innerHeight * 0.75 - rect.top;
      setProgress(Math.max(0, Math.min(1, seen / total)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="timeline" ref={trackRef}>
      <div className="timeline__line" aria-hidden="true">
        <span className="timeline__line-fill" style={{ transform: `scaleY(${progress})` }} />
      </div>

      <ol className="timeline__list">
        {items.map((item, index) => (
          <TimelineItem item={item} index={index} key={item.id} />
        ))}
      </ol>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`timeline__item ${index % 2 ? "timeline__item--right" : ""} ${
        inView ? "is-in" : ""
      }`}
    >
      <span className="timeline__node" aria-hidden="true">
        <span className="timeline__node-dot" />
      </span>
      <Card className="timeline__card" max={8} lift={8}>
        <span className="timeline__period">{item.period}</span>
        <h3 className="timeline__role">{item.role}</h3>
        <p className="timeline__company">
          {item.company} · <span>{item.location}</span>
        </p>
        <p className="timeline__summary">{item.summary}</p>
        <ul className="timeline__points">
          {item.points.map((point) => (
            <li key={point}>
              <Icon name="check" size={14} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="timeline__tags">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </li>
  );
}
