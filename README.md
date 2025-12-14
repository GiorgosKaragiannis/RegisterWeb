# RegisterWeb
This project is a full-stack web application that solves the Register Problem. It uses Artificial Intelligence to find the optimal sequence of mathematical operations that transform a starting number into a target number with the minimum possible cost.

HOW IT WORKS AND TECHNOLOGIES USED The system is based on a Client-Server architecture:

Backend (Java): The core logic is written in Java (RegisterWeb.java file). It operates as an HTTP server listening on port 8000. It manages requests, executes the search algorithms, and returns the solution.

Frontend (HTML/CSS/JS): The user interface consists of index.html, style.css, and script.js files. It allows the user to input data, locks the fields during calculation, and visualizes the solution steps by communicating with the server.

PROBLEM RULES: The goal is to transition from a Start Number to a Target Number using specific allowed operations, which have specific computational costs as defined by the problem statement:

Increase by 1 (Cost: 2)

Decrease by 1 (Cost: 2)

Double (Cost: depends on value)

Half (Cost: depends on value)

Square (Cost: depends on value)

Square Root (Only if the number is a perfect square)

There are safety constraints, such as a maximum value limit (1,000,000,000) and an execution time limit (60 seconds).

ALGORITHM FUNCTIONALITY: The application offers four search methods:

A* (A-Star): The most efficient and recommended algorithm. It combines the actual path cost so far with a heuristic estimate (distance to target) to guarantee finding the solution with the lowest total cost.

Best-First Search: A "greedy" algorithm that always selects the move that seems to bring the number closer to the target. It is very fast but does not guarantee the cheapest solution.

Breadth-First Search (BFS): Explores all possible states layer by layer (breadth-wise). It guarantees finding the solution with the fewest steps (number of operations), but ignores operation costs, so it might find a more expensive solution.

Depth-First Search (DFS): Explores each path in depth before backtracking. It uses a cycle avoidance mechanism but is less suitable for this problem as it may delay or time out in deep searches.
