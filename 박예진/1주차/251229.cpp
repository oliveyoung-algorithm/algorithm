/* 1번째 방법 dp */
#include <cstdio>
#include <iostream>
#include <algorithm>
#include <cstring>

using namespace std;

int n;
int dp[10001];
int grape[10001];

void dynamic() {
    dp[1] = grape[1];
    dp[2] = grape[1] + grape[2];

    for(int i = 3; i <= n; i++){
        dp[i] = max(dp[i - 2], dp[i - 3] + grape[i - 1]) + grape[i];
        dp[i] = max(dp[i], dp[i - 1]);
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> n;
    for(int i = 1; i <= n; i++){
        cin >> grape[i];
    }

    dynamic();
    cout << dp[n];
}

/* 2번째 방법 dp */
#include <cstdio>
#include <iostream>
#include <algorithm>
#include <cstring>

using namespace std;

int n;
int dp[10001];
int grape[10001];

void dynamic() {
    dp[1] = grape[1];
    dp[2] = grape[1] + grape[2];

    for(int i = 3; i <= n; i++){
        dp[i] = max({
           dp[i - 1], // OOX
           dp[i - 2] + grape[i], // OXO
           dp[i - 3] + grape[i - 1] + grape[i] // XOO
        });
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> n;
    for(int i = 1; i <= n; i++){
        cin >> grape[i];
    }

    dynamic();
    cout << dp[n];
}

/* 3번째 방법 dfs */
#include <cstdio>
#include <iostream>
#include <algorithm>
#include <cstring>

using namespace std;

int n;
int grape[10001];
int dp[10001][3];

int dfs(int depth, int cnt) {
    // 기저
    if (depth == n) return 0;
    if (cnt == 2) return dfs(depth + 1, 0); // 연속 3잔 금지

    // 메모이제이션
    int &res = dp[depth][cnt];
    if (res != -1) return res;

    // 현재 잔 마심
    int take = dfs(depth + 1, cnt + 1) + grape[depth];
    // 현재 잔 안 마심
    int skip = dfs(depth + 1, 0);

    return res = max(take, skip);
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> n;
    for(int i = 0; i < n; i++){
        cin >> grape[i];
    }

    // 초기화
    memset(dp, -1, sizeof(dp));
    cout << dfs(0, 0); // 개수, 연속
}