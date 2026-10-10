import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { photos } from "./db.photos";
import ShowMoreHide from "@/components/ui/buttons/ShowAllHide";

const NewChapter = ({ texts }) => {
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? photos : photos.slice(0, 4);

  const [parent] = useAutoAnimate();

  return (
    <div className="mt-32 text-center" style={{ opacity: 1 }}>
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
            <div
              key={index}
              className="relative aspect-square overflow-hidden group rounded-xl shadow-md border-2 border-white flex items-center justify-center"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="block w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
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
          ))}
        </div>

        <ShowMoreHide
          hide_photos={texts.hide_photos}
          all_photos={texts.all_photos}
          showAll={showAll}
          setShowAll={setShowAll}
        />
      </div>
    </div>
  );
};

export default NewChapter;
