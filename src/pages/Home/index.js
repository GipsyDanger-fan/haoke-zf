import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import './index.css'

import User from './components/User/index'
import Default from './components/Default/index'
import House from './components/House/index'
import TabBarList from './components/TabBarList'


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Route path="/home" exact component={
          () => { return <Default /> }
        } />
        <Route path="/home/house" component={
          () => { return <House /> }
        } />
        <Route path="/home/user" component={
          () => { return <User /> }
        } />
        <div className="barBox">
          <TabBarList />
        </div >
      </div>
    );
  }
}

export default Home;