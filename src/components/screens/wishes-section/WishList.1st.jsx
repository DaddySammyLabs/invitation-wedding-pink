import React from "react";
import WishCard from "./WishCard";

const WishList = ({ texts }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Column 1 */}

        {/* <div className="flex flex-col gap-4"> */}
        <WishCard texts={texts} iconVisit="circle-check-big" />

        <WishCard
          texts={texts}
          iconVisit="circle-x"
          textsWish={texts.parents_texts}
        />
        <WishCard texts={texts} iconVisit="circle-x" />

        <WishCard
          texts={texts}
          iconVisit="circle-check-big"
          textsWish={texts.parents_texts}
        />
        {/* </div> */}

        {/* Column 2 */}
        {/* <div className="flex flex-col gap-4">
          <WishCard
            texts={texts}
            iconVisit="circle-check-big"
            textsWish={texts.parents_texts}
          />

          <WishCard texts={texts} iconVisit="circle-x" />
        </div> */}
      </div>
    </>
  );
};

export default WishList;
