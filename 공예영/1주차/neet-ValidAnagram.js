class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const myMap = new Map();
        if(s.length != t.length) return false;

        [...s].forEach((el)=>{ myMap.set(el, (myMap.get(el) ?? 0) + 1)});

        for (const ch of t) {
            if(!myMap.get(ch)) return false;
            myMap.set(ch, myMap.get(ch)-1);
        }
        return true;
    }
}
