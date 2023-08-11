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


  const projects = [
    {
      id: 1,
      title: 'Urban Riderz',
      image: UrbanRider,
      description: 'Description for Project 1',
    },
    {
      id: 2,
      title: 'Eat, Lift, Pray',
      image: eatLiftPray,
      description: 'Description for Project 2',
    },
    {
      id: 3,
      title: 'WhatsThat',
      image: WhatsThat,
      description: 'Description for Project 3',
    },{
      id: 4,
      title: `Graf's Calling`,
      image: GrafsCalling,
      description: 'Description for Project 4',
    },
    {
      id: 5,
      title: 'Mortgage Calculator',
      image: MortgageCalc,
      description: 'Description for Project 5',
    },
    {
      id: 6,
      title: 'Blog Posts',
      image: BlogPosts,
      description: 'Description for Project 6',
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
      <h2 className="title">PROJECTS</h2>
      <div className="projectImage">
        <img src={projects[currentIndex].image} className="pic" alt="projectPic" />
      </div>
      <div className="description">
        <p style={{ color: 'white', fontSize: '20px', padding:"20px", textAlign:"center", fontFamily:"Nice"}}>
          {projects[currentIndex].title}</p>
        <p style={{ color: 'white', fontSize: '15px', padding:"20px", fontFamily:"Nice"}}>
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