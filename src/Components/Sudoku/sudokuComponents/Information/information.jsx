import React, { useEffect } from "react";
import '../Information/information.css'
import { InfoCards } from "./infocard";

export default function Information() {
    useEffect(() => {
        InfoCards();
    },[]);
    return(
        <div className="sudokuInformation">
            <ul className="cards">

                <li className="carddata">
                    <h1>Some Message</h1><br/>
                    <p>Challenge yourself with our endless interactive Sudoku puzzle!</p>
                    <p>IT'S FUN - IT'S CHALLENGING - IT'S ADDICTIVE</p>
                    <p>They are easy and perfect for beginners to get acquainted with the dynamics and rules of the game.</p><br/>
                    <p>Are you new to Sudoku or want to improve your skills ??  Don't worry, we got you covered.</p><br/>
                    <p> Just click the slide below of the card and get improved.</p><br/>
                    
                </li>
                <li className="carddata">
                    <h1>About Sudoku </h1>
                    <ul>
                    <li>The popular Japanese puzzle game Sudoku is based on the logical placement of numbers.</li><br/>
                    <li>The online game of logic, Sudoku doesn’t require any calculation nor special math skills; all that is needed are brains and concentration.</li><br/>
                    <li>Sudoku is one of the most popular puzzle games of all time. The goal of Sudoku is to fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9. As a logic puzzle, Sudoku is also an excellent brain game. </li><br/>
                    </ul>
                </li>

                <li className="carddata">
                    <h1>How to play Sudoku? </h1><br/>
                    <ul>
                    <li>The goal of Sudoku is to fill in a 9×9 grid with digits so that each column, row, and 3×3 section contain the numbers between 1 to 9</li><br/>
                    <li>At the beginning of the game, the 9×9 grid will have some of the squares filled in. Your job is to use logic to fill in the missing digits and complete the grid. </li><br/>
                    Don’t forget, a move is incorrect if:
                    <li>Any row and column contains more than one of the same number from 1 to 9</li>
                    <li>Any 3×3 grid contains more than one of the same number from 1 to 9</li>
                    </ul>
                </li>

                <li className="carddata">
                    <h1>Sudoku Tips</h1>
                    <ul>
                    Sudoku is a fun puzzle game once you get the hang of it. So, if you are a complete beginner, here are a few Sudoku tips that you can use to improve your Sudoku skills.
                    <li>Tip 1: Look for rows, columns of 3×3 sections that contain 5 or more numbers. Work through the remaining empty cells, trying the numbers that have not been used.</li><br/>
                    <li>Tip 2: Break the grid up visually into 3 columns and 3 rows. Each large column will have 3, 3×3 grids and each row will have 3, 3×3 grids</li><br/>
                    <li>Tip 3: Now, look for columns or grids that have 2 of the same number. Logically, there must be a 3rd copy of the same number in the only remaining 9-cell section.</li><br/>
                    </ul>
                </li>
            </ul>
        </div>
    )
}