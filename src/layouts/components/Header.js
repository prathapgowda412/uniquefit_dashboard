/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import uniquefitLogoWhie from '../../Assets/uniquefitlogowhite.png';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '60px',
    position: 'relative',
    backgroundColor: 'blue',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar color='primary' elevation={0} className={classes.root}>
      <Toolbar>
        <img height='35px' src={uniquefitLogoWhie} />
        <Button
          onClick={() => {
            localStorage.removeItem('adminToken');
            window.location.reload();
          }}
        >
          {' '}
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
