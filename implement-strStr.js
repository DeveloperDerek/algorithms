/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0

Constraints:
0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
*/
var strStr = function(haystack, needle) {
    let n = needle.length;
    let h = haystack.length;
    // if needle length is 0
    if (n == 0) return 0;
    // if haystack length is less than needle length
    if (h < n) return -1;

    for (let i = 0; i < h; i++) {
        // remove a slice from the haystack the length of the needle
        let slice = haystack.slice(i, i+n);
        if (slice == needle)
            return i
    }

    // if needle is not found
    return -1
}