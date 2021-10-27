BFS Algorithm:-

- BFS is a traversing algorithm where we start traversing from a selected source node layerwise by exploring the neighboring nodes.

- The data structure used in BFS is a queue and a graph. The algorithm makes sure that every node is visited not more than once.

BFS follows the following 4 steps:

1. Begin the search algorithm, by knowing the key which is to be searched. Once the key/element to be searched is decided the searching begins with the root (source) first.
2. Visit the contiguous unvisited vertex. Mark it as visited. Display it (if needed). If this is the required key, stop. Else, add it in a queue.
3. On the off chance that no neighboring vertex is discovered, expel the first vertex from the Queue.
4. Repeat step 2 and 3 until the queue is empty.

The above algorithm is a search algorithm that identifies whether a node exists in the graph. We can convert the algorithm to traversal algorithm to find all the reachable nodes from a given node.