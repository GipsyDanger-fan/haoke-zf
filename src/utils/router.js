import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home/index'
import Map from '../pages/Map/index'
import CityList from '../pages/CityList/index'
import NotFound from '../pages/NotFound/index'

function RouteFirst() {
  return (
    <Switch>
      <Route path="/home" component={
        () => { return <Home /> }
      } />
      <Redirect from="/" to="/home" exact />
      <Route path="/map" component={
        () => { return <Map /> }
      } />
      <Route path="/citylist" component={
        () => { return <CityList /> }
      } />
      <Route component={
        () => { return <NotFound /> }
      } />
    </Switch>
  );
}

export default RouteFirst;
