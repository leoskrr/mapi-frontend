import React from "react";
import Home from './pages/Home';
import Login from './pages/Login'
import Map1 from './pages/Map1'
import Auto from './pages/AutoConhecimento'
import Quiz from './pages/Thiking'
import Quiz2 from './pages/Thiking02'
import Quiz3 from './pages/Thiking03'
import Result from './pages/Result'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/map01" component={Map1} />
      <Route exact path="/auto" component={Auto} />
      <Route exact path="/quiz01" component={Quiz} />
      <Route exact path="/quiz02" component={Quiz2} />
      <Route exact path="/quiz03" component={Quiz3} />
      <Route exact path="/result" component={Result} />
    </Switch>
  </BrowserRouter>
);

export default Routes;