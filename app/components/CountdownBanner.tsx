"use client";

import { useState, useEffect } from "react";

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 9,
    minutes: 52,
    seconds: 46,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white border-2 border-accent rounded-lg px-3 py-2 min-w-[60px] text-center shadow-sm">
        <span className="text-2xl font-bold text-accent">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-gray-700 mt-1 uppercase font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full bg-primary border-b border-primary-dark py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
        <h2 className="text-gray-800 font-bold text-lg md:text-xl">
          Welcome Offer Ends Soon
        </h2>
        <div className="flex items-center gap-3">
          <TimeBox value={timeLeft.hours} label="HOURS" />
          <TimeBox value={timeLeft.minutes} label="MINUTES" />
          <TimeBox value={timeLeft.seconds} label="SECONDS" />
        </div>
      </div>
    </div>
  );
}

