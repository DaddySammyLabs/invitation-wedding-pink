import React from "react";

const MapYandex = ({ texts }) => {
  return (
    <>
      <div className="pt-4">
        <a
          href="https://yandex.com/maps/?ol=geo&text=Allama%20Muhammad%20Iqbal%20Street,%207&sll=64.426876,39.761720&sspn=0.006337,0.008211"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
          tabIndex={0}
        >
          <img
            src="/icons/external-link.svg"
            alt="external-link"
            className="lucide lucide-external-link w-3.5 h-3.5"
          />

          <span className="font-semibold">{texts.view_map}</span>
        </a>
      </div>
    </>
  );
};

export default MapYandex;
