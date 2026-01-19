//https://www.acmicpc.net/problem/2805

#include <iostream>
#include <algorithm>
using namespace std;

int N, M, ans;
int height[1000001];
int maxheight = 0;

void binary(){
  int left = 0;
  int right = maxheight; // 절단기 최대 높이

  while(left <= right) {
    int mid = (left + right) / 2; // 현재 절단기 높이

    long long sum = 0;
    for(int i = 0; i < N; i++){
      if (height[i] - mid > 0) {
        sum += height[i] - mid;
      }
    }
    if (sum < M) {
      right = mid - 1; 
    } else if (sum >= M) {
      left = mid + 1;
      ans = max(mid, ans);
    }
  }
  return;
}

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);

  cin >> N >> M;
  for(int i = 0; i < N; i++){
    cin >> height[i];
    maxheight = max(maxheight, height[i]);
  }

  binary();
  cout << ans;

  return 0;
}

