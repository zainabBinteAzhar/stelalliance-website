import React, { useState, useEffect } from "react";
import "./reviews.css";
import data from "../../utils/accordion";
import ReviewCards from "../reviewCards/reviewCards";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([data[0], data[1]]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      const nextVisibleCards = [
        data[nextIndex],
        data[(nextIndex + 1) % data.length],
      ];
      setCurrentIndex(nextIndex);
      setVisibleCards(nextVisibleCards);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, data]);

  return (
    <div className="reviews-wrapper">
      <div className="intro">
        <div className="mention">
          <span className="m1">05</span>
          <span className="m2">
            —Lasting Relationships & Sustainable Partnerships
          </span>
        </div>

        <div className="title">
          <br />
          <span className="s1">
            {" "}
            Their Success Fuels Our Passion To Deliver
            <div className="orange-gradient og1" />
          </span>
        </div>
      </div>

      <div className="reviews-container">
        <div className="left-reviews ">
          

          <div className="ratings">
            <img src="./freelancerIcon.png" alt="freelancer" width={70} />
            <span className="ratings1">
              <span className="ratings2">
                <img src="./starIcon.png" alt="star" width={20} />
                <span className="rNumber">5.0</span>
              </span>
              <span className="platName">on Freelancer</span>
            </span>
          </div>

          <div className="ratings">
            <img src="./upworkIcon.png" alt="upwork" width={70} />
            <span className="ratings1">
              <span className="ratings2">
                <img src="./starIcon.png" alt="star" width={20} />
                <span className="rNumber">Top rated</span>
              </span>
              <span className="platName">on Upwork</span>
            </span>
          </div>
        </div>

        <div className="right-reviews ">
          <div className="paddings projects">
            {visibleCards.map((card, i) => (
              <ReviewCards card={card} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
