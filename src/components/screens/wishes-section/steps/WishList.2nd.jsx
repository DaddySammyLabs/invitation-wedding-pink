import { useState, useCallback } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import useShowMore from "@/hooks/useShowMore";
import useFetch from "@/hooks/useFetch";

import WishCard from "../WishCard";
import ShowMoreHide from "@/components/ui/buttons/ShowMoreHide";

const API_URL = "https://bb7546fa1acca78a.mokky.dev/wishes";

const WishList = ({ texts, refreshKey = 0 }) => {
  const [parent] = useAutoAnimate();
  const [refresh, setRefresh] = useState(0);

  const {
    data: wishes,
    loading,
    error,
  } = useFetch(`${API_URL}?_refresh=${refreshKey + refresh}`);

  const handleWishAdded = useCallback(() => {
    setRefresh((prev) => prev + 1);
  }, []);

  const { visibleItems, showAll, handleToggle } = useShowMore(wishes, 5, 3);

  if (loading) {
    return <div>Загрузка пожеланий...</div>;
  }

  if (error) {
    return <div role="alert">Ошибка загрузки: {error}</div>;
  }

  return (
    <>
      <div ref={parent} className="columns-1 gap-4 sm:columns-2">
        {visibleItems.map((wish, index) => (
          <div key={wish.id ?? index} className="mb-4 break-inside-avoid">
            <WishCard
              texts={texts}
              textsWish={wish.textsWish}
              nameAuthor={wish.nameAuthor}
              attend={wish.attend}
              iconVisit={wish.iconVisit}
            />
          </div>
        ))}
      </div>

      {wishes.length > 4 && (
        <div className="mt-8 flex justify-center">
          <ShowMoreHide
            handleTogglePhotos={handleToggle}
            showAll={showAll}
            morephotos={texts.morephotos}
            hidephotos={texts.hidephotos}
          />
        </div>
      )}
    </>
  );
};

export default WishList;
