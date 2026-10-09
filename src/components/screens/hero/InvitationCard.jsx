import React, { forwardRef } from "react";
import styles from "./Hero.module.css";

const InvitationCard = forwardRef(({ texts }, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full max-w-[420px] h-[540px] mx-auto rounded-2xl overflow-hidden bg-white border border-rose-100 shadow-lg"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/couple-1.jpeg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-rose-100/20 to-white/40" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
          <div className="w-24 sm:w-36 h-0.5 bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
        </div>

        <div className="space-y-8 text-center">
          <div className="space-y-6">
            <h1 className="font-serif text-gray-800">
              <div className="text-sm sm:text-base text-rose-500 mb-2 font-sans">
                {texts.bismi}
              </div>

              <div className="text-md mt-2 sm:text-lg mb-1">
                {texts.wedding_of}
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl mb-2">
                {texts.husband_name}
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl mb-2">
                <span
                  className={`${styles.and} text-rose-400 mx-2 text-md font-thin`}
                >
                  &amp;
                </span>
                {texts.wife_name}
              </div>
            </h1>

            <div className="flex items-center justify-center space-x-2">
              <img
                className="w-4 h-4 text-rose-400"
                src="/icons/calendar.svg"
                alt="calendar"
              />

              <p className="text-gray-700 font-medium">{texts.wedding_date}</p>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <img
                className="w-4 h-4 text-rose-400"
                src="/icons/clock.svg"
                alt="clock"
              />

              <span className="text-gray-700 font-medium text-sm sm:text-base">
                {texts.wedding_time}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 sm:w-12 bg-rose-200/70" />
            <div className="w-2 h-2 rounded-full bg-rose-200" />
            <div className="h-px w-8 sm:w-12 bg-rose-200/70" />
          </div>

          <div className="space-y-2">
            <p className="text-gray-500 font-serif italic text-sm">Для:</p>

            <p className="text-rose-500 font-semibold text-md">
              {texts.invite_text2}
              <br />
              ❤️
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px">
          <div className="w-24 sm:w-36 h-0.5 bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
        </div>
      </div>
    </div>
  );
});

InvitationCard.displayName = "InvitationCard";

export default InvitationCard;
