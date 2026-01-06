//https://www.acmicpc.net/problem/1865
#include <iostream>
#include <algorithm>
#include <vector>
#include <cstring>

using namespace std;

/*
    벨만포드 O(VE) 
    1. V - 1개만큼 모든 노드 간선 순회
    2. V에도 줄어들면 음수 사이클 존재
 */

struct Edge {
    int n, cost;
};

int N, M, W;
const long long INF = 1e12;

vector<long long> dist;
vector<vector<Edge>> graph;

bool bellmanford(){
    dist.assign(N + 1, INF);

    for(int k = 1; k <= N; k++){
        for(int i = 1; i <= N; i++){
            for(int j = 0; j < graph[i].size(); j++){
                int next = graph[i][j].n;
                int nextcost = graph[i][j].cost;

                if (dist[next] > dist[i] + nextcost) {
                    dist[next] = dist[i] + nextcost;
                    // N번째에도 값이 변경되면 음수 사이클 존재
                    if (k == N) return true;
                }
            }
        }
    }
    return false; 
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    int TC;
    cin >> TC;
    while(TC--) {
        cin >> N >> M >> W;
        int S, E, T;
        graph.resize(N + 1);
        for(int i = 0; i < M; i++){ // 무방향
            cin >> S >> E >> T;
            graph[S].push_back({E, T});
            graph[E].push_back({S, T});
        }
        for(int i = 0; i < W; i++){ // 방향
            cin >> S >> E >> T;
            graph[S].push_back({E, -T});
        }
        
        if (bellmanford()) cout << "YES\n";
        else cout << "NO\n";
        graph.clear();
    }
}