import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      {/* <div className="h-gradient"/> */}
        <div className="flexCenter Paddings innerWidth h-container">
        <div className="h-gradient"/>
          <img src="./logo.png" alt="logo" width={200} />

          <div className="flexCenter h-menu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact Us</a>
            <a href="">More</a>
          </div>
          <div>
            <button className="flexCenter button">
              <a href="">Get Started</a>
            </button>
          </div>
        </div>
    </section>
  );
};

export default Header;
