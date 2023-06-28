/** @format */

const SiteLink = ({ children, link }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="link-txt"
      href={link}
    >
      {children}
    </a>
  );
};

export default SiteLink;
