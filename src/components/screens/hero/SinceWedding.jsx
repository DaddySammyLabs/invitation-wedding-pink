import useWeddingTimer from "@/hooks/useWeddingTimer";

const SinceWedding = ({ texts }) => {
  const time = useWeddingTimer();

  const title = time.isWeddingPassed
    ? texts.since_wedding
    : texts.until_wedding;

  const timeUnits = [
    { value: time.days, label: texts.days },
    { value: time.hours, label: texts.hours },
    { value: time.minutes, label: texts.minutes },
    { value: time.seconds, label: texts.seconds },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-center text-rose-600 font-semibold mb-4">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {timeUnits.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100 shadow-sm"
          >
            <span className="text-xl sm:text-2xl font-bold text-rose-600">
              {value}
            </span>

            <span className="text-xs text-gray-500 capitalize">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinceWedding;
