import React from 'react'
import { useState } from "react";
import './skills.css'
import WhatsThat from "./images/whatsThat.png"
import UrbanRider from "./images/UrbanRider.png"
import eatLiftPray from "./images/eatLiftPray.png"
import GrafsCalling from "./images/GrafsCalling.png"
import MortgageCalc from "./images/MortgageCalc.png"
import BlogPosts from "./images/BlogPosts.png"
import Button from '@mui/material/Button';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

function Skills() {

  const UrbanRiderFront = (
  <a href="https://github.com/Dev4long/urban-riderz-frontend" target="_blank" rel="noreferrer">
   Frontend
  </a>
  );
  const UrbanRiderBack = (
    <a href="https://github.com/Dev4long/urban-riderz-backend" target="_blank" rel="noreferrer">
     Backend
    </a>
    );
  const UrbanRiderDemo = (
    <a href="https://www.loom.com/share/961cb7d31ce749c59a6b3f273aaaf437" target="_blank" rel="noreferrer">
     Demo
    </a>
    );

  const EatFront = (
      <a href="https://github.com/Dev4long/Eat-lift-pray-frontend" target="_blank" rel="noreferrer">
       Frontend
      </a>
      );
  const EatBack = (
        <a href="https://github.com/Dev4long/Eat-lift-pray-backend" target="_blank" rel="noreferrer">
         Backend
        </a>
        );
  const EatDemo = (
        <a href="https://www.loom.com/share/c6f9470169244e22923cc74d2ce2bbae" target="_blank" rel="noreferrer">
         Demo
        </a>
        );

  
  const WhatFront = (
          <a href="https://github.com/Dev4long/whats-app" target="_blank" rel="noreferrer">
           Frontend
          </a>
          );
  const WhatBack = (
            <a href="https://github.com/Dev4long/whats-app-backend" target="_blank" rel="noreferrer">
             Backend
            </a>
            );
  const WhatDemo = (
            <a href="https://www.loom.com/share/022039009cbd4b45b87aa503dae6f210" target="_blank" rel="noreferrer">
             Demo
            </a>
            );
  
  const GrafCode = (
              <a href="https://github.com/Dev4long/JavascriptFinal" target="_blank" rel="noreferrer">
               Source
              </a>
              );
  const GrafSite = (
              <a href="https://dev4long.github.io/JavascriptFinal/" target="_blank" rel="noreferrer">
               Site
              </a>
              );


  const MortgageCode = (
                <a href="https://github.com/Dev4long/JavaFinal" target="_blank" rel="noreferrer">
                 Source
                </a>
                );


  const BlogCode = (
    <a href="https://github.com/Dev4long/PythonFinal" target="_blank" rel="noreferrer">
     Source
    </a>
    );
  
  const projects = [
    {
      id: 1,
      title: 'Urban Riderz',
      image: UrbanRider,
      description: (
        <React.Fragment>
         Developed a full-stack CRUD app connecting bikers and skaters with React.js and Ruby on Rails, featuring user authentication, merchandise database, Google Maps integration, and real-time chat. Checkout the {UrbanRiderFront} code and {UrbanRiderBack} repository on GitHub as well as a {UrbanRiderDemo} here
        </React.Fragment>
      )
    },
    {
      id: 2,
      title: 'Eat, Lift, Pray',
      image: eatLiftPray,
      description: (
        <React.Fragment>
        Designed a React.js personal training site allowing users to book sessions with celebrity trainers, supported by a Ruby backend featuring user sessions and dynamic rendering based on login status. Checkout the {EatFront} code and {EatBack} repository on GitHub as well as a {EatDemo} here

        </React.Fragment>
      )
    },
    {
      id: 3,
      title: 'WhatsThat',
      image: WhatsThat,
      description: (
        <React.Fragment>
        Developed a WhatsApp clone utilizing MERN stack, including a Node.js/Express backend, MongoDB for message storage, React.js for UI, and Pusher for real-time data. Utilized FontAwesome for icons. Checkout the {WhatFront} code and {WhatBack} repository on GitHub as well as a {WhatDemo} here


        </React.Fragment>
      )
    },{
      id: 4,
      title: `Graf's Calling`,
      image: GrafsCalling,
      description: (
        <React.Fragment>
        Created a beautiful React.js art gallery page with a signup and login process that enforces password and email validation, incorporating Material UI components.. Checkout the {GrafCode} code and live {GrafSite} here
        </React.Fragment>
      )
    },
    {
      id: 5,
      title: 'Mortgage Calculator',
      image: MortgageCalc,
      description: (
        <React.Fragment>
        Designed a web-based mortgage calculator using Java Spring Boot, enabling users to input details for calculating their monthly mortgage payments. Checkout the {MortgageCode} code here
        </React.Fragment>
      )
    },
    {
      id: 6,
      title: 'Blog Posts',
      image: BlogPosts,
      description: (
        <React.Fragment>
       Established a community blog platform enabling users to view, create, or delete posts, utilizing Python Django for both frontend and backend components, and linking to a MySQL database to store post information. Checkout the {BlogCode} code here
        </React.Fragment>
      )
    },

  ];
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleCarouselItemClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="skillsContainer" id='projects'>
      <h2 className="title">Projects</h2>
      <div className="projectImage">
        <img src={projects[currentIndex].image} className="pic" alt="projectPic" />
      </div>
      <div className="description">
        <p style={{ color: 'white', fontSize: '20px', padding:"20px", textAlign:"center", fontFamily:"Nice"}}>
          {projects[currentIndex].title}</p>
        <p style={{ color: 'white', fontSize: '15px', padding:"20px", fontFamily:"regular"}}>
        {projects[currentIndex].description}
        </p>
      </div>
      <div className="carouselContainer">
        <div className="carousel">
          {projects.map((project, index) => (
            <div style={{ fontFamily:"Nice"}} className={`carousel-item ${index === currentIndex ? 'highlighted' : ''}`} onClick={() => handleCarouselItemClick(index)} key={project.id}>
              {project.title}
            </div>
          ))}
        </div>
        <Button variant="outlined" onClick={prevSlide} sx={{ fontSize: 15, color: 'rgb(0, 219, 219)', marginTop:"20px"}} startIcon={<KeyboardDoubleArrowLeftOutlinedIcon />}/>
        <Button variant="outlined" onClick={nextSlide} sx={{ fontSize: 15, color: 'rgb(0, 219, 219)', marginTop:"20px"}} endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}/>
      </div>
    </div>
  );
}

export default Skills;