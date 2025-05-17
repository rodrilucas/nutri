import usePolarToCartesian from "./usePolarToCartesian";

function useDescribeArc(startPercent: number, radius: number, endPercent: number) {
  const center = 18;
  const startAngle = (startPercent / 100) * 360;
  const endAngle = (endPercent / 100) * 360;

  const start = usePolarToCartesian(center, center, radius, endAngle);
  const end = usePolarToCartesian(center, center, radius, startAngle);
  const largeArcFlag = endPercent - startPercent <= 50 ? "0" : "1";

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

export default useDescribeArc;