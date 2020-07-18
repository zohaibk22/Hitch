import React from 'react';
import './footer.css'

function Footer(props) {
  return (
    <footer>
      <div className='footerColumn'>
        <div className='footerItem'>
          <h4>Get to Know Us</h4>
          <p>About Hitch</p>
          <p>Press</p>
          <p>Careers</p>
        </div>
        <div className='footerItem'>
          <h4>Customer Service</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className='footerColumn'>
        <div className='footerItem'>
          <h4>Site Support</h4>
          <p>Sitemap</p>
          <p>Acessibility</p>
          <p>Website Feedback</p>
        </div>
        <div className='footerItem'>
          <h4>Policies</h4>
          <p>Saftey</p>
          <p>Legal</p>
          <p>Privacy</p>
        </div>
      </div>
      <div className='footerColumn'>
        <div className='footerItemSocial'>
          <h4>Stay Connected</h4>
        </div>
        <div className='footerItemSocial'>
          <p>Join our Email List</p>
        </div>
      </div>
      <div className='copyright'>
        <p>©2020 Hitch</p>
      </div>
    </footer>
  );
}

export default Footer;