import React from 'react'
import "./codeIcons.css";
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DataArrayOutlinedIcon from '@mui/icons-material/DataArrayOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

function getRandomPosition() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const randomX = Math.random() * (screenWidth - 60); 
  const randomY = Math.random() * (screenHeight - 60);
  return {
    top: `${randomY}px`,
    left: `${randomX}px`,
  };
}

function CodeIcons() {
  return (
        <div className='HomeContainer'>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <DataObjectOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CodeOffOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CodeOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <DataArrayOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CloudOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <DataObjectOutlinedIcon sx={{ fontSize: 30, color: "rgb(0, 219, 219)"}} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CodeOffOutlinedIcon sx={{ fontSize: 30, color: "rgb(0, 219, 219)"}} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CodeOutlinedIcon sx={{ fontSize: 30, color: "rgb(0, 219, 219)" }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <DataArrayOutlinedIcon sx={{ fontSize: 30, color: "rgb(0, 219, 219)" }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CloudOutlinedIcon sx={{ fontSize: 30, color: "rgb(0, 219, 219)" }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <DataObjectOutlinedIcon sx={{ fontSize: 30 , color: "rgb(0, 255, 4)"}}/>
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CodeOffOutlinedIcon sx={{ fontSize: 30, color: "rgb(0, 255, 4)" }} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CodeOutlinedIcon sx={{ fontSize: 30 , color: "rgb(0, 255, 4)"}} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <DataArrayOutlinedIcon sx={{ fontSize: 30 , color: "rgb(0, 255, 4)"}} />
          </div>
          <div className="pulsating-icon" style={{ ...getRandomPosition() }}>
            <CloudOutlinedIcon sx={{ fontSize: 30, color: "rgb(0, 255, 4)" }} />
          </div>
        </div>
  )
}

export default CodeIcons