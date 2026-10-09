import schedule from "@/constants/schedule-lang/schedule";
import InfoSchedule from "./InfoSchedule";
import ScheduleCard from "./ScheduleCard";

const ScheduleWedding = ({ texts }) => {
  return (
    <div className="container mx-auto px-4 py-10 relative">
      <InfoSchedule texts={texts} />

      {/* Заголовки таблицы — только Desktop */}
      <div className="max-w-2xl mx-auto mb-6 md:grid grid-cols-12 gap-6 px-4 text-gray-500 font-medium hidden">
        <div className="col-span-3 text-left">Время</div>

        <div className="col-span-3 text-left">Мероприятие</div>

        <div className="col-span-6 text-left">Описание</div>
      </div>

      {/* Карточки */}
      <div className="max-w-2xl mx-auto grid gap-6">
        {schedule.map((item) => (
          <ScheduleCard
            key={item.time}
            image={item.image}
            time={item.time}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleWedding;
