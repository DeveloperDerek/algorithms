/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

var singleNumber1 = function(nums) {
    // create var to store obj
    let obj = {};

    // insert nums into obj
    for (let i = 0; i < nums.length; i++) {
        // if num already inserted set to 2
        // if not set to 1
        obj[nums[i]] ? obj[nums[i]] = 2 : obj[nums[i]] = 1
    }

    // iterate through obj to find value of 1
    for (const key in obj) {
        if (obj[key] == 1) {
            return key
        }
    }
}

var singleNumber2 = function(nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        // if num already inserted in obj delete key and value
        // if not insert it in the obj
        obj[nums[i]] ? delete obj[nums[i]] : obj[nums[i]] = 1
    }

    // after iterating there should only be 1 ele in the obj
    // return the key
    return Object.keys(obj)
}