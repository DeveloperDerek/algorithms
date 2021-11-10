/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:
Input: nums = [1,3,5,6], target = 0
Output: 0

Example 5:
Input: nums = [1], target = 0
Output: 0

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

var searchInsert = function(nums, target) {
    // iterate through arr
    for (let i = 0; i < nums.length; i++) {
        // if nums[i] is greater than or equal to target
        if (nums[i] >= target)
            // the target can slide in the slot of the idx since the arr is sorted
            return i
    }

    // if the loop finishes
    // the target is the largest element in the arr
    // return the idx that the target would be placed
    return nums.length; 
}