#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

/*
    K 종류 (맥주 선호도, 도수 레벨)
    도수 레벨 <= 간 레벨
    마시는 맥주 N개 선호도 합 >= M
    선호도 합 M을 채우면서 N개의 맥주를 모두 마실 수 있는 레벨 최솟값
*/

struct Beer{
    int like, level;
};

struct cmp {
    bool operator()(const Beer &b1, const Beer &b2){
        return b1.level < b2.level; // 레벨 오름차순
    }
};

int N, M, K; // 열리는 기간, 채워야하는 선호도 합, 종류수
vector<Beer> beers;
priority_queue<int, vector<int>, greater<int>> pq;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    cin >> N >> M >> K;
    for(int i = 0; i < K; i++){
        int like, level;
        cin >> like >> level;
        beers.push_back({like, level});
    }
    // 레벨 최솟값
    sort(beers.begin(), beers.end(), cmp());

    long long likeSum = 0;
    for(int i = 0; i < K; i++){
        pq.push(beers[i].like);
        likeSum += beers[i].like;

        // N개 초과, 가장 작은 선호도 제거
        if (pq.size() > N) {
            likeSum -= pq.top();
            pq.pop();
        }
        // N개일 때, 합이 M 이상
        if (pq.size() == N && likeSum >= M) {
            cout << beers[i].level;
            return 0;
        }
    }
    cout << -1;

    return 0;
}
