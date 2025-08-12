class ChessBoard {
  constructor() {
    // knight moves
    this.moves = [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
    ];
    this.size = 8;
  }
  inBounds(x, y) {
    // Check if the position is inside board boundaries
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }
  neighbors(position) {
    let [x, y] = position; //get x and y coordinate of a position
    let neighbors = [];
    this.moves.forEach((move) => {
      // run through all moves and add them in neighbors array if they are inBounds
      let dx = move[0];
      let dy = move[1];

      let newX = x + dx;
      let newY = y + dy;

      if (this.inBounds(newX, newY)) {
        neighbors.push([newX, newY]);
      }
    });
    return neighbors;
  }
  knightMoves(start, end) {
    let [x, y] = start;
    let [x2, y2] = end;
    let queue = [[[x, y]]];

    const visited = Array.from({ length: this.size }, () =>
      Array(this.size).fill(false)
    ); // create a 2D array to represent moves that were already made
    visited[x][y] = true;
    while (queue.length > 0) {
      // get the path and the cell
      let currentPath = queue.shift();
      let current = currentPath[currentPath.length - 1];

      let currentNeighbors = this.neighbors(current);
      for (const neighbor of currentNeighbors) {
        let [dx, dy] = neighbor;
        if (dx == x2 && dy == y2) {
          return console.log(
            `You made it in ${currentPath.length} ${
              currentPath.length === 1 ? 'move' : 'moves'
            }. Here's your path: `,
            currentPath.concat([neighbor])
          );
        }
        if (!visited[dx][dy]) {
          visited[dx][dy] = true;
          queue.push([...currentPath, neighbor]); // add the new updated path with the neighbor cell
          console.log(queue); // log queue for a better visualization
        }
      }
    }
  }
}

let board = new ChessBoard();
board.knightMoves([3, 3], [4, 3]);
