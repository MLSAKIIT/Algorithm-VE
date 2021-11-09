import React from "react";
import { Component } from "react";
import '../Sudoku/Sudoku.css'
import Landing from './sudokuComponents/Landing/landing'
import GameSection from './sudokuComponents/GameSection/gamesection'
import Information from './sudokuComponents/Information/information'

class Sudoku extends Component {
    render()
    {
        return (
            <div className="sudoku">
                <Landing />
                <GameSection />
                <Information />
            </div>
        )
    }
}

export default Sudoku;