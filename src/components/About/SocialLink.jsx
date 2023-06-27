/** @format */

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const SocialLink = () => {
  return (
    <div className="flex gap-4 text-4xl mt-2">
      <a
        title="FaceBook"
        href="https://www.facebook.com/shajib.hossain.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="primary-text" />
      </a>
      <a
        title="LinkedIn"
        href="https://www.linkedin.com/in/sojeebhossain"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="primary-text" />
      </a>
      <a
        title="GitHub"
        href="https://github.com/Shajib-Dv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="primary-text" />
      </a>
    </div>
  );
};

export default SocialLink;
