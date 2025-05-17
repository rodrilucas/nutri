function useAnimateArc(
  el: SVGPathElement | null,
  circumference: number,
  targetLength: number
) {
  if (!el) return;
  let current = 0;
  const step = () => {
    current += 1;
    if (current > targetLength) current = targetLength;
    el.setAttribute("stroke-dasharray", `${current} ${circumference}`);
    if (current < targetLength) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

export default useAnimateArc;
