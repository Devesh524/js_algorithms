// 48. Rotate Image
// Medium
// Topics
// Companies
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
//
//   You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

//   Example 1:
//
//
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:
//
//
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//
//
// Constraints:
//
//   n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

// time complexity: O(n^2);
// space complexity: O(n^2);
const rotate = (matrix) => {
  const n = matrix.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j] = result[j] || [];
      result[j][n - i - 1] = matrix[i][j];
    }
  }
  return result;
};

// time complexity: O(n^2);
// space complexity: O(1);
/**
 * Rotates the given matrix in place.
 *
 * @param {number[][]} matrix - The matrix to be rotated.
 * @returns {number[][]} - The rotated matrix.
 */
/**
 * Rotates a square matrix in place by 90 degrees clockwise.
 *
 * @param {number[][]} matrix - The square matrix to rotate.
 * @returns {number[][]} - The rotated matrix.
 */
const rotateInPlace = (matrix) => {
  const n = matrix.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
};

const result = rotateInPlace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(result); // [[7,4,1],[8,5,2],[9,6,3]]
