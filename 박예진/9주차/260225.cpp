//https://www.acmicpc.net/problem/13164

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N, K;
int arr[300001];
vector<int> v;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N >> K;
    cin >> arr[0];
    for(int i = 1; i < N; i++){
        cin >> arr[i];
        v.push_back(arr[i] - arr[i - 1]);
    }
    sort(v.begin(), v.end());

    int sum = 0;
    for(int i = 0; i < N - K; i++){
        sum += v[i];
    }
    cout << sum;

    return 0;
}
