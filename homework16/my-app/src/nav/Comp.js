import React from "react";
import "./Comp.css";

function formatImg(val) {
  return val;
}

const comp = ({ author, content, image, date }) => {
  return (
    <div className="div">
      <div className="infoDiv">
        <img className="anakiImg" src={formatImg(author.photo)}></img>
        <p>{formatImg(author.name)}</p>
        <p className="nickname">{formatImg(author.nickname)}</p>
        <p className="nickname"> {formatImg(date)}</p>
      </div>

      <h2>{formatImg(content)}</h2>
      <img className="contentImg" src={formatImg(image)}></img>
    </div>
  );
};

export default comp;
