/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let ans = ''
    let max = 0
    const getLogestP = (start, end) =>{
        let start1 = start
        let end1 = end
        let temp = 0;
        while(1){
            if(start1 < 0) break;
            if(end > s.length) break;

            if(s[start1] === s[end1]){
                temp = end1 - start1+1
                 if(temp > max){
                    ans = s.substring(start1, end1+1)
                    max = temp
                }
                end1++;
                start1--;
            }else{
                break;
            }
        }
    }
    
    for(let i = 0; i < s.length; i++){
        getLogestP(i,i)
        getLogestP(i, i+1)
    }
    return ans
};