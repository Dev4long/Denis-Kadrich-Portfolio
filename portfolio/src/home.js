import React from 'react';
import CodeIcons from './CodeIcons.js';
import Bio from './Bio.js';
import "./home.css"



function home() {
  return (
    <div className="home-container">
        <Bio />
        <CodeIcons />
    </div>
  );
}

export default home;
