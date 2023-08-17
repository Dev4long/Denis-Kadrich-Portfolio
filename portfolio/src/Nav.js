import React, { useState } from 'react';
import './nav.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

function Nav() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <div className="navContainer">
      <div className="menuIcon">
        <Button onClick={handleMenuClick}>
          <MenuIcon style={{ color: 'rgb(0, 219, 219)' }} />
        </Button>
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleClose}
          sx={{
            zIndex: "10000",
            '& .MuiMenu-paper': {
              backgroundColor: 'black',
            },
          }}
        >
          {/* Main menu burger options */}
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
            <a href="#connect">Connect</a>
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
      </div>
      <div className="settings">
      <a href="#connect">
      <Button variant="outlined" sx={{ fontFamily:"Nice", fontSize: 15, color: "rgb(0, 219, 219)"}} endIcon={< MailOutlineOutlinedIcon />}>
      CONNECT
      </Button>
      </a>
      </div>
    </div>
  );
}

export default Nav;