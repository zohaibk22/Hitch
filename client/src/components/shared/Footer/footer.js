import React from 'react';
import SvgIcons from '../SVGIcons/SvgIcons'
import './footer.css'

function Footer(props) {
  return (
    <footer>
      <div className='footerColumnOne'>
      <h4 className='fhOne'>Get to Know Us</h4>
        <div className='footerItem'>
          <p className='ft'>About Hitch</p>
          <p className='ft'>Press</p>
          <p className='ft'>Careers</p>
        </div>
      <h4 className='fh'>Customer Service</h4>
        <div className='footerItem'>
          <p className='ft'> Contact Us</p>
          <p className='ft'>FAQ</p>
        </div>
      </div>
      <div className='footerColumn'>
      <h4 className='fh'>Site Support</h4>
        <div className='footerItem'>
          <p className='ft'>Sitemap</p>
          <p className='ft'>Acessibility</p>
          <p className='ft'>Website Feedback</p>
        </div>
        <h4 className='fh'>Policies</h4>
        <div className='footerItem'>
          <p className='ft'>Saftey</p>
          <p className='ft'>Legal</p>
          <p className='ft'>Privacy</p>
        </div>
      </div>
      <div className='footerColumn'>
        <h4 className='fh'>Stay Connected</h4>
        <div className='footerItemSocial'>
        </div>
        <div className='footerItemSocial'>
          <p className='fhTwo'>Join our Email List</p>
        </div>
      </div>
      <div className='copyright'>
        <p className='ft'>©2020 Hitch</p>
      </div>
    </footer>
  );
}

export default Footer;