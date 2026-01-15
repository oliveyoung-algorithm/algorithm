# https://www.acmicpc.net/problem/11404
import sys
from collections import defaultdict
from collections import deque

N = int(input())
board = [list(map(int, input().split())) for _ in range(N)]
dp = [[[0 for _ in range(N)] for _ in range(N)] for _ in range(3)]

def solution():
  # 선행조건
  dp[0][0][1] = 1
  for i in range(2, N):
    if board[0][i] == 0:
      dp[0][0][i] = dp[0][0][i - 1]

  
  for row in range(1, N):
    for col in range(1, N):
      # 최종 위치가 대각선인 경우
      if board[row][col] == 0 and board[row][col - 1] == 0 and board[row - 1][col] == 0: # 빈자리 조건
        dp[1][row][col] = dp[0][row - 1][col - 1] + dp[1][row - 1][col - 1] + dp[2][row - 1][col - 1]
      
      if board[row][col] == 0: # 현재 위치가 비어있어야 함
        dp[0][row][col] = dp[0][row][col - 1] + dp[1][row][col - 1] # 우방향 빈자리 조건
        dp[2][row][col] = dp[2][row - 1][col] + dp[1][row - 1][col] # 아래방향 빈자리 조건
  
    
  return sum(dp[i][N - 1][N - 1] for i in range(3))

print(solution())