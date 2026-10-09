import { useRef } from "react";

const VideoNavigation1st = ({ texts }) => {
  const ref = useRef();

  const handlePlay = () => {
    ref.current.play();
  };

  const handlePause = () => {
    ref.current.pause();
  };

  const handleToggle = () => {
    if (!ref.current) return;

    if (ref.current.paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <>
      <div
        className="max-w-4xl mx-auto mt-16 text-center space-y-8"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="space-y-4">
          <span
            className="inline-block text-rose-500 font-medium"
            style={{ opacity: 1, transform: "none" }}
          >
            Как добраться
          </span>

          <h3
            className="text-2xl md:text-3xl font-serif text-gray-800"
            style={{ opacity: 1, transform: "none" }}
          >
            Видео-навигация
          </h3>

          <div
            className="flex items-center justify-center gap-4 pt-2"
            style={{ transform: "none" }}
          >
            <div className="h-[1px] w-12 bg-rose-200" />
            <img
              src="/icons/navigation.svg"
              alt="navigation"
              className="lucide lucide-navigation w-5 h-5 text-rose-400"
            />

            <div className="h-[1px] w-12 bg-rose-200" />
          </div>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-xl border-8 border-white group"
          style={{
            maxHeight: "70vh",
            height: "500px",
            opacity: 1,
            transform: "none",
          }}
        >
          <button
            className="absolute top-2 right-2 z-20 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
            aria-label="Закрыть видео"
          >
            <img
              src="/icons/x.svg"
              alt="x"
              className="lucide lucide-x w-5 h-5 text-gray-700"
            />
          </button>

          <video
            ref={ref}
            className="w-full h-full object-contain bg-black"
            poster="/images/video-thumbnail.jpg"
            preload="metadata"
            controlsList="nodownload"
            controls
          >
            <source src="/video/wedding-hall.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>

          {/* <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"> */}
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer   transition-all duration-300">
            <div
              onClick={handleToggle}
              className="opacity-100 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-80 p-5 rounded-full"
            >
              <img
                src={`/icons/${ref.current?.play() ? "pause-circle" : "play-circle"}.svg`}
                alt="play-circle"
                className="h-10 w-10 text-rose-500"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white text-left">
            <p className="text-sm md:text-base font-medium">
              Видео с маршрутом до места свадьбы
            </p>
          </div>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto" style={{ opacity: 1 }}>
          Это видео показывает самый простой маршрут к месту свадьбы. Следуйте
          этим указаниям, чтобы не заблудиться.
        </p>

        <div
          className="text-sm text-gray-500 max-w-2xl mx-auto italic"
          style={{ opacity: 1 }}
        >
          Нажмите X, чтобы свернуть видео. Вы можете открыть его снова в любой
          момент.
        </div>
      </div>
    </>
  );
};

export default VideoNavigation1st;
