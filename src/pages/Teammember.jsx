import React from "react";
import "../styles/teammember.css";

import himanshuImg from "../assets/himanshu.jpg";
import RahulreyonImg from "../assets/Rahulreyon.jpg";

const teamMembers = [
  {
    name: "Himanshu Kumar",
    role: "Frontend Developer",
    image: himanshuImg,
  },
   {
    name: "Sandeep Kumar",
    role: "Data analyst & Visualization specialist",
    image: "https://via.placeholder.com/150", // Placeholder image URL
   },
  {
    name: "Rahul Reyon",
    role: "Backend Developer",
    image: RahulreyonImg, // Placeholder image URL
  },
  {
    name: "Tripti Tiwari",
    role: "Data analyst & Visualization specialist",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
];

const Teammember = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <div className="team-boxes">
        {teamMembers.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="image-container">
              <img src={member.image} alt={member.name} />
            </div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teammember;
