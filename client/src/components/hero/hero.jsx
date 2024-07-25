import React, { useState, useEffect } from "react";
import "./hero.css";
import CountUp from "react-countup";

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const h2Texts = ["DEVELOP", "DEPLOY", "MANAGE"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % h2Texts.length);
        setFadeIn(true);
      }, 500); // wait for 500ms before changing the text
    }, 1500); // change every 2 seconds
    return () => clearInterval(intervalId);
  }, [currentIndex, h2Texts]);

  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <img className="universe" src="universe.png" alt="Universe Image" />
        <div className="hero-title">
          <h1>
            <span>Stelalliance helps you</span>
          </h1>
          
          <h2>

          <span className={fadeIn ? "fade-in active" : "fade-in"}> {h2Texts[currentIndex]}</span>
          </h2>
        </div>

        <div className="flexCenter hero-stat">
          <div className="flexColCenter hero-stat-item">
            <span>
              <CountUp end={80} duration={4} />
              <span>+</span>
            </span>
            <span className="text">Client Partnerships</span>
          </div>

          <div className="flexColCenter hero-stat-item">
            <span>
              <CountUp end={20} duration={7}  />
              <span>M+</span>
            </span>
            <span className="text">Lines of Code</span>
          </div>
          <div className="flexColCenter hero-stat-item">
            <span>
              <CountUp end={70} duration={5}  />
              <span>+</span>
            </span>
            <span className="text">Successful Deliveries</span>
          </div>
          <div className="flexColCenter hero-stat-item">
            <span>
              <span>$</span>
              <CountUp end={30} duration={6} />
              <span>M+</span>
            </span>
            <span className="text">Raised by Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
