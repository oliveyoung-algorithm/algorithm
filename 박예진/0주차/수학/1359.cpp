#include <iostream>
#include <vector>
#include <queue>
#include <iomanip>
using namespace std;

int N, M, K;
vector<int> v;

long long total_cnt = 0;
long long cnt = 0;

void combi(int idx) {
  if (v.size() == M) {
      total_cnt++;

      int match = 0;
      for (int x : v) {
          if (x <= M) match++;  
      }
      if (match >= K) cnt++;
      return;
  }

  for (int i = idx; i <= N; i++) {
    v.push_back(i);
    combi(i + 1);
    v.pop_back();
  }
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(0); cout.tie(0);

  cin >> N >> M >> K; 
  combi(1);

  double result = (double)cnt / (double)total_cnt;
  cout << fixed << setprecision(9) << result << '\n';

  return 0;
}
