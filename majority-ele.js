/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

var majorityElement1 = function(nums) {
    // create an obj var to store counts of the nums
    let obj = {};

    // iterate through the arr to input counts of each ele
    for (let i = 0; i < nums.length; i++) {
        // if ele already counted in the obj increment by 1
        // if not set count to 1
        obj[nums[i]] ? obj[nums[i]] += 1 : obj[nums[i]] = 1;
        // if the count surpasses more than half the length of the arr return the ele
        if (obj[nums[i]] > nums.length/2) 
            return nums[i]
    }
}

var majorityElement2 = function(nums) {
    // create obj var to store number and count
    let storage = {
        number : nums[0],
        count: 1
    }

    for (let i = 1; i < nums.length; i++) {
        // if current number is stored increment by 1
        if (nums[i] == storage.number) {
            storage.count++
        // if not decrement the count
        } else {
            storage.count--;
            // if the count is negative then there are more tother elements than the current stored element
            // set the new majority as the stored number and set count to 1
            /*
                eg: nums = [2,2,1,1,1,2,2]
                the loop would look like this (number, count)
                2, 1
                2, 2
                2, 1
                2, 0
                2, -1 => 1, 1 // up until here (nums[0,5]) 2 was still the majority but this 3rd, 1, made 1 the majority
                1, 0
                1, -1 => 2, 1 // 1 lost majority here (nums[0,7] and 2 reclaims majority
                return 2;
            */
            storage.number = nums[i];
            storage.count = 1;
        }
    }
    // after iterating the majority should be stored
    return storage.number
}