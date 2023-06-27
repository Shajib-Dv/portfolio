/** @format */

import React from "react";
import FeaturedBox from "./FeaturedBox";
import { FaCodepen, FaConnectdevelop, FaHive } from "react-icons/fa";

const Featured = () => {
  return (
    <div id="featured" className="my-40 px-4">
      <h2 className="text-5xl primary-text font-bold">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        <FeaturedBox
          title="Web Design"
          description="I'm passionate with web design and I have a solid fundamental knowledge of web design"
        >
          <FaCodepen />
        </FeaturedBox>
        <FeaturedBox
          title="Web Development"
          description="I'm a professional Front-End web developer and I have a solid fundamental knowledge of web development technologies"
        >
          <FaHive />
        </FeaturedBox>
        <FeaturedBox
          title="MERN Development"
          description="I used MERN technology for make single page application and provide a smooth user friendly web service"
        >
          <FaConnectdevelop />
        </FeaturedBox>
      </div>
    </div>
  );
};

export default Featured;
