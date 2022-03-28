import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Project from './Pages/Project';
import { Route, Link } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/project" component={Project} />
    </div>
  );
}

export default App;
