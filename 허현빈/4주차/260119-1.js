/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for(let i = 0 ; i < s.length; i++){
        let count = 0;
        const set = new Set()   
        for(let j = i; j < s.length; j++){
            if(set.has(s[j])){
                break;
            }else{
                set.add(s[j])
                count++
            }
        }
        if(count > max) {max = count}
    }
    return max
};