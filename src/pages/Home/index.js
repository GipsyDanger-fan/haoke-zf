import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import User from './components/User/index'
import Default from './components/Default/index'
import House from './components/House/index'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Route path="/home" exact component={
          () => { return <Default /> }
        } />
        <Route path="/home/user" component={
          () => { return <User /> }
        } />
        <Route path="/home/house" component={
          () => { return <House /> }
        } />
      </div>
    );
  }
}

export default Home;