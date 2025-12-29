/* 2-way sweep DP */
#include <cstdio>
#include <iostream>
#include <algorithm>
#include <cstring>

using namespace std;

/*
    탐사한 지역들의 가치 최대합
    왼쪽, 오른쪽, 아래쪽
    위쪽은 이동 불가
*/

int N, M;
int arr[1001][1001];
int dp[1001][1001];

void dynamic(){
    // 1행 초기화
    dp[1][1] = arr[1][1];
    for(int j = 2; j <= M; j++){
        dp[1][j] = dp[1][j - 1] + arr[1][j];
    }

    // 2행부터 시작
    for(int i = 2; i <= N; i++){
        // 위 -> 아래
        for(int j = 1; j <= M; j++){
            dp[i][j] = dp[i - 1][j] + arr[i][j];
        }
        
        int left[1001] = {0}, right[1001] = {0};
        // 왼 -> 오
        left[1] = dp[i][1];
        for(int j = 2; j <= M; j++){
            left[j] = max(left[j - 1], dp[i][j - 1]) + arr[i][j];
        }
        // 오 -> 왼
        right[M] = dp[i][M];
        for(int j = M - 1; j >= 1; j--) {
            right[j] = max(right[j + 1], dp[i][j + 1]) + arr[i][j];
        }
        // 최종
        for(int j = 1; j <= M; j++){
            dp[i][j] = max(dp[i][j], max(left[j], right[j]));
        }
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N >> M;
    for(int i = 1; i <= N; i++){
        for(int j = 1; j <= M; j++){
            cin >> arr[i][j];
        }
    }
    dynamic();
    cout << dp[N][M];
}