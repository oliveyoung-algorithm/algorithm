class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        stack<int> s; // idx
        int n = temperatures.size();
        vector<int> ans(n, 0);

        for(int i = 0; i < temperatures.size(); i++){
            while(!s.empty() && temperatures[s.top()] < temperatures[i]) {
                int prev = s.top();
                s.pop();
                ans[prev] = i - prev;
            } 
            s.push(i);
        }
        return ans;
    }
};
