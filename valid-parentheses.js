/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function(s) {
    // create an obj with the characters pairing the open sign as the key and the closing as the value
    let char = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    // create a var to store open chars
    let open = []

    for (let i = 0; i < s.length; i++) {
        // if a closing sign is found
        if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
            // check if the closing sign pairs with the last idx of the open arr
            if (char[open[open.length-1]] == s[i]) {
                // if it is a pair remove the last idx of the open arr
                open.pop();
            } else {
                // if no pair end the function
                return false
            }
        // if opening sign is found add it to the open arr
        } else {
            open.push(s[i])
        }
    }

    // if the open arr is empty it is a valid
    return open.length == 0 ? true : false
}