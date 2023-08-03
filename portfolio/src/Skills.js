import React from 'react'
import { useState } from "react";
import './skills.css'
import Profile from "./images/profile.jpeg"
import Moon from "./images/moon.jpeg"
import Button from '@mui/material/Button';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

function Skills() {


  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: Profile,
      description: 'Description for Project 1',
    },
    {
      id: 2,
      title: 'Project 2',
      image: Moon,
      description: 'Description for Project 2',
    },
    {
      id: 3,
      title: 'Project 3',
      image: Profile,
      description: 'Description for Project 3',
    },{
      id: 4,
      title: 'Project 4',
      image: Moon,
      description: 'Description for Project 4',
    },
    {
      id: 5,
      title: 'Project 5',
      image: Profile,
      description: 'Description for Project 5',
    },
    {
      id: 6,
      title: 'Project 6',
      image: Moon,
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
    <div className="skillsContainer">
      <h2 className="title">My projects</h2>
      <div className="projectImage">
        <img src={projects[currentIndex].image} className="pic" alt="projectPic" />
      </div>
      <div className="description">
        <h3 style={{ color: 'white', textAlign: 'center', fontSize: '1.5vw' }}>{projects[currentIndex].title}</h3>
        <p style={{ color: 'white', fontSize: '20px', padding:"20px"}}>
        {projects[currentIndex].description}
        </p>
      </div>
      <div className="carouselContainer">
        <div className="carousel">
          {projects.map((project, index) => (
            <div className={`carousel-item ${index === currentIndex ? 'highlighted' : ''}`} onClick={() => handleCarouselItemClick(index)} key={project.id}>
              {project.title}
            </div>
          ))}
        </div>
        <Button variant="outlined" onClick={prevSlide} sx={{ fontSize: 15, color: 'rgb(0, 219, 219)' }} startIcon={<KeyboardDoubleArrowLeftOutlinedIcon />}>
          Last
        </Button>
        <Button variant="outlined" onClick={nextSlide} sx={{ fontSize: 15, color: 'rgb(0, 219, 219)' }} endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Skills;