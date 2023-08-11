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
          <div className="icons">
            <MailOutlineOutlinedIcon />
          </div>
          <div className="icons">
            <AiFillLinkedin />
          </div>
          <div className="icons">
            <AiFillGithub />
          </div>
        </div>
    </div>
  )
}

export default Footer