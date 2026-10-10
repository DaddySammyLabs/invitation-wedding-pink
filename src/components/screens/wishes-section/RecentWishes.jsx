import React from "react";
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
        </div>
      </div>
    </>
  );
};

export default RecentWishes;
