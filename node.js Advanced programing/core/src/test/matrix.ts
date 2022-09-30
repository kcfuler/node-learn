function setZeroes(matrix: number[][]): void {
  // tag the zero first
  let tag = new Map<number, number>();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        tag.set(i, 0);
        tag.set(j, 0);
      }
    }
  }
  // refactor the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (tag.get(i) === 0 || tag.get(j) === 0) {
        matrix[i][j] = 0;
        console.log(matrix);
      }
    }
  }
}

setZeroes([
  [0, 0, 0, 5],
  [4, 3, 1, 4],
  [0, 1, 1, 4],
  [1, 2, 1, 3],
  [0, 0, 1, 1],
]);
