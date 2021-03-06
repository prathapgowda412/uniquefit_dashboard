import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import {
  AddBoxRounded,
  AddCircleOutline,
  AssessmentOutlined,
  DeleteRounded,
  EditRounded,
  ExpandLess,
  ExpandMore,
  HourglassEmptyRounded,
  ListRounded,
  LoyaltyOutlined,
  PlaylistAddCheckRounded,
  ViewListRounded,
} from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PaperDash from '../components/PaperDash';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 15px 100px 10px',
  },
}));

function SideNav() {
  const classes = useStyles();
  return (
    <Grid xs={3} item className={classes.root}>
      <PaperDash>
        <List>
          <ListItem button to='/' component={NavLink}>
            <ListItemIcon>
              <AssessmentOutlined />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ProductsMenu />
          <OrdersMenu />
        </List>
      </PaperDash>
    </Grid>
  );
}

const ProductsMenu = () => {
  let [listOpen, setListOpen] = React.useState(false);
  const handleListOpen = () => {
    setListOpen(!listOpen);
  };
  return (
    <>
      <ListItem button onClick={handleListOpen}>
        <ListItemIcon>
          <LoyaltyOutlined />
        </ListItemIcon>
        <ListItemText primary='Products' />
        {listOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={listOpen} timeout='auto' unmountOnExit>
        <List
          component='div'
          disablePadding
          style={{ width: '90%', float: 'right' }}
        >
          <ListItem button component={NavLink} to='/products'>
            <ListItemIcon>
              <ViewListRounded />
            </ListItemIcon>
            <ListItemText primary='All Products' />
          </ListItem>
          <ListItem button component={NavLink} to='/addProducts'>
            <ListItemIcon>
              <AddCircleOutline />
            </ListItemIcon>
            <ListItemText primary='Add Products' />
          </ListItem>
          <ListItem button component={NavLink} to='/updateproducts'>
            <ListItemIcon>
              <EditRounded />
            </ListItemIcon>
            <ListItemText primary='Update Products' />
          </ListItem>
          <ListItem button component={NavLink} to='/deleteproducts'>
            <ListItemIcon>
              <DeleteRounded />
            </ListItemIcon>
            <ListItemText primary='Delete Products' />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

const OrdersMenu = () => {
  let [listOpen, setListOpen] = React.useState(false);
  const handleListOpen = () => {
    setListOpen(!listOpen);
  };
  return (
    <>
      <ListItem button onClick={handleListOpen}>
        <ListItemIcon>
          <ListRounded />
        </ListItemIcon>
        <ListItemText primary='Orders' />
        {listOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={listOpen} timeout='auto' unmountOnExit>
        <List
          component='div'
          disablePadding
          style={{ width: '90%', float: 'right' }}
        >
          <ListItem button component={NavLink} to='/orders-recieved'>
            <ListItemIcon>
              <AddBoxRounded />
            </ListItemIcon>
            <ListItemText primary='Recieved Orders' />
          </ListItem>
          <ListItem button component={NavLink} to='/products'>
            <ListItemIcon>
              <HourglassEmptyRounded />
            </ListItemIcon>
            <ListItemText primary='Stiching Orders' />
          </ListItem>
          <ListItem button component={NavLink} to='/products'>
            <ListItemIcon>
              <PlaylistAddCheckRounded />
            </ListItemIcon>
            <ListItemText primary='Delivered Orders' />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default SideNav;
