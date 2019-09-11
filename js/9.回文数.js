/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.02%)
 * Total Accepted:    85.5K
 * Total Submissions: 152.6K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let reverseX = Math.abs(x).toString().split('').reverse().join('');
//     if(x<0){
//       reverseX = -reverseX;
//     }
//     if(x==reverseX){
//       return true;
//     }else{
//       return false;
//     }
// };
var isPalindrome = function(x) {
  if(x<0){
    return false;
  }
  let a;
  let y = x;
  let m = 0;
  while(y!=0){
    a = y % 10;// e.g. 101 % 10 = 1 , 99 % 10 = 9 , 72 % 10 = 2
    y = y / 10;// e.g. 101 / 10 = 10 ,99 / 10 = 9, 72 / 10 = 7
    if(m>2**15){
      return false;
    }
    m = m * 10 + a;
  }
  if (m == x)
    return true;    
  else
    return false;  
}
console.log(isPalindrome(-1123)) 
// a = 3627%10 7;
// y = 3627/10 362;
// m = 0+7;

// a = 362%10 2;
// y = 362/10 36;
// m = 7*10 +2 = 72;

// a = 36%10 6;
// y = 36/10 3;
// m = 72*10+6 = 726;

// a = 3%10 3;
// y = 3/10 0;
// m = 726*10+3 = 7263;
