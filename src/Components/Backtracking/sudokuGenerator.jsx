function Rand(a,b){
    return Math.floor(Math.random()*a+b);
}
function initiateGrid(grid,positions)
{   
    for(let i=0;i<9;i++)
        grid[i]=Array(9);
    for(let i=0;i<(9*9);i++)
        positions[i]=Array(2);

    var count1=0;
    while(count1<positions.length)
    {    
        for(let i=0;i<9;i++)
        {
            var count2=0;    
            while(count2<9){
                positions[count1][0]=i;
                positions[count1][1]=count2;
                count2++;
                count1++;
            }
        }
    }
}
function assign(a,grid,positions)
{
    for(let i=0;i<a;i++)
    {
        var coord=positions[Rand(positions.length,0)];
        var assign_row=coord[0];
        var assign_col=coord[1];
        var value=checkVal(assign_row,assign_col,grid,positions);
        grid[assign_row][assign_col]=value;
        if(!value)
            grid[assign_row][assign_col]='_';
        var index_coord = positions.indexOf(coord);
        positions.splice(index_coord,1);
    }

}
function checkVal(row,col,grid,positions)
{    
    var choice=[],index_ele,final_val;
    for(let i=0;i<9;i++)
        choice.push(i+1);
    for(var i in grid[row])
    {
        if(grid[row][i])
        {
            index_ele=choice.indexOf(grid[row][i]);
            choice.splice(index_ele,1);
        }
    }
    for(var j in grid)
    {
        if(grid[j][col])
        {
            index_ele=choice.indexOf(grid[j][col]);
            choice.splice(index_ele,1);
        }
    }
    function removeEle(a,b,c,d,grid,positions)
    {    
        for(let i=a;i<b;i++)
        {
            for(let j=c;j<d;j++)
            {
                if(grid[i][j])
                {
                    index_ele=choice.indexOf(grid[i][j]);
                    choice.splice(index_ele,1);
                }
            }
        }
    }
    if (row<3) 
    {
        if(col<3)
            removeEle(0,3,0,3,grid,positions);
        else if(col>5)
            removeEle(0,3,6,9,grid,positions);
        else
            removeEle(0,3,3,6,grid,positions);
    }
    else if (row>5) 
    {
        if(col<3)
            removeEle(6,9,0,3,grid,positions);
        else if(col>5)
            removeEle(6,9,6,9,grid,positions);
        else
            removeEle(6,9,3,6,grid,positions);
    }
    else 
    {
        if(col<3)
            removeEle(3,6,0,3,grid,positions);
        else if(col>5)
            removeEle(3,6,6,9,grid,positions);
        else
            removeEle(3,6,3,6,grid,positions);
    }
    final_val=choice[Rand(choice.length,0)];
    return final_val;
}
export default function generate()
{
    var grid=Array(9),positions=Array(9);
    initiateGrid(grid,positions);
    assign(9*9,grid,positions);  
    return grid;
}
