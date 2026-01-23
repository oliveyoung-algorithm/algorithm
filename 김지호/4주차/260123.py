# https://www.acmicpc.net/problem/12865

from collections import defaultdict
import sys
from collections import deque

sys.stdin = open("./input.txt",'r')

#0. 1차원 
N, K = map(int, input().split())
products = []

for _ in range(N):
  w, v = map(int, input().split())
  products.append([w, v])

# DP 테이블 초기화
dp = [[0] *(K+1) for _ in range(N+1)]

for row in range(1,N+1):
  for col in range(1,K+1):
    product = products[row-1]
    product_w, product_v = product
    
    if(col-product_w >= 0):
      dp[row][col] = max(dp[row-1][col-product_w] + product_v, dp[row-1][col])
    else:
      dp[row][col] = dp[row-1][col]
    
print(dp[N][K])
