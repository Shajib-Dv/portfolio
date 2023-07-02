/** @format */
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const SkillsCard = ({ children, name }) => {
  return (
    <div
      data-aos="fade-up"
      className="w-full p-4 flex flex-col items-center justify-center rounded-lg bg-base-300 shadow-xl primary-text text-9xl hover:bg-base-100"
    >
      {children}
      <p className="text-sm text-white">{name}</p>
    </div>
  );
};

export default SkillsCard;
