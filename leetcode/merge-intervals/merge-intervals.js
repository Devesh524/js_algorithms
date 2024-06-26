// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
//
//
//
//   Example 1:
//
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
//   Example 2:
//
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
//
//
//   Constraints:
//
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

// time complexity: O(nlogn);
// space complexity: O(n);
const mergeIntervals = (intervals) => {
  const n = intervals.length;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < n; i++) {
    const [start, end] = intervals[i];
    if (result.length === 0 || result[result.length - 1][1] < start) {
      result.push([start, end]);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        end,
      );
    }
  }

  return result;
};

const result = mergeIntervals([
  [1, 4],
  [0, 0],
]);
console.log(result); // [[1,6],[8,10],[15,18]]
