import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/kaushan-jayasundara-01b1441bb' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/nipunakaushan' target='_blank'><FaGithub /></a>
        <a href='https://instagram.com/kaushan_jayasundara?igshid=NTc4MTIwNjQ2YQ==' target='_blank'><BsInstagram /></a>


    </div>
  )
}

export default HeaderSocials