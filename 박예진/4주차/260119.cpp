class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> m; // num, idx

        for(int i = 0; i < nums.size(); i++){
          int need = target - nums[i];
          if (m.count(need)) {
            return {i, m[need]};
          }
          m[nums[i]] = i;
        }

        return {};
    }
};