# A* search algorithm using JavaScript

## Introduction

A* search algorithm is one of the popular techniques used in path finding and graph traversals.
Its also a part of Informed searching technique.

## Explanation

The whole universe of A* search technique revolves around the equation:
                     
#                              f(n) =  g(n) + h(n)
 
 where;     g(n) -> it refers to the actual cost with respect to time taken from the start node to the nth node.
    and,    h(n) -> it refers to the estimated cost with respect to the time taken from nth node to the goal.

## Coding in JavaScript

First we needed to create a 2-D Array () that can store information for every spot in the grid. Then we created a function **function spot()** to create an object to store the information in the form of actual cost and the estimated cost to reach to the goal.

Then we created two arrays namely **OpenSet** and **ClosedSet** in which at the beginning the OpenSet stores the Start node. We initialised the start node to be the corner left element of the grid i.e; [0][0] .
Then we created another function named **Show** to display each spot in the grid. Then to give a perfect width to each spot in the grid we created variables ( var w,h ;) and initialised w as "width/cols" and h as "height/rows".

Then we created function **Draw** and initialised the lowest index (the record keeper) namely "winner" to be the minimum (0). The main idea here is to keep the **f** value to be the lowest. The loop keeps on moving untill the f value (winner) equals end, then we are done with the loop. This shows that now we are not left with any element in the OpenSet to evaluate and hence we are "DONE!" . 

Next, we created a function **removeFromArray** to remove an element that is not required in the loop. For this we looped the array to start from backwards all the way down to zero.

Now we need to keep a check on the other nodes as well. For that we created another function named **addneighbours** to add some elements in the grid. To add neighbours right after adding the spots we created another for loop to let that happen simultaneously and we passed the grid as an argument to the addneighbours function as we want to add the neighbours in the same grid and not to any other space (or garbage address). 

As long as the closed set does not include the neighbour, we can traverse the path or in other words; change the value of g, by changing we mean the value of g is incremented by 1 .

Now, if the element is already in the OpenSet, we need to see if got to the element faster than earlier, this indeed is practiced to keep ensure we select the shortest path to reach to the goal. For this we created an object named 'temp' to ensure the above mentioned task.

Moving ahead, now it's time to create heuristics, so we created a function **heuristic** and passed two arguments in it; (neighbour, end) as heuristic (h) is the estimated cost from traversing from that point (neighbour) to the goal (end). 

## Conclusion

We have created a A* search algorithm to find the shortest and cheapest path to get from one point of a grid (also called Start) to another point ( or the Goal) in a comparatively less time.

_Coded By Aditya Singh with help from //TheCodingTrain and Wikipedia_