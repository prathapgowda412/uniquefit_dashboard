import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Routing from '../routing';
import Header from './components/Header';
import SideNav from './Sidemenu/SideMenu';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
}));

function MainLayouts() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Header />
        <Grid
          xs={12}
          item
          container
          style={{
            height: '100%',
            backgroundColor: '#f2f2f2',
            paddingTop: '15px',
          }}
        >
          <SideNav />
          <Grid xs={9} item>
            <Routing />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MainLayouts;
