import React, { useState } from "react";

const Navigation = ({ texts }) => {
  const [isActive, setActive] = useState("home");

  const navigation = [
    {
      id: "home",
      href: "#home",
      label: `${texts.home}`,
      icon: (
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
          className="h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
    {
      id: "event",
      href: "#event",
      label: `${texts.events}`,
      icon: (
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
          className="h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200"
        >
          <path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" />
        </svg>
      ),
    },
    {
      id: "location",
      href: "#location",
      label: `${texts.location}`,
      icon: (
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
          className="h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      id: "photos",
      href: "#photos",
      label: `${texts.photos}`,
      icon: (
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
          className="h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      ),
    },
    {
      id: "wishes",
      href: "#wishes",
      label: `${texts.wishes}`,
      icon: (
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
          className="h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed left-1/2 bottom-2 -translate-x-1/2 z-30 w-full px-2 max-w-screen-md">
      <div className="backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] px-4 py-2">
        <nav className="flex justify-between items-center">
          {navigation.map((item) => {
            const active = isActive === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`
                  flex flex-col items-center justify-center
                  py-2 px-2 md:px-6
                  rounded-xl
                  transition-all duration-200
                  hover:bg-gray-50/80
                  ${active ? "text-rose-500 bg-rose-50" : "text-gray-600"}
                `}
                tabIndex={0}
              >
                {item.icon}

                <span
                  className={`
                    text-[10px] sm:text-xs
                    font-medium
                    transition-all duration-200
                    line-clamp-1
                    ${active ? "scale-105 text-rose-500" : "scale-100"}
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
