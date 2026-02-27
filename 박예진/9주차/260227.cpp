#include <iostream>
#include <vector>
#include <algorithm>
#include <cstring>
#include <queue>
using namespace std;

struct Node {
	int x, y;
};

int N, M, answer = 1e9;
int arr[51][51];
bool visited[251];

vector<Node> chicken;
vector<Node> home;
vector<int> v;

void combi(int idx){
	if (v.size() == M) {
		// 치킨집과 집의 거리
		int sum = 0;
		for(int i = 0; i < home.size(); i++){
			int res = 1e9; // 집에서 가장 가까운 치킨집
			for(int j = 0; j < v.size(); j++){
				res = min(res, abs(home[i].x - chicken[v[j]].x) + abs(home[i].y - chicken[v[j]].y));
			}
			sum += res;
		}
		answer = min(answer, sum);
		return;
	}

	for(int i = idx; i < chicken.size(); i++){
		if (!visited[i]) {
			visited[i] = true;
			v.push_back(i);
			combi(i);
			v.pop_back();
			visited[i] = false;
		}
	}
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);

	cin >> N >> M;
	for(int i = 0; i < N; i++){
		for(int j = 0; j < N; j++){
			cin >> arr[i][j];
			if (arr[i][j] == 1) {
				home.push_back({i, j});
			} else if (arr[i][j] == 2) {
				chicken.push_back({i, j});
			}
		}
	}

	// 치킨집 좌표 조합
	combi(0);

	cout << answer;
}
