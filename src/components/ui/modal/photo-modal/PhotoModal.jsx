import React from "react";

const PhotoModal = ({ title, image, closeModal }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center
            bg-black/90 p-4"
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div
          className="relative flex items-center justify-center
              w-full h-full"
          onClick={(event) => event.stopPropagation()}
        >
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[85vh] object-contain
                rounded-lg shadow-2xl"
          />

          {/* Кнопка закрытия */}
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 z-10
                flex items-center justify-center
                w-11 h-11 rounded-full
                bg-white/20 hover:bg-white/40
                text-white text-2xl
                transition-colors duration-200"
            aria-label="Закрыть фотографию"
          >
            {/* &times; */}
            <img src="/icons/close-white.svg" alt="close" />
          </button>

          {/* Название фотографии */}
          {title && (
            <p
              className="absolute bottom-4 left-4 right-4
                  text-center text-white font-serif text-lg
                  drop-shadow-lg"
            >
              {title}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PhotoModal;
