import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import './../../Css/ScrollBar.css';
const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: '0px 0px 4px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    width: '99%',
    borderRadius: '8px',
    boxSizing: 'border-box',
    padding: '5px 10px',
  },
}));

const PaperDash = (props) => {
  const classes = useStyles();
  return <Paper square elevation={0} {...props} className={classes.paper} />;
};
PaperDash.muiName = 'Paper';
export default PaperDash;

// function PaperDash(props) {
//   const classes = useStyles();
//   return <Paper className={classes.paper} {...props} />;
//   PaperDash.mui
// }

// export default PaperDash;
