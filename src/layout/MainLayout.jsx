/** @format */

import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Navbar from "../components/Navbar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <About />
      <hr />
      <div className="px-4">
        <Featured />
        <Portfolio />
        <Skills />
      </div>
    </>
  );
};

export default MainLayout;
