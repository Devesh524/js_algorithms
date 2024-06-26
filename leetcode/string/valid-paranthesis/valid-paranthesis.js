// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//   An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//   Open brackets must be closed in the correct order.
//   Every close bracket has a corresponding open bracket of the same type.
//
//
//   Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
// Example 3:
//
// Input: s = "(]"
// Output: false
//
//
// Constraints:
//
//   1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const isValid = (s) => {
  const len = s.length;
  if (len % 2 !== 0) {
    return false;
  } else {
    const stack = [];
    const map = {
      '(': ')',
      '{': '}',
      '[': ']',
    };

    for (let i = 0; i < len; i++) {
      if (map[s[i]]) {
        stack.push(s[i]);
      } else {
        const last = stack.pop();
        if (s[i] !== map[last]) {
          return false;
        }
      }
    }
    return true;
  }
};

const result = isValid('()[]{}');
console.log(result); // true
