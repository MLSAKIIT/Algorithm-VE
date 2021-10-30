import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Sample from './Components/Sample/Sample';
import Greedy from './Components/Greedy/Greedy';
import Bidirectional from './Components/Bidirectional/Bidirectional';
import Footer from "./Components/Footer/Footer";
import Swarm from './Components/Swarm/Swarm';
import Dijkstra_Algo from './Components/Dijkstra_Algo/Dijkstra_Algo';
import Backtracking from './Components/Backtracking/backtracking'


AOS.init();
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/sample">
            <Sample />
          </Route>
          <Route path="/swarm">
            <Swarm/>
          </Route>
          <Route path="/greedy">
            <Greedy />
          </Route>
          <Route path="/bidirectional">
            <Bidirectional />
          </Route>
          <Route path="/dijkstra">
            <Dijkstra_Algo/>        
          </Route>
          {/* <Route path="/login">
            <LoginPage />
          </Route> */}
          <Route path="/backtracking">
            <Backtracking/>
          </Route>
          <Route path="/">
            <Landing />
          </Route>
   
      </Switch>
        <Footer/>

      </div>
    </Router>
  );
}


export default App;
