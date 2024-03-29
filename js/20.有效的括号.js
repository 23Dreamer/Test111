/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === null || s.length <= 0) return true;
  var cArr = s.split('');
  var stack = [];
  for (var c of cArr) {
      if (c === '[') stack.push(']');
      else if (c === '{') stack.push('}');
      else if (c === '(') stack.push(')');
      else if (stack.length === 0 || c !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};
console.log('is',isValid('{{}}'));

