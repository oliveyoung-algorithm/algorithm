/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const stack = [];
    for(let i  = 0 ; i < s.length; i++){
        const val = s[i]
        if((val.charCodeAt() >= 'A'.charCodeAt() && val.charCodeAt() <= 'Z'.charCodeAt())){
            stack.push(String.fromCharCode(val.charCodeAt() + 'a'.charCodeAt() - 'A'.charCodeAt()))
        }else if((val.charCodeAt() >= 'a'.charCodeAt() && val.charCodeAt() <= 'z'.charCodeAt())){
            stack.push(val)   
        }else if(val.charCodeAt() >= '0'.charCodeAt() && val.charCodeAt() <= '9'.charCodeAt()){
            stack.push(val)
        }
    }
    if(stack.length %2 === 0){
        let start = (stack.length/2)-1
        let end = stack.length/2
        let flag = true
        while(true){
            if(stack[start] !== stack[end]){
                flag = false
                break;
            }
            start--
            end++
            if(start < 0 || end > stack.length) break
        }
        return flag
    }else{
        let start =Math.floor (stack.length/2)
        let end = Math.floor(stack.length/2 )
        let flag = true
        while(true){
            if(stack[start] !== stack[end]){
                flag = false
                break;
            }
            start--
            end++
            if(start < 0 || end > stack.length) break
        }
        return flag
    }
    
        
   
};