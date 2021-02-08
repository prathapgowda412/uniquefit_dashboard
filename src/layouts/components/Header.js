/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Box, Button, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import uniquefit_name_black from './../../Assets/Uniquefit_name_black.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '60px',
    position: 'relative',
    // backgroundColor: '#3f51b5',
    backgroundColor: '#fff',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoutbutton: {
    color: 'white',
    backgroundColor: '#FF5F6D',
    padding: '8px 28px',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#FF5F6D',
      color: 'white',
      padding: '9px 29px',
    },
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar elevation={0} className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img height='35px' src={uniquefit_name_black} />
        <Box>
          <Button
            className={classes.logoutbutton}
            onClick={() => {
              localStorage.removeItem('adminToken');
              window.location.reload();
              history.location('/admin-login');
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
