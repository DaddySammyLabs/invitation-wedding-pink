import React from "react";

const CalendarCard = ({ texts }) => {
  return (
    <>
      <button
        className="flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50  hover:bg-gray-50 hover:scale-[1.02] transition-all"
        tabIndex={0}
        style={{ transform: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-apple w-5 h-5 text-gray-900"
        >
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>

        <span className="text-gray-700 font-medium">Apple Календарь</span>
      </button>
    </>
  );
};

export default CalendarCard;
