/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const string = s.split('')
    console.log(string)
    const stack = []
    for(let i = 0 ; i < string.length; i ++){
        if(stack.length){
            if(stack[stack.length-1][0] === s[i]){
                if(stack[stack.length-1][1] +1 === k){
                    stack.splice(-k+1)
                }else{
                    stack.push([s[i], stack[stack.length-1][1] +1])
                }
            }else{
                stack.push([s[i] , 1])
            }
        }else{
            stack.push([s[i],1])
        }
    }
    const ans =[]
    for(let i = 0 ; i < stack.length; i++){
        ans.push(stack[i][0])
    }
    return ans.join('')
};