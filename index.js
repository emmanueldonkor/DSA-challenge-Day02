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
//Big O of n O(n) and space complexity of 0(n)



//Reverse Method
var rotate = function(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;

  function reverse(nums, start, end) {
    while (start < end) {
      let temporary = nums[start];
      nums[start] = nums[end];
      nums[end] = temporary;
      start++;
      end--;
    }
    return nums;
  }
}

// Big O of n O(n) and space complexity of 1 O(1)

