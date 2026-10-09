import React from "react";

import WishesHeader from "./WishesHeader";
import FormWishes from "./FormWishes";
import RecentWishes from "./RecentWishes";
// import B3_CaruselCongrations from "./B3_CaruselCongrations";
// import B4_CaruselCongrations from "./B4_CaruselCongrations";
// import B5_CaruselCongrations from "./B5_CaruselCongrations";
// import FormCongratulation from "./FormCongratulation";
// import B7_RecentRequestsTitle from "./B7_RecentRequestsTitle";
// import B8_Requests from "./B8_Requests/B8_Requests";

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
              {/* <B2_CaruselCongrations /> */}
              {/* <B3_CaruselCongrations /> */}
              {/* <B4_CaruselCongrations /> */}
              {/* <B5_CaruselCongrations /> */}
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12">
            <FormWishes texts={texts} />

            {/* <div className="mt-0 relative"> */}
            <RecentWishes texts={texts} />
            {/* <B8_Requests /> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WishesSection;
