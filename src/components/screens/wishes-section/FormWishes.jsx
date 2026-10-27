import { useState } from "react";

import useFormWishes from "@/hooks/api/useForm";

const API_URL = "https://bb7546fa1acca78a.mokky.dev/wishes";

const FormWishes = ({ texts, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    name,
    setName,
    attendance,
    setAttendance,
    wish,
    setWish,
    isSubmitting,
    error,
    handleSubmit,
  } = useFormWishes({ texts, API_URL, refetch });

  const attendanceOptions = [
    { value: "true", label: texts.attendance_yes },
    { value: "false", label: texts.attendance_no },
    { value: "maybe", label: texts.attendance_maybe },
  ];

  const selectedAttendance = attendanceOptions.find(
    (option) => option.value === attendance,
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg"
    >
      <div className="space-y-5">
        {/* Имя */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
            <img className="w-4 h-4" src="/icons/user.svg" alt="" />
            <span>{texts.name_label}</span>
          </div>

          <input
            type="text"
            placeholder={texts.name_placeholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400 outline-none"
            required
            maxLength={75}
          />
        </div>

        {/* Присутствие */}
        <div className="space-y-2 relative">
          <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
            <img className="w-4 h-4" src="/icons/calendar-gray.svg" alt="" />
            <span>{texts.visit_label}</span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between outline-none"
          >
            <span className={attendance ? "text-gray-700" : "text-gray-400"}>
              {selectedAttendance?.label || texts.visit_placeholder}
            </span>

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
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute z-20 w-full mt-1 bg-white rounded-xl shadow-lg border border-rose-100 overflow-hidden">
              {attendanceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setAttendance(option.value);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2.5 text-left text-gray-700 hover:bg-rose-50 transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Пожелание */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
            <img className="w-4 h-4" src="/icons/chat-gray.svg" alt="" />
            <span>{texts.wish_label}</span>
          </div>

          <textarea
            placeholder={texts.wish_placeholder}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className="w-full h-32 p-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 resize-none transition-all duration-200 outline-none"
            required
            maxLength={300}
          />

          <div className="text-right text-xs text-gray-400">
            {wish.length}/300
          </div>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex items-center justify-between mt-4 gap-4">
        <div className="flex items-center space-x-2 text-gray-500">
          <img className="w-5 h-5" src="/icons/smile.svg" alt="" />
          <span className="text-xs">{texts.wish_leave}</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center text-sm space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200 bg-rose-500 hover:bg-rose-600 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <img className="w-4 h-4" src="/icons/send.svg" alt="" />
          <span>{isSubmitting ? "Отправка..." : texts.send_wishes}</span>
        </button>
      </div>
    </form>
  );
};

export default FormWishes;
