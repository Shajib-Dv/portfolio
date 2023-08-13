/** @format */

import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
const SocialLink = () => {
  return (
    <div className="flex gap-4 text-4xl mb-4 md:mb-0">
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
      <a
        title="Whats app"
        href=" https://wa.me/+8801786072025"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="primary-text" />
      </a>
      <a
        title="Email"
        href="mailto:mdsojeeb242@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope className="primary-text" />
      </a>
    </div>
  );
};

export default SocialLink;
