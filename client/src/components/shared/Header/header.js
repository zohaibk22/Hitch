import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

function Header(props) {
  return (
    <header>
       <a href="/"><p  className='logo'>Hitch</p></a>
      <ul>
        <li className='one'>Find My Ride</li>
        <li className='two'>About Us</li>
        <li className='three'>Contact Us</li>
        <li><a className="four" a href="/profile/id">My Account</a></li>
        <li className='five'>Sign in</li>
      </ul>
    </header>
  );
}

export default Header;