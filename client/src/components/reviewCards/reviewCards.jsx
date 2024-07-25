import React from "react";
import "./reviewCards.css";
const ReviewCards = ({ card }) => {
  return (
    <div className="flexColStart card rCard">
      <div className="head">
        <img src="./starIcon.png" alt="star" width={20} />
        <span className="rNumber">{card.number}</span>
        <span className="rCompanyName">{card.companyName}</span>
      </div>

      <div className="rReview">{card.review}</div>

      <div className="rPerson">
      <img src={card.image} alt={card.personName} className="rPersonImage" />
      <span className="rPersonDetail">
          <span className="rPersonName">{card.personName}</span>
          <span className="rPersonTitle">{card.personTitle}</span>
        </span>
      </div>
      
    </div>
  );
};

export default ReviewCards;
