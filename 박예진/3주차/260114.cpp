//https://school.programmers.co.kr/learn/courses/30/lessons/17686

#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

struct File {
    int idx;
    string head;
    int number;
};

struct cmp {
    bool operator()(const File &f1, const File &f2) {
        if (f1.head != f2.head) return f1.head < f2.head;
        else if (f1.number != f2.number) return f1.number < f2.number;
        else return f1.idx < f2.idx;
    }
};

vector<File> v;

vector<string> solution(vector<string> files) {
    vector<string> answer;
    
    for(int i = 0; i < files.size(); i++) {
        string head = "";
        int idx = 0;
        for(int j = 0; j < files[i].size(); j++){
            if ('0' <= files[i][j] && files[i][j] <= '9') {
                idx = j;
                break;
            }
            head += tolower(files[i][j]);
        }
        
        string number = "";
        for(int j = idx; j < files.size(); j++){
            if (!('0' <= files[i][j] && files[i][j] <= '9')) {
                idx = j;
                break;
            }
            number += files[i][j];
        }
        
        File f;
        f.idx = i;
        f.head = head;
        f.number = stoi(number);
        
        v.push_back(f);
    }
    
    sort(v.begin(), v.end(), cmp());
    
    for(int i = 0; i < v.size(); i++){
        answer.push_back(files[v[i].idx]);
    }
    
    return answer;
}