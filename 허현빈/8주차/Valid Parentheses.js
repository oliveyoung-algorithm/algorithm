/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = [];
    for(let i = 0 ; i < s.length; i++){
        const ch = s[i]

        if(ch === ")"){
            if(stack[stack.length-1] === "("){ stack.pop()
            continue}
        }else if(ch === "}"){
            if(stack[stack.length-1] === "{") {stack.pop()
            continue}
        }else if(ch === "]"){
            if(stack[stack.length-1] === "[") {
                stack.pop()
                continue
            }
        }
            stack.push(ch)
    }
    return stack.length === 0 ?  true : false
};