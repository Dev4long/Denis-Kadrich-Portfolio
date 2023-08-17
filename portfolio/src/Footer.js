import React from 'react'
import "./footer.css"
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <div className="footerContainer">
        <div className="brand">
        Copyright @ Denis Kadrich 2023
        </div>
        <div className="social">
        <a href="#connect">
          <div className="icons">
            <MailOutlineOutlinedIcon />
          </div>
          </a>
          <a href="https://www.linkedin.com/in/denis-kadrich-7b3bb7215/" target="_blank" rel="noreferrer">
          <div className="icons">
            <AiFillLinkedin />
          </div>
          </a>
          <a href="https://github.com/Dev4long"  target="_blank" rel="noreferrer">
          <div className="icons">
            <AiFillGithub />
          </div>
          </a>
        </div>
    </div>
  )
}

export default Footer