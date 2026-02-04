# https://www.acmicpc.net/problem/9465

import sys
input = sys.stdin.readline

T = int(input()) # 테케

for _ in range(T):
  n = int(input())
  dp = [list(map(int, input().split())) for _ in range(2)]
  # [[50, 10, 100, 20, 40], [30, 50, 70, 10, 60]]
  
  if n > 1: # 열이 2열 이상일 때 출발점은 무조건 대각선으로 초기화. 더 앞에 비교할 [i-2]가 없음. 1열이 2열의 [i-1]인 것!!
    dp[0][1] += dp[1][0]
    dp[1][1] += dp[0][0]
  for i in range(2, n):
    dp[0][i] += max(dp[1][i-1], dp[1][i-2]) # n(열)이 커지면서 우측으로 점점 합산시키기. max(바로 대각선, 한 칸 더 띄운 애)
    dp[1][i] += max(dp[0][i-1], dp[0][i-2])
  
  print(max(dp[0][n-1], dp[1][n-1])) # 합산 결과인 제일 마지막 열 위 아래 중 더 큰 값!