import * as React from "react";

const SvgIcon = ({
  color = "#9DC02B",
  trend = "neutral",
}: {
  color?: string;
  trend?: "upward" | "downward" | "neutral";
}) => {
  // Zigzag path points
  const upwardPath = "M1 40 L20 30 L40 35 L60 20 L80 25 L100 10 L118 15";
  const downwardPath = "M1 10 L20 20 L40 15 L60 30 L80 25 L100 40 L118 35";
  const neutralPath = "M1 25 L20 25 L40 25 L60 25 L80 25 L100 25 L118 25";

  const getPath = () => {
    if (trend === "upward") return upwardPath;
    if (trend === "downward") return downwardPath;
    return neutralPath;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="119"
      height="46"
      fill="none"
      viewBox="0 0 119 46"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d={getPath()}
      />
    </svg>
  );
};

export default SvgIcon;
