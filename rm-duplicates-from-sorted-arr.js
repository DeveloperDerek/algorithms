/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:
The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:
0 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/

var removeDuplicates1 = function(nums) {
    // if length of arr is 1 then return 1
    if (nums.length == 1) return 1

    // store a var to test for duplicates
    let checker = nums[0];

    // iterate through the arr starting after the first idx
    for (let i = 1; i < nums.length; i++) {
        // check if it is a duplicate
        if (checker == nums[i]) {
            // remove nums[i] from the arr
            nums.splice(i, 1);
            // the length of the arr is reduced by 1 so reduce i by 1 to offset
            i--;
        } else {
            // if there is not a duplicate set the checker to the new int
            checker = nums[i]
        }
    }

    // after removing the duplicates return the length of arr
    return nums.length;
}

var removeDuplicates2 = function(nums) {
    // if length of arr is 1 then return 1
    if (nums.length == 1) return 1

    // create a counter var
    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        // check for non-duplicates
        if (nums[k] != nums[i]) {
            // increase counter var
            // set the i idx as the non-duplicate
            nums[++k] = nums[i]
        }
    }

    // since arr is zero-based indexing we increase counter var by 1 to equal the total non-duplicate length
    return ++k
}