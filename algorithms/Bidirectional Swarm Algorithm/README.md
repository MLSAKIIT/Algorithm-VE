**Bidirectional search** is a graph search where unlike Breadth First search and Depth First Search, the search begins simultaneously from Source vertex and Goal vertex and ends when the two searches meet somewhere in between in the graph. This is thus especially used for getting results in a fraction of the time taken by both DFS and FS searches. The search from the initial node is forward search while that from the goal node is backwards. It is also based on heuristic search meaning finding the shortest path to goal optimally.

**Bidirectional Search Algorithm Steps:**
**Step 1:** Say, A is the initial node and O is the goal node, and H is the intersection node.

**Step 2:** We will start searching simultaneously from start to goal node and backward from goal to start node.

**Step 3:** Whenever the forward search and backward search intersect at one node, then the searching stops.

**Advantages:**
1. One of the main advantages of bidirectional searches is the speed at which we get the desired results.
2. It drastically reduces the time taken by the search by having simultaneous searches.
3. It also saves resources for users as it requires less memory capacity to store all the searches.

**Disadvantages:**
1. The fundamental issue with bidirectional search is that the user should be aware of the goal state to use bidirectional search and thereby to decrease its use cases drastically.
2. The implementation is another challenge as additional code and instructions are needed to implement this algorithm, and also care has to be taken as each node and step to implement such searches.
3. The algorithm must be robust enough to understand the intersection when the search should come to an end or else there’s a possibility of an infinite loop.
4. It is also not possible to search backwards through all states.