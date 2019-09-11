/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//      let arr = []
//      nums= [...new Set(nums)];
//      for (let i=0;i<nums.length;i++){
//       for(let j=i++;j<nums.length;j++){
//         if(nums[i] + nums[j]==target){
//           arr.push(i);
//           arr.push(j);
//         }
//       }
//     }
//     return arr;
// };
// var twoSum = function(nums, target) {
//   var ret = [];
//   var exist = {};
//   for(var i=0;i<nums.length;i++){
//     if(typeof(exist[target-nums[i]])!=='undefined'){
//       ret.push(exist[target-nums[i]]);
//       ret.push(i+1);

//     }
//     exist[nums[i]] = i+1;
//   }
//   return ret;
// }
var twoSum = function(nums, target) {
  const map = {};
  const len = nums.length;
  map[target - nums[0]] = 0;
  for (let i = 1; i < len; i++) {
      const n = nums[i];
      if (n in map) return [map[n], i];
      map[target-n] = i;
  }
}
let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums,target))
