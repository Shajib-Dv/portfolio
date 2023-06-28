/** @format */

import { useEffect } from "react";

const NavItems = () => {
  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const hashLinks = document.querySelectorAll('a[href^="#"]');
    hashLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      hashLinks.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);
  return (
    <>
      <a href="#home">Home</a>
      <a href="#featured">Features</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </>
  );
};

export default NavItems;
