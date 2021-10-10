//Initialising a board input
 var board = [
    [0, 0, 5, 2, 7, 6, 0, 8, 0],
    [0, 4, 0, 0, 5, 8, 0, 9, 0],
    [0, 0, 0, 9, 0, 0, 0, 2, 0],
    [0, 7, 0, 0, 0, 0, 9, 1, 3],
    [0, 0, 1, 0, 0, 0, 5, 4, 0],
    [7, 0, 3, 0, 0, 2, 0, 8, 0],
    [2, 8, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 2, 8, 0, 3, 0, 0],
    [0, 0, 0, 5, 3, 4, 0, 9, 0]
];
//Finding an empty spot
function EmptySpot(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === 0) 
                return [i, j];
        }
    }
    return [-1, -1];
}
//Checking rows for duplicate values
function rowCheck(board, row, value){
    for(var i = 0; i < board[row].length; i++) {
        if(board[row][i] === value) {
            return false;
        }
    }
   
    return true;
}
//Checking columns for duplicate values
function columnCheck(board, column, value){
    for(var i = 0; i < board.length; i++) {
        if(board[i][column] === value) {
            return false;
        }
    }

    return true;
};
//Checking squares for duplicate values
function squareCheck(board, row, column, value){
    boxRow = Math.floor(row / 3) * 3;
    boxCol = Math.floor(column / 3) * 3;
    
    for (var r = 0; r < 3; r++){
        for (var c = 0; c < 3; c++){
            if (board[boxRow + r][boxCol + c] === value)
                return false;
        }
    }

    return true;
};
//Combining all 3 checking functions in one
function valueCheck(board, row, column, value) {
    if(rowCheck(board, row, value) &&
      columnCheck(board, column, value) &&
      squareCheck(board, row, column, value)) {
        return true;
    }
    
    return false; 
};
//Function to solve the entire Sudoku board
function solve(board) {  
    let emptySpot = EmptySpot(board);
    let row = emptySpot[0];
    let col = emptySpot[1];
   

//When there are no more empty spots
    if (row === -1){
        return board;
    }
    for(let num = 1; num<=9; num++){
        if (checkValue(board, row, col, num)){
            board[row][col] = num;
            solve(board);
        }
    }
    if (nextEmptySpot(board)[0] !== -1)
        board[row][col] = 0;

    return board;
}
