/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const brackets = {'[' : ']', '(' : ')','{' : '}'};
        const stack = [];
        for(const el of s){
            if(brackets[el]){
                stack.push(el);
                continue;
            }
            const tail = stack[stack.length-1];
            if(!tail) return false;
            if(brackets[tail] === el) stack.pop();
            else stack.push(el);
        }

        return stack.length == 0


    
};