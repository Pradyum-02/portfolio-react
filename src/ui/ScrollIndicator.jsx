import useScrollProgress from "../hooks/useScrollProgress";

/** Top gradient scroll progress bar. */
export default function ScrollIndicator() {
  const { progress } = useScrollProgress();
  return (
    <div className="scroll-indicator" role="presentation">
      <span className="scroll-indicator__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
