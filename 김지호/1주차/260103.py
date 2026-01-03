import sys
import copy
from collections import deque

sys.stdin = open('../input.txt', 'r')

N, K = map(int,input().split(" "))

DIVIDER = 1000000000

# 2차원 DP[N][K] -> 각 DP[i][j] : i개의 수로 j를 만들 수 있는 값
# 최종 : DP[N][K] 구하기
dp = [[1] * (N+1) for _ in range(K+1)]

# print2d_arr(dp)

# 초기화
for col in range(N+1):
  dp[0][col] = 0

for row in range(2,K+1):
  for col in range(1,N+1):
    dp[row][col] = (dp[row][col-1] + dp[row-1][col]) % DIVIDER


print(dp[K][N])

