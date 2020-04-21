import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Testing from './testing'
import Home from '../pages/Home/index'
import Map from '../pages/Map/index'
import CityList from '../pages/CityList/index'
import NotFound from '../pages/NotFound/index'

const RouteFirst = () => {
  return (
    <Switch>
      {Testing({ path: '/home', component: Home })}
      <Redirect from="/" to="/home" exact />
      {Testing({ path: '/map', component: Map })}
      {Testing({ path: '/citylist', component: CityList })}
      <Route component={
        () => { return <NotFound /> }
      } />
    </Switch>
  );
}

export default RouteFirst;
