import React, { useEffect, useState } from "react";

import WeddingCard from "./WeddingCard";

const InfoEvents = ({ texts, openAddCalendar }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // const isVisible = ref(false)
  // onMounted(() => {
  //   // небольшая задержка, чтобы можно было красиво “проявить” блок
  //   setTimeout(() => {
  //     isVisible.value = true
  //   }, 100)
  // })

  return (
    <>
      {/* <section id="event" className="relative overflow-hidden"> */}
      <div
        className="relative container mx-auto px-4 pb-10 transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="text-center space-y-4 mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0px)" : "translateY(20px)",
          }}
        >
          <span
            className="inline-block text-rose-500 font-medium mb-2 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0px)" : "translateY(10px)",
            }}
          >
            {texts.events_subtitle}
          </span>

          <h2
            className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0px)" : "translateY(20px)",
            }}
          >
            {texts.events_title}
          </h2>

          <p
            className="text-gray-500 max-w-md mx-auto transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0px)" : "translateY(20px)",
            }}
          >
            {texts.events_texts}
          </p>

          <div
            className="flex items-center justify-center gap-4 mt-6 transition-all duration-700"
            style={{
              transform: isVisible ? "scale(1)" : "scale(0)",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div className="h-[1px] w-12 bg-rose-200"></div>

            <div className="text-rose-400">
              <img src="/icons/heart.svg" alt="heart" className="w-4 h-4" />
            </div>

            <div className="h-[1px] w-12 bg-rose-200"></div>
          </div>
        </div>

        <div
          className="max-w-2xl mx-auto transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0px)" : "translateY(40px)",
          }}
        >
          <WeddingCard texts={texts} openAddCalendar={openAddCalendar} />
        </div>
      </div>

      {/* </section> */}
    </>
  );
};

export default InfoEvents;
