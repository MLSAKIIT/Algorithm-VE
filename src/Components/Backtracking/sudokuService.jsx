export const EMPTY_GRID = () =>
  new Array(9).fill(null).map(() => new Array(9).fill(0));
export const EMPTY_START_GRID = () =>
  new Array(9).fill(null).map(() => new Array(9));

class SudokuService 
{
  solvingProcess = [];
  findEmpty(grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 0) return { i, j };
      }
    }
    return false;
  }

  isSafe(grid, row, col, num) 
  {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][col] === num && i !== row) 
        return false;
      if (grid[row][i] === num && i !== col) 
        return false;
    }
    const x = Math.floor(row / 3) * 3;
    const y = Math.floor(col / 3) * 3;

    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        if (grid[i][j] === num && i !== row && j !== col) return false;
      }
    }

    return true;
  }

  solveRecursive(grid) {
    this.solvingProcess.push(grid.map((arr) => arr.slice()));
    const find = this.findEmpty(grid);
    let position;
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (find) {
      position = find;
    } else return true;

    while (nums.length !== 0) {
      const num = nums[0];

      if (this.isSafe(grid, position.i, position.j, num)) {
        grid[position.i][position.j] = Number(num);
        if (this.solveRecursive(grid)) return true;
        grid[position.i][position.j] = 0;
      }
      nums.shift();
    }

    return false;
  }

  solve(grid) {
    this.solvingProcess = [];
    this.solveRecursive(grid);
    return this.solvingProcess;
  }
  checkans(grid)
  {
    //(row check)
    for (let i = 0; i < 9; i++) 
    {
      const check=Array(10).fill(false);
      for(let j=0;j<9;j++)
      {
        if(grid[i][j]===0)  return false;
        if(check[grid[i][j]])  return false;
        check[grid[i][j]]=true;
      }
    }

    //(col check)
    for (let i = 0; i < 9; i++) 
    {
      const check=Array(10).fill(false);
      for(let j=0;j<9;j++)
      {
        if(check[grid[j][i]]===true)
          return false;
        check[grid[j][i]]=true;
      }
    }

    for (let i = 0; i < 9; i+=3) 
    {
      for (let j = 0; j < 9; j+=3) 
      {
        const check=Array(10).fill(false);
        for(let itemp=0;itemp<3;itemp++)
        {
          for(let jtemp=0;jtemp<3;jtemp++)
          {
            if(check[grid[itemp+i][jtemp+j]]===true)
              return false;
            check[grid[itemp+i][jtemp+j]]=true;
          }
        }
      }
    }
    return true;
  }
}
export default new SudokuService();