# https://www.acmicpc.net/problem/1106
# 호텔, 골드4

import sys
import copy
sys.stdin = open("../../../input.txt",'r')

C, N = map(int,input().split(" ")) # C(도달 최종직원 수), N(도시의 개수)

costs = []

for i in range(N):
  cost,customer = map(int,input().split(" "))
  costs.append([cost,customer])

costs.sort(key=lambda x:(x[0],-x[1]))

min_cost, min_customer = costs[0]


dp = [0] * (C+1)

for curr in range(1,C+1):
  # 최소 대입
  if curr <= min_customer:
    dp[curr] = min_cost
    continue
  
  
  candidates = []
  for cost,customer in costs:
    if curr-customer >= 0:
      candidates.append(dp[curr-customer] + cost)

  if(len(candidates) == 0):
    dp[curr] = min_cost
  else:
    dp[curr] = min(candidates)
  
# print(f"최소 비용 : {min_cost}")
# print(f"최소 고객수 : {min_customer}")
# print(dp)
print(dp[C])
