import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import facebook_icon from '../Assets/facebook_icon.png'
// import whatsapp_icon from  '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img className='footerlogo' src={footer_logo} alt="" />
        {/* <p>SHOPEE</p> */}
      </div>
      <ul className="footer-links">
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        {/* <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div> */}
              #instagram_icon | #facebook_icon | #whatsapp_icon
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  )
}
