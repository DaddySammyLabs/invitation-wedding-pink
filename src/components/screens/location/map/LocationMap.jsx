import React from "react";
import MapGoogle from "./MapGoogle";
import InfoMap from "./InfoMap";

const LocationMap = ({ texts }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <MapGoogle />
        <InfoMap texts={texts} />
      </div>
    </>
  );
};

export default LocationMap;
