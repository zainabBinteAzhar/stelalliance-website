import "./experts.css";
import React from "react";

const Experts = () => {
  return (
    <div className="experts-wrapper">
      <div className="intro">
        <div className="mention">
          <span className="m1">02</span>
          <span className="m2">—Connect with out experts</span>
        </div>

        <div className="title">
          <br />
          <span className="s3">Stelalliance!</span>
          <span className="s1"> Transforming visions into reality,</span>
          <br />
          <span>
            <span className="s2">one innovation at a time,</span>
            <span className="s3"> since 2024</span>
          </span>
        </div>
      </div>

      <div className="experts-container">
        <div className="left-experts ">
          <div className="expertsInfo ">
            <span className="expertsIntro">
              Speak To Our :
              <div className="orange-gradient og" />
            </span>

            <div className="btnsInfo">
              <button className="button btns">C.E.O</button>
              <button className="button btns">C.T.O</button>
              <button className="button btns">Software Architect</button>
              <button className="button btns">UX Architect</button>
            </div>
          </div>
        </div>

        <div className="right-experts ">
          <div className="card c">
            <p>
              At Phaedra Solutions, we are committed to realizing your vision.
              We start with a discovery call to understand your specific needs,
              providing you with a clear roadmap and tailor-made solutions.
              Whether you're a startup, enterprise, or corporation, our experts
              deliver custom software development services, mobile app
              development, and innovative web designs. Our ultimate goal is your
              success, with a focus on enabling user experiences that convert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
