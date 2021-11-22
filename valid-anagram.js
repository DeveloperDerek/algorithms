/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

var isAnagram = function(s, t) {
    // not an anagram is lengths are not equal
    if (s.length != t.length) return false

    // create obj var
    let map = {};

    // iterate through first arr to input number of each letter in obj
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]] += 1 : map[s[i]] = 1
    }

    // iterate through second arr to check letter count for anagram
    for (let i = 0; i < t.length; i++) {
        // check if letter is in obj
        if (map[t[i]] > 0) {
            map[t[i]] -= 1
        } else {
            return false
        }
    }

    return true
}
