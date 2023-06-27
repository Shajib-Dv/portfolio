/** @format */
import admin from "../../assets/admin.png";
const Avatar = () => {
  return (
    <div className="avatar">
      <div className="w-12 md:w-20 rounded-full">
        <img src={admin} />
      </div>
    </div>
  );
};

export default Avatar;
