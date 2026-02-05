#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

map<string, int> m;
vector<int> v;

void combi(int n, int r, int depth, string str, int idx){
    if (depth == r) {
        string temp = "";
        for(auto i : v) {
            temp += str[i];
        }
        m[temp] += 1;
        return;
    }
    
    for(int i = idx; i < n; i++){
        v.push_back(i);
        combi(n, r, depth + 1, str, i + 1);
        v.pop_back();
    }
}

vector<string> solution(vector<string> orders, vector<int> course) {
    vector<string> answer;
    
    // order 정렬
    for(int i = 0; i < orders.size(); i++){
        sort(orders[i].begin(), orders[i].end());
    }
    
    vector<string> res;
    for(int i = 0; i < course.size(); i++){
        int r = course[i];
        
        // order 안에서 조합
        for(int j = 0; j < orders.size(); j++){
            int n = orders[j].size();
            combi(n, r, 0, orders[j], 0);
        }
        
        // 현재 메뉴 구성 개수에서 가장 value 큰 key
        int maxNum = 0;
        for(auto iter = m.begin(); iter != m.end(); iter++){
            string key = iter->first;
            int cnt = iter->second;
            if (cnt < 2) continue;

            if (cnt > maxNum) {
                maxNum = cnt;
                res.clear();
                res.push_back(key);
            } else if (cnt == maxNum) {
                res.push_back(key);
            }
        }
        
        // res 만큼 answer
        for(auto r : res){
            answer.push_back(r);
        }
        
        m.clear();
    }
    
    sort(answer.begin(), answer.end());
    // 중복제거
    answer.erase(unique(answer.begin(), answer.end()), answer.end());
    
    return answer;
}
