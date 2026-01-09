# https://www.acmicpc.net/problem/2798

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
cards = list(map(int, input().split()))

max_value = 0
# 3장 -> i, j, k 3중 for문
for i in range(N):
  for j in range(i+1, N):
    for k in range(j+1, N):
      sum = cards[i] + cards[j] + cards[k]
      if sum <= M and sum > max_value: # M보다 작거나 같고, 최댓값보다 크다면
        max_value = sum # 최댓값 갱신
      
print(max_value)