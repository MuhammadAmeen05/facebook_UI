import React from "react";
import Storycard from "../storycard/Storycard";
import { Users } from "../../data";
import "./stories.scss";
import upload from '../../assets/person/upload.png'
const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src="https://img.freepik.com/free-photo/portrait-friendly-confident-caucasian-bearded-guy-with-moustache-wearing-glasses-smiling-politely-looking-relaxed-calm-gray-wall-listening-customer-complaint-gray-wall_176420-22514.jpg?w=360&t=st=1683319239~exp=1683319839~hmac=6d8b5f6ca9604c58eb5b5ed35725c11c6128e32269246d658ecc2ca0dfce9dcf" alt="" className="storyProfile" />
        <img src="https://img.freepik.com/free-photo/portrait-friendly-confident-caucasian-bearded-guy-with-moustache-wearing-glasses-smiling-politely-looking-relaxed-calm-gray-wall-listening-customer-complaint-gray-wall_176420-22514.jpg?w=360&t=st=1683319239~exp=1683319839~hmac=6d8b5f6ca9604c58eb5b5ed35725c11c6128e32269246d658ecc2ca0dfce9dcf" alt="" className="storybackground" />
        <img src={upload} alt="" className="storyadd" />
        <span className="text">Ameen</span>
      </div>

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Stories;
