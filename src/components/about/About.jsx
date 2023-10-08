import React from 'react'
import './about.css'
import ME from '../../assets/user.png.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Support</h5>
              <small>24*7</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>

          <p>
          I'm a highly skilled frontend developer with expertise in HTML5, CSS3, JS, and ReactJS. Passionate about creating stunning web experiences, I pay attention to every pixel to ensure the perfect user interface.
          I'm not just limited to frontend development. I've also dabbled in DBMS and have a keen interest in data science. I love exploring the world of AI/ML and continuously learning cutting-edge techniques to unlock new possibilities.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
