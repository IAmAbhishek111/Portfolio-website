import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abhishek141100/" target='_blank' rel='noopener'><BsLinkedin/></a>
        <a href="https://github.com/IAmAbhishek111" target='_blank' rel='noopener'><BsGithub/></a>
        <a href="https://www.instagram.com/_.abhishek._777/" target='_blank' rel='noopener'><BsInstagram/></a>
       
    </div>
  )
}

export default HeaderSocials