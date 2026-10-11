import React, { useEffect, useState } from "react";

const WEDDING_DATE = new Date(2027, 7, 14, 19, 30, 0);
// Месяцы в JavaScript начинаются с 0:
// 7 = август. Дата: 14 августа 2027, 19:30.

const getTimeData = () => {
  const now = new Date();
  const difference = now.getTime() - WEDDING_DATE.getTime();

  const isWeddingPassed = difference >= 0;
  const totalSeconds = Math.floor(Math.abs(difference) / 1000);

  return {
    isWeddingPassed,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

const SinceWedding = ({ texts }) => {
  const [time, setTime] = useState(getTimeData);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeData());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const title = time.isWeddingPassed
    ? texts.since_wedding
    : texts.until_wedding;

  return (
    <div className="mt-8">
      <h3 className="text-center text-rose-600 font-semibold mb-4">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100 shadow-sm"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-xl sm:text-2xl font-bold text-rose-600">
            {time.days}
          </span>
          <span className="text-xs text-gray-500 capitalize">{texts.days}</span>
        </div>

        <div
          className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100 shadow-sm"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-xl sm:text-2xl font-bold text-rose-600">
            {time.hours}
          </span>
          <span className="text-xs text-gray-500 capitalize">
            {texts.hours}
          </span>
        </div>

        <div
          className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100 shadow-sm"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-xl sm:text-2xl font-bold text-rose-600">
            {time.minutes}
          </span>
          <span className="text-xs text-gray-500 capitalize">
            {texts.minutes}
          </span>
        </div>

        <div
          className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100 shadow-sm"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-xl sm:text-2xl font-bold text-rose-600">
            {time.seconds}
          </span>
          <span className="text-xs text-gray-500 capitalize">
            {texts.seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SinceWedding;
