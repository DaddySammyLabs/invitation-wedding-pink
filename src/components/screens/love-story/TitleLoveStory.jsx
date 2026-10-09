import React from "react";

import { useApp } from "@/context/AppContext";

const TitleLoveStory = ({ texts }) => {
  const { toBlock } = useApp();

  return (
    <>
      <div
        className="text-center mb-16"
        style={{ opacity: 1, transform: "none" }}
      >
        <span
          className="text-rose-500 font-medium inline-block mb-2"
          style={{ opacity: 1 }}
        >
          {texts.loveStory_subtitle}
        </span>

        <h2
          className="text-4xl md:text-5xl font-serif text-gray-800 mb-4"
          style={{ opacity: 1, transform: "none" }}
        >
          {texts.loveStory_title}
        </h2>

        <div
          className="flex items-center justify-center gap-3 mb-6"
          style={{ transform: "none" }}
        >
          <div className="h-px w-12 bg-rose-200" />
          <img
            src="/icons/heart1.svg"
            alt="heart"
            className="lucide lucide-heart w-5 h-5 text-rose-400 fill-rose-400"
          />

          <div className="h-px w-12 bg-rose-200" />
        </div>

        <p className="text-gray-600 max-w-lg mx-auto" style={{ opacity: 1 }}>
          {texts.loveStory_text}
        </p>

        <div className="mt-8" style={{ opacity: 1, transform: "none" }}>
          <button
            onClick={() => toBlock(7700)}
            className="text-rose-500 flex items-end mx-auto group cursor-pointer"
          >
            <span className="mr-2 group-hover:underline">
              {texts.skip_toGallary}
            </span>
            <img
              src="/icons/chevron-down.svg"
              alt="heachevron-downrt"
              className="lucide lucide-chevron-down w-4 h-4 animate-bounce "
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TitleLoveStory;
