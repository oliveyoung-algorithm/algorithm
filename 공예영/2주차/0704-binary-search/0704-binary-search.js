/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [front, end] = [0, nums.length-1];

        while(front <= end){
            let mid = Math.floor((front+end)/2);
            if(nums[mid] == target) return mid;

            if(nums[mid] < target) {
                front = mid+1;
            }
            else end = mid-1;
        }

        return -1;
};