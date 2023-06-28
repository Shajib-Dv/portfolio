/** @format */

import Avatar from "./Avatar";
import NavItems from "./NavItems";
import fileUrl from "../../../public/resume.pdf";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            onClick={() => setShowMenu(!showMenu)}
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            {showMenu ? <RxCross2 /> : <RxHamburgerMenu />}
          </label>
          {showMenu && (
            <div
              onClick={() => setShowMenu(!showMenu)}
              tabIndex={0}
              className="nav-items"
            >
              <NavItems />
            </div>
          )}
        </div>
        <Avatar />
        <div className="hidden md:flex flex-col items-center justify-center md:pl-4">
          <h2 className="primary-text font-bold text-3xl">Shajib Hossain</h2>
          <p>Front End Web Developer</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal font-semibold text-sm px-1 space-x-6">
          <NavItems />
        </div>
      </div>
      <div className="navbar-end">
        <a
          href={fileUrl}
          download="Resume for Shajib Hossain Front End Web Developer.pdf"
          className="p-1 md:p-3 rounded-md border-b border-b-[#FF014F] hover:text-[#f61b5d]"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
