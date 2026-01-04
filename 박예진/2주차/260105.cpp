#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

/*
    크루스칼 알고리즘 - 유니온 파인드
    0. 부모 노드 초기화
    1. 가중치 기준으로 간선 오름차순
    2. 모든 간선 탐색
    3. 작은 가중치를 가진 노드로 부모 노드 변경
*/

struct Edge {
    int a, b, c;
};

bool cmp(const Edge &e1, const Edge &e2) {
    return e1.c < e2.c;
}

int V, E;
int parent[10001];
vector<Edge> edges;

int getParent(int x) {
    if (parent[x] == x) return x;
    else return parent[x] = getParent(parent[x]);
}

int kruskal() {
    // 간선 가중치 오름차순
    sort(edges.begin(), edges.end(), cmp);

    int sum = 0; // 가중치 합
    int num = 0; // 연결된 간선 개수

    for(int i = 0; i < E; i++){
        int pa = getParent(edges[i].a);
        int pb = getParent(edges[i].b);

        if (pa == pb) continue;
        if (pa < pb) parent[pb] = pa;
        else parent[pa] = pb;

        sum += edges[i].c;
        num++;

        if (num == V - 1) return sum;
    }
    return -1;
}


int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> V >> E;
    // 부모 노드 초기화
    for(int i = 1; i <= V; i++){
        parent[i] = i;
    }
    for(int i = 0; i < E; i++){
        int A, B, C;
        cin >> A >> B >> C;
        edges.push_back({A, B, C});
    }
    
    cout << kruskal();
}