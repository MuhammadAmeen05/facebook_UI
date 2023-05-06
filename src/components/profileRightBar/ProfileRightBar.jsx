import React from "react";
import { Link } from "react-router-dom";
import "./profileRightBar.scss";

const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle"> User Information</span>
        <Link to="/profile/userId/edit" style={{ textDecoration: "none" }}>
          <span className="editButton">Edit Profile</span>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">ameenofficial05@gmail.com</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone Number: </span>
          <span className="profileRightBarInfoValue">+923490327699</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Address: </span>
          <span className="profileRightBarInfoValue">
            Karachi Clifton
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Country: </span>
          <span className="profileRightBarInfoValue">Pakistan</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Relationship: </span>
          <span className="profileRightBarInfoValue">Single</span>
        </div>
      </div>

      <h4 className="profileRightBarTitle">Close Friends</h4>
      <div className="profileRightBarFollowings">
        <div className="profileRightBarFollowing">
          <img
            src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1683307692~exp=1683308292~hmac=a92c5313ec783b9507d278afb7900865fbf4ffb5335975be417ade7479c71443"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Ayesha</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://img.freepik.com/free-photo/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually_273609-16228.jpg?size=626&ext=jpg&ga=GA1.2.1296801928.1670597923&semt=ais"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Ali Raza</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1683307692~exp=1683308292~hmac=991b4aad6f4afec286b38aca40f9d13039df949412b7370c91367a64f40afffa"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Zaffar</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://img.freepik.com/free-photo/portrait-good-looking-smiling-arabic-man-suit-attractive-young-businessman-with-beard-moustache-looking-camera-portrait-international-beauty-concept_74855-21597.jpg?t=st=1683307833~exp=1683308433~hmac=95fd43f0e08be5f2bcbca1b883658de71d64a0b02f94ef941325d14e53de5a16"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Ahmed Aziz</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://img.freepik.com/premium-photo/young-bearded-indian-businessman-against-view-city_251136-22962.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Azhar</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://img.freepik.com/free-photo/young-woman-portrait-street_1303-13672.jpg?t=st=1683307959~exp=1683308559~hmac=af831906b7cfa41297fcdba0e1f6f8fa44156538654ec398e17c7b1e99b01702"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Sana</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightBar;
