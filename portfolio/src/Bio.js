import { useState, useEffect } from "react";
import Moon from "./images/moon.jpeg"
import "./bio.css"


function Bio() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
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
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className="BioContainer">
              <div className="Bio" style={{color: "white"}}>
                <div className="welcome">Welcome to my Portfolio</div>
                <h1>{`Hi! I'm Denis`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hi, my name is Denis Kadrich, I have completed a coding BootCamp called Flatiron School. As a Flatiron graduate, I spent four months learning all about full-stack web development. This included  Html, CSS, Javascript, React, and Ruby on Rails. I have a comprehensive understanding pertaining to the full lifecycle of software development projects. I keep up to date with the tech market and new technologies daily. I am a continuous and lifelong learner.
                  </p>
              </div>
              <div>
                <img src= {Moon} style={{height:"50px", width:"50px"}}/>
              </div>
    </div>
  )
}

export default Bio;
