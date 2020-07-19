import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

function Header(props) {
  return (
    <header>
      <p className='logo'>Hitch</p>
      <ul>
        <li className='one'>Find My Ride</li>
        <li className='two'>About Us</li>
        <li className='three'>Contact Us</li>
        <li className='four'>My Account</li>
        <li className='five'>Sign in</li>
      </ul>
    </header>
  );
}

export default Header;