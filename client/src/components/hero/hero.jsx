import React, { useState, useEffect } from "react";
import "./hero.css";
import CountUp from "react-countup";

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const h2Texts = ["DEVELOPE", "DEPLOY", "MANAGE"];

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
              <CountUp start={30} end={80} duration={2} />
              <span> +</span>
            </span>
            <span className="secondaryText">Client Partnerships</span>
          </div>

          <div className="flexColCenter hero-stat-item">
            <span>
              <CountUp end={20} />
              <span>M +</span>
            </span>
            <span className="secondaryText">Lines of Code</span>
          </div>
          <div className="flexColCenter hero-stat-item">
            <span>
              <CountUp end={70} />
              <span> +</span>
            </span>
            <span className="secondaryText">Successful Deliveries</span>
          </div>
          <div className="flexColCenter hero-stat-item">
            <span>
              <span>$</span>
              <CountUp end={30} />
              <span>M +</span>
            </span>
            <span className="secondaryText">Raised by Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
