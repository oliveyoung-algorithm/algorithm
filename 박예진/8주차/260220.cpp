#include <iostream>
#include <vector>
using namespace std;

/*
  이동하는 중 같은 칸 여러개 파이어볼 있을 수 있음
  2개 이상의 파이어볼 칸 
  1. 합쳐짐
  2. 4개의 파이어볼로 나뉨
  질량 0 소멸
*/

struct Ball {
  int m, d, s; // 질량, 방향, 속력
};

const int dx[8] = {-1, -1, 0, 1, 1, 1, 0, -1};
const int dy[8] = {0, 1, 1, 1, 0, -1, -1, -1};

int N, M, K; // 격자, 파이어볼 개수, 명령어 개수
vector<Ball> arr[51][51];
vector<Ball> temp[51][51];

void move(int x, int y){
  for(auto ball : arr[x][y]) {
    int nx = (x + dx[ball.d] * ball.s) % N;
    if (nx < 0) nx += N;

    int ny = (y + dy[ball.d] * ball.s) % N;
    if (ny < 0) ny += N;

    temp[nx][ny].push_back({ball.m, ball.d, ball.s});
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0); cout.tie(0);

  cin >> N >> M >> K;

  // 파이어볼 정보
  for(int i = 0; i < M; i++){
    int r, c, m, s, d;;
    cin >> r >> c >> m >> s >> d;
    arr[r - 1][c - 1].push_back({m, d, s});
  }

  while(K--) {
    // 1. 모든 파이어볼 이동
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) { 
        temp[i][j].clear();
      }
    }
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        if (arr[i][j].size() > 0) {
          move(i, j);
        }
      }
    }
    // 깊은 복사
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
          arr[i][j] = temp[i][j];
      }
    }

    // 2. 2개 이상의 파이어볼 있는 칸
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        if (arr[i][j].size() >= 2) {
          int msum = 0, ssum = 0;
          int oddcnt = 0, evencnt = 0;
          
          for(int k = 0; k < arr[i][j].size(); k++){
            msum += arr[i][j][k].m;
            ssum += arr[i][j][k].s;
            if (arr[i][j][k].d % 2 == 0) evencnt++;
            else oddcnt++;
          }

          int osize = arr[i][j].size();
          arr[i][j].clear(); // 초기화

          msum /= 5;
          if (msum == 0) continue;
          ssum /= osize;

          // 4개의 파이어볼로 나뉘어짐
          int dnum = 0;
          if (evencnt == 0 || oddcnt == 0) dnum = 0;
          else dnum = 1;

          for(int k = 0; k < 4; k++){
            arr[i][j].push_back({msum, dnum, ssum});
            dnum += 2;
          }
        }
      }
    }
  }

  // 최종 남아있는 파이어볼 질량의 합
  int msum = 0;
  for(int i = 0; i < N; i++){
    for(int j = 0; j < N; j++){
      for(int k = 0; k < arr[i][j].size(); k++){
         msum += arr[i][j][k].m;
      }
    }
  }
  cout << msum;

  return 0;
}
