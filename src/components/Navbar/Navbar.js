import React from "react";

import { logo } from "../../assests/index";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-class ">
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" flex  collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav flex-grow-1">
            <a
              className="nav-items-class nav-link "
              aria-current="page"
              href="home"
            >
              HOME
            </a>
            <a
              className="nav-items-class nav-link "
              aria-current="page"
              href="aboutus"
            >
              ABOUT US
            </a>
            <a
              className="nav-items-class nav-link "
              aria-current="page"
              href="services"
            >
              SERVICES
            </a>
            <a
              className="nav-items-class nav-link "
              aria-current="page"
              href="portfolio"
            >
              PORTFOLIO
            </a>
            <a
              className="nav-items-class nav-link "
              aria-current="page"
              href="film"
            >
              FILM
            </a>
            <a
              className="nav-items-class nav-link "
              aria-current="page"
              href="blog"
            >
              BLOG
            </a>
            <a
              className="nav-items-class nav-link "
              aria-current="page"
              href="carrers"
            >
              CARRERS
            </a>
            <a
              className="nav-items-class nav-link "
              aria-current="page"
              href="contact"
            >
              CONTACT
            </a>
          </div>
          <button className="login-button">LOGIN/SIGNUP</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
