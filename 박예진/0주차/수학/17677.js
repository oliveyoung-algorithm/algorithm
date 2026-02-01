// 특수문자 버림
function isAlpha(alpha){
    if (('a' <= alpha && alpha <= 'z')||
       ('A' <= alpha && alpha <= 'Z')) return true;
    return false;
}

// 2글자씩 묶기
function makeMultiSet(str) {
    const arr = [];
    for(let i = 0; i < str.length - 1; i++){
        if (isAlpha(str[i]) && isAlpha(str[i + 1])) {
            arr.push((str[i] + str[i + 1]).toLowerCase());
        }
    }
    return arr;
}

// 배열 -> 빈도수 map
function makeCountMap(arr){
    const m = new Map();
    for(const a of arr){
        m.set(a, (m.get(a) || 0) + 1);
    }
    return m;
}

function solution(str1, str2) {
    var answer = 0;
    
    const arr1 = makeMultiSet(str1);
    const arr2 = makeMultiSet(str2);
    
    const map1 = makeCountMap(arr1);
    const map2 = makeCountMap(arr2);
    
    let intersection = 0; // 교집합
    let union = 0; // 합집합
    
    // 교집합
    for (const [key, value] of map1) {
        if (map2.has(key)) {
            intersection += Math.min(value, map2.get(key));
        }
    }

    // 합집합
    const keys = new Set([...map1.keys(), ...map2.keys()]);
    for (const key of keys) {
        const c1 = map1.get(key) || 0;
        const c2 = map2.get(key) || 0;
        union += Math.max(c1, c2);
    }
    
    // 자카드 유사도
    if (union === 0) return 65536;
    return Math.floor((intersection / union) * 65536);
    
    return answer;
}
