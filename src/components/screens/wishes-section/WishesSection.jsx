import React, { useState } from "react";
import useFetch from "@/hooks/api/useFetch";

import WishesHeader from "./WishesHeader";
import FormWishes from "./FormWishes";
import RecentWishes from "./RecentWishes";
// import CaruselWishes from "./CaruselWishes";

const API_URL = "https://bb7546fa1acca78a.mokky.dev/wishes";

const WishesSection = ({ texts }) => {
  const { data: wishes, loading, error, refetch } = useFetch(API_URL);

  return (
    <section id="wishes" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <WishesHeader texts={texts} />

        <div className="max-w-2xl mx-auto mt-12">
          <FormWishes texts={texts} refetch={refetch} />

          {/* <CaruselWishes /> */}
          <RecentWishes
            texts={texts}
            wishes={wishes}
            loading={loading}
            error={error}
            refetch={refetch}
          />
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
