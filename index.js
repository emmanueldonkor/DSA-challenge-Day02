/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  let copy = [len];
  for (let i = 0; i < len; i++) {
    copy[(i + k) % len] = nums[i];
  }
  for (let i = 0; i < len; i++) {
    nums[i] = copy[i];
  }
};
//Brute force