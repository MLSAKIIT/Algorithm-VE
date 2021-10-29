import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Sample from './Components/Sample/Sample';
import Backtracking from './Components/Backtracking/backtracking'


AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      
      <Switch>

          <Route path="/sample">
            <Sample/>
          </Route>
          
          <Route path="/backtracking">
            <Backtracking/>
          </Route>

          <Route path="/">
            <Landing/>
          </Route>


      </Switch>
     
      </div>
    </Router>

  );
}

export default App;
