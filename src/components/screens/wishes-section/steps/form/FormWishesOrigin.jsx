import { useState } from "react";

const FormWishes = ({ texts }) => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [wish, setWish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      attendance,
      wish,
    });
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
        <div className="space-y-5">
          {/* Имя */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
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
                className="w-4 h-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>

              <span>Ваше имя</span>
            </div>

            <input
              type="text"
              placeholder="Введите ваше имя"
              className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
              required
              maxLength={75}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Придёте? */}
          <div
            className="space-y-2 relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
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
                className="w-4 h-4"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>

              <span>Вы придёте?</span>
            </div>

            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700"
              required
            >
              <option value="" disabled>
                Выберите вариант
              </option>
              <option value="yes">Да, приду</option>
              <option value="no">К сожалению, не смогу</option>
            </select>
          </div>

          {/* Пожелание */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
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
                className="w-4 h-4"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>

              <span>Ваше пожелание</span>
            </div>

            <textarea
              placeholder="Напишите пожелания молодожёнам..."
              className="w-full h-32 p-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 resize-none transition-all duration-200"
              required
              maxLength={300}
              value={wish}
              onChange={(e) => setWish(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 text-gray-500">
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
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </svg>

            <span className="text-xs">Оставить пожелание</span>
          </div>

          <button
            type="submit"
            className="flex items-center text-sm space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200 bg-rose-500 hover:bg-rose-600"
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
              className="w-4 h-4"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>

            <span>Отправить пожелание</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormWishes;
