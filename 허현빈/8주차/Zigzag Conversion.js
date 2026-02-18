/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arr = Array.from({ length: numRows }, () => [])

    let idx = 0;
    let flag = true
    for(let i = 0 ; i < s.length ; i++){
        arr[idx].push(s[i])
        if(flag === true) {idx++}
        else {idx--}

        if(idx >= numRows){
            flag = false
            idx -= 2
            if(idx < 0) idx = 0
        }
        if(idx === 0){
            flag = true
        }
    }
    let ans = ""
    for(let i = 0 ; i < numRows; i++){
        ans += arr[i].join("")
    }
    return ans 
};