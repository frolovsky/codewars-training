const validSolution = (board) => {
  const validStr = '123456789';
  const boardCopy = JSON.parse(JSON.stringify(board));
  const boardLength = board.length;
  const cubes = [];
  const cubesFilled = [];

  const compareWithValidString = (arr) => arr.sort().join('') === validStr;

  for (let i = 0; i < boardLength; i++) {
    if (!compareWithValidString(boardCopy[i])) {
      return false;
    }
    const column = [];
    for (let j = 0; j < boardLength; j++) {
      column.push(board[j][i]);
    }
    if (!compareWithValidString(column)) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    cubes.push(JSON.parse(JSON.stringify(board)).splice(3 * i, 3));
  }
  for (let i = 0; i < cubes.length; i++) {
    if (!cubesFilled[i]) cubesFilled[i] = [];
    for (let j = 0; j < cubes[i].length; j++) {
      for (let g = 0; g < boardLength; g++) {
        const column = Math.floor(g / 3);
        if(!cubesFilled[i][column]) cubesFilled[i][column] = [];
        cubesFilled[i][column].push(cubes[i][j][g]);
      }
    }
    for (let j = 0; j < cubesFilled[i].length; j++) {
      if (!compareWithValidString(cubesFilled[i][j])) {
        return false;
      }
    }
  }

  return true;
}

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]));

// console.log(
//   validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [2, 3, 1, 5, 6, 4, 8, 9, 7],
//     [3, 1, 2, 6, 4, 5, 9, 7, 8],
//     [4, 5, 6, 7, 8, 9, 1, 2, 3],
//     [5, 6, 4, 8, 9, 7, 2, 3, 1],
//     [6, 4, 5, 9, 7, 8, 3, 1, 2],
//     [7, 8, 9, 1, 2, 3, 4, 5, 6],
//     [8, 9, 7, 2, 3, 1, 5, 6, 4],
//     [9, 7, 8, 3, 1, 2, 6, 4, 5]])
// );
//
// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [2, 3, 1, 5, 6, 4, 8, 9, 7],
// [3, 1, 2, 6, 4, 5, 9, 7, 8],
// [4, 5, 6, 7, 8, 9, 1, 2, 3],
// [5, 6, 4, 8, 9, 7, 2, 3, 1],
// [6, 4, 5, 9, 7, 8, 3, 1, 2],
// [7, 8, 9, 1, 2, 3, 4, 5, 6],
// [8, 9, 7, 2, 3, 1, 5, 6, 4],
// [9, 7, 8, 3, 1, 2, 6, 4, 5]

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//       [6, 7, 2, 1, 9, 5, 3, 4, 8],
//       [1, 9, 8, 3, 4, 2, 5, 6, 7],
//       [8, 5, 9, 7, 6, 1, 4, 2, 3],
//       [4, 2, 6, 8, 5, 3, 7, 9, 1],
//       [7, 1, 3, 9, 2, 4, 8, 5, 6],
//       [9, 6, 1, 5, 3, 7, 2, 8, 4],
//       [2, 8, 7, 4, 1, 9, 6, 3, 5],
//       [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);
//
//     Test.assertEquals(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//       [6, 7, 2, 1, 9, 0, 3, 4, 8],
//       [1, 0, 0, 3, 4, 2, 5, 6, 0],
//       [8, 5, 9, 7, 6, 1, 0, 2, 0],
//       [4, 2, 6, 8, 5, 3, 7, 9, 1],
//       [7, 1, 3, 9, 2, 4, 8, 5, 6],
//       [9, 0, 1, 5, 3, 7, 2, 1, 4],
//       [2, 8, 7, 4, 1, 9, 6, 3, 5],
//       [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);
//   });
// });
