import React from "react";

const ShadePink = ({ opacityNum }) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5 pointer-events-none`}
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-rose-300" />
        <div className="absolute top-1/4 -right-24 w-64 h-64 rounded-full bg-rose-200" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-rose-100" />
      </div>
    </>
  );
};

export default ShadePink;
