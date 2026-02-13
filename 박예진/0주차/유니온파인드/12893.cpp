//https://www.acmicpc.net/problem/12893
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
#include <cstring>
using namespace std;

/*
    이분그래프
    유니온파인드
    v + N = v 반대 상태
*/

int N, M;
int parent[4001];

int getParent(int x) {
    if (parent[x] == x) return x;
    return parent[x] = getParent(parent[x]);
}

void unionParent(int x, int y) {
    int px = getParent(x);
    int py = getParent(y);

    if (px < py) parent[py] = px;
    else parent[px] = py;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N >> M;
    for(int i = 1; i <= 2*N; i++)
        parent[i] = i;

    bool flag = true;

    for(int i = 0; i < M; i++){
        int u, v;
        cin >> u >> v;

        // 이미 같은 편이면 모순
        if (getParent(u) == getParent(v)) {
            flag = false;
            break;
        }

        // 적의 적 연결
        unionParent(u, v + N);
        unionParent(v, u + N);

        // 자기 자신과 적이 되면 모순
        if (getParent(u) == getParent(u + N) ||
            getParent(v) == getParent(v + N)) {
            flag = false;
            break;
        }
    }

    cout << (flag ? 1 : 0);

    return 0;
}
