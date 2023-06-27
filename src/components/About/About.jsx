/** @format */

import adminImg from "../../assets/admin.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import SocialLink from "./SocialLink";
const About = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Web Designer.", "Coder."],
    loop: true,
  });
  return (
    <div id="home" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={adminImg} className="w-full rounded-lg shadow-2xl" />
        <div className="space-y-6 font-semibold text-justify p-4">
          <p>Welcome to my portfolio</p>
          <h1 className="text-2xl md:text-5xl font-bold leading-[120%]">
            Hi, I'm <span className="primary-text">Shajib Hossain</span> a
            <br /> <span className="primary-text">{text}</span>
            <Cursor cursorColor="#FF014F" />
          </h1>
          <p className="capitalize">
            I'm a Professional Front-End Web Developer with some recent
            front-end technology. I have developed some full stack website using
            JavaScript, React.js, Tailwind CSS, Bootstrap, MongoDB, Node.js,
            Express.js and so more Libraries.
          </p>
          <div>
            <h3 className="uppercase">Follow Me On</h3>
            <SocialLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
