export function dfs_bfs(nodes, startNode, finishNode, name) {
  //list of list, node obj
  if (!startNode || !finishNode || startNode.id === finishNode.id) {
    return [];
  }

  let structure = [startNode];

  let exploredNodes = {};
  exploredNodes[startNode.id] = true;

  const visitedNodesInOrder = [];

  while (structure.length) {
    let currentNode = name === "bfs" ? structure.shift() : structure.pop();

    if (currentNode.isWall) continue;

    visitedNodesInOrder.push(currentNode);
    if (name === "dfs") exploredNodes[currentNode.id] = true;
    // currentNode.isVisited = true;

    if (currentNode.id === finishNode.id) {
      return visitedNodesInOrder;
    }

    let currentNeighbors = getNeighbors(currentNode, nodes, name);

    currentNeighbors.forEach((neighbor) => {
      if (!exploredNodes[neighbor.id]) {
        if (name === "bfs") {
          exploredNodes[neighbor.id] = true;
        }
        nodes[neighbor.row][neighbor.col].previousNode = currentNode;
        structure.push(neighbor);
      }
    });
  }
  return [];
}

function getNeighbors(currentNode, nodes, name) {
  let row = currentNode.row;
  let col = currentNode.col;

  const neighbors = [];

  if (row > 0) {
    if (name === "bfs") {
      neighbors.push(nodes[row - 1][col]);
    } else {
      neighbors.unshift(nodes[row - 1][col]);
    }
  }

  if (row < nodes.length - 1) {
    if (name === "bfs") {
      neighbors.push(nodes[row + 1][col]);
    } else {
      neighbors.unshift(nodes[row + 1][col]);
    }
  }

  if (col > 0) {
    if (name === "bfs") {
      neighbors.push(nodes[row][col - 1]);
    } else {
      neighbors.unshift(nodes[row][col - 1]);
    }
  }

  if (col < nodes[0].length - 1) {
    if (name === "bfs") {
      neighbors.push(nodes[row][col + 1]);
    } else {
      neighbors.unshift(nodes[row][col + 1]);
    }
  }

  return neighbors;
}

export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
