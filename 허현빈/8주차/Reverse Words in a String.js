/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const string = s.trim()
    const arr = string.split(" ")
    let ans =""
    for(let i = arr.length-1; i >=0 ;i--){
        if(arr[i] === "") continue
        ans += arr[i] + " "
    }
    return ans.trim()
};