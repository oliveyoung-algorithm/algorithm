# https://www.acmicpc.net/problem/9655

import sys
input = sys.stdin.readline

N = int(input())

# SK이 무조건 먼저 시작
# N = 1: 1 -> SK
# N = 2: 1 1 -> CY
# N = 3: 1 1 1 -> SK or 3 -> SK
# N = 4: 1 1 1 1 -> CY, 1 3 -> CY, 3 1 -> CY
# N = 5: 1 1 1 1 1 -> SK, 1 1 3 -> SK, 1 3 1 -> SK, 3 1 1 -> SK 
# => N = 5 에서, 상근이가 1개 먼저 가져가면 N = 4 랑 같고, 3개 먼저 가져가면 N = 2 랑 같음
# N = 6: 1 1 1 1 1 1 -> CY, 1 1 1 3 -> CY, 1 1 3 1 -> CY,  1 3 1 1 -> CY, 3 1 1 1 -> CY, 3 3 -> CY
# => N = 6 에서, 상근이가 1개 먼저 가져가면 N = 5 랑 같고, 3개 먼저 가져가면 N = 3 랑 같음
# => [N - 1] 의 반대, [N - 3]의 반대
# 홀수면 SK, 짝수면 CY 이 이기는 문제지만,, DP로 해보자면,

dp = [''] * (N + 1)

dp[1] = 'SK'
if N >= 2:
  dp[2] = 'CY'
if N >= 3:
  dp[3] = 'SK'

for i in range(4, N + 1):
  if (dp[i - 1] == 'SK' and dp[i - 3] == 'SK'):
    dp[i] = 'CY'
  else:
    dp[i] = 'SK'

print(dp[-1])