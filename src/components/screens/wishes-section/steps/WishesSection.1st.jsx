import React from "react";

import WishesHeader from "../WishesHeader";
import FormWishes from "../FormWishes";
import RecentWishes from "../RecentWishes";
// import CaruselWishes from "./CaruselWishes";

const WishesSection = ({ texts }) => {
  return (
    <>
      <section id="wishes" className="min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <WishesHeader texts={texts} />

          <div className="max-w-2xl mx-auto space-y-6">
            <div
              speed="100"
              className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:500s] py-2"
            >
              {/* <CaruselWishes /> */}
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12">
            <FormWishes texts={texts} />

            {/* <div className="mt-0 relative"> */}
            <RecentWishes texts={texts} />

            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WishesSection;
