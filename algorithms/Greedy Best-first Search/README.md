**Greedy best-first search algorithm** always selects the path which appears best at that moment. It is the combination of depth-first search and breadth-first search algorithms. It uses the heuristic function and search. Best-first search allows us to take the advantages of both algorithms. With the help of best-first search, at each step, we can choose the most promising node. In the best first search algorithm, we expand the node which is closest to the goal node and the closest cost is estimated by heuristic function, i.e.

**f(n)= g(n).**
Were, h(n)= estimated cost from node n to the goal.

The greedy best first algorithm is implemented by the priority queue.

**Best first search algorithm:**
**Step 1:** Place the starting node into the OPEN list.
**Step 2:** If the OPEN list is empty, Stop and return failure.
**Step 3:** Remove the node n, from the OPEN list which has the lowest value of h(n), and places it in the CLOSED list.
**Step 4:** Expand the node n, and generate the successors of node n.
**Step 5:** Check each successor of node n, and find whether any node is a goal node or not. If any successor node is goal node, then return success and terminate the search, else proceed to Step 6.
**Step 6:** For each successor node, algorithm checks for evaluation function f(n), and then check if the node has been in either OPEN or CLOSED list. If the node has not been in both list, then add it to the OPEN list.
**Step 7:** Return to Step 2.

**Advantages:**
Best first search can switch between BFS and DFS by gaining the advantages of both the algorithms.
This algorithm is more efficient than BFS and DFS algorithms.

**Disadvantages:**
It can behave as an unguided depth-first search in the worst case scenario.
It can get stuck in a loop as DFS.
This algorithm is not optimal.

**In this following javascript code:**
1. The Heuristics cost is calculated by finding the distance between two points using Manhatten distance formula.
2. There are two lists working simultaneously to check if the current node in the loop is already explored or not.
