/** @format */

import PortfolioCard from "./PortfolioCard";
import summerCamp from "../../assets/summer-camp.png";
import chefHunt from "../../assets/chef-hunt.png";
import toysZone from "../../assets/toys-zone.png";
import SiteLink from "./SiteLink";
const Portfolio = () => {
  return (
    <div id="portfolio" className="mb-32 text-center">
      <p className="font-semibold uppercase">
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </p>
      <h1 className="primary-text text-5xl font-bold leading-[110%]">
        My Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
        <PortfolioCard
          image={chefHunt}
          title="Chef-Hunt"
          description="This site is developed by React.js and it has a routing system. User create account or login by using Google"
        >
          <SiteLink link={"https://github.com/Shajib-Dv/chef-hunt-client"}>
            Client-Site
          </SiteLink>
          <SiteLink link={"https://github.com/Shajib-Dv/chef-hunt-server"}>
            Server-Site
          </SiteLink>
          <SiteLink link={"https://chef-hunt.web.app"}>Live-Link</SiteLink>
        </PortfolioCard>
        <PortfolioCard
          image={summerCamp}
          title="Summer-Camp"
          description="This is a MERN stack website with a lot of features. User can buy courses and payment with stripe.js admin can manage all activity with admin dashboard."
        >
          <SiteLink link={"https://github.com/Shajib-Dv/summer-camp-client"}>
            Client-Site
          </SiteLink>
          <SiteLink link={"https://github.com/Shajib-Dv/summer-camp-server"}>
            Server-Site
          </SiteLink>
          <SiteLink link={"https://summer-camp-2f7d7.web.app"}>
            Live-Link
          </SiteLink>
        </PortfolioCard>
        <PortfolioCard
          image={toysZone}
          title="Toys-Zone"
          description="A MERN stack e-commerce website. User can create their profile and add their product. Admin can manage all users activity"
        >
          <SiteLink link={"https://github.com/Shajib-Dv/toy-zone-client"}>
            Client-Site
          </SiteLink>
          <SiteLink link={"https://github.com/Shajib-Dv/toy-zone-server"}>
            Server-Site
          </SiteLink>
          <SiteLink link={"https://toys-zone-db156.web.app"}>
            Live-Link
          </SiteLink>
        </PortfolioCard>
      </div>
    </div>
  );
};

export default Portfolio;
