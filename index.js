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
    this.size = 8; //our chessboard is 8x8
  }
  inBounds(x, y) {
    return x > 0 && x < this.size && y > 0 && y < this.size;
  }
  neighbors(position) {
    let [x, y] = position;
    let neighbors = [];
    this.moves.forEach((move) => {
      let dx = move[0];
      let dy = move[1];

      let newX = x + dx;
      let newY = y + dy;

      if (this.inBounds(newX, newY)) {
        neighbors.push([newX, newY]);
      }
    });
    console.log(neighbors);
  }
  knightMoves(start, end) {
    // first is start, second is end
    // ( [3, 4] [2, 2]) => returns in  1 move and the path is [3, 4], [2, 2]
    let [x, y] = start;
    let [x2, y2] = end;
    let queue = [[x, y]];
    const visited = new Set([start.toString()]);
    console.log(visited);
    // while (queue.length > 0) {}
    console.log(start);
    console.log(end);
  }
}
//  BFS Method i used in BST
//  levelOrder(callback) {
//     if (!this.root) return [];
//     let queue = [this.root];
//     while (queue.length > 0) {
//       const current = queue.shift();
//       if (callback) {
//         callback(current);
//       } else {
//         throw new Error('Callback is required');
//       }
//       if (current.left) {
//         queue.push(current.left);
//       }
//       if (current.right) {
//         queue.push(current.right);
//       }
//     }
//     return;
//   }
let board = new ChessBoard();
board.knightMoves([3, 4], [2, 2]);
board.neighbors([3, 4]);
