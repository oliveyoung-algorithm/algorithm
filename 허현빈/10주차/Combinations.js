/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const bkArr = []
    const ans = []
    
    const bk = (nk, start) =>{
        if (nk === k) {
            ans.push([...bkArr])
            return
        }
        for(let i = start ; i <= n; i++ ){
            bkArr[nk] = i
            bk(nk+1, i+1)
        }
    }

    bk(0,1)
   return ans
};