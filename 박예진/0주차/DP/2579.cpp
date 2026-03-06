#include <iostream>
#include <algorithm>

using namespace std;

/*
    한 번에 1, 2칸씩 오를 수 있음
    연속 3개 계단 X
    마지막 도착 계단 무조건 밟아야함
*/

int N;
int arr[301], dp[301];

void dynamic(){
    dp[1] = arr[1];
    dp[2] = arr[1] + arr[2];
    dp[3] = max(arr[1], arr[2]) + arr[3]; 

    for(int i = 4; i <= N; i++){
        dp[i] = max(dp[i - 2], dp[i - 3] + arr[i - 1]) + arr[i];
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N;
    for(int i = 1; i <= N; i++){
        cin >> arr[i];
    }
    dynamic();

    return 0;
}
