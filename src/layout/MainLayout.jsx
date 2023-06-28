/** @format */

import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Navbar from "../components/Navbar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <About />
      <hr />
      <div className="px-4">
        <Featured />
        <Portfolio />
      </div>
    </>
  );
};

export default MainLayout;
