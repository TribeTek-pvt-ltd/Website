import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const members = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      text: "Frontend Developer",
      description: "Passionate about creating interactive applications.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      text: "Backend Developer",
      description: "Expert in server-side logic and database management.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Alice Johnson",
      text: "UX Designer",
      description: "Focused on user experience and accessibility.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "AKsasjkj",
      text: "UX Designer",
      description: "Focused on user experience and accessibility.",
    },
    // {
    //   id: 5,
    //   image: "https://via.placeholder.com/150",
    //   name: "A Johnson",
    //   text: "UX Designer",
    //   description: "Focused on user experience and accessibility.",
    // },
    // Add other members as needed
  ];

  return (
    <div className="max-w-4xl bg-primary-background mx-auto p-6">
      <h1 className="text-6xl text-primary-brand sticky top-10 font-bold mb-4">
        {" "}
        Our Team{" "}
      </h1>{" "}
      <TeamMember members={members} />{" "}
    </div>
  );
};

export default Team;
