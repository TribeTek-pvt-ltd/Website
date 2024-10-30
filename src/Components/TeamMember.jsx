import React, { useEffect, useRef, useState } from "react";

const TeamMember = ({ members }) => {
  const [visibleMemberIndex, setVisibleMemberIndex] = useState(0);
  const memberRefs = useRef([]);

  const handleScroll = () => {
    // Calculate which member should be visible based on scroll position
    memberRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight - 200) {
          setVisibleMemberIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-[200vh] flex-col items-center">
      {" "}
      {/* Display currently visible member */}{" "}
      <div className="sticky  top-96 h-96 bg-white shadow-md z-10 p-4">
        <div className="flex items-center">
          <div className="w-1/3">
            <img
              src={members[visibleMemberIndex].image}
              alt={members[visibleMemberIndex].name}
              className="w-full h-auto rounded-full border-2 border-gray-300"
            />
          </div>{" "}
          <div className="w-2/3 p-4">
            <h3 className="text-lg font-semibold">
              {" "}
              {members[visibleMemberIndex].name}{" "}
            </h3>{" "}
            {members[visibleMemberIndex].text && (
              <p className="text-gray-600">
                {" "}
                {members[visibleMemberIndex].text}{" "}
              </p>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Render invisible member cards for scroll detection */}{" "}
      {members.map((member, index) => (
        <div
          key={member.id}
          ref={(el) => (memberRefs.current[index] = el)}
          className="h-40 flex items-center border-b border-gray-200 my-2 p-4 invisible" // Use invisible class to hide members
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-1/4 h-auto rounded-full border-2 border-gray-300"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold"> {member.name} </h3>{" "}
            {member.text && <p className="text-gray-600"> {member.text} </p>}{" "}
          </div>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default TeamMember;
