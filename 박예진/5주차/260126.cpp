//https://www.acmicpc.net/problem/4179

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int R, C;
char arr[1001][1001];
bool fvisited[1001][1001];
bool jvisited[1001][1001];

const int dx[4] = {-1, 0, 1, 0};
const int dy[4] = {0, 1, 0, -1};
 
struct Node {
    int x, y;
};

bool OOB(int x, int y) {
    return x < 0 || x >= R || y < 0 || y >= C;
}

Node now;
queue<Node> fq;
queue<Node> jq;

void fbfs() {
    int cnt = fq.size();
    while(cnt--) {
        Node now = fq.front();
        fq.pop();

        for(int dir = 0; dir < 4; dir++) {
            int nx = now.x + dx[dir];
            int ny = now.y + dy[dir];

            if (OOB(nx, ny) || fvisited[nx][ny] || arr[nx][ny] == '#') continue;
            fvisited[nx][ny] = true;
            arr[nx][ny] = 'F';
            fq.push({nx, ny});
        }
    }
}

int jbfs() {
    int time = 0;
    while(!jq.empty()) {
        time++;
        fbfs(); // 불 이동

        int cnt = jq.size();
        while(cnt--) {
            Node now = jq.front();
            jq.pop();

            for(int dir = 0; dir < 4; dir++) {
                int nx = now.x + dx[dir];
                int ny = now.y + dy[dir];

                if(OOB(nx, ny)) return time;
                if(jvisited[nx][ny] || arr[nx][ny] == '#' || arr[nx][ny] == 'F') continue;
                jvisited[nx][ny] = true;
                arr[nx][ny] = 'J';
                jq.push({nx, ny});
            }
        }
    }
    return -1;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0); cout.tie(0);

  cin >> R >> C;
  for(int i = 0; i < R; i++){
    for(int j = 0; j < C; j++){
        cin >> arr[i][j];
        if (arr[i][j] == 'J') {
            jq.push({i, j});
        } else if (arr[i][j] == 'F') {
            fq.push({i, j});
        }
    }
  }
  
  int time = jbfs();
  if (time == -1) cout << "IMPOSSIBLE";
  else cout << time;

  return 0;
}
