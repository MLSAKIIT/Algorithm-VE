import React from "react";
import { Component } from "react";
import {watch} from './stopwatchjs';
import './stopwatch.css'

class StopWatch extends Component
{
    componentDidMount(){
        watch();
    }
    render(){
        return(
            <div id="sudoku-stopwatch">
                <h1 id="sudoku-timestamp">0.0</h1>
                <div id="sudoku-actionRow">
                    <button className="sudoku-watchbtn" id="startstop">Start</button>
                    <button className="sudoku-watchbtn"  id="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                            <path d="M13 3c-4.97 0-9 4.03-9 9H1l4 3.99L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}

export default StopWatch;