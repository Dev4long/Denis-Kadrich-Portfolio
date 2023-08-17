import { useState, useEffect } from "react";
import Profile from "./images/profile.jpeg"
import "./bio.css"
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import resume from './DenisResume.docx'




function Bio() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Full Stack Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);}
  }

  return (
    <div className ="wrapper">
    <div className="BioContainer">
            <div className="Bio" style={{color: "white"}}>
                <h1>{`Hi! I'm Denis`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p style={{fontFamily:"regular"}}>I am a passionate and dedicated Full Stack Web Developer with a keen eye for design and a drive to create engaging and intuitive user experiences. As a graduate of Flatiron School and Year Up's Software and Development track in New York, I have gained valuable expertise in a wide range of technologies and programming languages.
                  </p>
                  <div className="buttonContainer">
                  <a href={resume} download="Resume">
                <Button variant="outlined" sx={{ fontSize: 15, color: "rgb(0, 219, 219)", fontFamily:"Nice"}}endIcon={<DownloadIcon />}>
                    Resume
                </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/denis-kadrich-7b3bb7215/" target="_blank" rel="noreferrer">
                <Button variant="outlined" sx={{ fontSize: 15, color: "rgb(0, 219, 219)", fontFamily:"Nice"}}endIcon={<AiFillLinkedin  />}>
                    LinkedIn
                </Button>
                 </a>
                 <a href="https://github.com/Dev4long"  target="_blank" rel="noreferrer">
                <Button variant="outlined" sx={{ fontSize: 15, color: "rgb(0, 219, 219)", fontFamily:"Nice"}}endIcon={<AiFillGithub  />}>
                    Github
                </Button>
                </a>
                </div>
            </div>    
      </div>
            <div className="imageContainer">
                <h4 className="welcome">Welcome to my Portfolio</h4>
                <img className="image"src= {Profile} alt="moon" />
                <p style={{fontFamily:"regular"}}>"The only way to discover the limits of the possible is to go beyond them into the impossible." - Arthur C. Clarke</p>
            </div>
    </div>
  )
}

export default Bio;
