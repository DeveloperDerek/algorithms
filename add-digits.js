/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0

Constraints:
0 <= num <= 231 - 1

Follow up: Could you do it without any loop/recursion in O(1) runtime?
*/

var addDigits = function(num) {
    // create var to store return
    let sum = num;

    // initate while loop
    while (sum >= 10) {
        // split the number at each sig fig
        let strArr = sum.toString().split('');
        // reset sum to zero at the begining of each loop
        sum = 0;
        // iterate through arr and add digits
        for (let i = 0; i < strArr.length; i++) {
            // convert the str back to number before adding to sum
            sum += Number(strArr[i])
        }
    }

    return sum
}

// without loop/recursion in O(1) runtime
var addDigits2 = function(num) {
    // read upon digital root of a number to understand... https://brilliant.org/wiki/digital-root/
    if (num <= 9) return num

    return num - (Math.floor(num/9) * 9) || 9 
}