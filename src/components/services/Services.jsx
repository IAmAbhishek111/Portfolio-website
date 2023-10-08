import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Website Design and Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-Commerce Solutions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Web Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Mobile Responsiveness</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hosting and Domain Management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Training and Support.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Marketing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Affiliate Program Setup</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Affiliate Recruitment.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Promotion and Marketing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Commission Payments.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Affiliate Networks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creative Assets.</p>
            </li>
           
          </ul>
        </article>
        {/* END OF Marketing */}

        <article className='service'>
          <div className='service__head'>
            <h3>Tutor</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solution Provider.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Concept Visualisation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mentoring.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Homework Help.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online Resources</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Subject-Specific Tutoring.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
      
    </section>
  )
}

export default Services
