import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Sample from './Components/Sample/Sample';



import Dijkstra_Algo from './Components/Dijkstra_Algo/Dijkstra_Algo';


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

          <Route path="/">
            <Landing/>
          </Route>




          <Route path="/Dijkstra_Algo">
            <Dijkstra_Algo/>
          </Route>

      </Switch>
     
      </div>
    </Router>

  );
}

export default App;
