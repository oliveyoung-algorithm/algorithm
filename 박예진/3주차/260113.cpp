//https://www.acmicpc.net/problem/28324

#include <iostream>
#include <vector>
using namespace std;

int N;
long long V[500001];

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0); cout.tie(0);

  cin >> N;
  for(int i = 0; i < N; i++){
    cin >> V[i];
  }

  long long cnt = 1;
  long long ans = 1;
  for(int i = N - 2; i >= 0; i--){
    if (V[i] >= cnt + 1) cnt++; 
    else cnt = V[i];
    ans += cnt;
  }
  cout << ans;
  return 0;
}
