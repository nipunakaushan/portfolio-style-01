import React from 'react'
import './about.css'
import ME from '../../../src/assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">

          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>


        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Year Working </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed projects </small>
            </article>
          </div>
            <p>
            I am a hardworking and ambitious individual with a great passion for the IT industry. I am currently in my fourth year of studying BSc (Hons) In Information Technology at SLIIT. I would like to take responsibilities, risk, and face new challenges. I hope to become a reputed and unique professional available in Software Engineering to my qualifications. I would like to work as a group, and I have more experience in leadership and teamwork. I have excellent communication and leadership skills, enabling me to effectively communicate with a wide range of people. I can put into practice my knowledge and experience, ultimately benefiting the operations of the organization that I work for.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about