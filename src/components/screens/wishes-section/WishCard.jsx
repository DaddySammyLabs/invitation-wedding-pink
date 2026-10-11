import React from "react";

const WishCard = ({
  texts,
  textsWish,
  nameAuthor,
  attend,
  iconVisit,
  createdAt,
}) => {
  const isAttending = attend === "true";

  const icon =
    attend !== undefined
      ? isAttending
        ? "circle-check-big"
        : "circle-x"
      : iconVisit || "circle-x";

  const formatDate = (date) => {
    if (!date) return "Дата не указана";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Дата не указана";
    }

    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="sm:col-span-2" style={{ opacity: 1, transform: "none" }}>
        <div
          className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-500/30 shadow-md flex flex-col h-full"
          style={{ minHeight: "104.601px" }}
        >
          <div className="flex items-start space-x-3 mb-2">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                {nameAuthor?.[0]?.toUpperCase() || "?"}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-gray-800 text-sm truncate">
                  {nameAuthor}
                </h4>

                <img
                  className="lucide w-4 h-4 text-rose-500"
                  src={`/icons/${icon}.svg`}
                  alt={isAttending ? "Придёт" : "Не придёт"}
                  title={isAttending ? "Придёт" : "Не придёт"}
                />
              </div>

              <div className="flex items-center space-x-1 text-gray-500 text-xs">
                <img
                  className="lucide w-4 h-4 text-rose-500"
                  src="/icons/clock-gray.svg"
                  alt=""
                />

                <time className="truncate date">{formatDate(createdAt)}</time>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-2 flex-grow whitespace-pre-wrap break-words">
            {textsWish}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
