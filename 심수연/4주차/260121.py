# https://www.acmicpc.net/problem/2156

import sys
input = sys.stdin.readline

n = int(input())
wine = [int(input()) for _ in range(n)]

dp = [0] * n

# dp[i] = i번째 잔까지 고려했을 때 마실 수 있는 최대 포도주 양

dp[0] = wine[0] # 첫 잔은 마시는 게 최댓값

if n > 1:
  dp[1] = wine[0] + wine[1] # 두 잔 가능

if n > 2:
  dp[2] = max(
    wine[0] + wine[1], # 2 빼고 먹기
    wine[0] + wine[2], # 1 빼고 먹기
    wine[1] + wine[2], # 0 빼고 먹기
    ) 

for i in range(3, n):
  dp[i] = max(
    dp[i - 1], # i번째 잔 안 마시기
    dp[i - 2] + wine[i], # i-2 (O), i-1 (X), i (O)
    dp[i - 3] + wine[i - 1] + wine[i] # i-3 (O), i-2 (X), i-1 (O), i (O)
    )
  
print(dp[n - 1]) # 배열이 0부터 시작하니까 n - 1
