#https://www.acmicpc.net/problem/2156

import sys
import copy
from collections import deque

sys.stdin = open('../../../input.txt', 'r')

input = sys.stdin.read().split()

N = int(input[0])
wines = [0] * (N + 1)
for i in range(1, N + 1):
  wines[i] = int(input[i])

# 초기화
dp = [0] * (N + 1)

dp[1] = wines[1]
if N >= 2:
  dp[2] = wines[1] + wines[2]

for i in range(3, N + 1):
  dp[i] = max(
      dp[i-1],                        # i번째를 안 마심
      wines[i] + dp[i-2],             # i번째 마심 + i-1번째 안 마심
      wines[i] + wines[i-1] + dp[i-3] # i번째 마심 + i-1번째 마심 + i-2번째 안 마심
  )

print(dp[N])
