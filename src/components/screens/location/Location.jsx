import React from "react";
import InfoLocation from "./InfoLocation";
import LocationMap from "./map/LocationMap";

import VideoNavigation from "./VideoNavigation";

const Location = ({ texts }) => {
  return (
    <>
      <section id="location">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <InfoLocation texts={texts} />
          <LocationMap texts={texts} />

          <VideoNavigation texts={texts} />
        </div>
      </section>
    </>
  );
};

export default Location;
