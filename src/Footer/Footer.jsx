/** @format */

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer footer-center py-8 px-4 bg-base-200 text-base-content">
      <div>
        <p>
          Copyright © {year} - All right reserved by
          <span className="primary-text font-bold"> Shajib Hossain</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
