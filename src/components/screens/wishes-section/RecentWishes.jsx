import { useState } from "react";
import WishList from "./WishList";

const RecentWishes = ({ texts }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleWishAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="mt-8 relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-700 flex items-center gap-2">
          <img
            className="w-5 h-5 text-rose-500"
            src="/icons/scroll.svg"
            alt=""
          />
          {texts.recent_wishes}
        </h3>
      </div>

      <div className="mt-6">
        <WishList texts={texts} refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default RecentWishes;
