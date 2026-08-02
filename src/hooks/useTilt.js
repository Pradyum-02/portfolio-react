import { useCallback, useRef } from "react";

/** Pointer-driven fake-3D tilt. Returns props to spread on any element. */
export default function useTilt({ max = 10, lift = 10, scale = 1.02 } = {}) {
  const ref = useRef(null);

  const onPointerMove = useCallback(
    (event) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
      node.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
      node.style.setProperty("--lift", `${-lift}px`);
      node.style.setProperty("--tilt-scale", String(scale));
      node.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(1)}%`);
      node.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(1)}%`);
    },
    [max, lift, scale]
  );

  const onPointerLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
    node.style.setProperty("--lift", "0px");
    node.style.setProperty("--tilt-scale", "1");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
