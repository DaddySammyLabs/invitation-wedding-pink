import { useRef, useState } from "react";
// import { useApp } from "@/context/AppContext";
import useVideo from "@/hooks/useVideo";

const VideoNavigation = ({ texts }) => {
  const {
    videoRef,
    isPlaying,
    setIsPlaying,
    isVideoOpen,
    handleToggle,
    handleOpen,
    handleClose,
  } = useVideo();

  return (
    <>
      <div className="max-w-4xl mx-auto mt-16 text-center space-y-8">
        <div className="space-y-4">
          <span className="inline-block text-rose-500 font-medium">
            {texts.videoNav_subtitle}
          </span>

          <h3 className="text-2xl md:text-3xl font-serif text-gray-800">
            {texts.videoNav_title}
          </h3>

          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="h-[1px] w-12 bg-rose-200" />

            <img
              src="/icons/navigation.svg"
              alt="navigation"
              className="w-5 h-5"
            />

            <div className="h-[1px] w-12 bg-rose-200" />
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-xl border-8 border-white  "
          style={{
            maxHeight: "70vh",
            height: "500px",
          }}
        >
          {!isVideoOpen ? (
            // POSTER

            <button
              onClick={handleOpen}
              className="relative w-full h-full block group"
            >
              <img
                src="/images/video-thumbnail.jpg"
                alt="Видео с маршрутом"
                className="w-full h-full object-cover  "
              />

              <div className="z-2 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white text-left pointer-events-none">
                <p className="text-sm md:text-base font-medium">
                  {texts.videoNav_text}
                </p>
              </div>

              {/* Play button */}
              <div className="z-1 absolute inset-0 flex items-center justify-center cursor-pointer  bg-black/20  group-hover:bg-black/30 transition-all duration-300 ">
                <div className="bg-white/80 p-5 rounded-full shadow-md group-hover:bg-white transition-all">
                  <img
                    src="/icons/play-circle.svg"
                    alt="play"
                    className="h-10 w-10"
                  />
                </div>
              </div>
            </button>
          ) : (
            // VIDEO
            <>
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
                aria-label="Закрыть видео"
              >
                <img src="/icons/x.svg" alt="Закрыть" className="w-5 h-5" />
              </button>

              <video
                ref={videoRef}
                className="w-full h-full object-contain bg-black "
                poster="/images/video-thumbnail.jpg"
                preload="metadata"
                controlsList="nodownload"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={handleClose}
              >
                <source src="/video/wedding-hall.mp4" type="video/mp4" />
                {texts.not_support_video}
              </video>

              {/* Custom play/pause */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {isPlaying ? (
                  <div
                    onClick={handleToggle}
                    className="pointer-events-auto cursor-pointer opacity-0 hover:opacity-100 bg-white/80 p-5 rounded-full hover:bg-white transition-all duration-[1000ms] ease-in-out"
                  >
                    <img
                      src="/icons/pause-circle.svg"
                      alt="pause"
                      className="h-10 w-10 "
                    />
                  </div>
                ) : (
                  <div
                    onClick={handleToggle}
                    className="pointer-events-auto cursor-pointer bg-white/80 p-5 rounded-full hover:bg-white transition-all"
                  >
                    <img
                      src="/icons/play-circle.svg"
                      alt="play"
                      className="h-10 w-10"
                    />
                  </div>
                )}
              </div>

              {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white text-left pointer-events-none">
                <p className="text-sm md:text-base font-medium">
                  Видео с маршрутом до места свадьбы
                </p>
              </div> */}
            </>
          )}
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto">{texts.videoNav_info}</p>

        <div className="text-sm text-gray-500 max-w-2xl mx-auto italic">
          {texts.videoNav_info2}
        </div>
      </div>
    </>
  );
};

export default VideoNavigation;
