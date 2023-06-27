/** @format */
import adminImg from "../../assets/admin.png";
const About = () => {
  return (
    <div id="home" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={adminImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <p>Welcome to my portfolio</p>
          <h1 className="text-5xl font-bold">I'm Shajib Hossain</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
