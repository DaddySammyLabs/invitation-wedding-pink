import React, { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import useShowMore from "@/hooks/useShowMore";
import useFetch from "@/hooks/useFetch";

import WishCard from "../WishCard";
import ShowMoreHide from "@/components/ui/buttons/ShowMoreHide";

const WishList = ({ texts }) => {
  const [parent] = useAutoAnimate();

  const {
    data: wishes,
    loading,
    error,
  } = useFetch("https://bb7546fa1acca78a.mokky.dev/wishes");

  const { visibleItems, showAll, handleToggle } = useShowMore(wishes, 5, 3);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* <div className="columns-1 gap-4 sm:columns-2 ">
      {wishes.map((wish, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <WishCard
            texts={texts}
            textsWish={wish.textsWish}
            nameAuthor={wish.nameAuthor}
            iconVisit={wish.iconVisit}
          />
        </div>
      ))}
    </div> */}
      <div ref={parent} className="columns-1 gap-4 sm:columns-2">
        {" "}
        {visibleItems.map((wish, index) => (
          <div key={wish.id ?? index} className="mb-4 break-inside-avoid">
            {" "}
            <WishCard
              texts={texts}
              textsWish={wish.textsWish}
              nameAuthor={wish.nameAuthor}
              iconVisit={wish.iconVisit}
            />{" "}
          </div>
        ))}{" "}
      </div>
      {wishes.length > 4 && (
        <div className="mt-8 flex justify-center">
          {" "}
          <ShowMoreHide
            handleTogglePhotos={handleToggle}
            showAll={showAll}
            morephotos={texts.morephotos}
            hidephotos={texts.hidephotos}
          />{" "}
        </div>
      )}{" "}
    </>
  );
};

export default WishList;
