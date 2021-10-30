import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Swarm from './Components/Swarm/Swarm';
import Greedy from './Components/Greedy/Greedy';
import Bidirectional from './Components/Bidirectional/Bidirectional';

AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      
      <Switch>

          <Route path="/Swarm">
            <Swarm />
          </Route>
          <Route path="/Greedy">
            <Greedy/>
          </Route>
          <Route path="/Bidirectional">
            <Bidirectional/>
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
