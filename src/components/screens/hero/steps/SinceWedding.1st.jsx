import React from "react";

const SinceWedding = ({ texts }) => {
  return (
    <div className="mt-8">
      <h3 className="text-center text-rose-600 font-semibold mb-4">
        {texts.since_wedding}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100 shadow-sm"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-xl sm:text-2xl font-bold text-rose-600">
            309
          </span>
          <span className="text-xs text-gray-500 capitalize">{texts.days}</span>
        </div>
        <div
          className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100 shadow-sm"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-xl sm:text-2xl font-bold text-rose-600">2</span>
          <span className="text-xs text-gray-500 capitalize">
            {texts.hours}
          </span>
        </div>
        <div
          className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100 shadow-sm"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-xl sm:text-2xl font-bold text-rose-600">
            10
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
            44
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
