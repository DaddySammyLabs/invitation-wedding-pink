import React, { useState } from "react";

import WishesHeader from "./WishesHeader";
import FormWishes from "./FormWishes";
import RecentWishes from "./RecentWishes";
// import CaruselWishes from "./CaruselWishes";

const WishesSection = ({ texts }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleWishAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <section id="wishes" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <WishesHeader texts={texts} />

        <div className="max-w-2xl mx-auto mt-12">
          <FormWishes texts={texts} onWishAdded={handleWishAdded} />

          {/* <CaruselWishes /> */}
          <RecentWishes texts={texts} refreshKey={refreshKey} />
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
