import React, { useState } from "react";
import StateSnapShotGIF from "../../../public/new-reactime.gif";
import HistoryTree from "../../../public/history-tree.gif";
import ActionComparison from "../../../public/action-comparison.gif";
import { motion } from "framer-motion";
import Image from "next/image";

const GifFeatures = () => {
  const [section, setSection] = useState(0);

  const sectionComponents = sections.map(({ title, description }, i) => (
    <motion.div
      key={i}
      onClick={(_) => setSection(i)}
      className="section"
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: section === i ? "#EBEBEB" : "#ffffff" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  ));

  const imageComponents = sections.map(({ gif }, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: section === i ? 1 : 0, x: section === i ? 0 : 30 }}
      transition={{ type: "spring", bounce: 0.25, duration: 2 }}
    >
      {section === i && (
        <Image
          className="image"
          src={gif}
          style={{}}
          // layout="intrinsic"
          alt=""
        />
      )}
    </motion.div>
  ));

  return (
    <div>
      <h2 className="pt-10 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Click to demo the features!
      </h2>
      <div className="xs:flex-col container mx-auto flex-col font-bold sm:flex-col md:flex-col lg:flex-row">
        <div className="m-auto pb-3">{imageComponents}</div>
        <div className="xs:pt-20 mx-8 flex flex-col items-center justify-center gap-8">
          {sectionComponents}
        </div>
      </div>
    </div>
  );
};

const sections = [
  {
    title: "State SnapShot Display",
    // description:
    //   "See your application state in a stylized and intereactive format, for clear concise state management.",
    gif: StateSnapShotGIF,
  },
  {
    title: "Time Travel Rendering",
    // description:
    //   "Simulate any state change from your DOM history, with a simple click of a button.",
    gif: HistoryTree,
  },
  {
    title: "Action Comparison & Snapshot Series",
    // description:
    //   "Save a series of state snapshots and use it to analyze changes in component render performance between current and previous series of snapshots.",
    gif: ActionComparison,
  },
];

export default GifFeatures;
