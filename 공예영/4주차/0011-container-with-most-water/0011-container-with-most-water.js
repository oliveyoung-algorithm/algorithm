/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let best = 0;

    while (l < r) {
        const h = Math.min(height[l], height[r]);
        const w = r - l;
        best = Math.max(best, h * w);

        if (height[l] < height[r]) l++;
         else  r--;
        
     }

     return best;
};