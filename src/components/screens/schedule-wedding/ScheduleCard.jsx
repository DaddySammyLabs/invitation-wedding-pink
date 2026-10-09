import React from "react";

const ScheduleCard = ({ image, time, title, description }) => {
  return (
    <div className="relative group" style={{ opacity: 1, transform: "none" }}>
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />

      {/* Карточка */}
      <div className="relative backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-4 md:items-center">
          {/* Иконка + время */}
          <div className="col-span-3 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-white p-2 shadow-sm flex-shrink-0">
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <span className="font-mono text-gray-800 font-medium">{time}</span>
          </div>

          {/* Название */}
          <div className="col-span-3">
            <h3 className="font-medium text-gray-800">{title}</h3>
          </div>

          {/* Описание */}
          <div className="col-span-6">
            <p className="text-gray-600">{description}</p>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-4">
          {/* Иконка + название + время */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-white p-2 shadow-sm flex-shrink-0">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-medium text-gray-800">{title}</h3>
            </div>

            <span className="font-mono text-gray-800 font-medium">{time}</span>
          </div>

          {/* Описание */}
          <div>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
