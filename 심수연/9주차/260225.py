# https://www.acmicpc.net/problem/6550

import sys
input = sys.stdin.readline

while True:
  try:
    s, t = map(str, input().split())
    
    flag = 0
    idx = 0
    
    for i in range(len(t)):
      if idx < len(s) and s[idx] == t[i]:
        idx += 1
      
      if (idx == len(s)): # 부분 문자열인 것!
        flag = 1
        break # for문 탈출
    
    if flag == 1:
      print("Yes")
    else:
      print("No")
      
  except:
    break