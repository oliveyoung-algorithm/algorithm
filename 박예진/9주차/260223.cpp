// https://www.acmicpc.net/problem/7576
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Node {
    int x, y;
};

int M, N, answer;
int arr[1001][1001];
bool visited[1001][1001];

const int dx[4] = {-1, 0, 1, 0};
const int dy[4] = {0, 1, 0, -1};

queue<pair<Node, int>> q;

bool OOB(int x, int y) {
    return x < 0 || x >= N || y < 0 || y >= M;
}

void bfs() {
    while(!q.empty()) {
        pair<Node, int> now = q.front();
        q.pop();

        answer = max(answer, now.second);

        for(int dir = 0; dir < 4; dir++){
            int nx = now.first.x + dx[dir];
            int ny = now.first.y + dy[dir];

            if (OOB(nx, ny) || visited[nx][ny] || arr[nx][ny] == -1) continue; 

            visited[nx][ny] = true;
            q.push({{nx, ny}, now.second + 1});
        }
    }
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0); cout.tie(0);

    cin >> M >> N;
    for(int i = 0; i < N; i++){
        for(int j = 0; j < M; j++){
            cin >> arr[i][j];
            if (arr[i][j] == 1) {
                q.push({{i, j}, 0});
                visited[i][j] = true;
            }
        }
    }
    bfs();
  
    // 만약에 방문 안 한 곳
    for(int i = 0; i < N; i++){
        for(int j = 0; j < M; j++){
            if (!visited[i][j] && arr[i][j] != -1) {
                cout << -1;
                return 0;
            }
        }
    }
    cout << answer;
    return 0;
}
