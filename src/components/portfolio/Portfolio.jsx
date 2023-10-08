import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Hub',
    github: "https://github.com/IAmAbhishek111/react-hub",
    demo: "https://tech-game.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Tracker',
    github: "https://github.com/IAmAbhishek111/CryptoX",
    demo: "https://all-crypto-tracker.netlify.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Perosnal AI Assistant',
    github: "https://github.com/IAmAbhishek111/jarvis-ai-assistant",
    // demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Voice Powered Budget Tracker',
    github: "https://github.com",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 5,
    image: IMG5,
    title: 'To Do Web App',
    github: "https://iamabhishek111.github.io/Todo-app",
     demo: "https://todura.netlify.app/"
  },
  {
    id: 6,
    image: IMG6,
    title: 'E-Commerce Website',
    github: "https://github.com/IAmAbhishek111/E-commerce",
    demo: "https://shopicules.netlify.app/"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt=""/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>    
    </section>
  )
}

export default Portfolio