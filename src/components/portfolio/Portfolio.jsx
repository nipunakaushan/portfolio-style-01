import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// do not use images in production
const data = [
  {
    id:1,
    image:IMG1,
    title:'Online Ticketing Platform',
    github: 'https://github.com' ,
    demo: 'https://onlineticket.lk/'

  },

  {
    id:2,
    image:IMG2,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com' ,
    demo: 'https://onlineticket.lk/'

  },

  {
    id:3,
    image:IMG3,
    title:'Figma dashboard UI Kit for Data design web apps ',
    github: 'https://github.com' ,
    demo: 'https://onlineticket.lk/'

  },

  {
    id:4,
    image:IMG4,
    title:'Maintaining tasks and tracking progress',
    github: 'https://github.com' ,
    demo: 'https://onlineticket.lk/'

  },

  {
    id:5,
    image:IMG5,
    title:'Charts template & infographics in Figma',
    github: 'https://github.com' ,
    demo: 'https://onlineticket.lk/'

  },

  {
    id:6,
    image:IMG6,
    title:'Android Mobile Application',
    github: 'https://github.com' ,
    demo: 'https://onlineticket.lk/'

  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio/Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className='portfolio__item'>

            <div className="portfolio__item-image">
            <img src={image} alt='title' />
            </div>

            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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