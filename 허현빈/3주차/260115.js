/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const bkArr = [];
    const ans = []

    const bk = (k) =>{
        const testVal = bkArr.join('')
       if (!s.startsWith(testVal)) return;

       if(testVal === s) {
        ans.push(bkArr.join(' '))
        return
       }
        for(let i = 0; i < wordDict.length; i ++ ){
            bkArr.push(wordDict[i])
            bk(k+1)
            bkArr.pop()
        }
    }
    bk(0)
    return ans
    
};