/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const val = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }

    let ans = 0;
    for(let i = 0; i < s.length ; i ++){
        if(s[i] === "I"){
            if(s[i+1] === "V"){
                ans += 4
                i++
                continue
            }else if(s[i+1] === "X"){
                ans += 9
                i++
                continue
            }
        }else if(s[i] === "X"){
                if(s[i+1] === "L"){
                    ans+= 40
                    i++
                    continue

                }else if(s[i+1] === "C"){
                    ans+= 90
                    i++
                    continue
                }

        }else if(s[i] === "C"){
            if(s[i+1] === "D"){
                ans+=400
                i++
                continue
            }else if(s[i+1] ==="M"){
                ans += 900
                i++
                continue
            }
        }

         ans += val[s[i]]
    }
    return ans
};