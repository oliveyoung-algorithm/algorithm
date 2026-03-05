//https://www.acmicpc.net/problem/1205
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// 랭킹 리스트에 올라갈 수 있는 점수 개수 P

int N, score, P;
int arr[51], cnt = 1;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N >> score >> P;
    for(int i = 0; i < N; i++){
        cin >> arr[i];
        if (arr[i] > score) cnt++;
    }

    if (N == P && arr[N - 1] >= score) cnt = -1;
    cout << cnt;

    return 0;
}
