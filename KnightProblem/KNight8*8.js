function getKnightPos(board, r, c) {
    if (isValid(board, r, c)) {
      board[r][c] = "Start";
      if (isValid(board, r - 1, c + 2)) {
        board[r - 1][c + 2] = "Knight";
      }
      if (isValid(board, r + 1, c + 2)) {
        board[r + 1][c + 2] = "Knight";
      }
      if (isValid(board, r - 2, c + 1)) {
        board[r - 2][c + 1] = "Knight";
      }
      if (isValid(board, r + 2, c + 1)) {
        board[r + 2][c + 1] = "Knight";
      }
      if (isValid(board, r + 2, c - 1)) {
        board[r + 2][c - 1] = "Knight";
      }
      if (isValid(board, r - 2, c - 1)) {
        board[r - 2][c - 1] = "Knight";
      }
      if (isValid(board, r - 1, c - 2)) {
        board[r - 1][c - 2] = "Knight";
      }
      if (isValid(board, r + 1, c - 2)) {
        board[r + 1][c - 2] = "Knight";
      }
    }
  
    console.log(board);
  }
  
  function isValid(board, r, c) {
    if (r >= 0 && r < board.length && c >= 0 && c < board.length) {
      return true;
    }
    return false;
  }
  
  const board = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];
  
  getKnightPos(board, 3,3);
  