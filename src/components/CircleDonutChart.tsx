import { useEffect, useRef, useState } from "react";
import useFoodsContext from "../hooks/useFoodsContext";
import useDescribeArc from "../hooks/useDescribeArc";
import useAnimateArc from "../hooks/useAnimateArc";
import { CircleDonutChartProps } from "../schemas/types";

const radius = 15.9155;
const circumference = 2 * Math.PI * radius;

function CircleDonutChart({ carbs, protein, fat, cal }: CircleDonutChartProps) {
  const [hoverInfo, setHoverInfo] = useState<null | {
    label: string;
    value: number;
    x: number;
    y: number;
  }>(null);

  const handleMouseEnter = (
    e: React.MouseEvent,
    label: string,
    value: number
  ) => {
    setHoverInfo({ label, value, x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setHoverInfo((prev) =>
      prev ? { ...prev, x: e.clientX, y: e.clientY } : null
    );
  };

  const handleMouseLeave = () => {
    setHoverInfo(null);
  };

  const { isDark } = useFoodsContext();
  const carbsRef = useRef<SVGPathElement>(null);
  const proteinRef = useRef<SVGPathElement>(null);
  const fatRef = useRef<SVGPathElement>(null);

  const total = carbs + protein + fat;
  const percentCarbs = (carbs / total) * 100;
  const percentProtein = (protein / total) * 100;
  const percentFat = (fat / total) * 100;

  const carbsPath = useDescribeArc(0, radius, percentCarbs);
  const proteinPath = useDescribeArc(
    percentCarbs,
    radius,
    percentCarbs + percentProtein
  );
  const fatPath = useDescribeArc(percentCarbs + percentProtein, radius, 100);

  useEffect(() => {
    const carbsLength = (percentCarbs / 100) * circumference;
    const proteinLength = (percentProtein / 100) * circumference;
    const fatLength = (percentFat / 100) * circumference;

    useAnimateArc(carbsRef.current, circumference, carbsLength);
    useAnimateArc(proteinRef.current, circumference, proteinLength);
    useAnimateArc(fatRef.current, circumference, fatLength);
  }, [carbs, protein, fat]);

  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 
           a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke={isDark ? "#101828" : "fff"}
          strokeWidth="4"
          fill="none"
        />
        <path
          ref={carbsRef}
          d={carbsPath}
          stroke="#33b24b"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`0 ${circumference}`}
          strokeDashoffset="0"
          onMouseEnter={(e) => handleMouseEnter(e, "Carboidratos", carbs)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <path
          ref={proteinRef}
          d={proteinPath}
          stroke="#fdbe04"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`0 ${circumference}`}
          strokeDashoffset="0"
          onMouseEnter={(e) => handleMouseEnter(e, "Proteínas", protein)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <path
          ref={fatRef}
          d={fatPath}
          stroke="#fd5f51"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`0 ${circumference}`}
          strokeDashoffset="0"
          onMouseEnter={(e) => handleMouseEnter(e, "Gorduras", fat)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="6"
          fill={isDark ? "#fff" : "#000"}
        >
          {cal} Cal
        </text>
      </svg>
      {hoverInfo && (
        <div
          className="fixed text-white bg-[#1e2939] py-1 px-2 rounded-bl-sm pointer-events-none z-50 text-[12px]"
          style={{
            top: hoverInfo.y + 20,
            left: hoverInfo.x + 20,
          }}
        >
          {hoverInfo.label}: {hoverInfo.value}g
        </div>
      )}
    </div>
  );
}

export default CircleDonutChart;
