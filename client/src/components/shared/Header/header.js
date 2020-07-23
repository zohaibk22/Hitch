import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  return (
    <header>
      <a href="/">
        <p className="logo">Hitch</p>
      </a>
      {/* <ul>
        <li className="one">Find My Ride</li>
        <li className="two">About Us</li>
        <li className="three">Contact Us</li>
        <a className="link" a href="/profile/id">
          <li className="four">My Account</li>
        </a>
        <li className="five">
          <a href="/signin">Sign in</a>
        </li>
      </ul> */}
    </header>
  );
}

export default Header;
