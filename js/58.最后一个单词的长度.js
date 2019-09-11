/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length===0)return 0;
    let str = s.split(' ');
    const len = str.length;
    return str[len-1];
};

lengthOfLastWord("Hello World");

