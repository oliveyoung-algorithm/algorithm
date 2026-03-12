#include <bits/stdc++.h>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);

  int T;
  cin >> T;
  while(T--) {
    string str;
    cin >> str;

    bool flag = true;
    stack <char> s;
    for(auto iter : str){
      if (iter == '(') {
        s.push('(');
      } else {
        if (!s.empty() && s.top() == '(') {
          s.pop();
        } else {
          flag = false;
          break;
        }
      }
    }

    if (s.size()) flag = false;

    if (flag) cout << "YES\n";
    else cout << "NO\n";
  }

  return 0;
} 
