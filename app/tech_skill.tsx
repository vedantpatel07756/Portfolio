import Image from "next/image";
import React from "react";

const skillImages = [
  "/TechSkills/Flutter.png",
  "/TechSkills/AWS.png",
  "/TechSkills/Flask.png",
  "/TechSkills/PostgreSQL.png",
  "/TechSkills/mongoDB.png",
  "/TechSkills/React.png",
  "/TechSkills/NEXTjs.png",
  "/TechSkills/C++.png",
  "/TechSkills/Java.png",
  "/TechSkills/python.png",
  "/TechSkills/HTML.png",
  "/TechSkills/CSS.png",
  "/TechSkills/JS.png",
  "/TechSkills/nodejs.png",

  // Add more image paths as needed
];

export const TechSkills = () => {
  return (
    <div className="SKILL_CONTAINER flex flex-wrap md:flex-nowrap items-center pl-5 py-4 bg-zinc-50 rounded-lg shadow-md">
  <div className="left_box flex-shrink-0 md:pr-4 font-bold flex justify-center items-center py-4 px-2 bg-orange-500 text-white rounded-l-lg border-solid border-black md:border-r-4 md:border-b-0 border-b-4 md:border-b-0">
    TECH SKILLS
  </div>

  <div className="right_box flex overflow-x-auto space-x-4 ml-4 py-4 no-scrollbar">
    {skillImages.map((src, index) => (
      <Image
        key={index}
        src={src}
        width={100} 
        height={100} 
        alt={`skill-image-${index}`}
        className="rounded-lg flex-shrink-0 border border-gray-200 shadow-sm hover:shadow-lg transition-transform transform hover:scale-105"
      />
    ))}
  </div>
</div>

  
  );
};
