import React, { useState } from "react";
import ReactimeOverview from "../../../public/v23/GeneralDemoGif_V23.gif";
import SnapshotTimeTravel from "../../../public/v23/TimeTravelGif_V23.gif";
import impExp from "../../../public/v23/ImportExportGif_V23.gif";

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
      <h3 className="text-lg">{title}</h3>
    </motion.div>
  ));

  const imageComponents = sections.map(({ gif, description }, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: section === i ? 1 : 0, y: section === i ? 0 : -30 }}
      transition={{ type: "spring", bounce: 0.25, duration: 2 }}
      // className="inline-flex gap-x-9"
    >
      {section === i && (
        <div className="inline-flex gap-x-14 justify-center items-center">
          <Image
            className="image"
            src={gif}
            style={{}}
            // layout="intrinsic"
            alt=""
          />
          <h1 className="text-3xl w-80 font-normal">{description}</h1>
        </div>
      )}
    </motion.div>
  ));

  return (
    <div>
      <h2 className="pt-10 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Reactime Demo!
      </h2>
      <div className="mt-10 xs:pt-20 mx-8 flex flex-row items-center justify-center gap-8">
        {sectionComponents}
      </div>
      <div className="xs:flex-col container mx-auto flex-col font-bold sm:flex-col md:flex-col lg:flex-row">
        <div className="m-auto pb-3">{imageComponents}</div>
      </div>
    </div>
  );
};

const sections = [
  {
    title: "Reactime Overview",
    description:
      "See your application state in a stylized and interactive format, for clear concise state management",
    gif: ReactimeOverview,
  },
  {
    title: "Snapshot Time Travel",
    description:
      "Simulate any state change from your DOM history, with a simple click of a button",
    gif: SnapshotTimeTravel,
  },
  {
    title: "Import & Export",
    description:
      "Save a series of state snapshots and use it to analyze changes in component render performance between current and previous series of snapshots",
    gif: impExp,
  },
];

export default GifFeatures;
