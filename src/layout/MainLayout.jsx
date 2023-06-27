/** @format */

import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <About />
      <hr />
      <Featured />
    </>
  );
};

export default MainLayout;
