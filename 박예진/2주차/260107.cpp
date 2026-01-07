//https://www.acmicpc.net/submit/2240/97116669

#include <iostream>
#include <vector>
#include <algorithm>
#include <cstring>
using namespace std;

int T, W;
int dp[1001][31][2]; // 시간, 움직인 횟수, idx
vector<int> tree;

int dfs(int depth, int cnt, int idx) {
  // 기저 조건
  if (depth == T) return 0;
  if (cnt < 0) return -1e9; // 불가능한 조건

  // 메모이제이션
  int &res = dp[depth][cnt][idx];
  if (res != -1) return res;

  // 로직
  int move = dfs(depth + 1, cnt - 1, idx ^ 1); // 움직
  int nomove = dfs(depth + 1, cnt, idx); // 안움직
  res = max(move, nomove) + (idx == tree[depth] - 1);

  return res;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0); cout.tie(0);

  cin >> T >> W;
  tree.resize(T);
  for(int i = 0; i < T; i++){
    cin >> tree[i];
  }
  // 초기화
  memset(dp, -1, sizeof(dp));

  // 움직, 안 움직
  int move = dfs(0, W - 1, 1);
  int nomove = dfs(0, W, 0);

  cout << max(move, nomove);
  
  return 0;
}
