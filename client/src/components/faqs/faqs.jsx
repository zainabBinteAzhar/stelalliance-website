import React, { useState } from "react";
import "./faqs.css";
import leftData from "../../utils/leftAccordion";
import rightData from "../../utils/rightAccordion";

const Faqs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleFAQClick = (side, index) => {
    if (openFAQ === `${side}-${index}`) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(`${side}-${index}`);
    }
  };

  return (
    <div className="faqs-wrapper">
      <div className="intro">
        <div className="mention">
          <span className="m1">08</span>
          <span className="m2">—FAQs</span>
        </div>

        <div className="title">
          <br />
          <span className="s1">Answering Your Questions</span>
          <br />
          <span>
            <span className="s2">About</span>
            <span className="s3"> Custom Development</span>
          </span>
        </div>
      </div>
      <div className="faqs-container">
        <div className="left-faqs">
          {leftData.map((faq, index) => (
            <div key={faq.id} className="faq">
              <div
                className={`faq-question ${
                  openFAQ === `left-${index}` ? "open" : ""
                }`}
                onClick={() => handleFAQClick("left", index)}
              >
                <span>{faq.heading}</span>
                <i
                  className={`fas fa-chevron-down ${
                    openFAQ === `left-${index}` ? "open" : ""
                  }`}
                />
              </div>
              {openFAQ === `left-${index}` && (
                <div className="faq-answer">{faq.detail}</div>
              )}
            </div>
          ))}
        </div>
        <div className="right-faqs">
          {rightData.map((faq, index) => (
            <div key={faq.id} className="faq">
              <div
                className={`faq-question ${
                  openFAQ === `right-${index}` ? "open" : ""
                }`}
                onClick={() => handleFAQClick("right", index)}
              >
                <span>{faq.heading}</span>
                <i
                  className={`fas fa-chevron-down ${
                    openFAQ === `right-${index}` ? "open" : ""
                  }`}
                />
              </div>
              {openFAQ === `right-${index}` && (
                <div className="faq-answer">{faq.detail}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
