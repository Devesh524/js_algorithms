// 503. Next Greater Element II
// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.
//
//   The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.
//
//
//
// Example 1:
//
// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:
//
// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]
//
//
// Constraints:
//
//   1 <= nums.length <= 104
//   -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function (nums) {
  const len = nums.length;
  const result = new Array(len).fill(-1);
  const stack = [];

  // We need to iterate through the array twice to find the next greater element
  for (let i = 0; i < len * 2; i++) {
    // We need to use modulo to get the index of the element in the original array
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % len]) {
      // If the element at the top of the stack is less than the current element, we update the result array
      result[stack.pop()] = nums[i % len];
    }
    // We push the index of the current element to the stack
    stack.push(i % len);
  }

  return result;
};

// Test case 1
const nums1 = [1, 2, 1];

console.log(nextGreaterElements(nums1)); // [2, -1, 2]
