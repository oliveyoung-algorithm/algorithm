#include <iostream>
#include <queue>
#include <algorithm>

using namespace std;

/* 
    이동 횟수의 최솟갑 
    대응하는 열쇠가 있어야 문을 들어갈 수 있음
*/

struct Node {
    int x, y;
};

struct Node1 {
    int dist, key;
};

int N, M;
char arr[51][51];
bool visited[51][51][1 << 6];
Node minsik;

const int dx[4] = {-1, 0, 1, 0};
const int dy[4] = {0, 1, 0, -1};

bool OOB(int x, int y){
    return x < 0 || x >= N || y < 0 || y >= M;
}

bool hasKey(int key, char door) {
    int bit = 1 << (door - 'A');
    return (key & bit) != 0;
}

int bfs(int x, int y) {
    queue<pair<Node, Node1>> q;

    q.push({{x, y}, {0, 0}}); // dist, key
    visited[x][y][0] = true;

    while(!q.empty()) {
        pair<Node, Node1> now = q.front();
        q.pop();

        int nowKey = now.second.key;
        if (arr[now.first.x][now.first.y] == '1') {
            return now.second.dist;
        }

        for(int dir = 0; dir < 4; dir++){
            int nx = now.first.x + dx[dir];
            int ny = now.first.y + dy[dir];

            if (OOB(nx, ny) || arr[nx][ny] == '#') continue;

            // 열쇠
            if ('a' <= arr[nx][ny] && arr[nx][ny] <= 'f') {
                int nextKey = nowKey | (1 << (arr[nx][ny] - 'a'));
                if (!visited[nx][ny][nextKey]) {
                    visited[nx][ny][nextKey] = true;
                    q.push({{nx, ny}, {now.second.dist + 1, nextKey}});
                }
            }
            // 문
            else if ('A' <= arr[nx][ny] && arr[nx][ny] <= 'F') {
                if (!visited[nx][ny][nowKey] && hasKey(nowKey, arr[nx][ny])){
                    visited[nx][ny][nowKey] = true;
                    q.push({{nx, ny}, {now.second.dist + 1, nowKey}});
                }
            } 
            // 빈 곳 or 시작 or 출구
            else if (!visited[nx][ny][nowKey]){
                visited[nx][ny][nowKey] = true;
                q.push({{nx, ny}, {now.second.dist + 1, nowKey}});
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
            if (arr[i][j] == '0') {
                minsik.x = i;
                minsik.y = j;
            }
        }
    }
    cout << bfs(minsik.x, minsik.y);
}