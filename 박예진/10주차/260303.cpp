//https://www.acmicpc.net/problem/2206
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

struct Node {
    int x, y;
};

int N, M;
char arr[1001][1001];
bool visited[1001][1001][2]; // 벽 부수기 상태
const int dx[4] = {-1, 0, 1, 0};
const int dy[4] = {0, 1, 0, -1};

bool OOB(int x, int y) {
    return x < 0 || x >= N || y < 0 || y >= M;
}

int bfs(int x, int y) {
    queue<pair<Node, pair<int, int>>> q; // state, dist
    q.push({{x, y}, {false, 1}});
    visited[x][y][0] = true;

    while(!q.empty()) {
        pair<Node, pair<int, int>> now = q.front();
        bool used = now.second.first;
        int dist = now.second.second;
        q.pop();

        if (now.first.x == N - 1 && now.first.y == M - 1) {
            return dist;
        }

        for(int dir = 0; dir < 4; dir++){
            int nx = now.first.x + dx[dir];
            int ny = now.first.y + dy[dir];

            if (OOB(nx, ny)) continue;

            // 벽 O
            // 벽 부신 적 없을 때만 가능
            if (arr[nx][ny] == '1') {
                if (!used && !visited[nx][ny][!used]) {
                    visited[nx][ny][!used] = true;
                    q.push({{nx, ny}, {!used, dist + 1}});
                }
            }
            // 벽 X
            // 그냥 이동
            else {
                if (!visited[nx][ny][used]) {
                    visited[nx][ny][used] = true;
                    q.push({{nx, ny}, {used, dist + 1}});
                }
            }
        }
    }
    return -1;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N >> M;
    for(int i = 0; i < N; i++){
        for(int j = 0; j < M; j++){
            cin >> arr[i][j];
        }
    }
    cout << bfs(0, 0);

    return 0;
}
