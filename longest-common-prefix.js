/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

var longestCommonPrefix = function(strs) {
    // create a var to store common prefix letters
    let prefix = "";

    // iterate through the first idx of the arr to compare against the rest
    for (let i = 0; i < strs[0].length; i++) {
        // iterate through the rest of the arr to compare against the first
        for (let j = 1; j < strs.length; j++) {
            // if a mismatch is found immediately end the function
            if (strs[0][i] != strs[j][i]) 
                return prefix
        }
        // if we complete iterating through the rest of the arr,
        // add the letter to our var before moving onto the next idx
        prefix += strs[0][i]
    }
    
    // if all strs within the arr are the same
    return prefix
}