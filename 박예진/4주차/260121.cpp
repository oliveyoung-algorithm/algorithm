//https://www.acmicpc.net/problem/2234

#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
using namespace std;

struct Node {
  int x, y;
};

int N, M, arr[51][51];
bool visited[51][51];
int roomIdx[51][51];
// 서, 북, 동, 남
const int dx[4] = {0, -1, 0, 1};
const int dy[4] = {-1, 0, 1, 0};

bool OOB(int x, int y){
  if (x < 0 || x >= N || y < 0 || y >= M) return true;
  return false;
}

int bfs(int x, int y, int idx) {
  queue<Node> q;
  q.push({x, y});
  visited[x][y] = true;
  int cnt = 0;

  while(!q.empty()) {
    Node now = q.front(); q.pop();
    roomIdx[now.x][now.y] = idx;
    cnt++;

    for(int dir = 0; dir < 4; dir++){
      int nx = now.x + dx[dir];
      int ny = now.y + dy[dir];

      if (OOB(nx, ny) || visited[nx][ny]) continue;
      if (arr[now.x][now.y] & (1 << dir)) continue; // 벽이 있다면
      q.push({nx, ny});
      visited[nx][ny] = true;
    }
  }
  return cnt;
}

int main(){
  cin >> M >> N;
  for(int i = 0; i < N; i++){
    for(int j = 0; j < M; j++){
      cin >> arr[i][j];
    }
  }

  // bfs 돌려서 방의 개수, 넓이 구하기
  int roomCnt = 0;
  int roomSize = 0;
  int res = 0;
  vector<int> rooms;

  for(int i = 0; i < N; i++){
    for(int j = 0; j < M; j++){
      if (!visited[i][j]) {
        int num = bfs(i, j, roomCnt);
        roomCnt++;
        roomSize = max(roomSize, num);
        rooms.push_back(num);
      }
    }
  }

  // 각 연결되어 있는 방 검색
  for(int i = 0; i < N; i++){
    for(int j = 0; j < M; j++){
      for(int dir = 0; dir < 4; dir++){
        int nx = i + dx[dir];
        int ny = j + dy[dir];

        if (OOB(nx, ny)) continue;
        if (roomIdx[i][j] != roomIdx[nx][ny]) {
          res = max(res, rooms[roomIdx[i][j]] + rooms[roomIdx[nx][ny]]);
        }
      }
    }
  }

  cout << roomCnt << "\n" << roomSize << "\n" << res;
}