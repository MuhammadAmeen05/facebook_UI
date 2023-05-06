import React from "react";
import Online from "../online/Online";
import { Usersonline } from "../../data";
import "./rightbarhome.scss";
import gift from '../../assets/birthdaygifts/gift.png'
import adv from '../../assets/ads/adv.jpg'
const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        <img
          src={gift}
          alt=""
          className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Sarah Dane</b> and <b>other friends</b> have a birthday today
        </span>
      </div>
      <img src={adv} alt="" className="rightbarAdvert" />

      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  );
};

export default Rightbarhome;
