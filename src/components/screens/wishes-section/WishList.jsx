import { useState, useEffect, useCallback } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import axios from "axios";

import useShowMore from "@/hooks/useShowMore";
import WishCard from "./WishCard";
import ShowMoreHide from "@/components/ui/buttons/ShowMoreHide";

const API_URL = "https://bb7546fa1acca78a.mokky.dev/wishes";

const WishList = ({ texts, refreshKey = 0 }) => {
  const [parent] = useAutoAnimate();

  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWishes = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setWishes(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error("Ошибка загрузки wishes:", err);
      setError("Не удалось загрузить пожелания.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWishes();
  }, [fetchWishes, refreshKey]);

  const { visibleItems, showAll, handleToggle } = useShowMore(wishes, 5, 3);

  if (loading) {
    return <p>{texts.wishes_uploading}</p>;
  }

  if (error) {
    return (
      <div>
        <p role="alert">{error}</p>
        <button type="button" onClick={fetchWishes}>
          {texts.try_again}
        </button>
      </div>
    );
  }

  if (wishes.length === 0) {
    return <p>{texts.no_requests}</p>;
  }

  return (
    <>
      <div ref={parent} className="columns-1 gap-4 sm:columns-2">
        {visibleItems.map((wish) => (
          <div key={wish.id} className="mb-4 break-inside-avoid">
            <WishCard
              texts={texts}
              textsWish={wish.textsWish}
              nameAuthor={wish.nameAuthor}
              attend={wish.attend}
              iconVisit={wish.iconVisit}
              createdAt={wish.createdAt}
            />
          </div>
        ))}
      </div>

      {wishes.length > 5 && (
        <div className="mt-8 mb-8 flex justify-center">
          <ShowMoreHide handleToggle={handleToggle} showAll={showAll} />
        </div>
      )}
    </>
  );
};

export default WishList;
