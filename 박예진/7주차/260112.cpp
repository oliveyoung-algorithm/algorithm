//https://www.acmicpc.net/problem/20055

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
    벨트, 로봇 회전
    로봇 이동할 수 있다면 이동
    - 이동칸 로봇 x, 내구도 1이상
    내구도 >= 1 로봇 올리기
    내구도 0인칸 K개 이상 과정 종료
*/

struct Node {
    int score;
    bool robot;
};

int N, K;
int A[201];
vector<Node> arr; // 내구도, 로봇 유무 

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N >> K;
    for(int i = 0; i < 2 * N; i++){
        int s;
        cin >> s;
        arr.push_back({s, false});
    }

    int cnt = 0; // 0의 개수
    int res = 0; // 진행횟수

    while(true) {
        res += 1;

        // 1. 벨트, 로봇 회전
        Node temp = arr[2 * N - 1];
        for(int i = 2 * N - 1; i > 0; i--){
            arr[i] = arr[i - 1];
        }
        arr[0] = temp;
        // 가장 끝 쪽은 떨어짐
        if (arr[N - 1].robot) {
            arr[N - 1].robot = false;
        }

        // 2. 로봇 이동 뒤에서부터
        for(int i = N - 2; i >= 0; i--){
            if (arr[i].robot && !arr[i + 1].robot && arr[i + 1].score >= 1) {
                arr[i].robot = false;
                arr[i + 1].robot = true;
                arr[i + 1].score -= 1;
                if (arr[i + 1].score == 0) cnt++;
            }
        }
        // 가장 끝 쪽은 떨어짐
        if (arr[N - 1].robot) {
            arr[N - 1].robot = false;
        }

        // 3. 로봇 올리기
        if (arr[0].score >= 1) {
            arr[0].robot = true;
            arr[0].score -= 1;
            if (arr[0].score == 0) cnt++;
        }
        // 4. 종료
        if (cnt >= K) break;
    }
    
    cout << res;

    return 0;
}
