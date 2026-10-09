import React from "react";

const InfoLocation = ({ texts }) => {
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
          {texts.location_subtitle}
        </span>

        <h2
          className="text-4xl md:text-5xl font-serif text-gray-800"
          style={{ opacity: 1, transform: "none" }}
        >
          {texts.location}
        </h2>

        <div
          className="flex items-center justify-center gap-4 pt-4"
          style={{ transform: "none" }}
        >
          <div className="h-[1px] w-12 bg-rose-200" />
          <img
            src="/icons/map-pin1.svg"
            alt="map-pin"
            className="lucide lucide-map-pin w-5 h-5 text-rose-400"
          />

          <div className="h-[1px] w-12 bg-rose-200" />
        </div>
      </div>
    </>
  );
};

export default InfoLocation;
