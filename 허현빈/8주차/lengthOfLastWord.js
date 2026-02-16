/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let stack = [];
    const newS = s.trim()
    for(let i = 0; i <newS.length; i++ ){
        const val = newS[i]
        if(val === ' '){
            stack = []
        }else{
            stack.push(val)
        }
    }
    return stack.length
    
};