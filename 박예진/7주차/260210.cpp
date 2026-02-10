// https://www.acmicpc.net/problem/17352

#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int N;
int parent[300001];

int getParent(int n) {
  if (parent[n] == n) return n;
  else return parent[n] = getParent(parent[n]);
}

void unionParent(int a, int b) {
  int pa = getParent(a);
  int pb = getParent(b);

  if (pa < pb) parent[pb] = pa;
  else parent[pa] = pb;
}

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);

  cin >> N;
  // 부모 노드 초기화
  for(int i = 1; i <= N; i++){
    parent[i] = i;
  }

  for(int i = 0; i < N - 2; i++){
    int u, v;
    cin >> u >> v;
    unionParent(u, v);
  } 

  // 연결 안 된 노드 찾기
  for(int i = 1; i < N; i++){
    if (getParent(i) != getParent(i + 1)) {
      cout << i << " " << i + 1;
      break;
    }
  }
  return 0;
}
