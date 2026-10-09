import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useApp } from "@/context/AppContext";

import Hero from "../screens/hero/Hero";
import EventsWedding from "../screens/events-wedding/EventsWedding";
import ScheduleWedding from "../screens/schedule-wedding/ScheduleWedding";
import Location from "../screens/location/Location";
import LoveStory from "../screens/love-story/LoveStory";
import ParentsSection from "../screens/love-story/parents-thanks/ParentsSection";
import WishesSection from "../screens/wishes-section/WishesSection";

const Home = ({ texts }) => {
  const { language, setLanguage, isOpenInvite, openInvite } = useApp();
  const [parent] = useAutoAnimate();

  return (
    <>
      <div ref={parent} id="home">
        <Hero texts={texts} />
        <EventsWedding texts={texts} />
        <ScheduleWedding texts={texts} />
        <Location texts={texts} />
        <LoveStory texts={texts} />
        <ParentsSection texts={texts} />
        <WishesSection texts={texts} />
      </div>
    </>
  );
};

export default Home;
