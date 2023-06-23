import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Kaushan Jayasundara</h1>
        <h5 className="text-light">SOFTWARE ENGINEER</h5>
        <CTA />

        <div className='me'>
        <img src={ME} alt='me' />
        </div>  

        <a href="#content" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header