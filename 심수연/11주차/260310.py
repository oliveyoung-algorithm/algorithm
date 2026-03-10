# https://www.acmicpc.net/problem/1065

import sys
input = sys.stdin.readline

N = int(input())
count = 0

# 한수: 정수 N의 각 자리가 등차수열을 이루는 수. ex) 123 - 공차: 1, 357 - 공차: 2, 100 미만 - 모두 한수

for i in range(1, N + 1):
  if i < 100:
    count += 1 # 100 이상이면 99만큼 무조건 더해짐
  else: # 세자리수 (N < 1000 이므로)
    minus1 = int(str(i)[0]) - int(str(i)[1])
    minus2 = int(str(i)[1]) - int(str(i)[2])
    if minus1 == minus2:
      count += 1

print(count)
