import React from "react";
import "./header.css";
import SvgIcons from '../../shared/SVGIcons/SvgIcons'


function Header(props) {
  return (
    <header>
      <a href="/">
        <SvgIcons
          name='logo'
          width={125}
          fill='#FFFFFF'
          className='logo'/>
      </a>
      <ul>
        <li className="one">
          <div className='hoverDive'>Find My Ride</div>
        </li>
        <li className="two">
          <div className='hoverDive'>About Us</div>
        </li>
        <li className="three">
          <div className='hoverDive'>Contact Us</div>
        </li>
        <li className="four">
            <a className="link" a href="/profile/">
              <div className='hoverDive'>My Account</div>
          </a>
        </li>
        <li className="five">
          <a href="/signin">
            <div className='hoverDive'>Sign in</div>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
