/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
        const result =[];

        function dfs(idx, path){
            result.push([...path]);
            for(let i= idx; i< nums.length;i++){
                path.push(nums[i]);
                dfs(i+1,path);
                path.pop();

            }
        }
        dfs(0,[]);
        
        return result;
     
    
};