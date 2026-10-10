import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { memories } from "./db.photos";

import ShowMoreHide from "@/components/ui/buttons/ShowMoreHide";

const NewChapter = ({ texts }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const visiblePhotos = memories.slice(0, visibleCount);
  const showAll = visibleCount >= memories.length;

  const handleTogglePhotos = () => {
    if (showAll) {
      setVisibleCount(4);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, memories.length));
    }
  };

  // const [parent] = useAutoAnimate();
  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  return (
    <>
      <div className="mt-32 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif mb-2">
            {texts.newChapter_title}
          </h2>

          <p className="text-gray-600 mb-8">{texts.newChapter_subtitle} 💖</p>
        </div>

        <div className="mt-12">
          <div
            ref={parent}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {visiblePhotos.map((photo, index) => (
              <div key={photo.title} className="flex flex-col gap-3 md:gap-4">
                <div className="relative aspect-square overflow-hidden group rounded-xl shadow-md border-2 border-white">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="p-4 text-white text-center">
                      <img
                        className="lucide lucide-heart w-6 h-6 mx-auto mb-2 fill-white"
                        src="/icons/heart-white.svg"
                        alt="heart-white"
                      />

                      <p className="font-serif">{photo.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {memories.length > 4 && (
            <ShowMoreHide
              handleTogglePhotos={handleTogglePhotos}
              showAll={showAll}
              more_photos={texts.more_photos}
              hide_photos={texts.hide_photos}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default NewChapter;
