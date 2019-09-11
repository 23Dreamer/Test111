/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     if(nums.indexOf(target)>-1)return nums.indexOf(target);
//     let index = 0;
//     for(index;index<nums.length;index++){
//         if(nums[index] < target && nums[index+2] > target){
//          return index+1;
//         }
//         if(nums[nums.length-1]<target){
//           return nums.length
//         }
//         if(nums[0]>target){
//           return 0;
//         }
//     }
// };

var searchInsert = function(nums, target) {
  for (let i=0; i<=nums.length;) {
      if (target == nums[i]) {
          return i;
          break;
      } else if (target !== nums[i] && target > nums[i]) {
          i++;
      } else {
          return i;
      }
  }
};

console.log(searchInsert([1,3,5,6], 2)); 
