/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

var maxSubArray1 = function(nums) {
    // create a var to store largest sub arr
    let lrgest = nums[0];
    // create a var to compare against the largest var
    let test = nums[0];

    // iterate through arr
    for (let i = 0; i < nums.length; i++) {
        // create a temp var to add with the test var
        let temp = nums[i] + test;
        // compare the temp var against the current ele
        // if total increases, set the test var to the temp var
        // if total decreases, reset and set test to the current ele
        test = Math.max(temp, nums[i]);
        // compare the lrgest var to the test var
        lrgest = Math.max(test, lrgest);
    }

    return lrgest
}

// https://leetcode.com/problems/maximum-subarray/discuss/1449668/JS-faster-than-91.77-%2B-explanation
var maxSubArray2 = function(nums) {
    // at least one element in nums array
    let maxSum = nums[0];
    let curSum = maxSum;
    for (let i = 1; i < nums.length; i++) {
		// we are trying to find max sum, so there is no need to add next item to curSum if curSum < 0, because
		// 1) if item >= 0, then item is greater than curSum
		// 2) if item < 0 it will decrease curSum
        if (curSum < 0) {
            curSum = nums[i];
        } else {
            curSum += nums[i];
        }
        
        if (curSum > maxSum) {
            maxSum = curSum;
        }
    }
    
    return maxSum;
}