/** @format */

import React from "react";
import FeaturedBox from "./FeaturedBox";
import { FaCodepen, FaConnectdevelop, FaHive } from "react-icons/fa";

const Featured = () => {
  return (
    <div id="featured" className="my-40">
      <p className="font-semibold uppercase">Features</p>
      <h2 className="text-5xl primary-text font-bold leading-[110%]">
        What I Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        <FeaturedBox
          title="Web Design"
          description="Passionate web designer with a strong foundation in design principles. I create single page application and user-friendly websites, considering typography, color theory, layout, and user experience. Let's collaborate to bring your web design visions to life with creativity and expertise."
        >
          <FaCodepen />
        </FeaturedBox>
        <FeaturedBox
          title="Web Development"
          description="Experienced Front-End web developer with solid knowledge of web technologies. Delivering high-quality solutions for engaging user experiences. Let's collaborate on your web projects."
        >
          <FaHive />
        </FeaturedBox>
        <FeaturedBox
          title="Database Integration"
          description="I have extensive experience in MongoDB database integration, specializing in designing efficient data solutions. I can help you optimize performance, design robust schemas, and leverage advanced features. Let's collaborate for a seamless and professional MongoDB implementation."
        >
          <FaConnectdevelop />
        </FeaturedBox>
      </div>
    </div>
  );
};

export default Featured;
