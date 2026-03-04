/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const obj ={
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }

    const ans = [];
    const bkArr = []
    const bk = (digitCount) =>{
        if(digitCount === digits.length){
            ans.push(bkArr.join(""))
            return
        }
        for(let i = 0 ; i< obj[digits[digitCount]].length;i++) {
            bkArr[digitCount] = obj[digits[digitCount]][i]
            bk(digitCount+1)
        }
    }
    for(let i = 0 ;  i< obj[digits[0]].length; i++ ){
        bkArr[0] = obj[digits[0]][i]
        bk(1)
 
    }
   return ans
};

