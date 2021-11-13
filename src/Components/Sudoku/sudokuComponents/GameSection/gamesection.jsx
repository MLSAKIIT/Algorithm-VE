import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {DropdownButton , Dropdown , Col , Button , FormCheck, Row} from 'react-bootstrap'
import Board from "./Board";
import sudokuService, { EMPTY_GRID, EMPTY_START_GRID } from "./sudokuService";
import storageService from "./storageService";
import Generator from './sudokuGenerator';
import './gamesection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Celebration from '../../Assets/celebration.gif';
import failure from '../../Assets/angry.gif';
import StopWatch from "../StopWatch/stopwatch";
import Points from "../Points/points";

export default function GameSection() 
{
  const [grid, setGrid] = useState(EMPTY_GRID);
  const [startGrid, setStartGrid] = useState(EMPTY_START_GRID);
  const [isGridDisabled, setIsGridDisabled] = useState(false);
  const [isShowProcessChecked, setIsShowProcessChecked] = useState(true);
  const [isSolved, setIsSolved] = useState(false);
  const [isSolving, setIsSolving] = useState(false);
  const progressSpeed = 5;


  useEffect(() => 
  {
    const storageBoard = Generator.generate(1);
    if (storageBoard) 
    {
      setStartGrid(storageBoard);
      setGrid(storageBoard);
    }
  }, []);

  const handleValueChange = (e, id) => 
  {
    const { value } = e.target;
    if ((value <= 9 && value > 0) || value === "") 
    {
      const position = id.split(",");
      const newGrid = grid.map((arr) => arr.slice());
      if (value === "")
          newGrid[position[0]][position[1]] = 0;
      else 
        newGrid[position[0]][position[1]] = Number(value);
      setGrid(newGrid);
      storageService.setBoard(newGrid);
    }
  };


  const showProgress = async (progress) => 
  {
    setIsGridDisabled(true);
    for (const grid of progress) 
    {
      setGrid(grid);
      await new Promise((resolve) => setTimeout(resolve, progressSpeed));
    }
    setIsSolved(true);
    setIsSolving(false);
  };

  const handleSolveButtonClicked = () => 
  {
    setIsSolving(true);
    setIsSolved(false);
    setStartGrid(grid.map((arr) => arr.slice()));
    const progress = sudokuService.solve(grid);
    if (isShowProcessChecked) 
    {
      showProgress(progress);
    } 
    else 
    {
      setIsGridDisabled(true);
      setGrid(progress[progress.length - 1]);
      setIsSolved(true);
      setIsSolving(false);
    }
  };

  const reset = () => 
  {
    ReactDOM.render("",document.getElementById('sudoku-result'));
    setGrid(EMPTY_GRID);
    setStartGrid(EMPTY_START_GRID);
    setIsGridDisabled(false);
    setIsSolved(false);
    storageService.setBoard(EMPTY_GRID());
  };

  const undo = () => 
  {
    ReactDOM.render("",document.getElementById('sudoku-result'));
    setIsGridDisabled(false);
    setGrid(startGrid);
    setIsSolved(false);
  };

  function result(chk)
  {
    if(chk===true)
    {
      return(
      <div>
        <img src={Celebration} alt="" style={{height:"auto" , width:"80%"}}/>
        <p style={{color:"green"}}> <b style={{fontWeight:"bolder"}}>Congratulations!!!</b> You did it.</p>
      </div>
      );
    }
    else
    {
      return(
        <div>
          <img src={failure} alt="" style={{height:"auto" , width:"80%"}} />
          <p style={{color:"red"}}> <b style={{fontWeight:"bolder"}}>You went wrong somewhere!!!</b>
          <br />
          Press on Undo to try again.
        </p>
        </div>
        );  
    }
  
  }

  const checksol = () => 
  {
    let check=sudokuService.checkans(grid);
    ReactDOM.render(result(check),document.getElementById('sudoku-result'));
    setIsSolved(true);
  }

  const handleSelect=(e)=>
  {
    reset();
    var randomGrid = Generator.generate(e);
    setGrid(randomGrid);
    setStartGrid(randomGrid);
    storageService.setBoard(randomGrid);
  }

  const handleStartGame=()=>
  {
    document.getElementsByClassName('sudoku-land-page')[0].style.display='none';
    document.getElementById('sudoku-gameland').style.display='flex';
  }

  const handleHomeButton=()=>
  {
    document.getElementsByClassName('sudoku-land-page')[0].style.display='block';
    document.getElementById('sudoku-gameland').style.display='none';
  }

  return (
    <div id="sudoku-gamesection">
      <div className="sudoku-land-page"> 
        <div id="sudoku-subland">
          <h1 id="sudoku-headingland">My Sudoku</h1>
          <button 
            onClick={handleStartGame} 
            id="sudoku-StartButton">Start Game</button>
        </div>
      </div>
      <Row id="sudoku-gameland">
        <Col sm={6} className="mb-5" style={{padding:"40px"}}>
          <Board  
            startGrid={startGrid} 
            grid={grid} 
            onChange={handleValueChange}  
            disabled={isGridDisabled} 
          />
        </Col>
        <Col sm={3} className="mb-5">
          <Points />          
          <DropdownButton 
            disabled={isSolving} 
            id="sudoku-dropdown-basic" 
            title="Generate Board" 
            onSelect={handleSelect}>
              <Dropdown.Item eventKey="0" className="sudoku-dropdown-options">Easy</Dropdown.Item>
              <Dropdown.Item eventKey="1" className="sudoku-dropdown-options">Medium</Dropdown.Item>
              <Dropdown.Item eventKey="2" className="sudoku-dropdown-options">Difficult</Dropdown.Item>
              <Dropdown.Item eventKey="3" className="sudoku-dropdown-options">Inhuman</Dropdown.Item>
          </DropdownButton>
          <Button 
            className="mt-3 mr-1 sudoku-gamebttn" 
            style={{backgroundColor:"#2CB67D"}} 
            disabled={isSolving}  
            onClick={checksol}>
              Submit
          </Button>
          <Button 
            className="mt-3 mr-1 sudoku-gamebttn" 
            disabled={isSolving} 
            style={{backgroundColor:"#2CB67D" , border:"none"}} 
            onClick={handleSolveButtonClicked}>
              Auto-Solve
          </Button>
          <FormCheck  
            className="mt-3"  
            type="checkbox" 
            label="Show solving process"  
            disabled={isSolving}
            checked={isShowProcessChecked}  
            onChange={(e) => setIsShowProcessChecked(e.target.checked)} 
            style={{color:"white"}}
          />
          <Button 
            className="mt-3 mr-1 sudoku-gamebttn" 
            style={{backgroundColor:"red" , border:"none"}}  
            disabled={isSolving}  
            onClick={reset}>
              Clear
          </Button>
          <Button 
            className="mt-3 ml-1 sudoku-gamebttn" 
            style={{border:"none"}}  
            disabled={!isSolved}  
            onClick={undo}>
              Undo
          </Button>
          <Button 
            className="mt-3 ml-1 sudoku-gamebttn" 
            style={{border:"none" , backgroundColor:"#94A1B2"}}  
            onClick={handleHomeButton} 
            disabled={isSolving}>
              Home
          </Button>
        </Col>
        <Col sm={3} className="mb-5">
          <StopWatch />
          <Row id="sudoku-result"></Row>
        </Col>
      </Row>
    </div>
  );
}