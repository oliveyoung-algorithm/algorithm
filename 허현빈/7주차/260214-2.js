/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(n1) {
    const numStr = n1.toString();
    const len = numStr.length;
    
    const map = new Map([
        [1, "I"], [5, "V"], [10, "X"], 
        [50, "L"], [100, "C"], [500, "D"], [1000, "M"]
    ]);

    let ans = "";

    for (let i = 0; i < len; i++) {
        const val = parseInt(numStr[i]); 
        const power = Math.pow(10, len - 1 - i); 

        const one = map.get(power);          
        const five = map.get(power * 5);      
        const ten = map.get(power * 10);     

        if (val === 9) {
            ans += one + ten;
        } else if (val >= 5) {
            ans += five;
            for (let j = 0; j < val - 5; j++) {
                ans += one;
            }
        } else if (val === 4) {
            ans += one + five;
        } else {
            for (let j = 0; j < val; j++) {
                ans += one;
            }
        }
    }
    return ans;
};