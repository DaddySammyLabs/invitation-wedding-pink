import React from "react";

const ParentsCard = ({
  texts,
  title,
  imageDad,
  imageMom,
  nameDad,
  nameMom,
}) => {
  return (
    <>
      <div
        className="relative group bg-white rounded-3xl p-10 shadow-xl border border-rose-100 hover:shadow-2xl transition-all duration-500"
        style={{ opacity: 1, transform: "translateY(20px)" }}
      >
        <div className="absolute -top-5 -left-5 w-16 h-16 bg-rose-100 rounded-full blur-2xl z-0" />

        <div className="relative z-10 text-center space-y-8">
          <div>
            <h3 className="text-3xl font-serif text-gray-800 mb-2">{title}</h3>

            <div className="h-px w-20 bg-rose-300 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Отец */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-rose-50 opacity-85 flex items-center justify-center shadow-md relative overflow-hidden">
                <img
                  src={imageDad}
                  alt="Father"
                  width={96}
                  height={96}
                  className="object-cover object-center"
                />
              </div>

              <h4 className="text-sm uppercase tracking-widest text-rose-400 mt-3">
                {texts.father}
              </h4>

              <p className="text-xl font-serif text-gray-700 mt-1">{nameDad}</p>
            </div>

            {/* Мать */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-rose-50 opacity-85 flex items-center justify-center shadow-md relative overflow-hidden">
                <img
                  src={imageMom}
                  alt="Mother"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              <h4 className="text-sm uppercase tracking-widest text-rose-400 mt-3">
                {texts.mother}
              </h4>

              <p className="text-xl font-serif text-gray-700 mt-1">{nameMom}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentsCard;
