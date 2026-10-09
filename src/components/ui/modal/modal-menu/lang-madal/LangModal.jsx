import React from "react";
import { useApp } from "@/context/AppContext";

const LangModal = ({ texts }) => {
  const {
    language,
    setLanguage,
    isLangModalOpen,
    closeLangModal,
    toggleLangModal,
  } = useApp();

  const langSelected = (value) => {
    setLanguage(value);
    closeLangModal();
  };

  return (
    <>
      <div
        className={` absolute top-9 left-0 mt-2 w-40 bg-white rounded-md  border border-gray-200 shadow-lg py-1  focus:outline-none`}
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="py-1">
          <button
            onClick={() => langSelected("en")}
            className={`${language === "en" ? "text-rose-500 font-medium" : ""} w-full text-left px-4 py-2 text-sm hover:bg-rose-50 transition-colors text-gray-700`}
          >
            English
          </button>
          <button
            onClick={() => langSelected("uz")}
            className={`${language === "uz" ? "text-rose-500 font-medium" : ""} w-full text-left px-4 py-2 text-sm hover:bg-rose-50 transition-colors text-gray-700`}
          >
            O'zbekcha
          </button>
          <button
            onClick={() => langSelected("ru")}
            className={`${language === "ru" ? "text-rose-500 font-medium" : ""} w-full text-left px-4 py-2 text-sm hover:bg-rose-50 transition-colors text-gray-700`}
          >
            Русский
          </button>
          <button
            onClick={() => langSelected("kr")}
            className={`${language === "kr" ? "text-rose-500 font-medium" : ""} w-full text-left px-4 py-2 text-sm hover:bg-rose-50 transition-colors text-gray-700`}
          >
            한국어
          </button>
        </div>
      </div>
    </>
  );
};

export default LangModal;
