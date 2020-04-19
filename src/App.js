import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouterFirst from './utils/router'


function App() {
  return (
    <Router>
      <RouterFirst />
      <Link to="/home/house" />
      <Link to="/home/user" />
      <Link to="/citylist" />
      <Link to="/map" />
      <Link to="/home" />
    </Router>
  );
}

export default App;
