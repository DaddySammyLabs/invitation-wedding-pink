import React, { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";

const Navigation = ({ texts }) => {
  const { toBlock, upButton } = useApp();

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        // Секция считается активной, когда попадает
        // примерно в центральную часть экрана
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.2, 0.5, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    {
      id: "home",
      label: "Главная",
      icon: "home",
      onClick: upButton,
    },
    {
      id: "event",
      label: "События",
      icon: "calendar",
      onClick: () => toBlock(1000),
    },
    {
      id: "location",
      label: "Локация",
      icon: "location",
      onClick: () => toBlock(3150),
    },
    {
      id: "photos",
      label: "Фотографии",
      icon: "photos",
      onClick: () => toBlock(4800),
    },
    {
      id: "wishes",
      label: "Пожелания",
      icon: "wishes",
      onClick: () => toBlock(10500),
    },
  ];

  return (
    <div className="fixed left-1/2 bottom-2 -translate-x-1/2 z-30 w-full px-2 max-w-screen-md">
      <div className="backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] px-4 py-2">
        <nav className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                onClick={item.onClick}
                className={`
                  flex flex-col items-center justify-center
                  py-2 px-2 md:px-6 rounded-xl
                  transition-all duration-200
                  hover:bg-gray-50/80
                  ${isActive ? "text-primary bg-primary/5" : "text-gray-600"}
                `}
                tabIndex={0}
              >
                {/* Здесь твоя SVG иконка */}

                <span
                  className={`
                    text-[10px] sm:text-xs font-medium
                    transition-all duration-200 line-clamp-1
                    ${isActive ? "scale-105 text-rose-500" : "scale-100"}
                  `}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
