/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     const sortedNums = nums.map((el, idx) => [idx, el]).sort((a,b)=>{
            return a[1] - b[1];
        })
        
        let [p1, p2] = [0, nums.length-1];

        while(p1<p2){
            let curr = sortedNums[p1][1] + sortedNums[p2][1];

            if(curr < target) p1++;
            else if (curr > target) p2--;
            else return [sortedNums[p1][0], sortedNums[p2][0]];

        }

};