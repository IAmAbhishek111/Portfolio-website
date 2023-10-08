import React from 'react'
import './footer.css'

import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>Abhishek</a>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
       
        <a href='https://www.instagram.com/_.abhishek._777/'><FiInstagram /></a>
        <a href='https://twitter.com/Abhishe11913794'><IoLogoTwitter /></a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer