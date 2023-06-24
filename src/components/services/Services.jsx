import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5><h2>Services</h2>
      

      <div className="container services__container">
      {/* ============= Wordpress Web development ======================= */}
        <article className="service">
          <div className="service__head">
            <h3>Wordpress Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Landing Page design</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>eCommerce site design</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Multi-vendor site</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Redesign your Wordpress site</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Web speed optimization</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Mobile optimization of the website</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Optimization of the web user experience</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Writing and creating creative content tailored to <br></br>your brand and business</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>wordpress installation</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Hosting configuration and Hosting and migration</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>SSL certification set up</p>
            </li>

          </ul>
        </article>
            {/* ============= React Web development ======================= */}

            <article className="service">
          <div className="service__head">
            <h3>React JS Web Application development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Landing Page design</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>eCommerce site design</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Multi-vendor site Design</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Design customization</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Web speed optimization</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Mobile optimization of the website</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Portfolio Design</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Unlimited Revision</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Fast Delivery</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Hosting configuration and Hosting and migration</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>SSL certification set up</p>
            </li>

          </ul>
        </article>
            {/* ============= Mobile Application development ======================= */}

            <article className="service">
          <div className="service__head">
            <h3>Mobile Application development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Platform:iOS & Android (dual)</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Development technology:React Native</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Purpose:Chat/Delivery/Streaming/Restaurant/Taxi/Booking<br></br>Health & fitness/Entertainment/Maps & navigation  </p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Ultimate Revision</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>mobile speed optimization</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>App Icon design</p>
            </li>

            <li>
              <FiCheck className='service__list-icon'/>
              <p>Splash screen</p>
            </li>

          </ul>
        </article>
            
      </div>
    </section>
  )
}

export default Services