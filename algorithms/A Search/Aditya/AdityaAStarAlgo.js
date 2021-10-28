function removeFromArray(arr, elt){
    for( var i= arr.length - 1; i>=0; i--){
        if( arr[i]== elt){
            arr.splice(i, 1);
        }
    }
}

function heuristic(a,b){
    //var d = dist(a.i,a.j,b.i,b.j);
    var d = abs(a.i-b.i) + abs(a.j-b.j);
    return d;
}


var cols = 25;
var rows = 25;
var grid = new Array(cols);

var OpenSet = [];
var ClosedSet = [];
var start;
var end;
var w,h;
var path = [];

function spot(i, j) 
{
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbours = [];
    this.previous = undefined;


    this.show = function(col){
        fill(255);
        nostroke();
        rect(this.i*w , this.j*h, w-1, h-1);
    }

    this.addneighbours = function(grid){
      var i = this.i;
      var j = this.j;
      if(i < cols-1){
      this.neighbours.push(grid[i+1][j]);
      }
      if(i > 0){
      this.neighbours.push(grid[i-1][j]);
      }
      if(j < rows-1){
      this.neighbours.push(grid[i][j+1]);
      }
      if (j > 0){
      this.neighbours.push(grid[i][j-1]);
      }
    }
}

function setup()
{
    createCanvas(400, 400);
    console.log('A*');

    // Making a 2D array
    for( var i=0; i<cols; i++) {
        for( var j=0; j<rows; j++){
            grid[i][j]= new spot();
        }
    }

    for( var i=0; i<cols; i++) {
        for( var j=0; j<rows; j++){
            grid[i][j].addNeighbours(grid);
        }

    start = grid[0][0];
    end = grid[cols - 1][rows - 1];

    OpenSet.push(start);

    console.log(grid);
}

function draw(){

    if(OpenSet.length > 0){
        
        var winner = 0;
        for( var i=0; i< OpenSet.length; i++){
         if( OpenSet[i].f < OpenSet[winner].f) {
             winner = i;
         }
        }
        var current = OpenSet[winner];

        if( current === end){
            
            noLoop();
            console.log("DONE!");
        }

        removeFromArray(OpenSet, current);
        ClosedSet.push(current);

        var neighbours = current.neighbours;
        for(var i = 0; i < neighbours.length; i++)
           var neighbours = neighbours[i];

           if(!ClosedSet.includes(neighbour)){
           var tempG = current.g + 1;

           if(OpenSet.includes(neighbour)){
               if(tempG < neighbour.g){
                   neighbour.g = tempG;
               }
           }
           else {
               neighbour.g = tempG;
               OpenSet.push(neighbour);
           }

           neighbour.h = heuristic(neighbour, end);
           neighbour.f = neighbour.g + neighbour.h;
           neighbour.previous = current;
        }

        //we can still evaluate the nodes
    }else {
        //...No solution
    }

    background(0);

    for(var i=0; i<cols; i++){
        for(var j=0; j<rows; j++){
            grid[i][j].show(color(255));
        }
    }

    for( var i=0; i< ClosedSet.length; i++){
        ClosedSet[i].show(color(255, 0, 0));
    }

    for ( var i=0; i< OpenSet.length; i++){
        OpenSet[i].show(color(0, 255, 0));
    }
  }

  //Find the Path
  path = [];
  var temp = current;
  path.push(temp);
  while (temp.previous){
      path.push(temp.previous);
      temp = temp,previous;
  }

  for(var i =0; i < path.length; i++){
      path[i].show(color(0,0,255));
  }
}