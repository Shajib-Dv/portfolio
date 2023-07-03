/** @format */
import CountUp from "react-countup";
import { FaBuffer, FaCodepen, FaMedapps } from "react-icons/fa";
const Stats = () => {
  return (
    <>
      <div className="md:stats flex flex-col  shadow w-full mb-10">
        <div className="stat w-full">
          <div className="stat-figure text-primary">
            <FaBuffer className="text-7xl primary-text" />
          </div>
          <div className="stat-title text-3xl font-bold">Total Projects</div>
          <div className="stat-value">
            <CountUp
              end={60}
              duration={5}
              redraw={true}
              enableScrollSpy={true}
            />
          </div>
          <div className="stat-desc">I have developed early</div>
        </div>

        <div className="stat w-full">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-7xl primary-text" />
          </div>
          <div className="stat-title text-3xl font-bold">Practice Projects</div>
          <div className="stat-value">
            <CountUp
              end={120}
              duration={6}
              redraw={true}
              enableScrollSpy={true}
            />
          </div>
          <div className="stat-desc">
            {Math.round(Math.random() * 15)} more are pending.
          </div>
        </div>

        <div className="stat w-full">
          <div className="stat-figure text-secondary">
            <FaMedapps className="text-7xl primary-text" />
          </div>
          <div className="stat-value">
            <CountUp
              end={94}
              duration={7}
              redraw={true}
              enableScrollSpy={true}
            />
            %
          </div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">
            {Math.round(Math.random() * 15)} tasks remaining
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
