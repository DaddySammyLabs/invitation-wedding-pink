import React from "react";
import { useApp } from "@/context/AppContext";
import styles from "./ChooseLang.module.css";

const ChooseLang = ({ texts }) => {
  const {
    language,
    setLanguage,

    isLanguageModalOpen,
    closeLanguageModal,

    playSong,
  } = useApp();

  const langSelected = (value) => {
    setLanguage(value);
    closeLanguageModal();
    playSong();
  };

  return (
    <>
      {/*  */}{" "}
      {isLanguageModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-xl"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <img
                  className="lucide lucide-globe w-10 h-10 text-rose-500"
                  src="/icons/globe.svg"
                  alt="globe"
                />
              </div>
              <h2 className="text-2xl font-serif text-gray-800 mb-2">
                Выберите язык
              </h2>
              <p className="text-gray-600 text-sm">
                Пожалуйста, выберите предпочитаемый язык
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => langSelected("en")}
                className={`${language === "en" ? "border-rose-400 bg-rose-50 text-rose-600 font-medium" : ""} py-3 px-4 rounded-xl border text-center transition-all border-gray-200 hover:border-rose-200 hover:bg-rose-50/50`}
                tabIndex="0"
                style={{ transform: "none" }}
              >
                English
              </button>
              <button
                onClick={() => langSelected("uz")}
                className={`${language === "uz" ? "border-rose-400 bg-rose-50 text-rose-600 font-medium" : ""} py-3 px-4 rounded-xl border text-center transition-all border-gray-200 hover:border-rose-200 hover:bg-rose-50/50`}
                tabIndex="0"
                style={{ transform: "none" }}
              >
                O'zbekcha
              </button>
              <button
                onClick={() => langSelected("ru")}
                className={`${language === "ru" ? "border-rose-400 bg-rose-50 text-rose-600 font-medium" : ""} py-3 px-4 rounded-xl border text-center transition-all border-gray-200 hover:border-rose-200 hover:bg-rose-50/50`}
                tabIndex="0"
                style={{ transform: "none" }}
              >
                Русский
              </button>
              <button
                onClick={() => langSelected("kr")}
                className={`${language === "kr" ? "border-rose-400 bg-rose-50 text-rose-600 font-medium" : ""}py-3 px-4 rounded-xl border text-center transition-all border-gray-200 hover:border-rose-200 hover:bg-rose-50/50`}
                tabIndex="0"
                style={{ transform: "none" }}
              >
                한국어
              </button>
            </div>
          </div>
        </div>
      )}
      {/*  */}
    </>
  );
};

export default ChooseLang;
