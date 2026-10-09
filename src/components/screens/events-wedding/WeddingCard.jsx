const WeddingCard = ({ texts, openAddCalendar }) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {texts.wedding}
            </h3>

            <button
              onClick={openAddCalendar}
              className="text-rose-500 hover:text-rose-600 transition-colors"
            >
              <img
                src="/icons/calendar-plus.svg"
                alt="calendar-plus"
                className="w-5 h-5"
              />
            </button>
          </div>

          <div className="space-y-3 text-gray-600">
            {/* Date */}

            <div className="flex items-center space-x-3">
              <img
                src="/icons/calendar1.svg"
                alt="calendar"
                className="w-5 h-5"
              />

              <span>{texts.wedding_date}</span>
            </div>

            {/* Time */}
            <div className="flex items-center space-x-3">
              <img src="/icons/clock1.svg" alt="clock" className="w-5 h-5" />

              <span>{texts.wedding_time2}</span>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3">
              <img src="/icons/map-pin.svg" alt="map-pin" className="w-5 h-5" />

              <span>{texts.wedding_hall}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
