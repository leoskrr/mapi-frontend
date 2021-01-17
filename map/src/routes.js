import React from "react";
import Home from './pages/Home';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;