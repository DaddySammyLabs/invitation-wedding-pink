import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import useWeddingCalendar from "@/hooks/useWeddingCalendar";

// нужно при нажатии открылась соответствующий добавление в календар
// в хроме
// в apple , outlook скачалось ->  wedding.ics с указанной датой

const AddCalendar = ({ texts, closeAddCalendar }) => {
  const [parent] = useAutoAnimate();

  const { downloadICS, openGoogleCalendar } = useWeddingCalendar();

  const handleDownloadICS = () => {
    downloadICS();
    closeAddCalendar();
  };

  const handleGoogleCalendar = () => {
    openGoogleCalendar();
    closeAddCalendar();
  };

  return (
    <>
      <div
        ref={parent}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
        style={{ opacity: 1 }}
      />

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-sm">
        <div className="bg-white  rounded-2xl p-6 shadow-2xl border border-gray-100">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Добавить в календарь
              </h3>

              <button
                onClick={closeAddCalendar}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:scale-[1.1] transition-all  "
                tabIndex={0}
              >
                <img
                  className="lucide lucide-x w-5 h-5 "
                  src="/icons/close.svg"
                  alt="close"
                />
              </button>
            </div>

            <div className="space-y-3">
              {/* Google Calendar */}
              <button
                onClick={handleGoogleCalendar}
                className="flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50 hover:scale-[1.02] transition-all "
                tabIndex={0}
                style={{ transform: "none" }}
              >
                <img
                  className="lucide lucide-chrome w-5 h-5 text-rose-500 "
                  src="/icons/chrome.svg"
                  alt="chrome"
                />

                <span className="text-gray-700 font-medium">
                  Google Календарь
                </span>
              </button>

              {/* Apple Calendar */}
              <button
                onClick={handleDownloadICS}
                className="flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50  hover:bg-gray-50 hover:scale-[1.02] transition-all"
                tabIndex={0}
                style={{ transform: "none" }}
              >
                <img
                  className="lucide lucide-apple w-5 h-5 text-gray-900"
                  src="/icons/apple.svg"
                  alt="apple"
                />

                <span className="text-gray-700 font-medium">
                  Apple Календарь
                </span>
              </button>

              {/* Outlook Calendar */}
              <button
                onClick={handleDownloadICS}
                className="flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50  hover:bg-gray-50 hover:scale-[1.02] transition-all"
                tabIndex={0}
                style={{ transform: "none" }}
              >
                <img
                  className="lucide lucide-calendar w-5 h-5 text-blue-600"
                  src="/icons/calendar2.svg"
                  alt="calendar2"
                />

                <span className="text-gray-700 font-medium">
                  Outlook Календарь
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCalendar;
