import React from "react";

import { AnimatedSection } from "../ui/animations/motion/MotionAnimation";

import Hero from "../screens/hero/Hero";
import EventsWedding from "../screens/events-wedding/EventsWedding";
import ScheduleWedding from "../screens/schedule-wedding/ScheduleWedding";
import Location from "../screens/location/Location";
import LoveStory from "../screens/love-story/LoveStory";
import ParentsSection from "../screens/love-story/parents-thanks/ParentsSection";
import WishesSection from "../screens/wishes-section/WishesSection";

const Home = ({ texts }) => {
  return (
    <div id="home">
      <AnimatedSection delay={0}>
        <Hero texts={texts} />
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <EventsWedding texts={texts} />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <ScheduleWedding texts={texts} />
      </AnimatedSection>

      <AnimatedSection delay={0.45}>
        <Location texts={texts} />
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <LoveStory texts={texts} />
      </AnimatedSection>

      <AnimatedSection delay={0.75}>
        <ParentsSection texts={texts} />
      </AnimatedSection>

      <AnimatedSection delay={0.9}>
        <WishesSection texts={texts} />
      </AnimatedSection>
    </div>
  );
};

export default Home;
