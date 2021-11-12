/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
*/

    /*
    After writing few steps, it becomes clear that there is fibonnaci sequence:
    1 => 1
    2 => 2
    3 => 3 // Same results until here so handled it in first if check
    4 => 5 // First special case which is sum of 2+3. For that set variables accordingly
    5 => 8
    6 => 13
    And so on.
    */

var climbStairs1 = function(n) {
    // if stairs are 3 steps or less return n
    if (n < 4) return n;

    // create var to store steps
    let firstSum = 2;
    let secondSum = 3;
    // create var to store total steps
    let total = firstSum + secondSum;

    // iterate through staircase starting at the third step
    for (let i = 4; i < n; i++) {
        firstSum = secondSum;
        secondSum = total;
        total = firstSum + secondSum;
    }

    return total
}

var climbStairs2 = function(n) {
    if (n <= 3) return n;

    // create arr to store fibonacci after n > 3
    let fibArr = [2,3];
    // create step counter var starting on 4th step
    let currStep = 4;
    // begin loop until reached nth step
    while (currStep <= n) {
        // create a var to store new fib
        let newSum = fibArr[0] + fibArr[1];
        // begin fib sequence
        fibArr[0] = fibArr[1];
        fibArr[1] = newSum;
        // increment step
        currStep++
    }
    //return second ele in fibArr for total possible steps
    return fibArr[1]
}