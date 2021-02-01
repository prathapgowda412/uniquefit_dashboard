import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './layouts/components/NotFound';
import AdminLogin from './Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import DeliveredOrders from './views/Orders/DeliveredOrders';
import RecievedOrders from './views/Orders/RecievedOrders';
import SingleOrder from './views/Orders/SingleOrder';
import StitchingOrders from './views/Orders/StitchingOrders';
import AddProducts from './views/Products/AddProducts';
import AllProducts from './views/Products/AllProducts';
import DeleteProducts from './views/Products/DeleteProducts';
import Products from './views/Products/Products';
import UpdateProducts from './views/Products/UpdateProducts';

function Routing() {
  return (
    <Switch>
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route path='/admin-login' component={AdminLogin} />
      <Route path='/products'>
        <AllProducts />
      </Route>
      <Route path='/addproducts'>
        <AddProducts />
      </Route>
      <Route path='/deleteproducts'>
        <DeleteProducts />
      </Route>
      <Route path='/updateproducts'>
        <UpdateProducts />
      </Route>
      <Route path='/orders-recieved'>
        <RecievedOrders />
      </Route>
      <Route path='/orders-stitching'>
        <StitchingOrders />
      </Route>
      <Route path='/orders-delivered'>
        <DeliveredOrders />
      </Route>
      <Route path='/single-order/:order'>
        <SingleOrder />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routing;
