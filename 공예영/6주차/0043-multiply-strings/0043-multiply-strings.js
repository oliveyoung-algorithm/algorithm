/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    if (num1 === "0" || num2 === "0") return "0";

    const m = num1.length;
    const n = num2.length;

    const res = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = num1[i] * num2[j];
            
            const p1 = i + j;     // 십의 자리
            const p2 = i + j + 1; // 일의 자리 

            const sum = mul + res[p2];

            res[p2] = sum % 10;          
            res[p1] += Math.floor(sum / 10); 
        }
    }


    while (res[0] === 0) {
        res.shift();
    }

    return res.join('');
    
};