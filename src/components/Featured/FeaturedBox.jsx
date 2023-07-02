/** @format */
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const FeaturedBox = ({ children, title, description }) => {
  return (
    <div
      data-aos="fade-up"
      className="card w-full min-h-96 bg-base-200 rounded-lg hover:bg-base-300 overflow-x-hidden"
    >
      <div className="card-body font-semibold">
        <div className="primary-text text-7xl">{children}</div>
        <h2 className="card-title text-4xl pt-2">{title}</h2>
        <p className="py-2 text-xl text-left">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedBox;
