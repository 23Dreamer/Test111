/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //  'use strict'
   if(strs=='undefined'||strs.length==0) {return ''};
   return strs.reduce((pre,cur)=>{
     let i=0;
     while(pre[i]&&cur[i]&&pre[i]===cur[i])i++;
     return pre.slice(0,i);
   })
};
console.log(longestCommonPrefix(['plfill','plofill']))



