/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        const ans = [];
        const isUsed = new Array(ans.length).fill(false);

        strs.forEach((el,idx)=>{
            if(isUsed[idx]) return;

            const temp = [el];
            for(let i=idx+1;i<strs.length;i++){
                if(isAnagram(el,strs[i])){
                    temp.push(strs[i]);
                    isUsed[i] = true;
                }
            }
            ans.push(temp);
        })

        return ans;

        function isAnagram(word1, word2){
            if(word1.length != word2.length) return false;

            const charMap = new Map();
            for(let el of word1){
                charMap.set(el, (charMap.get(el) ?? 0) +1);
            }
            for(let el of word2){
                if(!charMap.get(el)) return false;

                charMap.set(el, charMap.get(el)-1);
            }
            return true;
        }
};