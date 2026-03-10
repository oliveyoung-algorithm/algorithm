//https://www.acmicpc.net/problem/11509
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N, answer;
int arrow[1000001]; // 높이별 화살의 개수

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);

    cin >> N;
    for (int i = 0; i < N; i++) {
        int h;
        cin >> h;

        if (arrow[h] > 0) arrow[h]--;
        else answer++;

        arrow[h - 1]++;
    }
    cout << answer;

	return 0;
}
