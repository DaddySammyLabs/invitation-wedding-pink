const timelineData = [
  {
    year: "2001",
    icon: "👶🏻",
    title: "Маленький жених",
    description: "Мальчик с большими мечтами",
    image: "/images/story/me-young.jpg",
    alt: "Маленький жених",
    position: "left",
  },
  {
    year: "2004",
    icon: "👼🏻",
    title: "Маленькая невеста",
    description: "Рождена сиять",
    image: "/images/story/her-young.jpg",
    alt: "Маленькая невеста",
    position: "right",
  },
  {
    year: "2023",
    icon: "🌱",
    title: "Они выросли",
    description: "Их пути пересеклись",
    images: [
      {
        src: "/images/story/me-adult.jpg",
        alt: "Они выросли - Him",
      },
      {
        src: "/images/story/her-adult.jpg",
        alt: "Они выросли - Her",
      },
    ],
    position: "center",
  },
  {
    year: "2024",
    icon: "☕️",
    title: "Они познакомились",
    description: "Любовь вспыхнула за чашкой кофе",
    image: "/images/story/meet.jpg",
    alt: "Они познакомились",
    position: "center",
    wide: true,
  },
  {
    year: "2025",
    icon: "💍",
    title: "Помолвка!",
    description: "С этого всё началось навсегда",
    image: "/images/story/engaged.jpg",
    alt: "Помолвка!",
    position: "center",
  },
];

const StoryTimeline = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-60 h-60 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-60 h-60 bg-rose-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-100 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-100 rounded-full blur-2xl" />
      </div>

      {/* Timeline line */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-rose-100 via-rose-300 to-rose-100 -z-10" />

      {/* Events */}
      <div className="space-y-24 relative">
        {timelineData.map((item) => (
          <div
            key={item.year}
            className="flex flex-col items-center md:items-start relative"
          >
            {/* Timeline icon */}
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 aspect-square rounded-full bg-white border-2 border-rose-400 flex items-center justify-center shadow-md z-10">
              <span>{item.icon}</span>
            </div>

            {/* Mobile year */}
            <div className="md:hidden bg-rose-100 text-rose-600 mt-10 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {item.year}
            </div>

            {/* Content */}
            {item.images ? (
              // Multiple images — 2023
              <div className="flex flex-col gap-8 w-full items-center md:px-12">
                <div className="flex flex-col md:flex-row gap-x-12 gap-y-6">
                  {item.images.map((image) => (
                    <ImageCard
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      year={item.year}
                      title={item.title}
                    />
                  ))}
                </div>

                <TimelineText
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  center
                />
              </div>
            ) : (
              // Single image
              <div
                className={`flex flex-col gap-8 w-full items-center md:px-12 ${
                  item.position === "right"
                    ? "md:flex-row-reverse md:justify-between"
                    : item.position === "left"
                      ? "md:flex-row md:justify-between"
                      : "md:justify-center"
                }`}
              >
                <ImageCard
                  src={item.image}
                  alt={item.alt}
                  year={item.year}
                  title={item.title}
                  wide={item.wide}
                />

                <TimelineText
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  center={item.position === "center"}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* Image card */
const ImageCard = ({ src, alt, year, title, wide = false }) => {
  return (
    <div
      className={`relative h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white transition duration-300 hover:scale-105 hover:shadow-2xl ${
        wide ? "w-80 md:w-[22.5rem] md:mt-12" : "w-64"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition duration-500 hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-4 text-white">
          <div className="text-xs font-medium mb-1">{year}</div>
          <div className="font-serif text-xl">{title}</div>
        </div>
      </div>
    </div>
  );
};

/* Text block */
const TimelineText = ({ year, title, description, center = false }) => {
  return (
    <div
      className={`max-w-xs bg-white/80 ${
        center ? "text-center" : "md:text-left"
      }`}
    >
      <div className="hidden md:inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
        {year}
      </div>

      <h3 className="text-2xl font-serif text-gray-800 mb-2">{title}</h3>

      <p className="text-gray-600">{description}</p>

      <div
        className={`mt-4 h-0.5 w-12 bg-rose-200 ${
          center ? "mx-auto" : "mx-auto md:mx-0"
        }`}
      />
    </div>
  );
};

export default StoryTimeline;
