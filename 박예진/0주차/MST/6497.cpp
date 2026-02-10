//https://www.acmicpc.net/problem/6497

#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

struct Edge { 
  int start, end, cost; 
};

struct cmp {
  bool operator()(const Edge &e1, const Edge &e2) {
    return e1.cost < e2.cost;
  }
};

int parent[200001];
vector<Edge> edges;

int getParent(int x) {
  if (parent[x] == x) return x;
  return parent[x] = getParent(parent[x]);
}

void unionParent(int a, int b) {
  a = getParent(a);
  b = getParent(b);
  if (a == b) return;
  if (a < b) parent[b] = a;
  else parent[a] = b;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  while (true) {
    int m, n;
    cin >> m >> n;
    if (m == 0 && n == 0) break;

    edges.clear();
    int total = 0;

    for (int i = 0; i < n; i++) {
      int x, y, z;
      cin >> x >> y >> z;
      edges.push_back({x, y, z});
      total += z;
    }

    for (int i = 0; i < m; i++) parent[i] = i;

    sort(edges.begin(), edges.end(), cmp());

    int mst = 0;
    int cnt = 0;
    for (auto &e : edges) {
      if (getParent(e.start) == getParent(e.end)) continue;
      unionParent(e.start, e.end);
      mst += e.cost;
      if (++cnt == m - 1) break;
    }

    cout << total - mst << "\n";
  }

  return 0;
}
