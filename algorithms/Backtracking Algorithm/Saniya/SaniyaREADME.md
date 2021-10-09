# Backtracking Algorithm

## Introduction:

Backtracking is an algorithmic strategy for recursively solving problems by attempting to develop a solution progressively, one piece at a time, and discarding any solutions that do not satisfy the problem's criteria at any point in time.

## Backtracking Algorithm in solving Sudoku Puzzle

The basic way to solve a Sudoku Puzzle is to try and fill each square with a digit from 1-9, without repeating any digit in the same row, same column or same 3x3 grid.
In the Sudoku game, when we can't discover a solution with the current digit, we remove it (backtrack) and try the next digit. This is preferable to the naive strategy of generating all possible digit combinations and then testing each one, one at a time, because it drops a set of permutations everytime it backtracks.

## JavaScript Part

Now, we'll talk about the JavaScript part which makes our algorithm functional.

Firstly, we have taken a board input in the form of a 2D array. In the input array, all the positions having a default input of 0 are **_empty positions_**, whereas all other positions having input from 1-9 are **_filled positions_**. Basically, we need to fill up all the empty positions using digits from 1-9, without repeating any digit in the same row, column or 3x3 grid.

Next, we have used a function named **_EmptySpot_** which helps us in finding empty spots in the game.

Now, we have created three functions named **_rowCheck_**, **_columnCheck_** and **_squareCheck_** to check for duplicate values in a particular row, column and square respectively. Then, we have combined all the three functions in a function named **_valueCheck_**.

We have also added a function named **_solve(board)_**, which acts as the main function, solving the entire Sudoku Puzzle. 

The code runs and checks each empty spot for each value from 1-9 and finally, solves the entire board, with no repitition.

_Coded by Saniya Bhargav with help from Medium_
