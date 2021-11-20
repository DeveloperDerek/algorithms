/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

var containsDuplicate = function(nums) {
    // create obj var to store inputs of nums
    let obj = {};
    
    // iterate through arr to input nums
    for (let i = 0; i < nums.length; i++) {
        // if already inputed increase count by 1
        // if not set count to 1
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        // if count is greater than 1 return true
        if (obj[nums[i]] > 1) return true
    }

    // if finished there are no duplicates
    return false
}