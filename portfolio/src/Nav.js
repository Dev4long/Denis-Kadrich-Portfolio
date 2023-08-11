// import React, {useState, useEffect } from 'react';
// import './nav.css'
// import Button from '@mui/material/Button';
// import { HashRouter as Router, Routes, Link, Route } from 'react-router-dom';
// import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
// import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
// import MenuIcon from '@mui/icons-material/Menu';

// function Nav() {

//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
  
//     const handleClose = () => {
//       setAnchorEl(null);
//     };


//   return (
//     <div className="navContainer">
//         <div className="menuIcon">
//         <Button onClick={toggleDropdown}>
//           <MenuIcon style={{ color: 'rgb(0, 219, 219)' }} />
//         </Button>
//         {isDropdownOpen && (
//           <div className="dropdown">
//             <Button sx={{ fontFamily: 'Nice' }}>
//               <a href="#home">Home</a>
//             </Button>
//             <Button sx={{ fontFamily: 'Nice' }}>
//               <a href="#skills">Skills</a>
//             </Button>
//             <Button sx={{ fontFamily: 'Nice' }}>
//               <a href="#projects">Projects</a>
//             </Button>
//             <Button sx={{ fontFamily: 'Nice' }}>
//               <a href="#contact">Contact</a>
//             </Button>
//             </div>
//         )}
//         </div>
//         <div className="denis">
//             <RocketLaunchOutlinedIcon style={{color:"rgb(0, 219, 219)"}}/> Denis Kadrich
//         </div>
//         <div className="links">
//         <Button sx={{fontFamily: 'Nice'}}><a href="#home">Home</a></Button>
        
//         <Button sx={{fontFamily: 'Nice'}}><a href="#skills">Skills</a></Button>
        
//         <Button sx={{fontFamily: 'Nice'}}><a href="#projects">Projects</a></Button>
        
//         <Button sx={{fontFamily: 'Nice'}}><a href="#contact">Contact</a></Button>
        
//         </div>
//         <div className="settings">
//             <Button><SettingsSuggestOutlinedIcon className="settinsIcon" style={{color:"rgb(0, 219, 219)"}}/></Button>
//         </div>
//     </div>
//   )
// }

// export default Nav

import React, { useState } from 'react';
import './nav.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navContainer">
      <div className="menuIcon">
        <Button onClick={handleClick}>
          <MenuIcon style={{ color: 'rgb(0, 219, 219)' }} />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{ zIndex:"10000", '& .MuiMenu-paper': {
            backgroundColor: 'black',
          },}}
        >
          <MenuItem onClick={handleClose}>
            <a href="#home">Home</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#skills">Skills</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#projects">Projects</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#contact">Contact</a>
          </MenuItem>
        </Menu>
      </div>
      <div className="denis">
        <RocketLaunchOutlinedIcon style={{ color: 'rgb(0, 219, 219)' }} /> Denis Kadrich
      </div>
      <div className="links">
        <Button sx={{ fontFamily: 'Nice' }}>
          <a href="#home">Home</a>
        </Button>
        <Button sx={{ fontFamily: 'Nice' }}>
          <a href="#skills">Skills</a>
        </Button>
        <Button sx={{ fontFamily: 'Nice' }}>
          <a href="#projects">Projects</a>
        </Button>
        <Button sx={{ fontFamily: 'Nice' }}>
          <a href="#contact">Contact</a>
        </Button>
      </div>
      <div className="settings">
        <Button onClick={handleClick}>
          <SettingsSuggestOutlinedIcon
            className="settinsIcon"
            style={{ color: 'rgb(0, 219, 219)' }}
          />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{ zIndex:"10000", '& .MuiMenu-paper': {
            backgroundColor: 'black',
          },}}
        >
          <MenuItem onClick={handleClose}>
            <a href="#home">Home</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#skills">Skills</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#projects">Projects</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#contact">Contact</a>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;