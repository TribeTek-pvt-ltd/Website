import React from "react";
import TiltCard from "./TitleCard"; // Make sure to import the TiltCard component
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "User-Friendly Interface",
    description: "Designed for easy navigation and a seamless experience.",
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Looks great on devices of all sizes, from desktops to mobiles.",
  },
  {
    id: 3,
    title: "High Performance",
    description:
      "Optimized for speed and efficiency to enhance user satisfaction.",
  },
  {
    id: 4,
    title: "Secure Transactions",
    description: "Ensuring safe and secure payments for all users.",
  },
  {
    id: 5,
    title: "Customizable Themes",
    description: "Personalize the look and feel of your experience.",
  },
  {
    id: 6,
    title: "Real-time Notifications",
    description: "Stay updated with instant alerts and messages.",
  },
];

const Features = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Key Features{" "}
      </h2>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: feature.id * 0.1 }}>
            <TiltCardComponent
              title={feature.title}
              description={feature.description}
            />{" "}
          </motion.div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

const TiltCardComponent = ({ title, description }) => {
  return (
    <TiltCard>
      <div className="p-4">
        <h3 className="text-xl font-semibold"> {title} </h3>{" "}
        <p className="mt-2 text-gray-700"> {description} </p>{" "}
      </div>{" "}
    </TiltCard>
  );
};

export default Features;
