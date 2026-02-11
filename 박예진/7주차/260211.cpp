#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
using namespace std;

/*
  i -> X -> i 왕복하는 최단시간 중 최댓값
  X -> 모든 노드 (정방향)
  모든 노드 -> X (역방향)
*/

struct Node {
  int node, cost;
};

struct cmp {
  bool operator()(const Node &n1, const Node &n2) {
    return n1.cost > n2.cost; // 오름차순
  }
};

int N, X, M;
vector<vector<Node>> graph;
vector<vector<Node>> rgraph;

vector<int> dijkstra(int start, vector<vector<Node>> &graph){
  priority_queue<Node, vector<Node>, cmp> pq; 
  vector<int> dist(N + 1, 1e9);
  dist[start] = 0;
  pq.push({start, dist[start]});

  while(!pq.empty()) {
    Node now = pq.top();
    pq.pop();

    if (dist[now.node] < now.cost) continue;

    for(int i = 0; i < graph[now.node].size(); i++){
      int nextnode = graph[now.node][i].node;
      int nextcost = graph[now.node][i].cost;

      if (dist[nextnode] > dist[now.node] + nextcost) {
        dist[nextnode] = dist[now.node] + nextcost;
        pq.push({nextnode, dist[nextnode]});
      }
    }
  }
  return dist;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);

  cin >> N >> M >> X;
  graph.resize(N + 1);
  rgraph.resize(N + 1);
  for(int i = 0; i < M; i++){
    int a, b, c;
    cin >> a >> b >> c;
    graph[a].push_back({b, c});
    rgraph[b].push_back({a, c});
  }

  vector<int> v1 = dijkstra(X, graph); // 정방향
  vector<int> v2 = dijkstra(X, rgraph); // 역방향

  int ans = 0;
  for(int i = 1; i <= N; i++){
    ans = max(ans, v1[i] + v2[i]);
  }
  cout << ans;

  return 0;
}
