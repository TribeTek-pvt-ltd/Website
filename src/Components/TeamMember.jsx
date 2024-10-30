import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TeamMember = ({ members }) => {
  const [visibleMemberIndex, setVisibleMemberIndex] = useState(0);
  const memberRefs = useRef([]);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const scrollThreshold = 300; // Increased scroll threshold (in pixels)
  const [hasScrolled, setHasScrolled] = useState(false); // Track if the user has scrolled enough

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Check if the user has scrolled beyond the threshold
    if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
      memberRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // Check if the member is within the viewport
          if (rect.top >= 0 && rect.top <= window.innerHeight - 300) {
            // Update visible member index
            setVisibleMemberIndex(index);
            setLastScrollY(currentScrollY); // Update the last scroll position
            setHasScrolled(false); // Reset the scrolled state
          }
        }
      });
    } else {
      setHasScrolled(true); // User hasn't scrolled enough yet
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Add lastScrollY as a dependency

  useEffect(() => {
    controls.start({ opacity: 0, scale: 0.9 });
    const timeout = setTimeout(() => {
      controls.start({ opacity: 1, scale: 1 });
    }, 300);

    return () => clearTimeout(timeout);
  }, [visibleMemberIndex, controls]);

  return (
    <div className="flex h-[250vh] flex-col items-center justify-center">
      <motion.div
        className="sticky top-1/4 transform -translate-y-1/2 bg-white z-10 p-4 flex items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.25 }}>
        <div className="w-1/3 flex justify-center">
          <motion.img
            src={members[visibleMemberIndex].image}
            alt={members[visibleMemberIndex].name}
            className="w-3/4 h-[400px]"
            key={visibleMemberIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />{" "}
        </div>{" "}
        <div className="w-2/3 p-4">
          <motion.h3
            className="text-5xl text-right text-primary-brand font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {" "}
            {members[visibleMemberIndex].name}{" "}
          </motion.h3>{" "}
          <motion.h4
            className="text-xl text-right italic text-primary-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {" "}
            {members[visibleMemberIndex].text}{" "}
          </motion.h4>{" "}
          <motion.p
            className="text-secondary-text text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            {" "}
            {members[visibleMemberIndex].description}{" "}
          </motion.p>{" "}
        </div>{" "}
      </motion.div>{" "}
      {/* Render invisible member cards for scroll detection */}{" "}
      {members.map((member, index) => (
        <div
          key={member.id}
          ref={(el) => (memberRefs.current[index] = el)}
          className="h-40 flex items-center border-b border-gray-200 my-2 p-4 invisible">
          <img src={member.image} alt={member.name} className="w-1/4 h-auto" />
          <div className="p-4">
            <h3 className="text-lg font-semibold"> {member.name} </h3>{" "}
            {member.text && <p className="text-gray-600"> {member.text} </p>}{" "}
          </div>{" "}
        </div>
      ))}{" "}
      {/* Add additional invisible sections to increase scroll */}{" "}
      <div className="h-[200vh]"> </div>{" "}
      {/* Increased additional space for scrolling */}{" "}
    </div>
  );
};

export default TeamMember;
