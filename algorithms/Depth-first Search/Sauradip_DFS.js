// function DFS
//    Initialize an empty stack, empty 'result' array & a 'visited' map
//    Add the starting vertex to the stack & visited map
//    While Stack is not empty:
//      - Pop and store current vertex
//      - Push current vertex to result array
//      - Iterate through current vertex's adjacency list:
//        - For each adjacent vertex, if vertex is unvisited:
//          - Add vertex to visited map
//          - Push vertex to stack
//    Return result array




Graph.prototype.dfsRecursive = function (start) {
  const result = [];
  const visited = {};
  const adjacencyList = this.adjacencyList;
  (function dfs(vertex) {
    if (!vertex) return null;
    visited[vertex] = true;
    result.push(vertex);
    adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        //makes link between adjacent nodes , checks if prev nodes are visited , if not it goes ahead
        return dfs(neighbor);
      }
    });
  })(start);
  return result;
};

