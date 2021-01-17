import React from "react";
import Home from './pages/Home';
import Login from './pages/Login'
import Map1 from './pages/Map1'
import Auto from './pages/AutoConhecimento'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/map01" component={Map1} />
      <Route exact path="/auto" component={Auto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;