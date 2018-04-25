export const gameStatus = board => {
  const isWin = symbol => {
    // rows
    const isRowWin =
      board[0].every(cell => cell === symbol) ||
      board[1].every(cell => cell === symbol) ||
      board[2].every(cell => cell === symbol);
    // cols
    const isColWin =
      (board[0][0] === symbol && board[1][0] === symbol && board[2][0] === symbol) ||
      (board[0][1] === symbol && board[1][1] === symbol && board[2][1] === symbol) ||
      (board[0][2] === symbol && board[1][2] === symbol && board[2][2] === symbol);

    const isDiagonalWin =
      (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
      (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol);

    return isRowWin || isColWin || isDiagonalWin;
  };

  const isTie = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  };

  if (isWin('X')) {
    return 'X';
  }
  if (isWin('O')) {
    return 'O';
  }
  if (isTie()) {
    return '-';
  }
};
