/** @format */

import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiNodedotjs } from "react-icons/si";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div id="skills" className="my-32 overflow-y-hidden">
      <p className="text-center font-semibold uppercase">
        Skills and Technologies that I used
      </p>
      <h2 className="text-center primary-text font-bold text-5xl ">
        Skills & Technology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-20 space-y-5">
        <SkillsCard name="HTML">
          <FaHtml5 />
        </SkillsCard>
        <SkillsCard name="CSS">
          <FaCss3 />
        </SkillsCard>
        <SkillsCard name="JavaScript">
          <IoLogoJavascript />
        </SkillsCard>
        <SkillsCard name="React.js">
          <FaReact />
        </SkillsCard>
        <SkillsCard name="Firebase">
          <SiFirebase />
        </SkillsCard>
        <SkillsCard name="MongoDB">
          <SiMongodb />
        </SkillsCard>
        <SkillsCard name="Node.js">
          <SiNodedotjs />
        </SkillsCard>
        <SkillsCard name="Express.js">
          <SiExpress />
        </SkillsCard>
      </div>
    </div>
  );
};

export default Skills;
