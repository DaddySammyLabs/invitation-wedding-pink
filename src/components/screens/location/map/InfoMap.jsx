import MapYandex from "./MapYandex";

const InfoMap = ({ texts }) => {
  return (
    <>
      <div
        className="space-y-6 h-full flex flex-col"
        style={{ opacity: 1, transform: "none", height: "400px" }}
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col justify-between">
          <h3 className="text-2xl font-serif text-gray-800 mb-6">
            {texts.weddingHall}
          </h3>

          <div className="space-y-4">
            {/* Адрес */}
            <div className="flex items-start space-x-4">
              <img
                src="/icons/map-pin.svg"
                alt="map-pin"
                className="lucide lucide-map-pin w-5 h-5 text-rose-500 mt-1"
              />

              <p className="text-gray-600 flex-1">{texts.address}</p>
            </div>

            {/* Дата */}
            <div className="flex items-center space-x-4">
              <img
                src="/icons/calendar-check.svg"
                alt="calendar"
                className="lucide lucide-calendar-check w-5 h-5 text-rose-500"
              />

              <p className="text-gray-600">{texts.wedding_date}</p>
            </div>

            {/* Время */}
            <div className="flex items-center space-x-4">
              <img
                src="/icons/clock1.svg"
                alt="clock"
                className="lucide lucide-clock w-5 h-5 text-rose-500"
              />

              <p className="text-gray-600">{texts.wedding_time2}</p>
            </div>

            <MapYandex texts={texts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoMap;
