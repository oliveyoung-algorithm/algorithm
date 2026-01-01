#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <cstring>

using namespace std;

int N, K, W;
int D[1001], res[1001];
int indegree[1001];

queue<int> q;
vector<vector<int>> graph;

void topologySort(int dest){
    // 진입차수 0인 것
    for(int i = 1; i <= N; i++){
        if(indegree[i] == 0){
            q.push(i);
            res[i] = D[i];
        }
    }

    while(!q.empty()) {
        int now = q.front();
        q.pop();

        for(int i = 0; i < graph[now].size(); i++){
            int next = graph[now][i];
            indegree[next]--;

            res[next] = max(res[next], res[now] + D[next]);

            if (indegree[next] == 0) q.push(next);
        }
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    int T;
    cin >> T;
    while(T--) {
        cin >> N >> K;
        for(int i = 1; i <= N; i++){
            cin >> D[i];
        }
        graph.resize(N + 1);
        for(int i = 0; i < K; i++){
            int u, v;
            cin >> u >> v;
            graph[u].push_back(v);
            indegree[v]++;
        }
        cin >> W;

        topologySort(W);
        cout << res[W] << "\n";

        memset(indegree, 0, sizeof(indegree));
        memset(res, 0, sizeof(res));
        graph.clear();
    }
}