import React, { useState, useEffect } from 'react';
import Box from '../Box/Box';
import  './pfv.css';

const cols = 25;
const rows = 10;
const Box_Start_Row=0;
const Box_Start_Column=0;
const Box_End_Row=rows-1;
const Box_End_Column=cols-1;



const Pfv = () => {
   
    const [Grid, setGrid] = useState([]);
    useEffect(() => {
        intialiseGrid();
    }, [])

    //grid done
    const intialiseGrid = () => {
        const grid = new Array(cols);

        for (let i = 0; i < cols; i++) {
            grid[i] = new Array(rows);
        }
        createSpot(grid);
        setGrid(grid);
    };
    //create the spot
    const createSpot = (grid) => {
        for (let i = 0; i < rows ; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Spot(i, j);
            }
        }
    };
    //
    function Spot(i,j)
    {
        this.x=i;
        this.y=j;
        this.isStart=this.x=== Box_Start_Row && this.y=== Box_Start_Column;
        this.isEnd=this.x=== Box_End_Row && this.y=== Box_End_Column;
      
    }
    //Grid with Box
    const gridwithBox = (
        <div>
            {Grid.map((row,rowIndex)=>{
                return (
                    <div key={rowIndex} className="rowGrid">
                        {row.map((col,colIndex)=>{
                            const {isStart,isEnd}= col;
                            return <Box key={colIndex} isStart={isStart} isEnd={isEnd} row={rowIndex} col={colIndex}/>;
            })}
                    </div>
                );
            })}
        </div>
    );
    return (
     
    
            <div className="grid">
             
{gridwithBox}
</div>
        
      
    )
}

export default Pfv;
