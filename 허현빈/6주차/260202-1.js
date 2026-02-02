/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
  
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i); 
    }
    
    for(let i = 0; i < nums.length; i++){
        const val = nums[i];
        const complement = target - val; 
        
        if(map.has(complement) && map.get(complement) !== i){
            return [i, map.get(complement)];
        }
    }
};