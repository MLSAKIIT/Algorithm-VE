//function type variable solveSudoku is created
var solveSudoku = function(board) 
{
    //sudokusolver is recursively called till we obtain the solution
    function sudokusolver(board,i,j) 
    {
        if(i===9)
            return true;
        
        //move to next line
        if(j===9)
            return sudokusolver(board,i+1,0);
        
        if(board[i][j]==='.')
        {
            let char = '1';
            while(char <= 9) 
            {
                if(isValidSudoku(i, j, char)) 
                {
                    board[i][j] = char;
                    if(sudokusolver(board,i,j+1))
                        return true;
                    else 
                        board[i][j] = '.';
                }
                char = (parseInt(char) + 1).toString();
            }
            return false;
        }
        else
        {
            return sudokusolver(board,i,j+1);
        }
    }
    
    //check if the current char at index [row,col] is valid or not
    function isValidSudoku(row, col, char) 
    {
        //check if char in present in row
        for(let i=0;i<9;i++) 
            if(board[row][i]===char) 
                return false;
        
        //check of char is present in column
        for(let i=0;i<9;i++) 
            if(board[i][col]===char) 
                return false;
        
        //check if char is present in box
        let x=Math.floor(row/3)*3;
        let y=Math.floor(col/3)*3;
        
        for(let i=0;i<3;i++) 
            for(let j=0;j<3;j++) 
                if(board[x + i][y + j]===char) 
                    return false;
        
        return true;
    }
    sudokusolver(board,0,0);
};