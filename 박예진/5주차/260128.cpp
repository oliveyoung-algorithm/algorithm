#include <iostream>
#include <vector>
using namespace std;

int k;
int arr[14];
vector<int> v;

void combi(int idx, int depth){
    if (depth == 6) {
        for(auto iter : v) cout << iter << " ";
        cout << "\n";
        return;
    }

    for(int i = idx; i < k; i++){
        v.push_back(arr[i]);
        combi(i + 1, depth + 1);
        v.pop_back();
    }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0); cout.tie(0);

  while(true) {
    cin >> k;
    if (k == 0) break;
    for(int i = 0; i < k; i++){
        cin >> arr[i];
    }
    combi(0, 0);
    cout << "\n";
  }

  return 0;
}
