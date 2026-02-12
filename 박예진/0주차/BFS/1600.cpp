//https://www.acmicpc.net/problem/1600

#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

/*
    1 장애물
    0, 0 -> H - 1, W - 1
    최소한의 동작
    K번만 말처럼 움직일 수 있음
*/

struct Node {
    int x, y, hcnt, res;
};

int K, W, H;
int arr[201][201];
bool visited[201][201][31];
const int dx[4] = {-1, 0, 1, 0};
const int dy[4] = {0, 1, 0, -1};
const int hdx[8] = {-2, -2, -1, -1, 1, 1, 2, 2};
const int hdy[8] = {-1, 1, -2, 2, -2, 2, -1, 1};

bool OOB(int x, int y) {
    return x < 0 || x >= H || y < 0 || y >= W;
}

int bfs(int x, int y) {
    queue<Node> q;
    q.push({x, y});
    visited[x][y][0] = true;

    while(!q.empty()) {
        Node now = q.front();
        q.pop();

        if (now.x == H - 1 && now.y == W - 1) {
            return now.res;
        }

        // 원숭이 이동
        for(int dir = 0; dir < 4; dir++){
            int nx = now.x + dx[dir];
            int ny = now.y + dy[dir];
            if (OOB(nx, ny) || visited[nx][ny][now.hcnt] || arr[nx][ny] == 1) continue;
            visited[nx][ny][now.hcnt] = true;
            q.push({nx, ny, now.hcnt, now.res + 1});
        }

        // 말처럼 이동
        if (now.hcnt < K) {
            for(int dir = 0; dir < 8; dir++){
                int nx = now.x + hdx[dir];
                int ny = now.y + hdy[dir];
                if (OOB(nx, ny) || visited[nx][ny][now.hcnt + 1] || arr[nx][ny] == 1) continue;
                visited[nx][ny][now.hcnt + 1] = true;
                q.push({nx, ny, now.hcnt + 1, now.res + 1});
            }
        }
    }
    return -1;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> K >> W >> H;
    for(int i = 0; i < H; i++){
        for(int j = 0; j < W; j++){
            cin >> arr[i][j];
        }
    }
    cout << bfs(0, 0);

    return 0;
}
