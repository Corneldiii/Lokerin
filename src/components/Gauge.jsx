import React from "react";

const Gauge = ({ value }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const gap = 90;

  const redValue = Math.min(value, 17);                        
  const yellowValue = Math.min(Math.max(value-10 , 0), 41);   
  const greenValue = Math.min(Math.max(value-15 , 0), 85);   

  const redProgress = (redValue / 100) * circumference;
  const yellowProgress = (yellowValue / 100) * circumference;
  const greenProgress = (greenValue  / 100) * circumference;

  return (
    <div className="flex items-center justify-center  w-44 h-44  relative">
      <svg
        width="180"
        height="180"
        viewBox="0 0 240 200"
        style={{ transform: "rotate(118deg)" }}
      >
        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#333"
          strokeWidth="25"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={gap}
          strokeLinecap="round"
        />

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#08CB00"
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - greenProgress}
        />

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#FFEB00"
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - yellowProgress}
        />

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#E62727"
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - redProgress}
        />
      </svg>

      <div className="absolute text-center">
        <p className="font-bold">Kecocokan</p>
        <p className="text-2xl font-extrabold">{value}%</p>
      </div>
    </div>
  );
};

export default Gauge;
