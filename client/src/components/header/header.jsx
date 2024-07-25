import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Set the first menu item as active initially
    const firstMenuItem = document.querySelector(".h-menu > *");
    setActiveItem(firstMenuItem);
    firstMenuItem.classList.add("active");
  }, []);

  const handleMenuItemClick = (event) => {
    const menuItem = event.target.closest("a");
    if (menuItem) {
      setActiveItem(menuItem);
      document.querySelectorAll(".h-menu > *").forEach((item) => {
        if (item !== menuItem) {
          item.classList.remove("active");
        }
      });
      menuItem.classList.add("active");
    }
  };

  return (
    <section className="h-wrapper">
      {/* <div className="h-gradient"/> */}
      <div className="flexCenter Paddings innerWidth h-container">
        <div className="h-gradient" />
        <Link to="/">
          <img className="headerImg" src="./logo.png" alt="logo" />
        </Link>

        <div className="flexCenter h-menu">
          <NavLink to="/" onClick={handleMenuItemClick}>
            Home
          </NavLink>
          <NavLink to="/About" onClick={handleMenuItemClick}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={handleMenuItemClick}>
            Projects
          </NavLink>
          <NavLink to="/Contact" onClick={handleMenuItemClick}>
            Contact Us
          </NavLink>
          <NavLink to="/About" onClick={handleMenuItemClick}>
            More
          </NavLink>
        </div>
          <button className="flexCenter button">
            <Link to="/Contact">Get Started</Link>
          </button>
      </div>
    </section>
  );
};

export default Header;