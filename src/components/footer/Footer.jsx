import React from 'react'
import './footer.css'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{BsInstagram} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KAUSHAN JAYASUNDARA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/kaushan-jayasundara-01b1441bb' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/nipunakaushan' target='_blank'><FaGithub /></a>
        <a href='https://instagram.com/kaushan_jayasundara?igshid=NTc4MTIwNjQ2YQ==' target='_blank'><BsInstagram /></a>

      </div>

      <div className="footer__copyright">
        <small>&copy;Kaushan Jayasundara.All rights reserved 2023.</small>
                 
      </div>
    </footer>
   
  )
}





export default Footer