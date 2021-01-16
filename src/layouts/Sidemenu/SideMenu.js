import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
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
} from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

function SideNav() {
  return (
    <Grid
      xs={3}
      item
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper style={{ backgroundColor: 'white', width: '85%' }}>
        <List>
          <ListItem to='/' component={NavLink}>
            <ListItemIcon>
              <AssessmentOutlined />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ProductsMenu />
          <OrdersMenu />
        </List>
      </Paper>
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
          <ListItem button component={NavLink} to='/products'>
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
