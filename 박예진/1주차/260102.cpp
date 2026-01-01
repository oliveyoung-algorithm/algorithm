#include <string>
#include <vector>

using namespace std;

int n0, n1;

void divide(int x, int y, int size, vector<vector<int>> &arr) {
    int num = arr[x][y];
    for(int i = x; i < x + size; i++){
        for(int j = y; j < y + size; j++){
            if (num != arr[i][j]) {
                divide(x, y, size / 2, arr); // 위 왼쪽
                divide(x, y + size / 2, size / 2, arr); // 위 오른쪽
                divide(x + size / 2, y, size / 2, arr); // 아래 왼쪽
                divide(x + size / 2, y + size / 2, size / 2, arr); // 아래 오른쪽
                return;
            }
        }
    }
    // 더이상 쪼개지지 않는 영역
    if (num == 0) n0++;
    else if (num == 1) n1++;
}

vector<int> solution(vector<vector<int>> arr) {
    vector<int> answer;
    answer.resize(2);
    
    divide(0, 0, arr.size(), arr);
    answer[0] = n0;
    answer[1] = n1;
    
    return answer;
}