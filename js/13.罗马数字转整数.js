/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const ROMAN_NUMREALS = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    };
    let sum = 0;
    for(let i = s.length-1;i>=0;i--){
      let current = ROMAN_NUMREALS[s[i]],pre = ROMAN_NUMREALS[s[i+1]];
      if(pre&&current<pre){
        sum -= current;
      }else{
        sum += current;
      }
    }
    return sum;
};

console.log(romanToInt("IX"))



