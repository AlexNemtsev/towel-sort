
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];

  if (matrix === [] || matrix === undefined) {
    return arr;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let curIndex = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
      arr.push(matrix[i][curIndex]);
    }
  }

  return arr;
}
