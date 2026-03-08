//https://www.acmicpc.net/problem/14267
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n, m;
int parent[100001];
int res[100001];
vector<vector<int>> graph;

void dfs(int n) {
    for(int i = 0; i < graph[n].size(); i++){
        int next = graph[n][i];
        res[next] += res[n];
        dfs(next);
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> n >> m;
    graph.resize(n + 1);

    int root = 1;
    for(int i = 1; i <= n; i++){
        cin >> parent[i];
        if(parent[i] == -1) root = i;
        else graph[parent[i]].push_back(i);
    }
    for(int i = 0; i < m; i++){
        int idx, w;
        cin >> idx >> w;
        res[idx] += w;
    }

    dfs(root);

    for(int i = 1; i <= n; i++){
        cout << res[i] << " ";
    }


    return 0;
}
