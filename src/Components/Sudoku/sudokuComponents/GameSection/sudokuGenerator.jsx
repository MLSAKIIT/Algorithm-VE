import SudokuService from './sudokuService';
class SudokuGenerator 
{
    solvingProcess = [];
    fillValues(grid,rem)
    {
        this.fillDiagonal(grid);
        SudokuService.solve(grid);
        this.removeKDigits(grid,rem);
    }
    fillDiagonal(grid)
    {
        for (let i=0;i<9;i=i+3)
            this.fillBox(i, i,grid);
    }
    unUsedInBox(rowStart,colStart,num,grid)
    {
        for (let i = 0; i<3; i++)
            for (let j = 0; j<3; j++)
                if (grid[rowStart+i][colStart+j]===num)
                    return false;
        return true;
    }
    fillBox(row,col,grid)
    {
        var num;
        for (let i=0;i<3;i++)
        {
            for (let j=0; j<3; j++)
            {
                do
                {
                    num = this.randomGenerator(9);
                }
        while (!this.unUsedInBox(row, col, num,grid));
                grid[row+i][col+j] = num;
            }
        }
    }
    randomGenerator(num)
    {
        return Math.floor((Math.random()*num+1));
    }
    CheckIfSafe(i,j,num,grid)
    {
        return (this.unUsedInRow(i, num,grid) && this.unUsedInCol(j, num,grid) && this.unUsedInBox(i-i%3, j-j%3, num,grid));
    }
    unUsedInRow(i,num,grid)
    {
        for(let j=0;j<9;j++)
        if(grid[i][j] === num)
                return false;
        return true;
    }
    unUsedInCol(j,num,grid)
    {
        for (let i = 0; i<9; i++)
            if (grid[i][j] === num)
                return false;
        return true;
    }

    removeKDigits(grid,rem)
    {
        let count = rem;
        while (count !== 0)
        {
            let cellId = this.randomGenerator(9*9)-1;
            let i = Math.floor((cellId/9));
            let j = cellId%9;
            if (grid[i][j] !== 0)
            {
                count--;
                grid[i][j] = 0;
            }
        }
    }
    generate(l)
    {
        var Kvalue=[45,49,53,64];
        let rem=Kvalue[l];
        var grid=Array(9);
        for(let i=0;i<9;i++)
            grid[i]=Array(9).fill(0);
        this.fillValues(grid,rem);
        return grid;
    }

}
export default new SudokuGenerator();