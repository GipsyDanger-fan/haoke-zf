import React from 'react';
import { Route } from 'react-router-dom'

const Testing = ({ path, component: Com }) => {
  return (
    <Route path={path} render={(props) => {
      return <Com {...props} />
    }} />
  );
}

export default Testing;
