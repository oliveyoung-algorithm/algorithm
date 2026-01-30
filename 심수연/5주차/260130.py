# https://www.acmicpc.net/problem/14501

import sys
input = sys.stdin.readline

N = int(input())

schedule = [list(map(int, input().split())) for _ in range(N)]
# [상담일수, 수익]
# [[[3, 10], [5, 20], [1, 10], [1, 20], [2, 15], [4, 40], [2, 200]]

dp = [0 for _ in range(N+1)] # dp[i] : i일까지 벌 수 있는 최대 수익

for i in range(N):
  for j in range(i + schedule[i][0], N+1): # 상담할 수 있는 날부터 마지막날까지 
    if dp[j] < dp[i] + schedule[i][1]: # 최댓값 갱신
      dp[j] = dp[i] + schedule[i][1]

# dp = [0, 0, 0, 10, 30, 30, 45, 45]

print(dp[-1])
