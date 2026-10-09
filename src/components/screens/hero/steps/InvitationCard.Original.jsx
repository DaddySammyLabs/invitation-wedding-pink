import React, { forwardRef } from "react";

//for download -> npm install html-to-image

const InvitationCard = ({ texts }) => {
  return (
    <>
      <div
        className="relative max-w-[420px] max-h-[640px] w-full mx-auto rounded-2xl overflow-hidden bg-white border border-rose-100 shadow-lg"
        style={{ opacity: 1, transform: "none" }}
      >
        <picture className="absolute inset-0 z-0">
          <img
            src="/images/couple-1.jpeg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100/20 to-white/40"></div>
        <div className="relative px-6 sm:px-10 py-10 sm:py-12 z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
            <div className="w-24 sm:w-36 h-0.5 bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
          </div>
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <h1 className="font-serif text-gray-800">
                <div className="text-sm sm:text-base text-rose-500 mb-2 font-sans">
                  Во имя Аллаха, Милостивого, Милосердного
                </div>
                <div className="text-md mt-2 sm:text-lg mb-1">Свадьба</div>
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2">
                  Muhammad
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2">
                  <span className="text-rose-400 mx-2 text-md font-thin">
                    &amp;
                  </span>
                  Saodat
                </div>
              </h1>
              <div className="flex items-center justify-center space-x-2">
                <img
                  className="lucide lucide-calendar w-4 h-4 text-rose-400"
                  src="/icons/calendar.svg"
                  alt="calendar"
                />

                <p className="text-gray-700 font-medium">
                  четверг, 14 августа 2025 г.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img
                  className="lucide lucide-clock w-4 h-4 text-rose-400"
                  src="/icons/clock.svg"
                  alt="clock"
                />

                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  19:30 ~ 01:30
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 sm:w-12 bg-rose-200/70"></div>
              <div className="w-2 h-2 rounded-full bg-rose-200"></div>
              <div className="h-px w-8 sm:w-12 bg-rose-200/70"></div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 font-serif italic text-sm">Для:</p>
              <p className="text-rose-500 font-semibold text-md">
                <span>
                  Мы рады видеть вас,
                  <br />
                  Boqoev Muhiddin ❤️
                </span>
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px">
            <div className="w-24 sm:w-36 h-0.5 bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitationCard;
