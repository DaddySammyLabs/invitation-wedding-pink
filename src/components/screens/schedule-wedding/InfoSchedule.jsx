import React from "react";

const InfoSchedule = ({ texts }) => {
  return (
    <>
      <div
        className="text-center space-y-4 mb-16"
        style={{ opacity: 1, transform: "none" }}
      >
        <span
          className="inline-block text-rose-500 font-medium"
          style={{ opacity: 1, transform: "none" }}
        >
          {texts.schedule_subtitle}
        </span>

        <h2
          className="text-4xl md:text-5xl font-serif text-gray-800"
          style={{ opacity: 1, transform: "none" }}
        >
          {texts.schedule_title}
        </h2>

        <div
          className="flex items-center justify-center gap-4 pt-4"
          style={{ transform: "none" }}
        >
          <div className="h-[1px] w-12 bg-rose-200" />

          <img
            src="/icons/clock.svg"
            alt="clock"
            className="lucide lucide-clock w-5 h-5 text-rose-400"
          />

          <div className="h-[1px] w-12 bg-rose-200" />
        </div>

        <div className="space-y-4 max-w-md mx-auto" style={{ opacity: 1 }}>
          <p className="text-gray-600 leading-relaxed">
            {texts.schedule_texts}
          </p>

          <p className="text-gray-600 italic text-sm">
            {texts.schedule_texts2}
          </p>
        </div>

        <div
          className="flex items-center justify-center gap-3 pt-4"
          style={{ transform: "none" }}
        >
          <div className="h-px w-8 bg-rose-200/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
          <div className="h-px w-8 bg-rose-200/50" />
        </div>
      </div>
    </>
  );
};

export default InfoSchedule;
