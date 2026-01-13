/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    const stack = [[heights[heights.length-1], 0]]
    const ans = [0]
    for(let i = heights.length-2; i >= 0; i--){
        const hValue = heights[i]
        let count = 0;
        for(let j = stack.length-1; j >= 0 ; j--){
            const sValue = stack[j]
            if(sValue[0] > heights[i]){
                count++
                break;
            }else{
                count++
                stack.pop()
            }
        }
        stack.push([heights[i], count])
        ans.push(count)
    }
    ans.reverse()
    return ans
};