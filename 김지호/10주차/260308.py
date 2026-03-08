# https://www.acmicpc.net/problem/15989
# 1, 2, 3 더하기 4, 골드5

import sys
import copy
from collections import deque, defaultdict
from typing import List

N = int(input())
numbers = []
for _ in range(N):
  numbers.append(int(input()))

max_number = max(numbers)
dp = [
  [0,0,0],
  [1,0,0],
  [1,1,0],
  [1,1,1],
  ]
for i in range(4,max_number + 1):
  # print(f"tesitng index : {i}")
  temp = []
  temp.append(dp[i-1][0])
  temp.append(dp[i-2][0] + dp[i-2][1])
  temp.append(dp[i-3][0] + dp[i-3][1] + dp[i-3][2])
  
  dp.append(temp)

for number in numbers:
  print(sum(dp[number]))  
