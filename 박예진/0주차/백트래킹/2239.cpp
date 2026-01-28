#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int x, y;
};

char arr[10][10];
bool rows[10][10];
bool cols[10][10];
bool board[10][10];
vector<Node> zeros;

int getBoardIdx(int r, int c) {
    return (r / 3) * 3 + (c / 3);
}

void dfs(int idx){
    if (idx == zeros.size()) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                cout << arr[i][j];
            }
            cout << '\n';
        }
        exit(0);
    }

    int r = zeros[idx].x;
    int c = zeros[idx].y;
    int b = getBoardIdx(r, c);

    for(int i = 1; i <= 9; i++){
        // 행, 열, 9칸 다 검색
        if (!rows[r][i] && !cols[c][i] && !board[b][i]) {
            rows[r][i] = true;
            cols[c][i] = true;
            board[b][i] = true;
            arr[r][c] = i + '0';
            dfs(idx + 1);
            arr[r][c] = '0';
            rows[r][i] = false;
            cols[c][i] = false;
            board[b][i] = false;
        }
    }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0); cout.tie(0);

  for(int i = 0; i < 9; i++){
    for(int j = 0; j < 9; j++){
        cin >> arr[i][j];
        int num = arr[i][j] - '0'; 
        if (num == 0) zeros.push_back({i, j});
        else {
            rows[i][num] = true;
            cols[j][num] = true;
            board[getBoardIdx(i, j)][num] = true;
        }
    }
  }
  dfs(0);

  return 0;
}
