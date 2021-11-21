import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"
// import NavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Sample from './Components/AlgoPages/Sample/Sample';
import Greedy from './Components/AlgoPages/Greedy/Greedy';
import Bidirectional from './Components/AlgoPages/Bidirectional/Bidirectional';
import DepthFirst from './Components/AlgoPages/dfs/dfs';
// import Footer from "./Components/Footer/Footer";
import Swarm from './Components/AlgoPages/Swarm/Swarm';
import Dijkstra from './Components/AlgoPages/Dijkstra_Algo/Dijkstra_Algo';
import Backtracking from './Components/AlgoPages/Backtracking/backtracking'
import Astar from './Components/AlgoPages/A Star/AStarAlgo';
import Pathfinder from './Components/Pathfinder/Pathfinder';
import Huffman from './Components/Huffman/Huffman';
import Sudoku from './Components/Sudoku/Sudoku';
import Splitman from './Components/Splitman/Splitman';


AOS.init();
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Project Routes*/}
          <Route path="/pathfinder">
            <Pathfinder />
          </Route>
          <Route path="/huffman">
            <Huffman />
          </Route>
          <Route path="/sudoku">
            <Sudoku />
          </Route>
          <Route path="/splitman">
            <Splitman />
          </Route>

          {/* Algopages Routes */}
          <Route path="/sample">
            <Sample />
          </Route>
          <Route path="/swarm">
            <Swarm />
          </Route>
          <Route path="/greedy">
            <Greedy />
          </Route>
          <Route path="/bidirectional">
            <Bidirectional />
          </Route>
          <Route path="/dijkstra">
            <Dijkstra />
          </Route>
          <Route path="/backtracking">
            <Backtracking />
          </Route>
          <Route path="/dfs">
            <DepthFirst />
          </Route>
          <Route path="/astar">
            <Astar />
          </Route>

          {/* Landing Page Route */}
          <Route path="/">
            {/* <NavBar /> */}
            <Landing />
            {/* <Footer /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
