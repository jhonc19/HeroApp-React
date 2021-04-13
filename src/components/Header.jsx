import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from './../assets/img/hero-icon.png';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <Link className="logoContent" to="/marvel">
          <img src={logo} alt="logo" width="32" height="32"></img>
          <h2>HERO APP</h2>
        </Link>
        <div className="groupButtons">
          <Link to="/marvel">
            <Button className="itemButton" color="inherit">
              Heroes Marvel
            </Button>
          </Link>
          <Link to="/dc">
            <Button className="itemButton" color="inherit">
              Heroes DC Comics
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
