//https://www.acmicpc.net/problem/1937
#include <iostream>
#include <algorithm>
#include <vector>
#include <cstring>

using namespace std;

int n, ans;
int dp[501][501];
int arr[501][501];
const int dx[4] = {-1, 0, 1, 0};
const int dy[4] = {0, 1, 0, -1};

bool OOB(int x, int y) {
    return x < 0 || x >= n || y < 0 || y >= n;
}

int dfs(int x, int y) {
    int &res = dp[x][y];
    if (res != -1) return res; // 메모이제이션
    res = 1;

    for(int dir = 0; dir < 4; dir++){
        int nx = x + dx[dir];
        int ny = y + dy[dir];

        if (OOB(nx, ny)) continue;
        if (arr[nx][ny] > arr[x][y]) {
            res = max(res, dfs(nx, ny) + 1);
        }
    }
    return res;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> n;
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            cin >> arr[i][j];
        }
    }

    memset(dp, -1, sizeof(dp));
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            // 모든 지점에서 시작
            ans = max(ans, dfs(i, j));
        }
    }
    cout << ans;
}