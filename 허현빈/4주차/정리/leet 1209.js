/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack =[];
    for(let i = 0 ; i< s.length; i ++){
        if(!stack.length){
            stack.push([s[i], 1])
        }else{
            const val = stack[stack.length-1]
            if(val[0] === s[i]){
                if(val[1] === k-1){
                    stack.splice(-(k-1))
                }else{ 
                    stack.push([s[i], val[1]+1])
                }
            }else{
                stack.push([s[i],1])
            }
        }
    }
    const ans = stack.map((e) => e[0]).join('')
    return ans
};

/**
 * 단순 스택 문제 어려울거 없음
 * 시간 복잡도 O(n) 각 요소는 한번씩만 push/pop됨
 * 공간 복잡도 O(2n) -> O(n) 
 */