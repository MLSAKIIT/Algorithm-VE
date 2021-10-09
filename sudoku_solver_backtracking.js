var board = [
    [0, 1, 0, 0, 8, 0, 0, 2, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 2, 4, 1, 0,3, 5, 7, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 5, 8, 0,9, 4, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 7],
    [0, 5, 9, 4, 0, 2, 1, 8, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 6, 0, 0,1, 0, 0, 4, 0]
]

function sudokuSolve(board) {
    let emptyCell = searchNextEmpty(board);
    let row = emptyCell[0];
    let col = emptyCell[1];

    // there is no more empty spots
    if (row === -1) {
        return board;
    }

    for (let num = 1; num <= 9; num++) {
        if (checkValue(board, row, col, num)) {
            board[row][col] = num;
            sudokuSolve(board);
        }
    }

    if (searchNextEmpty(board)[0] !== -1)
        board[row][col] = 0;

    return board;
}

function searchNextEmpty(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === 0)
                return [i, j];
        }
    }
    return [-1, -1];
}


function checkValue(board, row, column, value) {
    if (isRowValid(board, row, value) &&
        isColValid(board, column, value) &&
        isSubMatrixValid(board, row, column, value)) {
        return true;
    }

    return false;
};


function isRowValid(board, row, value) {

    for (var i = 0; i < board[row].length; i++) {
        if (board[row][i] === value) {
            return false;
        }
    }

    return true;
}


function isColValid(board, column, value) {
    for (var i = 0; i < board.length; i++) {
        if (board[i][column] === value) {
            return false;
        }
    }

    return true;
};



function isSubMatrixValid(board, row, column, value) {

    subMatrixBoxRow = Math.floor(row / 3) * 3;
    subMatrixBoxCol = Math.floor(column / 3) * 3;

    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            if (board[subMatrixBoxRow + r][subMatrixBoxCol + c] === value)
                return false;
        }
    }

    return true;
};





console.log(sudokuSolve(board)); 
