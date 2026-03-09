//https://www.acmicpc.net/problem/2792
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

int N, M; // 아이들 수, 색상 수
int arr[300001], res = 1e9;

void binary_search() {
	int maxColor = 0;
	for (int i = 0; i < M; i++) {
		maxColor = max(maxColor, arr[i]);
	}

	int left = 1;
	int right = maxColor; // 색상중 가장 큰 값

	while (left <= right) {
		int mid = (left + right) / 2; // 한 아이가 받는 최대 보석의 수

		long long num = 0; // 그렇게 나눴을 때 필요한 아이들 수
		for (int i = 0; i < M; i++) {
			num += arr[i] / mid;
			if (arr[i] % mid) num += 1;
		}

		if (num <= N) {
			right = mid - 1;
			res = min(res, mid);
		}
		else {
			left = mid + 1;
		}
	}
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);

	cin >> N >> M;
	for (int i = 0; i < M; i++) {
		cin >> arr[i];
	}
	binary_search();
	cout << res;

	return 0;
}
