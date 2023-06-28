/** @format */

import React from "react";
import ReactShadowScroll from "react-shadow-scroll";

const PortfolioCard = ({ image, title, children, description }) => {
  return (
    <div className="card w-full min-h-96 bg-base-200 rounded-lg hover:bg-base-300">
      <ReactShadowScroll scrollColor="#FF014F" scrollWidth={2}>
        <div className="h-80">
          <img src={image} />
        </div>
      </ReactShadowScroll>

      <div className="card-body text-left space-y-4">
        <h2 className="card-title primary-text font-bold">{title}</h2>
        <div className="h-1/2 overflow-hidden">{description}</div>
        <div className="rounded-lg overflow-hidden w-fit">{children}</div>
      </div>
    </div>
  );
};

export default PortfolioCard;
