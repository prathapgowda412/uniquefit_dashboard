/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Box, Button, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import uniquefitLogoWhie from '../../Assets/uniquefitlogowhite.png';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '60px',
    position: 'relative',
    // backgroundColor: '#3f51b5',
    backgroundColor: '#3f51b5',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoutbutton: {
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar elevation={0} className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img height='35px' src={uniquefitLogoWhie} />
        <Box>
          <Button
            className={classes.logoutbutton}
            onClick={() => {
              localStorage.removeItem('adminToken');
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
