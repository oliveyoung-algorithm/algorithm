# https://www.acmicpc.net/problem/17404
# RGB거리2, 골드4

import sys
import copy

N = int(input())
costs = []
for _ in range(N):
  costs.append(list(map(int,input().split(" "))))
  
INF = float('inf')
answer = INF

for first in range(3):  # 첫 집 색 고정: 0(R),1(G),2(B)
  dp = [[INF] * 3 for _ in range(N)]

  # index == 0 초기화: first만 허용, 나머지는 INF로 막기
  dp[0][first] = costs[0][first]

  for index in range(1, N):
    # 일반 RGB거리 점화식
    dp[index][0] = min(dp[index-1][1], dp[index-1][2]) + costs[index][0]
    dp[index][1] = min(dp[index-1][0], dp[index-1][2]) + costs[index][1]
    dp[index][2] = min(dp[index-1][0], dp[index-1][1]) + costs[index][2]

  # 마지막 집은 첫 집(first)과 다른 색만 가능
  for last in range(3):
    if last != first:
      answer = min(answer, dp[N-1][last])

print(answer)

  
    


# 시도1 : 완탐
# color_set = set([0,1,2])

# INF = float('inf')
# answer = INF
# # prev : 이전색, sum : 누적, index : 현재위치, start : 시작색
# def recursive(prev,sum,index,start,test_sum):
#   global answer
  
#   # 이미 sum을 넘은 경우에는 미리 종료
#   if sum > INF:
#     return
  
#   print(f"이전 : {prev}, 누적 : {sum}, 현재 위치 : {index}, 시작 : {start}")
#   print(f"현재 배열 : {test_sum}\n")
#   # 종료 조건
#   if index >= N:
#     answer = min(answer,sum)
#     return
  
#   can_colors = set(color_set)
#   can_colors.remove(prev)
  
#   # 마지막인 경우
#   if index == N-1 and start in can_colors:
#     print(f"마지막 이며 : 시작 : {start}, can_colors : {can_colors}, 동시 존재 : {start in can_colors}")
#     can_colors.remove(start)
  
#   for color in can_colors:
#     new_test_sum = copy.deepcopy(test_sum)
#     new_test_sum.append(color)
#     recursive(color,sum+costs[index][color],index+1,start,new_test_sum)

# for color in color_set:
#   recursive(color,costs[0][color],1,color,[color])

# print(answer)
