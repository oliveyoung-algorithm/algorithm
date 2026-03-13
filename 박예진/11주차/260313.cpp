#include <iostream>
#include <algorithm>

using namespace std;

int N, M;
int arr[7][7];
int dp[7][7][3];

// 왼쪽 0, 위쪽 1, 오른쪽 2

void dynamic(){
    // 1행 초기화
    for(int j = 1; j <= M; j++){
        dp[1][j][0] = dp[1][j][1] = dp[1][j][2] = arr[1][j];
    }

    // 0열, M열 무한대 초기화
    for(int i = 1; i <= N; i++){
        for(int k = 0; k < 3; k++){
            dp[i][0][k] = dp[i][M + 1][k] = 1e9;
        }
    }

    // 2행부터 
    for(int i = 2; i <= N; i++){
        for(int j = 1; j <= M; j++){
            // 세가지 방향 전부 계산
            for(int k = 0; k < 3; k++){
                // 왼쪽에서 내려올 경우
                if (k == 0) {
                    int n1 = dp[i - 1][j - 1][1]; // 이전 위쪽
                    int n2 = dp[i - 1][j - 1][2]; // 이전 오른쪽
                    dp[i][j][k] = min(n1, n2) + arr[i][j];
                }
                // 위쪽에서 내려올 경우
                else if (k == 1) {
                    int n0 = dp[i - 1][j][0]; // 이전 왼쪽
                    int n2 = dp[i - 1][j][2]; // 이전 오른쪽 
                    dp[i][j][k] = min(n0, n2) + arr[i][j];
                }
                // 오른쪽에서 내려올 경우
                else if (k == 2) {
                    int n0 = dp[i - 1][j + 1][0]; // 이전 왼쪽
                    int n1 = dp[i - 1][j + 1][1]; // 이전 위쪽
                    dp[i][j][k] = min(n0, n1) + arr[i][j];
                }
            }
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

    int res = 1e9;
    for(int j = 1; j <= M; j++){
        for(int k = 0; k < 3; k++){
            res = min(res, dp[N][j][k]);
        }
    }
    cout << res;
}
