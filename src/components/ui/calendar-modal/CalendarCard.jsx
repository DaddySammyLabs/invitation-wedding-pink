import React from "react";

const CalendarCard = ({ calendar, image, handleAddDate }) => {
  return (
    <>
      <button
        onClick={handleAddDate}
        className="flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50  hover:bg-gray-50 hover:scale-[1.02] transition-all"
        tabIndex={0}
      >
        <img
          className="lucide lucide-apple w-5 h-5 text-gray-900"
          src={`/icons/${image}`}
          alt={image}
        />

        <span className="text-gray-700 font-medium">{calendar}</span>
      </button>
    </>
  );
};

export default CalendarCard;
