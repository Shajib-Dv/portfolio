/** @format */
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const SkillsCard = ({ children, name }) => {
  return (
    <div
      data-aos="fade-left"
      className="w-full flex flex-col items-center justify-center rounded-lg bg-base-100 shadow-xl primary-text text-9xl"
    >
      {children}
      <p className="text-sm text-white">{name}</p>
    </div>
  );
};

export default SkillsCard;
