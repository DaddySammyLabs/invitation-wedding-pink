import React from "react";
import { useApp } from "@/context/AppContext";

import styles from "./Welcome.module.css";

const Welcome = ({ texts }) => {
  const { language, setLanguage, openInvite } = useApp();

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center h-screen">
      <div
        className="mx-auto w-full bg-white relative overflow-hidden border border-gray-200 shadow-lg"
        style={{ opacity: 1 }}
      >
        <main className="relative h-full w-full">
          <div
            className="min-h-screen relative overflow-hidden flex flex-col justify-center"
            style={{ opacity: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white"></div>
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-rose-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10 flex flex-col items-center justify-center px-4">
              <div
                className="w-full max-w-md"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="backdrop-blur-sm bg-white/50 p-6 sm:p-8 md:p-10 rounded-2xl border border-rose-100/50 shadow-xl">
                  <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                    <div className="h-px w-12 sm:w-16 bg-rose-200/50"></div>
                    <div className="w-2 h-2 rounded-full bg-rose-300"></div>
                    <div className="h-px w-12 sm:w-16 bg-rose-200/50"></div>
                  </div>
                  <div
                    className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
                    style={{ opacity: 1 }}
                  >
                    <div className="inline-flex flex-col items-center space-y-1 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                      <img
                        className="lucide lucide-calendar w-5 h-5 text-rose-400"
                        src="/icons/calendar.svg"
                        alt="calendar"
                      />

                      <p className="text-gray-700 font-medium capitalize">
                        {texts.wedding_date}
                      </p>
                    </div>
                    <div className="inline-flex flex-col items-center space-y-1 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                      <img
                        className="lucide lucide-calendar w-5 h-5 text-rose-400"
                        src="/icons/clock.svg"
                        alt="clock"
                      />

                      <p className="text-gray-700 font-medium">
                        {texts.wedding_time}
                      </p>
                    </div>
                  </div>
                  <div className="text-center space-y-4" style={{ opacity: 1 }}>
                    <div className="space-y-2">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
                        {texts.husband_name}
                      </h1>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight border-b pb-4 border-rose-200">
                        <span
                          className={`${styles.and} text-rose-400 mx-2 sm:mx-3`}
                        >
                          &amp;
                        </span>
                        {texts.wife_name}
                      </h1>
                    </div>
                  </div>
                  <div
                    className="text-center py-4 font-thin"
                    style={{ opacity: 1 }}
                  >
                    <p className="text-sm text-gray-500 font-thin">
                      {texts.ayat}
                    </p>
                  </div>
                  <div className="mt-6 sm:mt-8" style={{ opacity: 1 }}>
                    <button
                      onClick={openInvite}
                      className="group duration-3000 relative w-full bg-rose-500 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-medium shadow-lg hover:bg-rose-600 opacity-93 hover:scale-[1.03] transition-all duration-[700ms]"
                      tabIndex="0"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>{texts.open_invitation}</span>
                        <span className={`${styles.moveArrow} animate-pulse `}>
                          →
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {texts.more_details}
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </main>
        {/*  */}
      </div>
    </div>
  );
};

export default Welcome;
