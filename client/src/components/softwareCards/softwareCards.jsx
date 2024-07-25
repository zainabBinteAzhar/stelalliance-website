import React from "react";
import "./softwareCards.css";

const SoftwareCards = ({ card }) => {
  return (
    <div className="flexColStart card sCard">
      <div className="softwares">
        <div className="sofhead">
          <img src={card.icon} className="sofIcon"/>
          <span className="sofTitle">{card.title}</span>
        </div>

        <img className="shadowImg" src="./starIcon.png" alt="star" width={20}  />

        <div className="sofInfo">
          <span className="sofDes">{card.description}</span>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCards;
