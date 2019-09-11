/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length==0)return 0;

    const length = needle.length;
    let index = 0;

    while(index + length <= haystack.length){
        let str = haystack.slice(index,index + length);
        if(str == needle){
          return index;
        }
        index++;
    }
    return -1;
};
console.log('str',strStr('hello','e'));
