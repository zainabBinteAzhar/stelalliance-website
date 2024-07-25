import React from "react";
import SoftwareCards from "../softwareCards/softwareCards";
import data1 from "../../utils/sofSol";

const SoftwareSol = () => {
  return (
    <div className="software-wrapper">
      <div className="intro">
        <div className="mention">
          <span className="m1">03</span>
          <span className="m2">—Bespoke Design And Development Services</span>
        </div>

        <div className="title">
          <br />
          <span className="s1"> Tailored Custom Development</span>
          <br />
          <span>
            <span className="s2">Solutions </span>
            <span className="s3"> For Your Business</span>
          </span>
        </div>
      </div>

      <div className="software-container">
        {data1.map((sof, index) => (
          <SoftwareCards card={sof} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SoftwareSol;