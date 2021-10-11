// function BFS
//  To initialize an empty queue, empty 'result' array & the visited map
//    Add the starting vertex to the queue & visited map
//    While Queue is not empty:
//      - Dequeue and store current vertex
//      - Push current vertex to result array
//      - Iterate through current vertex's adjacency list:
//        - For each adjacent vertex, if vertex is unvisited:
//          - Add vertex to visited map
//          - Enqueue vertex
//    Return result array
Graph.prototype.bfs = function (start) {
  const queue = [start]; 
  const result = [];
  const visited = {};
  visited[start] = true; //boolean array that initialises start node as true
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);//pushes vertices into the queue(enqueuing)
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};
