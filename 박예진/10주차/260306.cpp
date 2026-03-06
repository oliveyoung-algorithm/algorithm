//https://www.acmicpc.net/problem/16928
#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>

using namespace std;

/*
    사다리 타고 올라가기 (작 -> 큰)
    뱀 타고 내려가기 (큰 -> 작)
*/

struct Node {
    int x, y;
};

int N, M; // 사다리수, 뱀의수
bool visited[101];
vector<Node> ladders;
vector<Node> snails;

int bfs(int x) {
    queue<pair<int, int>> q; // node, cnt
    q.push({x, 0});
    visited[x] = true;

    while(!q.empty()) {
        pair<int, int> now = q.front();
        q.pop();

        if (now.first == 100) {
            return now.second;
        }

        for(int i = 1; i <= 6; i++){
            int next = now.first + i;
            
            // 사다리 타기
            for(auto ladder : ladders) {
                if (ladder.x == next) {
                    next = ladder.y;
                }
            }
            // 뱀 타기
            for(auto snail : snails) {
                if (snail.x == next) {
                    next = snail.y;
                }
            }

            if (next > 100) continue; // 범위 초과 시 스킵

            if (!visited[next]) {
                visited[next] = true;
                q.push({next, now.second + 1});
            }
        }
    }
    return -1;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N >> M;
    // 사다리 
    for(int i = 0; i < N; i++){
        int x, y;
        cin >> x >> y;
        ladders.push_back({x, y}); // x -> y
    }
    // 뱀
    for(int i = 0; i < M; i++){
        int u, v;
        cin >> u >> v;
        snails.push_back({u, v}); // u -> v
    }

    cout << bfs(1);


    return 0;
}
