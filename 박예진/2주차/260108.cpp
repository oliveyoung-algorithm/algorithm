//https://www.acmicpc.net/problem/1535

#include <iostream>
#include <algorithm>

using namespace std;

int ans, N, L[21], J[21];
int dp[101];
bool visited[21];

int knapsack(){
    for(int i = 0; i < N; i++){
        for(int j = 99; j >= L[i]; j--){
            dp[j] = max(dp[j], dp[j - L[i]] + J[i]);
        }
    }
    return dp[99];
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N;
    for(int i = 0; i < N; i++){
        cin >> L[i];
    }
    for(int i = 0; i < N; i++){
        cin >> J[i];
    }
    
    cout << knapsack();
}