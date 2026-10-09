import React from "react";

import { useApp } from "@/context/AppContext";

import HeartAnimation from "@/components/ui/animations/HeartAnimation";
import InfoEvents from "./InfoEvents";
import AddCalendar from "@/components/ui/calendar-modal/AddCalendar";

const EventsWedding = ({ texts }) => {
  const { addCalendar, openAddCalendar, closeAddCalendar } = useApp();

  return (
    <>
      <div className={`pt-12`} id="event">
        <HeartAnimation />
        <InfoEvents texts={texts} openAddCalendar={openAddCalendar} />
        {addCalendar && (
          <AddCalendar texts={texts} closeAddCalendar={closeAddCalendar} />
        )}
      </div>
    </>
  );
};

export default EventsWedding;
