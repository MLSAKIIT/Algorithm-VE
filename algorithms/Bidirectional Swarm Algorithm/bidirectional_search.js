export function bidirectionalSearch(grid, startRow, startCol, finRow, finCol, checkboxVal) {
    const visitedNodesInOrder = [];
    let q1 = [], q2 = [];
    let dirx = [-1, 1, 0, 0];
    let diry = [0, 0, -1, 1];
    q1.push([startRow, startCol]);
    q2.push([finRow, finCol]);
    let table = [];

    // tracking visited nodes for both groups (from starting node and finishing node)
    for (let i = 0; i < grid.length; ++i) {
        let tmp = [];

        for (let j = 0; j < grid[0].length; ++j)
            tmp.push(false);
        
        table.push(tmp);
    }

    if (checkboxVal) {
        dirx = [-1, -1, -1, 0, 0, 1, 1, 1];
        diry = [-1, 0, 1, -1, 1, -1, 0, 1];
    }

    // BFS from start and finish nodes
    while (q1.length || q2.length) {
        const [row1, col1] = (!q1.length) ? [-1, -1]:q1.shift();
        const [row2, col2] = (!q2.length) ? [-1, -1]:q2.shift();
        if (isValid(grid, row1, col1)) grid[row1][col1].isVisited = true;
        if (isValid(grid, row2, col2)) table[row2][col2] = true;
        let newLvl = [];

        for (let i = 0; i < dirx.length; ++i) {
            const newRow1 = row1 + dirx[i];
            const newRow2 = row2 + dirx[i];
            const newCol1 = col1 + diry[i];
            const newCol2 = col2 + diry[i];

            // checking for intersection
            if (isValid(grid, row1, col1) && isValid(grid, newRow1, newCol1)) {
                if (!grid[newRow1][newCol1].isVisited && !grid[newRow1][newCol1].isWall) {
                    if (table[newRow1][newCol1]) {
                        if (newLvl.length) visitedNodesInOrder.push(newLvl);
                        return [visitedNodesInOrder, grid[row1][col1], grid[newRow1][newCol1]];
                    }

                    grid[newRow1][newCol1].isVisited = true;
                    grid[newRow1][newCol1].previousNode = grid[row1][col1];
                    q1.push([newRow1, newCol1]);
                    newLvl.push([newRow1, newCol1]);
                }
            }

            // checking for intersection
            if (isValid(grid, row2, col2) && isValid(grid, newRow2, newCol2)) {
                if (!table[newRow2][newCol2] && !grid[newRow2][newCol2].isWall) {
                    if (grid[newRow2][newCol2].isVisited) {
                        if (newLvl.length) visitedNodesInOrder.push(newLvl);
                        return [visitedNodesInOrder, grid[newRow2][newCol2], grid[row2][col2]];
                    }

                    table[newRow2][newCol2] = true;
                    grid[newRow2][newCol2].previousNode = grid[row2][col2];
                    q2.push([newRow2, newCol2]);
                    newLvl.push([newRow2, newCol2]);
                }
            }
        }

        visitedNodesInOrder.push(newLvl);
    }

    return [visitedNodesInOrder, grid[startRow][startCol], grid[finRow][finCol]];
}

function isValid(grid, row, col) {
    return (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) ? false:true;
}