import { useAutoAnimate } from "@formkit/auto-animate/react";

import usePhotos from "@/hooks/usePhotos";
import useShowMore from "@/hooks/useShowMore";

import ShowMoreHide from "@/components/ui/buttons/ShowMoreHide";
import PhotoModal from "@/components/ui/modal/photo-modal/PhotoModal";

const NewChapter = ({ texts }) => {
  const [parent] = useAutoAnimate();

  const {
    memories,
    selectedImage,
    setSelectedImage,

    closeModal,
  } = usePhotos();

  const {
    visibleItems: visiblePhotos,
    showAll,
    handleToggle: handleTogglePhotos,
  } = useShowMore(memories, 4, 3);

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
              <div
                key={photo.title ?? index}
                className="flex flex-col gap-3 md:gap-4"
              >
                <div
                  className="relative aspect-square overflow-hidden
                    group rounded-xl shadow-md border-2 border-white
                    cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center
                      transition-transform duration-300
                      group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0
                      bg-gradient-to-t from-black/50 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      flex items-end justify-center"
                  >
                    <div className="p-4 text-white text-center">
                      <img
                        className="w-6 h-6 mx-auto mb-2"
                        src="/icons/heart-white.svg"
                        alt=""
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

      {/* Модальное окно с фотографией */}
      {selectedImage && (
        <PhotoModal
          image={selectedImage.image}
          title={selectedImage.title}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default NewChapter;
