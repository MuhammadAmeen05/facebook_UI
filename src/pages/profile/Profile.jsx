import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.scss";
import Feed from "./../../components/feed/Feed";
import Rightbar from "./../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="https://img.freepik.com/free-photo/landscape-punta-sorapiss-surrounded-by-lake-italy_181624-60947.jpg?w=360&t=st=1683319699~exp=1683320299~hmac=f3c6c1a755996c004d70537dff36c9c96848c3e7e2546b5f453aead5e9996a5b"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="https://img.freepik.com/free-photo/portrait-friendly-confident-caucasian-bearded-guy-with-moustache-wearing-glasses-smiling-politely-looking-relaxed-calm-gray-wall-listening-customer-complaint-gray-wall_176420-22514.jpg?w=360&t=st=1683319239~exp=1683319839~hmac=6d8b5f6ca9604c58eb5b5ed35725c11c6128e32269246d658ecc2ca0dfce9dcf"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Muhammad Ameen</h4>
              <span className="profileInfoDesc">Hi Friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
