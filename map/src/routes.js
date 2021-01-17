import React from "react";
import Home from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;