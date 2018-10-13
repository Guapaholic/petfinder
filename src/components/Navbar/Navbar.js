import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Animal Finder
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/swipe"
            className={
              window.location.pathname === "/swipe"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Swipe!
          </Link>
        </li>
        <li className="nav-item" id="login">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
