import {
  Close,
  EmojiEmotions,
  PermMedia,
  VideoCameraFront,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./share.scss";

const Share = () => {
  const [file, setFile] = useState(null);

  const removeImage = () => {
    setFile(null);
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://img.freepik.com/free-photo/portrait-friendly-confident-caucasian-bearded-guy-with-moustache-wearing-glasses-smiling-politely-looking-relaxed-calm-gray-wall-listening-customer-complaint-gray-wall_176420-22514.jpg?w=360&t=st=1683319239~exp=1683319839~hmac=6d8b5f6ca9604c58eb5b5ed35725c11c6128e32269246d658ecc2ca0dfce9dcf"
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder="What's on your mind Ameen?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <Close className="shareCancelImg" onClick={removeImage} />
          </div>
        )}
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFront
                className="shareIcon"
                style={{ color: "#bb0000f2" }}
              />
              <span className="shareOptionText">Live Video</span>
            </div>
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
              <span className="shareOptionText">Photo/Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <span className="shareOptionText">Feelings/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
