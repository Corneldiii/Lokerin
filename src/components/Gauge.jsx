import React from "react";

const Gauge = ({ value }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const gap = 90;

  const redValue = Math.min(value, 25);                        // max 25
  const yellowValue = Math.min(Math.max(value - 25, 0), 50);   // max 25
  const greenValue = Math.min(Math.max(value , 0), 100);    // max 50

  // Hitung panjang arc masing-masing
  const redProgress = (redValue / 100) * circumference;
  const yellowProgress = (yellowValue / 100) * circumference;
  const greenProgress = (greenValue  / 100) * circumference;

  console.log(circumference - greenProgress)
  return (
    <div className="flex items-center justify-center bg-amber-500 w-64 h-64 relative">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{ transform: "rotate(118deg)" }}
      >
        {/* Background arc */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#333"
          strokeWidth="15"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={gap}
          strokeLinecap="round"
        />

        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#08CB00"
          strokeWidth="15"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - greenProgress}
        />

        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#FFEB00"
          strokeWidth="15"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - yellowProgress}
        />

        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#E62727"
          strokeWidth="15"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - redProgress}
        />
      </svg>

      <div className="absolute text-center">
        <p className="font-bold">Index Kecocokan</p>
        <p className="text-2xl font-extrabold">{value}%</p>
      </div>
    </div>
  );
};

export default Gauge;
