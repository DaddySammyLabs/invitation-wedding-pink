import React from "react";
import WishCard from "./WishCard";
import WishList from "./WishList";

const RecentWishes = ({ texts }) => {
  return (
    <>
      <div className="mt-8 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-700 flex items-center gap-2">
            <img
              className="lucide lucide-scroll-text w-5 h-5 text-rose-500"
              src="/icons/scroll.svg"
              alt="scroll"
            />
            {texts.recent_wishes}
          </h3>
        </div>

        <div className="mt-6">
          <WishList texts={texts} />

          <div className="mt-8 flex justify-center">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 bg-rose-500 hover:bg-rose-600"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down w-4 h-4 animate-bounce"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWishes;
