import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Products from "./views/products";

function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </Switch>
  );
}

export default Routing;
