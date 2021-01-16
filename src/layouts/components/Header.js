/* eslint-disable jsx-a11y/alt-text */
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import uniquefitLogoWhie from '../../Assets/uniquefitlogowhite.png';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '65px',
    position: 'relative',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar elevation={0} color='Primary' className={classes.root}>
      <Toolbar>
        <img height='45px' src={uniquefitLogoWhie} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
