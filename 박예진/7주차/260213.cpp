//https://www.acmicpc.net/problem/2636
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
#include <cstring>
using namespace std;

/*
    치즈가 모두 녹아 없어지는 시간
    모두 녹기 한시간 전 남아있는 개수
*/

struct Node {
    int x, y;
};

int N, M;
int arr[101][101];
bool visited[101][101];
const int dx[4] = {-1, 0, 1, 0};
const int dy[4] = {0, 1, 0, -1};

bool OOB(int x, int y) {
    return x < 0 || x >= N || y < 0 || y >= M;
}

void bfs(int x, int y) {
    queue<Node> q;
    q.push({x, y});
    visited[x][y] = true;

    while(!q.empty()) {
        Node now = q.front();
        q.pop();

        for(int dir = 0; dir < 4; dir++){
            int nx = now.x + dx[dir];
            int ny = now.y + dy[dir];

            if(OOB(nx, ny) || visited[nx][ny]) continue;
            visited[nx][ny] = true;
            // 0일 때 넣기
            if (arr[nx][ny] == 1) {
                arr[nx][ny] = 0;
            } else q.push({nx, ny});
        }
    }
}

int oneCnt(){
    int cnt = 0;
    for(int i = 0; i < N; i++){
        for(int j = 0; j < M; j++){
            if (arr[i][j] == 1) cnt++;
        }
    }
    return cnt;
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

    int last = 0;
    int time = 0;
    while(true) {
        memset(visited, false, sizeof(visited));

        int cnt = oneCnt();
        // 종료조건 확인
        if (cnt == 0) break;

        time++;
        bfs(0, 0);
        last = cnt;
    }

    cout << time << "\n" << last;
    return 0;
}
