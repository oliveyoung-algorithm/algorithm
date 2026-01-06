//https://www.acmicpc.net/problem/1991
#include <iostream>
#include <algorithm>
#include <vector>
#include <cstring>

using namespace std;

struct Node {
    char left;
    char right;
} node[26];

// 전위순회
void preOrder(char alpha){
  if (alpha == '.') return;
  char left = node[alpha - 'A'].left;
  char right = node[alpha - 'A'].right;

  cout << alpha;
  preOrder(left);
  preOrder(right);
}

void inOrder(char alpha) {
    if (alpha == '.') return;
    char left = node[alpha - 'A'].left;
    char right = node[alpha - 'A'].right;

    inOrder(left);
    cout << alpha;
    inOrder(right);
}

void postOrder(char alpha) {
    if (alpha == '.') return;
    char left = node[alpha - 'A'].left;
    char right = node[alpha - 'A'].right;

    postOrder(left);
    postOrder(right);
    cout << alpha;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    int N;
    cin >> N;
    for(int i = 0; i < N; i++){
        char X, L, R;
        cin >> X >> L >> R; // 노드, 왼쪽, 오른쪽
        node[X - 'A'].left = L;
        node[X - 'A'].right = R;
    }
    
    preOrder('A');
    cout << "\n";

    inOrder('A');
    cout << "\n";

    postOrder('A');
}