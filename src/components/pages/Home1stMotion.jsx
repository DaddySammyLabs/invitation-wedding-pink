import React from "react";
import { motion } from "framer-motion";

import Hero from "../screens/hero/Hero";
import EventsWedding from "../screens/events-wedding/EventsWedding";
import ScheduleWedding from "../screens/schedule-wedding/ScheduleWedding";
import Location from "../screens/location/Location";
import LoveStory from "../screens/love-story/LoveStory";
import ParentsSection from "../screens/love-story/parents-thanks/ParentsSection";
import WishesSection from "../screens/wishes-section/WishesSection";

const sections = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Home = ({ texts }) => {
  return (
    <div id="home">
      <motion.div variants={sections} initial="hidden" animate="visible">
        <Hero texts={texts} />
      </motion.div>

      <motion.div
        variants={sections}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
      >
        <EventsWedding texts={texts} />
      </motion.div>

      <motion.div
        variants={sections}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <ScheduleWedding texts={texts} />
      </motion.div>

      <motion.div
        variants={sections}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.45 }}
      >
        <Location texts={texts} />
      </motion.div>

      <motion.div
        variants={sections}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <LoveStory texts={texts} />
      </motion.div>

      <motion.div
        variants={sections}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.75 }}
      >
        <ParentsSection texts={texts} />
      </motion.div>

      <motion.div
        variants={sections}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
      >
        <WishesSection texts={texts} />
      </motion.div>
    </div>
  );
};

export default Home;
