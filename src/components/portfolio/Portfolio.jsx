import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// do not use images in production
const data = [
  {
    id:1,
    image:IMG1,
    title:'responsive E-commerce sites for Beauty cosmatic shops and saloons                        . ',
    github: 'https://github.com/nipunakaushan' ,
    demo: 'https://beautyvibes.lankanvibes.com/'

  },

  {
    id:2,
    image:IMG2,
    title:'Responsive E-commmerce and Service websites for optical shops and eye-care service centers.',
    github: 'https://github.com/nipunakaushan' ,
    demo: 'https://opticeyevibes.lankanvibes.com/'

  },

  {
    id:3,
    image:IMG3,
    title:'Responive T-Shirt Customization and Designing platform                                        .',
    github: 'https://github.com/nipunakaushan' ,
    demo: 'https://shirtcustomizer.lankanvibes.com/'

  },

  {
    id:4,
    image:IMG4,
    title:'Responsive E-Commerce Website for Clothing Store ',
    github: 'https://github.com/nipunakaushan' ,
    demo: 'https://styleplusclothing.lankanvibes.com/'

  },

  {
    id:5,
    image:IMG5,
    title:'Online Ticketing Platform with QR Generation system',
    github: 'https://github.com/nipunakaushan' ,
    demo: 'https://onlineticket.lk/'

  },

  {
    id:6,
    image:IMG6,
    title:'Data Visualization web application',
    github: 'https://github.com/nipunakaushan' ,
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