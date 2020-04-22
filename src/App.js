import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RouterFirst from './utils/router'


function App() {
  return (
    <div className="app">
      <Router>
        <RouterFirst />
      </Router>
    </div>

  );
}

export default App;
