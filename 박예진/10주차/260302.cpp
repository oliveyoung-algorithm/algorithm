//http://acmicpc.net/problem/2468
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
#include <cstring>
using namespace std;

/* 
    높이 이하의 모든 지점 잠김
    물에 잠기지 않는 안전한 영역 최대 개수
    가장 높은 h, 낮은 h
    비가 아예 안 내릴 경우도 있음 
    최소 1군데 안전 영역s
*/

struct Node {
    int x, y;
};

int N, res = 1;
int arr[101][101];
bool visited[101][101];
const int dx[4] = {-1, 0, 1, 0};
const int dy[4] = {0, 1, 0, -1};
int minH = 1e9, maxH = 0;

bool OOB(int x, int y) {
    return x < 0 || x >= N || y < 0 || y >= N;
}

void bfs(int x, int y, int h) {
    queue<Node> q;
    q.push({x, y});
    visited[x][y] = true;

    while(!q.empty()) {
        Node now = q.front();
        q.pop();

        for(int dir = 0; dir < 4; dir++){
            int nx = now.x + dx[dir];
            int ny = now.y + dy[dir];

            if (OOB(nx, ny) || visited[nx][ny] || h >= arr[nx][ny]) continue;
            visited[nx][ny] = true;
            q.push({nx, ny});
        }
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N;
    for(int i = 0; i < N; i++){
        for(int j = 0; j < N; j++){
            cin >> arr[i][j];
            minH = min(minH, arr[i][j]);
            maxH = max(maxH, arr[i][j]);
        }
    }

    // 각 높이마다 안전 영역 개수 
    for(int h = minH; h <= maxH; h++){
        // 초기화
        int cnt = 0;
        memset(visited, 0, sizeof(visited));
        for(int i = 0; i < N; i++){
            for(int j = 0; j < N; j++){
                // 조건 제대로?
                if (h < arr[i][j] && !visited[i][j]) {
                    bfs(i, j, h); // 안전영역 개수 세기
                    cnt++;
                }
            }
        }
        res = max(res, cnt);
    }
    cout << res;

    return 0;
}
