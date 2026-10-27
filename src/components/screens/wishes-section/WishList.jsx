import { useAutoAnimate } from "@formkit/auto-animate/react";

import useShowMore from "@/hooks/useShowMore";
import WishCard from "./WishCard";
import ShowMoreHide from "@/components/ui/buttons/ShowMoreHide";

const API_URL = "https://bb7546fa1acca78a.mokky.dev/wishes";

const WishList = ({ texts, wishes, loading, error, refetch }) => {
  const [parent] = useAutoAnimate();

  const safeWishes = Array.isArray(wishes) ? wishes : [];

  const { visibleItems, showAll, handleToggle } = useShowMore(safeWishes, 5, 3);

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
