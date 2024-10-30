import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const members = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      text: "Frontend Developer",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      text: "Backend Developer",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Alice Johnson",
      text: "UX Designer",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Bob Brown",
      text: "Project Manager",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      name: "Carol White",
      text: "DevOps Engineer",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      name: "Eve Black",
      text: "Data Scientist",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      name: "Frank Green",
      text: "QA Tester",
    },
    // Add more members as needed
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-6xl sticky top-10 font-bold mb-4"> Our Team </h1>{" "}
      <TeamMember members={members} />{" "}
    </div>
  );
};

export default Team;
