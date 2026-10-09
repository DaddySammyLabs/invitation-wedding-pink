const StoryTimeline = ({ texts }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-60 h-60 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-60 h-60 bg-rose-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-100 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-100 rounded-full blur-2xl" />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-rose-100 via-rose-300 to-rose-100 -z-10" />

      <div className="space-y-24 relative" style={{ opacity: 1 }}>
        {/* 2001 */}
        <div
          className="flex flex-col md:items-start relative"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 aspect-square rounded-full bg-white border-2 border-rose-400 flex items-center justify-center shadow-md">
            <span>👶🏻</span>
          </div>

          <div className="flex flex-col gap-8 w-full items-center md:px-12 md:flex-row md:justify-between">
            <div className="md:hidden bg-rose-100 text-rose-600 mt-10 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {texts.groom_born}
            </div>

            <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/story/me-young.jpg"
                alt="Маленький жених"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="text-xs font-medium mb-1">
                    {texts.groom_born}
                  </div>
                  <div className="font-serif text-xl">{texts.baby_groom}</div>
                </div>
              </div>
            </div>

            <div className="max-w-xs bg-white/80 md:text-left">
              <div className="hidden md:inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {texts.groom_born}
              </div>

              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {texts.baby_groom}
              </h3>

              <p className="text-gray-600">{texts.baby_gr_text}</p>

              <div className="mt-4 h-0.5 w-12 bg-rose-200 mx-auto md:mx-0 md:ml-0 md:mr-0" />
            </div>
          </div>
        </div>

        {/* 2004 */}
        <div
          className="flex flex-col md:items-start relative"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 aspect-square rounded-full bg-white border-2 border-rose-400 flex items-center justify-center shadow-md">
            <span>👼🏻</span>
          </div>

          <div className="flex flex-col gap-8 w-full items-center md:px-12 md:flex-row-reverse md:justify-between">
            <div className="md:hidden bg-rose-100 text-rose-600 mt-10 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {texts.bride_born}
            </div>

            <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/story/her-young.jpg"
                alt="Маленькая невеста"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="text-xs font-medium mb-1">
                    {texts.bride_born}
                  </div>
                  <div className="font-serif text-xl">{texts.baby_bride}</div>
                </div>
              </div>
            </div>

            <div className="max-w-xs bg-white/80 md:text-right">
              <div className="hidden md:inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {texts.bride_born}
              </div>

              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {texts.baby_bride}
              </h3>

              <p className="text-gray-600">{texts.baby_br_text}</p>

              <div className="mt-4 h-0.5 w-12 bg-rose-200 mx-auto md:mx-0 md:ml-0 md:mr-0" />
            </div>
          </div>
        </div>

        {/* 2023 */}
        <div
          className="flex flex-col items-center md:items-start relative"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 aspect-square rounded-full bg-white border-2 border-rose-400 flex items-center justify-center shadow-md">
            <span>🌱</span>
          </div>

          <div className="flex flex-col gap-8 w-full items-center md:px-12 md:items-center md:justify-center">
            <div className="md:hidden bg-rose-100 text-rose-600 mt-10 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {texts.grew_year}
            </div>

            <div className="flex flex-col md:flex-row gap-x-12 gap-y-6">
              <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white transition duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src="/images/story/me-adult.jpg"
                  alt="Они выросли - Him"
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-xs font-medium mb-1">
                      {texts.grew_year}
                    </div>
                    <div className="font-serif text-xl">{texts.grew_up}</div>
                  </div>
                </div>
              </div>

              <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white transition duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src="/images/story/her-adult.jpg"
                  alt="Они выросли - Her"
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-xs font-medium mb-1">
                      {texts.grew_year}
                    </div>
                    <div className="font-serif text-xl">{texts.grew_up}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-xs bg-white/80 text-center">
              <div className="hidden md:inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {texts.grew_year}
              </div>

              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {texts.grew_up}
              </h3>

              <p className="text-gray-600">{texts.grew_up_text}</p>

              <div className="mt-4 h-0.5 w-12 bg-rose-200 mx-auto md:mx-0 md:ml-0 md:mr-0" />
            </div>
          </div>
        </div>

        {/* 2024 */}
        <div
          className="flex flex-col md:items-start relative"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 aspect-square rounded-full bg-white border-2 border-rose-400 flex items-center justify-center shadow-md">
            <span>☕️</span>
          </div>

          <div className="flex flex-col gap-8 w-full items-center md:px-12">
            <div className="md:hidden bg-rose-100 text-rose-600 mt-10 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {texts.met_year}
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white md:mt-12 w-90 transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/story/meet.jpg"
                alt="Они познакомились"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="text-xs font-medium mb-1">
                    {texts.met_year}
                  </div>
                  <div className="font-serif text-xl">{texts.they_met}</div>
                </div>
              </div>
            </div>

            <div className="max-w-xs bg-white/80">
              <div className="hidden md:inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {texts.met_year}
              </div>

              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {texts.they_met}
              </h3>

              <p className="text-gray-600">{texts.they_met_text}</p>

              <div className="mt-4 h-0.5 w-12 bg-rose-200 mx-auto md:mx-0 md:ml-0 md:mr-0" />
            </div>
          </div>
        </div>

        {/* 2025 */}
        <div
          className="flex flex-col items-center md:items-start relative"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 aspect-square rounded-full bg-white border-2 border-rose-400 flex items-center justify-center shadow-md">
            <span>💍</span>
          </div>

          <div className="flex flex-col gap-8 w-full items-center md:px-12 md:items-center md:justify-center">
            <div className="md:hidden bg-rose-100 text-rose-600 mt-10 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {texts.engage_year}
            </div>

            <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/story/engaged.jpg"
                alt="Помолвка!"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="text-xs font-medium mb-1">
                    {texts.engage_year}
                  </div>
                  <div className="font-serif text-xl">{texts.engaged}</div>
                </div>
              </div>
            </div>

            <div className="max-w-xs bg-white/80 text-center">
              <div className="hidden md:inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {texts.engage_year}
              </div>

              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {texts.engaged}
              </h3>

              <p className="text-gray-600">{texts.engage_text}</p>

              <div className="mt-4 h-0.5 w-12 bg-rose-200 mx-auto md:mx-0 md:ml-0 md:mr-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTimeline;
