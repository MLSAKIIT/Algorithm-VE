import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
// import NavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
<<<<<<< Updated upstream
import Sample from './Components/Sample/Sample';
import Greedy from './Components/Greedy/Greedy';
=======
import Sample from './Components/InfoSample/InfoSample';
import Header from './Components/Header/Header';

>>>>>>> Stashed changes

AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
      {/* <NavBar/> */}
      <Header/>
      
      <Switch>

          <Route path="/sample">
            <Sample/>
          </Route>
          <Route path="/Greedy">
            <Greedy/>
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
