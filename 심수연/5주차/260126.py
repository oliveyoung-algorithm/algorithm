# https://www.acmicpc.net/problem/11652

import sys
input = sys.stdin.readline

N = int(input())

dict = {}

for i in range(N):
  num = int(input())
  if num in dict:
    dict[num] += 1
  else:
    dict[num] = 1 # num 이 dict에 없다면 초기화

print(max(dict, key=lambda x: (dict[x], -x))) # 1순위: value값이 큰 것, 2순위: value값이 같다면 정수가 작은 것
