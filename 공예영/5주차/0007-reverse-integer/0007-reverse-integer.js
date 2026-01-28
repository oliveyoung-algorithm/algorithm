/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let input = String(x).split("");
    let ans=""
    if(input[0] === '-'){
        input.shift();
        ans = "-" + input.reverse().join("");
    }
    else{
        ans = input.reverse().join("");
    }

    if (ans < -(2**31) || ans > (2**31 - 1)) return 0;

    return Number(ans);
};