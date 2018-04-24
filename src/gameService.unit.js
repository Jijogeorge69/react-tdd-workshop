const { gameStatus } = require('./gameService');

test('X should win first row', () => {
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win second row', () => {
  const board = [['', '', ''], ['X', 'X', 'X'], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win third row', () => {
  const board = [['', '', ''], ['', '', ''], ['X', 'X', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win first col', () => {
  const board = [['X', '', ''], ['X', '', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win second col', () => {
  const board = [['', 'X', ''], ['', 'X', ''], ['', 'X', '']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win third col', () => {
  const board = [['', '', 'X'], ['', '', 'X'], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win left diagonal', () => {
  const board = [['X', '', ''], ['', 'X', ''], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('X should win right diagonal', () => {
  const board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('should be tie status', () => {
  const board = [['X', 'O', 'O'], ['O', 'X', 'X'], ['X', 'O', 'O']];
  expect(gameStatus(board)).toBe('-');
});
