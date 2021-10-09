function SudokuSolver(board){
    const boardSize =board.length;
    dfs(board,boardSize);
}
function dfs(board,boardSize){
   for(let row =0; row <boardSize; row++){
       for(col=0; col<boardSize; col++){
           if(board[row][col]!= 0) 
           continue;
           for(let i=1;i<=9;i++){
               const num =i;

               if(isValid(board,row,col,boardSize,num)) {
                   board[row][col]=num;
                   if(dfs(board,boardSize)) return true;
               }
           }

           //solution was not found for any num 1-9
           board[row][col]=0; //set the current cell back to empty
           return false;
        }
    }
    var O//utput="Solution was found! ";
    return true;
       }


function isValid(board,row ,col,boardSize,num){
 const subMatrixRow = Math.floor(row / 3) *3;
 const subMatrixCol =Math.floor(col % 3) *3;
 for(let i= 0; i<boardSize; i++){
     if(board[row][i] == num || board[i][col] == num) return false;
 const curRow = subMatrixRow + Math.floor(i/3);
 const curCol = subMatrixCol + Math.floor(i%3);
 if(board[curRow][curCol]== num) return false;
}
return true;
}

