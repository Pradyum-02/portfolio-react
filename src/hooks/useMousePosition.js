import { useEffect, useState } from "react";

/**
 * Tracks pointer position, normalised to -1..1 on both axes,
 * plus raw client coordinates. Throttled to one update per frame.
 */
export default function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    let frame = 0;
    const onMove = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const { innerWidth: w, innerHeight: h } = window;
        setPos({
          x: event.clientX,
          y: event.clientY,
          nx: (event.clientX / w) * 2 - 1,
          ny: (event.clientY / h) * 2 - 1,
        });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return pos;
}
